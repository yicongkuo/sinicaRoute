///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'jimu/BaseWidgetSetting'
],
function(declare, BaseWidgetSetting) {

  return declare([BaseWidgetSetting], {
    baseClass: 'jimu-widget-dc-setting',

    postCreate: function(){
      //the config object is passed in
      this.setConfig(this.config);
    },

    setConfig: function(config){
      this.textNode.value = config.configText;
    },

    getConfig: function(){
      //WAB will get config object through this method
      return {
        configText: this.textNode.value,
        queryField: "單位名稱",
        landmarks: [{"單位名稱":"生物醫學研究所","x":121.6145582,"y":25.04350801},{"單位名稱":"跨領域大樓","x":121.6138339,"y":25.04478807},{"單位名稱":"細胞與個體生物學研究所","x":121.6138661,"y":25.04426318},{"單位名稱":"分子生物研究所","x":121.6139198,"y":25.04334949},{"單位名稱":"國家實驗動物中心","x":121.6131473,"y":25.04405906},{"單位名稱":"環安小組","x":121.6129327,"y":25.04354389},{"單位名稱":"生物化學研究所","x":121.613158,"y":25.04290722},{"單位名稱":"植物分子育種溫室","x":121.6121334,"y":25.04254757},{"單位名稱":"中央研究院溫室","x":121.6108352,"y":25.04251841},{"單位名稱":"中國文哲研究所","x":121.6124124,"y":25.04188173},{"單位名稱":"人文社會科學館","x":121.6117686,"y":25.04108952},{"單位名稱":"人文社會科學館北棟","x":121.6115541,"y":25.04141029},{"單位名稱":"人文社會科學館南棟","x":121.6117633,"y":25.04074445},{"單位名稱":"歸國學人宿舍","x":121.6122139,"y":25.04111382},{"單位名稱":"哲思軒","x":121.6122847,"y":25.04078509},{"單位名稱":"學術活動中心","x":121.6127997,"y":25.04095034},{"單位名稱":"綜合體育館","x":121.6135078,"y":25.04063443},{"單位名稱":"統計科學研究所","x":121.6135722,"y":25.04136346},{"單位名稱":"地球科學研究所","x":121.6140174,"y":25.04077051},{"單位名稱":"環境變遷研究中心","x":121.613996,"y":25.04011439},{"單位名稱":"生態池","x":121.6127675,"y":25.04248615},{"單位名稱":"生態時代館","x":121.6136848,"y":25.04270486},{"單位名稱":"基因體研究中心","x":121.614527,"y":25.04244727},{"單位名稱":"資訊科學研究所","x":121.6146724,"y":25.04113268},{"單位名稱":"人文社會科學研究中心","x":121.6151498,"y":25.04127849},{"單位名稱":"化學研究所","x":121.6156004,"y":25.04138541},{"單位名稱":"近代史研究所檔案館","x":121.6150656,"y":25.04061341},{"單位名稱":"嶺南美術館/歐美所","x":121.6150066,"y":25.04043844},{"單位名稱":"郭廷以圖書館","x":121.6152588,"y":25.04025861},{"單位名稱":"近代史研究所","x":121.6156423,"y":25.04010066},{"單位名稱":"歐美所圖書館","x":121.6151702,"y":25.03970941},{"單位名稱":"歐美研究所","x":121.6155565,"y":25.03967053},{"單位名稱":"歷史文物陳列館","x":121.6163558,"y":25.0394907},{"單位名稱":"民族學研究所","x":121.6168547,"y":25.03934975},{"單位名稱":"蔡元培紀念館","x":121.6141543,"y":25.04183581},{"單位名稱":"動物房","x":121.6148249,"y":25.0420205},{"單位名稱":"資訊科技創新研究中心","x":121.615474,"y":25.04189656},{"單位名稱":"總辦事處行政大樓","x":121.6161848,"y":25.04207396},{"單位名稱":"農業生物科技研究中心","x":121.6150958,"y":25.0430413},{"單位名稱":"黃樓","x":121.6159219,"y":25.04264763},{"單位名稱":"白樓","x":121.6154203,"y":25.04322841},{"單位名稱":"物理學研究所","x":121.6168957,"y":25.04097365},{"單位名稱":"胡適紀念館","x":121.6164585,"y":25.04057025},{"單位名稱":"傅斯年圖書館","x":121.6166677,"y":25.04034425},{"單位名稱":"台灣考古館","x":121.6162734,"y":25.04006479},{"單位名稱":"經濟學研究所","x":121.6171746,"y":25.03999432},{"單位名稱":"應用科學研究中心","x":121.6167187,"y":25.0407355},{"單位名稱":"歷史語言研究所","x":121.6161956,"y":25.03963709},{"單位名稱":"大門","x":121.6160564,"y":25.04375337}]
      };
    }
  });
});