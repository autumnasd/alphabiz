(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0204":function(e,t,n){"use strict";n("af17")},"0c6d":function(e,t,n){"use strict";n("ddb0");var s=n("ed08");let a={on:()=>{},send:()=>{}};a=n("34bb").ipcRenderer;const i={};a.on("send_result",((e,{eventName:t,data:n})=>{i[t][0](n)})),a.on("send_error",((e,{eventName:t,data:n})=>{i[t][1](n)})),a.on("about-dialog",(()=>{s["Bus"].$emit("CALL_ABOUT")}));t["a"]=(e,...t)=>new Promise(((n,s)=>{t.length?a.send(e,...t):a.send(e),i[e]=[n,s]}))},"284d":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-12 row"},[n("q-input",{staticClass:"q-mt-sm setting-number-input",attrs:{hint:e.label,rules:e.rules,type:"number",dense:"",outlined:""},on:{blur:e.onBlur},scopedSlots:e._u([e.dice?{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"casino"},on:{click:e.setRandom}},[n("q-tooltip",[e._v(e._s(e.$t("random")))])],1)]},proxy:!0}:null],null,!0),model:{value:e.number,callback:function(t){e.number=e._n(t)},expression:"number"}})],1)},a=[],i=(n("ddb0"),{props:{value:Number,keyName:String,label:String,dice:{type:Array,required:!1},rules:{type:Array,default:()=>[]},min:{type:Number,default:1}},computed:{number:{get(){return this.value},set(e){this.onChange(e)}},minValue(){return Array.isArray(this.dice)?this.dice[0]:this.min}},methods:{isValid(e){for(const t of this.rules)if("function"===typeof t){const n=t(e);if(!0!==n)return!1}return!0},onChange(e){if(""===e)return this.$emit("change",this.keyName,this.minValue);this.$emit("change",this.keyName,e)},onBlur(){this.isValid(this.value)||this.$emit("change",this.keyName,this.minValue)},setRandom(){if(!this.dice||!this.dice.length)return;const[e,t]=this.dice;return this.onChange(Math.floor(Math.random()*(t-e)+e))}}}),r=i,o=(n("7c66"),n("2877")),l=n("27f9"),c=n("0016"),u=n("05c0"),d=n("eebe"),h=n.n(d),p=Object(o["a"])(r,s,a,!1,null,"3fe47d68",null);t["a"]=p.exports;h()(p,"components",{QInput:l["a"],QIcon:c["a"],QTooltip:u["a"]})},"2d04":function(e,t,n){"use strict";var s=n("1b40"),a=n("2b0e"),i=n("0613"),r=n("ff52"),o=n("0967"),l=n("2a19"),c=n("436b"),u=n("8847"),d=n("849b"),h=n("2ef0"),p=n("16ed"),g=n("a76d"),m=function(e,t,n,s){var a,i=arguments.length,r=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},f=function(e,t,n,s){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function r(e){try{l(s.next(e))}catch(t){i(t)}}function o(e){try{l(s["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,o)}l((s=s.apply(e,t||[])).next())}))};const y=!!o["b"].is.electron;let b;y&&(b=n("34bb").ipcRenderer);let v=class extends a["a"]{constructor(){super(...arguments),this.loading=!1,this.changes=new Map,this.settings={},this.languages=p["a"],this.changed=!1}get language(){return this.settings.language}set language(e){u["b"].locale=e,y&&b.send("change-app-i18n",e),this.storeChange("language",e)}get darkMode(){return this.settings.darkMode}set darkMode(e){r["a"].set(e===g["a"].system?"auto":e===g["a"].dark),this.storeChange("darkMode",e)}t(e,...t){return u["b"].t(e,...t)}resetChange(){this.changes.clear(),this.changed=!1,this.loading=!1}storeChange(e,t){console.log(`[Setting] Set ${e} to value:`,t),this.changes.set(e,t),this.$set(this.settings,e,t),this.changed=!0}notify(e){l["a"].create({message:e,position:"bottom-right",type:"positive",timeout:2e3})}syncSetting(){return f(this,void 0,void 0,(function*(){const e=yield i["a"].dispatch("fetchSettings"),t=this.language;this.settings=Object(h["cloneDeep"])(e);const n=e.darkMode===g["a"].system;return r["a"].set(n?"auto":e.darkMode===g["a"].dark),t!==e.language&&(this.language=e.language),e}))}onSubmit(){return f(this,void 0,void 0,(function*(){if(!this.changes.size)return;this.loading=!0;const e=Object.fromEntries(this.changes);e.maximumDownloadNum&&d["a"].emit("update_torrent_settings",{maximumDownloadNum:e.maximumDownloadNum}),yield i["a"].dispatch("set",e),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_set_successfully"))}))}onDiscard(){return f(this,void 0,void 0,(function*(){this.changed&&(yield this.syncSetting(),this.resetChange())}))}onReset(){return f(this,void 0,void 0,(function*(){c["a"].create({title:this.t("reset"),message:this.t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.t("not_now")}}).onOk((()=>f(this,void 0,void 0,(function*(){this.loading=!0,yield i["a"].dispatch("resetSettings"),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_resetted"))}))))}))}created(){this.settings=Object(h["cloneDeep"])(i["a"].getters.settings)}beforeDestroy(){return this.onDiscard()}beforeRouteLeave(e,t,n){if(!this.changed)return n();c["a"].create({title:this.t("change_not_save"),message:this.t("discard_all_changes"),ok:this.t("stay_in_page"),cancel:this.t("discard"),persistent:!0}).onOk((()=>n(!1))).onCancel((()=>n()))}};v=m([s["a"]],v),t["a"]=v},"2e92":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{staticClass:"setting-select",attrs:{value:e.displayLabel,options:e.options,label:e.label,outlined:"",dense:"","emit-value":"","data-cy":"select-direct"},on:{input:e.emitChange}})},a=[],i=(n("ddb0"),{model:{prop:"value",event:"change"},props:{value:String,options:Array,label:String},computed:{displayLabel(){for(const e of this.options)if(e.value===this.value)return e.label;return this.value}},methods:{emitChange(e){this.$emit("change",e)}}}),r=i,o=(n("d97d"),n("2877")),l=n("ddd8"),c=n("eebe"),u=n.n(c),d=Object(o["a"])(r,s,a,!1,null,"b273868a",null);t["a"]=d.exports;u()(d,"components",{QSelect:l["a"]})},"4d5f":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));n("ddb0"),n("5319");const s=n("aa9c"),a=n("9b0f"),{exec:i,spawn:r}=n("41db"),o="win32"===process.platform,l="darwin"===process.platform,c=new Map([["VLC Player",{win:"vlc.exe",winRegistry:["VLC.mp4","PlayWithVLC"],drawin:"VLC.app"}],["GOM Player",{win:"GOM.exe",drawin:"GOM Player.app"}],["PotPlayer",{win:"PotPlayerMini64.exe"}],["Kodi",{win:"kodi.exe",drawin:"Kodi.app"}],["KMPlayer",{win:"KMPlayer64.exe",drawin:"KMPlayer.app"}],["SMPlayer",{win:"smplayer.exe",drawin:"SMPlayer.app"}],["MediaMonkey",{win:"MediaMonkey.exe"}],["AllPlayer",{win:"ALLPlayer.exe"}],["5KPlayer",{win:"5KPlayer.exe",drawin:"5KPlayer.app"}],["MPC-HC",{win:"mpc-hc64.exe"}]]),u=async()=>new Promise((e=>{const t=[{label:"Alphabiz",value:"Alphabiz"},{label:"System Default",value:"System Default"}];if(o){const n={label:"Media Player",value:"Media Player"},i=d();i&&t.push(n);const r=new s({hive:s.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});r.values(((n,s)=>{if(n)return e(!1);for(let e=0;e<s.length;e++)c.forEach(((n,i)=>{n.win&&new RegExp(n.win).test(s[e].name)&&(a.existsSync(s[e].name)?t.push({label:i,value:i}):console.log("player file does not exist"))}));e(t)}))}else l?i("ls /Applications",((n,s,a)=>{n?console.error(`exec error: ${n}`):a?console.error(`Error from Git: ${a}`):(c.forEach(((e,n)=>{e.drawin&&new RegExp(e.drawin).test(s)&&t.push({label:n,value:n})})),e(t))})):e(!1)})),d=()=>{const e=process.arch;let t;return t="x64"===e?"C:\\Program Files\\Windows Media Player\\wmplayer.exe":"C:\\Program Files(x86)\\Windows Media Player\\wmplayer.exe",a.existsSync(t)?t:""},h=async e=>new Promise((t=>{if("System Default"===e)return t("System Default");if(o){if("Media Player"===e){const e=d();return t(e||!1)}const n=new s({hive:s.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});n.values(((n,s)=>{if(n)return t(!1);if(!c.get(e))return t(!1);const i=c.get(e).win;for(let e=0;e<s.length;e++)new RegExp(i).test(s[e].name)&&(a.existsSync(s[e].name)?t(s[e].name):console.log("player file does not exist"));t(!1)}))}else l&&(c.get(e).drawin||t(!1),t(c.get(e).drawin))})),p=(e,t)=>{let n;if(o){if(!c.get(e))return;const s=c.get(e).winRegistry;if(!s)return;if("VLC Player"===e){const e=t.slice(2+(t.lastIndexOf(".")-1>>>0));e&&(s[0]=s[0].replace(/(?<=\.)\w+$/,e)),n=[...s]}}return n},g=async e=>new Promise((t=>{if(!e)return t(!1);if(o){const n=new s({hive:s.HKLM,key:`\\SOFTWARE\\Classes\\${e[0]}\\shell\\${e[1]}\\command`});n.values(((e,n)=>{if(e)return t(!1);const s=n[0].value.match(/-(?:-\w+)+/gm);t(s)}))}})),m=async(e,t,n)=>new Promise((s=>{let a,l;if(o?(a=e,l=n?[...n,t.replace("/","\\")]:[t.replace("/","\\")]):(a="open",l=["-a",e,t]),console.log("openPlayer:",a,l),"System Default"===e)i(o?`"${t.replace("/","\\")}`:`open "${t}"`,((e,t,n)=>e?(console.error(`exec error: ${e}`),s(!1)):n?(console.error(`Error from Git: ${n}`),s(!1)):void s(!0)));else{const e=r(a,o?l:[...l]);e.on("error",(e=>{s(!1),console.log(`子进程错误，错误码 ${e}`)})),e.unref(),s(!0)}})),f=async(e,t)=>{const n=await h(e);let s=!1;if(n){const a=p(e,t);let i;return a&&(i=await g(a)),s=await m(n,t,i),console.log("openPlayer:"+s),s}return s}},"7c66":function(e,t,n){"use strict";n("9ad5")},9384:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.dense?"col-4":"col-12"},[n("q-checkbox",{staticClass:"q-mt-sm",attrs:{value:e.value,label:e.label,dense:""},on:{input:e.onChange}},[e.tooltip?n("q-tooltip",[e._v(e._s(e.tooltip))]):e._e()],1)],1)},a=[],i={props:{value:{required:!0},label:String,keyName:String,dense:Boolean,tooltip:{type:String,required:!1}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},r=i,o=n("2877"),l=n("8f8e"),c=n("05c0"),u=n("eebe"),d=n.n(u),h=Object(o["a"])(r,s,a,!1,null,null,null);t["a"]=h.exports;d()(h,"components",{QCheckbox:l["a"],QTooltip:c["a"]})},"9ad5":function(e,t,n){},a76d:function(e,t,n){"use strict";var s;n.d(t,"a",(function(){return s})),function(e){e["system"]="system",e["light"]="light",e["dark"]="dark"}(s||(s={}))},af17:function(e,t,n){},b048e:function(e,t,n){},cdb1:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-footer",{attrs:{bordered:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.disable,expression:"!disable"}],staticClass:"row q-pa-sm"},[n("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"primary",color:"primary",label:e.$t("submit")},on:{click:e.submit}}),n("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"general",color:"general",label:e.$t("discard")},on:{click:e.discard}}),n("q-space"),n("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"negative",color:"negative",label:e.$t("reset")},on:{click:e.reset}})],1)])},a=[],i={props:{disable:Boolean,loading:Boolean},methods:{submit(){this.$emit("submit")},discard(){this.$emit("discard")},reset(){this.$emit("reset")}}},r=i,o=n("2877"),l=n("7ff0"),c=n("9c40"),u=n("2c91"),d=n("eebe"),h=n.n(d),p=Object(o["a"])(r,s,a,!1,null,null,null);t["a"]=p.exports;h()(p,"components",{QFooter:l["a"],QBtn:c["a"],QSpace:u["a"]})},d97d:function(e,t,n){"use strict";n("b048e")},e061:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting-block row q-mt-md q-mb-lg"},[n("div",{staticClass:"setting-label col-4 q-pt-sm"},[n("span",{staticClass:"q-mr-md"},[e._v(e._s(e.label))])]),n("div",{staticClass:"setting-content col row"},[e._t("default")],2)])},a=[],i={props:{label:String}},r=i,o=(n("0204"),n("2877")),l=Object(o["a"])(r,s,a,!1,null,"4521552c",null);t["a"]=l.exports}}]);