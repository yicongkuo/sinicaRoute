// require({
//   paths:{
//     "jquery": './libs',
//   }
// });

define([
  'dojo/_base/declare', 
  'jimu/BaseWidget',

  "esri/tasks/RouteTask",
  "esri/tasks/RouteParameters",
  "esri/tasks/FeatureSet",
  
  "esri/graphic",
  "esri/geometry/Point",
  "esri/SpatialReference",

  "esri/units",
  "esri/symbols/SimpleLineSymbol",
  "esri/Color",

  //load jQuery and semantic ui library
  'xstyle/css!https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css',
  "jimu/loaderplugins/jquery-loader!https://code.jquery.com/jquery-2.2.4.min.js, https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js",
  "dojo/domReady!"
], function(
  declare, BaseWidget, 
  RouteTask, RouteParameters, FeatureSet, 
  Graphic, Point, SpatialReference,
  Units, SimpleLineSymbol, Color
) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // DemoWidget code goes here

    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'jimu-widget-dc',
    
    landmarks    : undefined, // 所有的地標資料
    
    queryField   : undefined, // 地標名稱欄位
    
    original     : undefined, // 起點站
    originalXY   : null,      // 起點站座標
    
    destination  : undefined, // 終點站 
    destinationXY: null,      // 終點站座標

    postCreate: function() {
      this.inherited(arguments);
      console.log('postCreate');

      /** 設定圖徵資料 **/
      this.queryField = this.config.queryField;
      this.landmarks = this.config.landmarks;

      /**** 建立『起點』自動完成選單 autocomplete ***/
      $(this.startListNode).dropdown({
        values: this.landmarks,
        fullTextSearch: true,
        fields: { name: this.queryField, value: this.queryField },
        onChange: function (value, text, $selectedItem) {
          // 取得起點站
          console.log(value);
          this.original = value;

          // 取得起點站座標，寫入this.originalXY
          this._setXY(this.original, 'original');
        
        }.bind(this)
      });

      /**** 建立『終點』自動完成選單 autocomplete ***/
      $(this.endListNode).dropdown({
        values: this.landmarks,
        fullTextSearch: true,
        fields: { name: this.queryField, value: this.queryField },
        onChange: function (value, text, $selectedItem) {
          // 取得終點站
          console.log(value);
          this.destination = value;

          // 取得起點站座標，寫入this.XY
          this._setXY(this.destination, 'destination');
        
        }.bind(this)
      });

      // 設定導航按鈕事件
      $(this.navigationButton).on("click", this._navigation.bind(this));
      
      // 設定清除按鈕事件
      $(this.removeButton).on("click", this._removeNavigation.bind(this));

    },//End of postCreate method

    startup: function() {
      this.inherited(arguments);
      console.log('startup');
    },//End of Startup();

    _navigation: function(){
      console.log("開始導航");
      if(!this.originalXY){
        alert("請選擇起點!");
        return;
      }
      if(!this.destinationXY){
        alert("請選擇終點!");
        return;
      }
      
      var routeTask = new RouteTask("https://utility.arcgis.com/usrsvcs/appservices/KtJ4p1PeJC6NNr2U/rest/services/World/Route/NAServer/Route_World/solve");

      var routeParams = new RouteParameters();
          routeParams.stops = new FeatureSet();
          routeParams.stops.features = [this.originalXY, this.destinationXY];

          routeParams.returnRoutes = false;
          routeParams.returnDirections = true;
          routeParams.directionsLengthUnits = Units.METERS;
          routeParams.outSpatialReference = this.map.spatialReference;

      routeTask.solve(routeParams, this._routeSuccess.bind(this), this._routeError.bind(this));
    },

    _removeNavigation: function(){
      console.log("清除導航");
      
      // 清除選單顯示
      $(this.startListNode).dropdown('clear');
      $(this.endListNode).dropdown('clear');
      
      // 清除起點站與終點站、座標值
      this.original    = undefined;
      this.originalXY  = null;
      
      this.destination = undefined;
      this.originalXY  = null;

      // 清除地圖上的路徑
      this.map.graphics.clear();

    },

    _setXY: function(target, stopType){
      this.landmarks.forEach(function (landmark){
        var field = this.queryField;
        if (landmark[field] === target){
           if(stopType === 'original'){
              this.originalXY = new Graphic();
              this.originalXY.setGeometry(
                new Point(landmark.x, landmark.y, new SpatialReference({ wkid: 4326 }))
              );
              return;
           }
           if(stopType === 'destination'){
              this.destinationXY = new Graphic();
              this.destinationXY.setGeometry(
                new Point(landmark.x, landmark.y, new SpatialReference({ wkid: 4326 }))
              );
              return;
           }
        }
      }.bind(this));
    },

    _routeSuccess: function (response){
      var line = response.routeResults[0].directions.mergedGeometry;
      
      var symbol = new SimpleLineSymbol();
          symbol.setWidth(10);
          symbol.setColor(new Color([0, 169, 230, 0.54]));

      var Path = new Graphic();
          Path.setGeometry(line);
          Path.setSymbol(symbol);

      this.map.graphics.clear();
      this.map.graphics.add(Path);
    },

    _routeError: function (error){
      console.log(error);
    },

    onOpen: function(){
      console.log('onOpen');
    },

    onClose: function(){
      console.log('onClose');
    },

    onMinimize: function(){
      console.log('onMinimize');
    },

    onMaximize: function(){
      console.log('onMaximize');
    },

    onSignIn: function(credential){
      /* jshint unused:false*/
      console.log('onSignIn');
    },

    onSignOut: function(){
      console.log('onSignOut');
    },

    showVertexCount: function(count){
      this.vertexCount.innerHTML = 'The vertex count is: ' + count;
    }
  });
});