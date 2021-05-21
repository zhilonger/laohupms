/* 
    全局组件注册文件，只需要在这里导入一个组件并且注册就可以在全局所有地方使用。
    如：<mfooter></mfooter>
*/

import mfooter from "src/components/layout/app-footer";
import mheader from "src/components/layout/app-header";
export default (Vue)=>{
    Vue.component("mfooter",mfooter);
    Vue.component("mheader",mheader);
};