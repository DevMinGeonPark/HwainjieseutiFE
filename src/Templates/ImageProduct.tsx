import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import withCommontLayout from './withCommontLayout';
import RenderHtml from 'react-native-render-html';
import {useRoute} from '@react-navigation/native';
import {ProductProps, RouteParamsProps} from '@src/Types/ProductTypes';
import {getKTShopKey} from '@src/Utils/KTShopKey';
import client from '@src/API/client';

const ImageProduct = () => {
  const width = Dimensions.get('window').width;
  // const source = {
  //   html: `<link rel=\"stylesheet\" href=\"//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css\">\r\n\r\n<style>\r\n\r\n\t\thtml,body {margin:0; padding:0;}\r\n\t\t.tc_set {width:100%; margin:0 auto;}\r\n\t\t.tc_main_end:after {content:''; display:block; clear:both;}\r\n\t\t.tc_main_end img {float:left;}\r\n\t\t/*.tc_black {background:#000;}*/\r\n\t\t.tc_bg1 {background:#333;}\r\n\t\t.tc_bg2 {background:#184145;}\r\n\r\n\r\n/*faq*/\r\n#faq .faq_box {\r\n    margin-bottom: 35px;\r\n}\r\n#faq>div{max-width:1100px; margin:0 auto}\r\n\t#faq h3 {\r\n    font-size: 28px;\r\n    padding: 40px 35px;\r\n    cursor: pointer;\r\n    letter-spacing: -2px;\r\n    border-radius: 20px;\r\n    transition: all 0.4s;\r\n    color: #fff;\r\n    font-weight: 500;\r\n}\r\n#faq h3.on{border-radius:20px 20px 0 0}\r\n#faq h3.on span{transform:rotate(-180deg); transition:all 0.4s}\r\n#faq h3 span{transition:all 0.2s ease-in}\r\n#faq h3 span i{vertical-align:middle}\r\n#faq ul {\r\n    display: none;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 0px 0px 20px 20px;\r\n    overflow: hidden;\r\n}\r\n#faq ul li {\r\n    list-style: none;\r\n    margin-bottom: 10px;\r\n\ttext-align:center\r\n}\r\n#faq ul li img {\r\n    margin: 0 auto;\r\n}\r\n.tab_view_set img {\r\n    display: block;\r\n}\r\n\r\n@media all and (max-width:1150px) {\r\n#faq>div{width:95%}\t\r\n}\r\n\r\n@media all and (max-width:800px) {\r\n\t#faq h3{font-size:25px; padding:30px 35px}\r\n\t\r\n}\r\n@media all and (max-width:600px) {\r\n\t#faq h3{font-size:20px; padding:20px 35px}\r\n\t\r\n}\r\n\t\t</style>\r\n\r\n<script>\r\n\t$(document).ready(function(e) {\r\n        $('.faq_box').click(function(){\r\n\t\t\t$(this).find('ul').slideToggle('fast')\r\n\t\t\t$(this).find('h3').toggleClass('on')\r\n\t\t})\r\n\t\t\r\n\t\t\r\n    });\r\n</script>\r\n\r\n\r\n\r\n<div style=\"background: rgb(0, 0, 0); width: 100%; text-align: center;\">\r\n\r\n\r\n\r\n\t\r\n\t\r\n\t\r\n<div style=\"position: relative;\">\r\n<img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/dual_number.jpg\" title=\"cf3efebff84111f6bd6c843c4f22e1bb_1662363476_701.jpg\" style=\"width:100%\"><br style=\"clear:both;\"><!--<img style=\"width: 100%; vertical-align: top;\" alt=\"SET A BUY NOW\" src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/dual_number.jpg\" border=\"0\" usemap=\"#Map1\">-->\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t<a style=\"left: 4%; top: 21.3%; width: 43%; height: 55px; display: block; position: absolute;\" href=\"http://online.kt.com/index.jsp?prdcID=AECFBAEE-E838-42EF-95C8-F51B0D8FCD90\" target=\"_blank\">            \r\n<img style=\"width: 100%; vertical-align: top;\" alt=\"듀얼번호 5G\" src=\"http://ai.esmplus.com/ollehfine/event_page/main/new/button.png\"></a>\r\n\r\n\t\t<a style=\"left: 54%; top: 21.3%; width: 43%; height: 55px; display: block; position: absolute;\" href=\"http://online.kt.com/index.jsp?prdcID=63946D94-8373-43F4-ABF6-9C50764A5FA8\" target=\"_blank\">            \r\n<img style=\"width: 100%; vertical-align: top;\" alt=\"듀얼번호 LTE\" src=\"http://ai.esmplus.com/ollehfine/event_page/main/new/button.png\"></a>\r\n\r\n\r\n       \t\r\n\r\n</div>\r\n\r\n<div id=\"faq\" style=\"background-color:#e0fcfd; padding-bottom:60px\">\r\n  <img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/qna.jpg\" title=\"cf3efebff84111f6bd6c843c4f22e1bb_1662367224_7983.jpg\"><br style=\"clear:both;\">\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#42a680;\">KT 듀얼번호가 무엇인가요?<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/1.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#42a680;\">듀얼 SIM이 무엇인가요?<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/2.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#67ba74;\">듀얼 SIM이 탑재된 단말을 알려 주세요<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/3.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#67ba74;\">KT 듀얼번호 가입 방법을 알려 드릴게요<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/4.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#67ba74;\">eSIM으로 주문/개통 하고 싶어요<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/5.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#6ba7ed;\">eSIM 다운로드 방법을 알려 주세요<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/6.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#6ba7ed;\">eSIM 발급방법 (삼성 갤럭시 단말)<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/7.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#6ba7ed;\">eSIM 발급방법 (애플 iPhone 단말)<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/8.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t<div class=\"faq_box\">\r\n\t\t<div class=\"click\">\r\n\t\t\t<h3 style=\"background-color:#41a3a6;\">eSIM 관련 자주 찾는 질문 꼭 확인하세요!<span style=\"float:right;\"><i class=\"xi-angle-down-min\" style=\"font-size:28px;\"></i></span></h3>\r\n\t\t</div>\r\n\t\t<ul>\r\n\t\t\t<li><img src=\"https://ai.esmplus.com/ollehfine/new_main/ktmall/dual_number/hidden/9.jpg\"></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t\r\n\t\r\n</div>\t\r\n\t\r\n\r\n<div>\r\n <img src=\"https://www.kt-mall.co.kr:443/data/editor/2209/cf3efebff84111f6bd6c843c4f22e1bb_1662367970_7948.jpg\" title=\"cf3efebff84111f6bd6c843c4f22e1bb_1662367970_7948.jpg\" style=\"width:100%\"><br style=\"clear:both;\"><br style=\"clear:both;\">\r\n</div>\t\t</div>`,
  // };
  const [source, setSource] = React.useState({html: ''});
  const routeParams = useRoute().params as RouteParamsProps;

  const [params, setParams] = React.useState<ProductProps>({
    MenuType: routeParams.MenuType,
    MenuVar: routeParams.MenuVar,
    sort: 'it_update_time',
    sortodr: 'aec',
  });

  async function getImageProductData(data: ProductProps) {
    const res = await client.post('subpage.php', data);
    console.log(JSON.stringify(res.data, null, 2));
    setSource({html: res.data.Content});
  }

  React.useEffect(() => {
    getImageProductData(params);
  });

  return (
    <View>
      {/* <Text>d</Text> */}
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
};

export default withCommontLayout(ImageProduct);

const styles = StyleSheet.create({});
