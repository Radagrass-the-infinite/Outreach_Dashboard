(function(t){function e(e){for(var a,c,u=e[0],l=e[1],o=e[2],d=0,m=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);s&&s(e);while(m.length)m.shift()();return i.push.apply(i,o||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,u=1;u<r.length;u++){var l=r[u];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},i=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var s=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"185d":function(t,e,r){t.exports=r.p+"img/CropLOGO.e58773f3.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticStyle:{background:"linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71)","/*  credits":"User Blue Frog from https://stackoverflow.com/questions/50243769/vuetify-how-to-set-background-color*/"}},[r("router-view")],1)},i=[],c={name:"App",components:{},data:function(){return{}}},u=c,l=r("2877"),o=r("6544"),s=r.n(o),d=r("7496"),m=Object(l["a"])(u,n,i,!1,null,null,null),v=m.exports;s()(m,{VApp:d["a"]});r("b0c0");var h=r("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"900"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"400px",src:r("67cc")}},[a("v-card-title",[t._v("Community Outreach Reengineered")])],1),a("v-card-subtitle",{staticClass:"pb-0"}),a("v-card-text",{staticClass:"text--primary"},[t._v(" Sign in to be a part of our warm and welcoming STEM community, premium STEM curriculum, and so much more. ")]),a("div",{attrs:{id:"firebaseui-auth-container"}}),a("v-card-actions",[a("v-btn",{attrs:{color:"red",text:""}})],1)],1)],1)},f=[],_=r("2591"),b=r("2398"),k={name:"auth",mounted:function(){var t={signInSuccessUrl:"/home",signInOptions:[_["a"].auth.GoogleAuthProvider.PROVIDER_ID]},e=new b["a"].AuthUI(_["a"].auth());e.start("#firebaseui-auth-container",t)}},g=k,x=r("8336"),C=r("b0af"),w=r("99d9"),y=r("adda"),V=Object(l["a"])(g,p,f,!1,null,null,null),S=V.exports;s()(V,{VBtn:x["a"],VCard:C["a"],VCardActions:w["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VImg:y["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{color:"red accent-2",dark:"","max-width":"3000",src:"@/assets/FullLOGO.png"}},[a("v-img",{attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)","max-height":"200",src:r("185d")}}),a("v-card-title",[a("h3",[t._v("Welcome Back "+t._s(t.USER.displayName))])])],1),t._v(" "),a("v-row",{staticStyle:{"padding-top":"20px"}},[a("v-col",{staticStyle:{"margin-top":"15px","margin-left":"40px"},attrs:{cols:"10"}},[a("Sorter")],1),a("v-col",{attrs:{cols:"1"}},[t.show_curriculum?a("AddCurriculum"):t._e()],1)],1),t.show_curriculum?a("CurriculumMain"):a("OutreachMain")],1)},O=[],j=(r("4160"),r("159b"),r("5530")),T={apiKey:"AIzaSyDQyPCfmtUkQ70XPzcByeu51fdlI_r-5dA",authDomain:"outreach-dash.firebaseapp.com",projectId:"outreach-dash",storageBucket:"outreach-dash.appspot.com",messagingSenderId:"1060044447635",appId:"1:1060044447635:web:37e25768831d7533871266",measurementId:"G-6ETTDL48LL"};_["a"].initializeApp(T);var P=_["a"].auth(),$=_["a"].firestore();var A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("CurriculumContent")],1)},I=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",t._l(t.curriculum_details,(function(e,a){return r("v-expansion-panels",{key:a,staticClass:"my-3",attrs:{color:"pink lighten-5",elevation:"2"}},[e.show?r("v-expansion-panel",[r("v-expansion-panel-header",[r("v-col",{attrs:{cols:"11"}},[r("h2",[t._v("Week "+t._s(e.week)+": "+t._s(e.name))])]),r("v-col",{attrs:{cols:"1"}},[r("EditCurriculum",{attrs:{curriculum_detail:e}})],1)],1),r("v-expansion-panel-content",[r("v-list-item",{attrs:{href:e.documentation,target:"_blank"}},[t._v("Documentation: "+t._s(e.name)+" ")]),r("v-list-item",{attrs:{href:e.student_link,target:"_blank"}},[t._v("Student Project: "+t._s(e.name)+" ")]),r("v-list-item",{attrs:{href:e.teacher_link,target:"_blank"}},[t._v("Teacher Project: "+t._s(e.name)+" ")])],1)],1):t._e()],1)})),1)},q=[],B=[];function M(t){$.collection("curriculum").add(t).then((function(){}))}function N(t,e,r){var a=$.collection(e).doc(r);return a.update(t)}function R(t,e){$.collection(t).doc(e).delete().then((function(){})),B.forEach((function(t){t.id===e&&(t.show=!1)}))}function F(t){B.sort((function(e,r){return e[t]<r[t]?-1:1}))}var U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-btn",{staticClass:"mx-2",attrs:{color:"cyan",dark:"",fab:"",small:""},on:{click:function(e){t.show=!0}}},[r("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1),r("v-dialog",{attrs:{persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("v-card",[r("v-card-title",[r("v-col",{attrs:{cols:"11"}},[r("span",{staticClass:"headline"},[t._v("Edit Curriculum")])]),r("v-col",{attrs:{cols:"1"}},[r("v-btn",{attrs:{color:"error"},on:{click:t.deleteDetail}},[r("v-icon",[t._v(" mdi-trash-can-outline ")])],1)],1)],1),r("v-card-text",[r("v-container",[r("v-row",[r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-text-field",{attrs:{label:"Curriculum Name*",required:""},model:{value:t.curriculum_detail.name,callback:function(e){t.$set(t.curriculum_detail,"name",e)},expression:"curriculum_detail.name"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{label:"Week*",required:""},model:{value:t.curriculum_detail.week,callback:function(e){t.$set(t.curriculum_detail,"week",e)},expression:"curriculum_detail.week"}})],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Documentation*",required:""},model:{value:t.curriculum_detail.documentation,callback:function(e){t.$set(t.curriculum_detail,"documentation",e)},expression:"curriculum_detail.documentation"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Teacher Project*",required:""},model:{value:t.curriculum_detail.teacher_link,callback:function(e){t.$set(t.curriculum_detail,"teacher_link",e)},expression:"curriculum_detail.teacher_link"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Student Project*",required:""},model:{value:t.curriculum_detail.student_link,callback:function(e){t.$set(t.curriculum_detail,"student_link",e)},expression:"curriculum_detail.student_link"}})],1)],1)],1),r("small",[t._v("*indicates required field")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.show=!1}}},[t._v(" Cancel ")]),r("v-dialog",{attrs:{"max-width":"345"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.updateCurriculum}},"v-btn",n,!1),a),[t._v(" Save ")])]}}])},[r("v-card",[r("v-card-title",{},[t._v(" Please fill out all required fields. ")])],1)],1)],1)],1)],1)],1)},L=[],z=(r("a9e3"),{name:"EditCurriculum",props:{curriculum_detail:{}},data:function(){return{show:!1,error:!1}},methods:{deleteDetail:function(){R("curriculum",this.curriculum_detail.id),this.show=!1},updateCurriculum:function(){!isNaN(Number(this.curriculum_detail.week))&&this.curriculum_detail.name.length>0&&this.curriculum_detail.student_link.length>0&&this.curriculum_detail.teacher_link.length>0&&this.curriculum_detail.documentation.length>0?(this.show=!1,N({week:Number(this.curriculum_detail.week),name:this.curriculum_detail.name,student_link:this.curriculum_detail.student_link,teacher_link:this.curriculum_detail.teacher_link,documentation:this.curriculum_detail.documentation},"curriculum",this.curriculum_detail.id)):this.error=!0}}}),W=z,G=r("62ad"),Q=r("a523"),H=r("169a"),X=r("132d"),J=r("0fd9"),K=r("2fa4"),Y=r("8654"),Z=Object(l["a"])(W,U,L,!1,null,"647d5eed",null),tt=Z.exports;s()(Z,{VBtn:x["a"],VCard:C["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VCol:G["a"],VContainer:Q["a"],VDialog:H["a"],VIcon:X["a"],VRow:J["a"],VSpacer:K["a"],VTextField:Y["a"]});var et={name:"CurriculumContent",components:{EditCurriculum:tt},props:{},data:function(){return{curriculum_details:B}},created:function(){$.collection("curriculum").onSnapshot((function(t){var e=t.docChanges();e.forEach((function(t){"added"===t.type&&(B.push(Object(j["a"])(Object(j["a"])({},t.doc.data()),{},{id:t.doc.id})),console.log("Change in the curriculum"),F("week"))}))}))}},rt=et,at=r("cd55"),nt=r("49e2"),it=r("c865"),ct=r("0393"),ut=r("da13"),lt=Object(l["a"])(rt,D,q,!1,null,null,null),ot=lt.exports;s()(lt,{VCol:G["a"],VContainer:Q["a"],VExpansionPanel:at["a"],VExpansionPanelContent:nt["a"],VExpansionPanelHeader:it["a"],VExpansionPanels:ct["a"],VListItem:ut["a"]});var st={name:"CurriculumMain",components:{CurriculumContent:ot}},dt=st,mt=Object(l["a"])(dt,A,I,!1,null,"f5bfeed2",null),vt=mt.exports;s()(mt,{VContainer:Q["a"]});var ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("outreach main")])},pt=[],ft={name:"OutreachMain"},_t=ft,bt=Object(l["a"])(_t,ht,pt,!1,null,"d2dc4b3c",null),kt=bt.exports,gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-btn",{staticClass:"mx-2",attrs:{color:"cyan",dark:"",fab:"",large:""},on:{click:function(e){t.show=!0}}},[r("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1),r("v-dialog",{attrs:{persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("Add Curriculum")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-text-field",{attrs:{label:"Curriculum Name*",required:""},model:{value:t.curriculum_details.name,callback:function(e){t.$set(t.curriculum_details,"name",e)},expression:"curriculum_details.name"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{label:"Week*",required:""},model:{value:t.curriculum_details.week,callback:function(e){t.$set(t.curriculum_details,"week",e)},expression:"curriculum_details.week"}})],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Documentation*",required:""},model:{value:t.curriculum_details.documentation,callback:function(e){t.$set(t.curriculum_details,"documentation",e)},expression:"curriculum_details.documentation"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Teacher Project*",required:""},model:{value:t.curriculum_details.teacher_link,callback:function(e){t.$set(t.curriculum_details,"teacher_link",e)},expression:"curriculum_details.teacher_link"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Student Project*",required:""},model:{value:t.curriculum_details.student_link,callback:function(e){t.$set(t.curriculum_details,"student_link",e)},expression:"curriculum_details.student_link"}})],1)],1)],1),r("small",[t._v("*indicates required field")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.show=!1}}},[t._v(" Cancel ")]),r("v-dialog",{attrs:{"max-width":"345"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.addCurriculum}},"v-btn",n,!1),a),[t._v(" Save ")])]}}])},[r("v-card",[r("v-card-title",{},[t._v(" Please fill out all required fields. ")])],1)],1)],1)],1)],1)],1)},xt=[],Ct={name:"AddCurriculum",props:{},data:function(){return{show:!1,error:!1,curriculum_details:{week:"",name:"",student_link:"",teacher_link:"",documentation:""}}},methods:{resetCurriculum:function(){this.curriculum_details.week="",this.curriculum_details.name="",this.curriculum_details.student_link="",this.curriculum_details.teacher_link="",this.curriculum_details.documentation=""},addCurriculum:function(){!isNaN(Number(this.curriculum_details.week))&&this.curriculum_details.name.length>0&&this.curriculum_details.student_link.length>0&&this.curriculum_details.teacher_link.length>0&&this.curriculum_details.documentation.length>0?(this.show=!1,M({week:Number(this.curriculum_details.week),name:this.curriculum_details.name,student_link:this.curriculum_details.student_link,teacher_link:this.curriculum_details.teacher_link,documentation:this.curriculum_details.documentation,show:!0}),this.resetCurriculum()):this.error=!0}}},wt=Ct,yt=Object(l["a"])(wt,gt,xt,!1,null,"4e41a767",null),Vt=yt.exports;s()(yt,{VBtn:x["a"],VCard:C["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VCol:G["a"],VContainer:Q["a"],VDialog:H["a"],VIcon:X["a"],VRow:J["a"],VSpacer:K["a"],VTextField:Y["a"]});var St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{staticStyle:{"padding-top":"10px"},attrs:{row:""}},[r("v-btn",{attrs:{color:"#EDE7F6",large:""},on:{click:function(e){return t.sortThis("week")}}},[r("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-calendar ")]),r("span",{staticClass:"v-size--large caption"},[t._v("Sort By Week")])],1),r("v-btn",{staticStyle:{"margin-left":"10px"},attrs:{color:"#EDE7F6",large:""},on:{click:function(e){return t.sortThis("name")}}},[r("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-sort-alphabetical-variant ")]),r("span",{staticClass:"v-size--large caption"},[t._v("Sort By Name")])],1)],1)],1)},Et=[],Ot={created:function(){},name:"Sorter",methods:{sortThis:function(t){F(t)}}},jt=Ot,Tt=r("a722"),Pt=Object(l["a"])(jt,St,Et,!1,null,"3a6af0a0",null),$t=Pt.exports;s()(Pt,{VBtn:x["a"],VIcon:X["a"],VLayout:Tt["a"]});var At={name:"Home",components:{OutreachMain:kt,CurriculumMain:vt,Sorter:$t,AddCurriculum:Vt},data:function(){return{USER:P.currentUser,show_curriculum:!0,temp_add_curriculum:null}},methods:{}},It=At,Dt=Object(l["a"])(It,E,O,!1,null,null,null),qt=Dt.exports;s()(Dt,{VCard:C["a"],VCardTitle:w["d"],VCol:G["a"],VContainer:Q["a"],VImg:y["a"],VRow:J["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"900"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"400px",src:r("67cc")}},[a("v-card-title",[t._v("Community Outreach Reengineered")])],1),a("v-card-subtitle",{staticClass:"pb-0"}),a("v-card-text",{staticClass:"text--primary"},[t._v(" It looks like a stroke of serendipity, but we can't find your page. ")]),a("v-btn",{staticStyle:{"margin-bottom":"10px","padding-left":"10px","margin-left":"10px"},attrs:{color:"error"},on:{click:t.reroute}},[t._v(" Return to your quest of helping the community! ")])],1)],1)},Mt=[],Nt={name:"Error",methods:{reroute:function(){Zt.push({name:"Home"})}}},Rt=Nt,Ft=Object(l["a"])(Rt,Bt,Mt,!1,null,"965e8100",null),Ut=Ft.exports;s()(Ft,{VBtn:x["a"],VCard:C["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VContainer:Q["a"],VImg:y["a"]});var Lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("p",[t._v(" Test page ")]),r("EditCurriculum",{attrs:{curriculum_detail:{week:1,name:"Lemonade Stand",student_link:"https://scratch.mit.edu/projects/392293538/editor/",teacher_link:"https://scratch.mit.edu/projects/392339139/editor/",documentation:"https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing"}}}),t._v(" } "),r("p",{staticStyle:{color:"white"}},[t._v(t._s(t.curriculum_details))])],1)},zt=[],Wt={name:"Test",components:{AddCurriculum:Vt,EditCurriculum:tt},data:function(){return{curriculum_details:B}},methods:{testing:function(){console.log("working")}}},Gt=Wt,Qt=Object(l["a"])(Gt,Lt,zt,!1,null,"1ebf3e45",null);Qt.exports;s()(Qt,{VContainer:Q["a"]});r("fb6a");function Ht(t){return t.charAt(0).toUpperCase()+t.slice(1)}a["a"].use(h["a"]);var Xt=function(t,e,r){var a=P.currentUser;a?r():r({name:"login"})},Jt=function(t){var e=P.currentUser;if(e)return t;next({name:"login"})},Kt=[{path:"/",name:"login",component:S},{path:"/zoom",beforeEnter:function(){location.href=Jt("https://zoom.us/j/91639654519?pwd=QW1CWjBuYVlyVytXS0lDVWdPSXduZz09")}},{path:"/berbawy",beforeEnter:function(){location.href="https://berbawy.com"}},{path:"/home",name:"Home",component:qt,beforeEnter:Xt},{path:"*",name:"Error",component:Ut},{path:"/about",beforeEnter:function(){location.href="https://serendipitystem.org"}}],Yt=new h["a"]({mode:"history",base:"/",routes:Kt});Yt.beforeEach((function(t,e,r){document.title="Serendipity STEM - "+Ht(t.name),r()}));var Zt=Yt,te=r("f309");a["a"].use(te["a"]);var ee,re=new te["a"]({});a["a"].config.productionTip=!1,P.onAuthStateChanged((function(){ee||new a["a"]({router:Zt,vuetify:re,render:function(t){return t(v)}}).$mount("#app")}))},"67cc":function(t,e,r){t.exports=r.p+"img/FullLOGO.2b5f5b22.png"}});
//# sourceMappingURL=app.c69bad4a.js.map