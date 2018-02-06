webpackJsonp([0],[,,,function(t,e,a){"use strict";var n=a(4),r=a(5);e.a={data:function(){return{text:"",currentLang:"",currentLayout:"msUSEnglish",layouts:n,locales:r}},methods:{onKeyboardTrigger:function(t){var e=t.value,a=t.type;if("input"===a)this.text=""+this.text+e;else if("action"===a)switch(e){case"bksp":this.text=this.text.slice(0,-1);break;case"space":this.text=this.text+" "}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(15);a.d(e,"msUSEnglish",function(){return n.a});var r=a(16);a.d(e,"spanish",function(){return r.a});var s=a(17);a.d(e,"polish",function(){return s.a});var c=a(18);a.d(e,"portuguese",function(){return c.a});var i=a(19);a.d(e,"german",function(){return i.a});var l=a(20);a.d(e,"french",function(){return l.a})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(21);a.d(e,"fr",function(){return n.a});var r=a(22);a.d(e,"en",function(){return r.a});var s=a(23);a.d(e,"es",function(){return s.a});var c=a(24);a.d(e,"de",function(){return c.a});var i=a(25);a.d(e,"pt",function(){return i.a});var l=a(26);a.d(e,"pl",function(){return l.a})},function(t,e,a){"use strict";function n(t,e){var a={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);return a}var r=a(30),s=a(2);e.a={name:"Keyboard",props:{lang:{type:String},layout:{type:String,default:"msUSEnglish"},typeset:{type:String,default:"normal"},theme:{type:String,default:"default"},classnames:{type:Object,default:function(){return{wrapper:"wrapper-class",row:"row-class",key:"key-class"}}}},methods:{onKeyPress:function(t){this.$emit("trigger",t),this.defaultActions(t)},defaultActions:function(t){var e=t.type,a=t.value;if("action"===e){var r=this.currentLayout;r.name,r.lang;n(r,["name","lang"]).hasOwnProperty(a)&&(this.internalTypeset=this.internalTypeset===a?"normal":a)}}},data:function(){return{internalTypeset:null}},watch:{typeset:{immediate:!0,handler:function(t){this.internalTypeset=t}}},inject:{injectedLocales:{from:"_vkeyboard_locales",default:function(){return[]}},injectedLayouts:{from:"_vkeyboard_layouts",default:function(){return[]}}},computed:{availableLocales:function(){return this.injectedLocales},availableLayouts:function(){return this.injectedLayouts},currentLayout:function(){return this.availableLayouts[this.layout]},rowsToDisplay:function(){if(!this.availableLayouts)return void s.a.util.warn("no layouts provided");var t=this.currentLayout;if(!t)return void s.a.util.warn("no layout matching provided");var e=this.availableLocales[this.lang?this.lang:t.lang[0]];e||s.a.util.warn("no locale matching lang provided");var a=this.internalTypeset;return[a]in t||(s.a.util.warn("undefined typeset: "+a),a="normal"),t[a].map(function(t){return Object(r.b)(t,function(t){var a=Object(r.a)(t),n=a.type,s=a.value;return{type:n,value:s,translation:"action"===n?Object(r.c)(s,e&&e.display[s]):s}})})}},components:{slotRenderer:{functional:!0,props:{vnode:{required:!0},args:{}},render:function(t,e){var a=(e.parent,e.props),n=e.children;return a.vnode||n}}}}},function(t,e,a){"use strict";var n=a(4),r=a(5);e.a={name:"KeyboardProvider",provide:{_vkeyboard_locales:r,_vkeyboard_layouts:n},render:function(t){return t("div",this.$slots.default)}}},function(t,e,a){t.exports=a(9)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),r=a(13),s=a(28);n.a.use(s.a),new n.a({el:"#app",render:function(t){return t(r.a)}})},,,,function(t,e,a){"use strict";function n(t){a(14)}var r=a(3),s=a(27),c=a(1),i=n,l=c(r.a,s.a,!1,i,null,null);e.a=l.exports},function(t,e){},function(t,e,a){"use strict";e.a={name:"ms-US English (Latin)",lang:["en"],normal:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","a s d f g h j k l ; ' {enter}","{shift} \\ z x c v b n m , . / {shift}","{accept} {space} {cancel}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'A S D F G H J K L : " {enter}',"{shift} | Z X C V B N M < > / {shift}","{accept} {space} {cancel}"]}},function(t,e,a){"use strict";e.a={name:"spanish-qwerty",lang:["es"],normal:["| 1 2 3 4 5 6 7 8 9 0 ' ¿ {bksp}","{tab} q w e r t y u i o p ́ +","a s d f g h j k l ñ { } {enter}","{shift} < z x c v b n m , . - {shift}","{accept} {alt} {space} {alt} {cancel}"],shift:['° ! " # $ % & / ( ) = ? ¡ {bksp}',"{tab} Q W E R T Y U I O P ̈ *","A S D F G H J K L Ñ [ ] {enter}","{shift} > Z X C V B N M ; : _ {shift}","{accept} {alt} {space} {alt} {cancel}"],alt:["¬ 1 2 3 4 5 6 7 8 9 0 \\ ¿ {bksp}","{tab} @ w e r t y u i o p ́ ̃","a s d f g h j k l ñ ̂ ̀ {enter}","{shift} < z x c v b n m , . - {shift}","{accept} {alt} {space} {alt} {cancel}"],"alt-shift":['° ! " # $ % & / ( ) = ? ¡ {bksp}',"{tab} Q W E R T Y U I O P ̈ *","A S D F G H J K L Ñ [ ] {enter}","{shift} > Z X C V B N M ; : _ {shift}","{accept} {alt} {space} {alt} {cancel}"]}},function(t,e,a){"use strict";e.a={name:"polish-qwerty",lang:["pl"],normal:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] °","a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}","{accept} {alt} {space} {alt} {cancel}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}","{accept} {alt} {space} {alt} {cancel}"],alt:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w ę r t y € i ó p [ ] °",'ą ś d f g h j k ł : " {enter}',"{shift} ż ź ć v b ń m , . / {shift}","{accept} {alt} {space} {alt} {cancel}"]}},function(t,e,a){"use strict";e.a={name:"portuguese-qwerty",lang:["pt"],normal:["\\ 1 2 3 4 5 6 7 8 9 0 ' « {bksp}","{tab} q w e r t y u i o p + ´","a s d f g h j k l ç º ~ {enter}","{shift} < z x c v b n m , . - {shift}","{cancel} {space} {alt} {combo} {accept}"],shift:['| ! " # $ % & / ( ) = ? » {bksp}',"{tab} Q W E R T Y U I O P * `","A S D F G H J K L Ç ª ^ {enter}","{shift} > Z X C V B N M ; : _ {shift}","{cancel} {space} {alt} {combo} {accept}"],alt:["\\ 1 @ £ § € 6 { [ ] } ' « {bksp}","{tab} q w € r t y u i o p ̈ ´","a s d f g h j k l ç º ~ {enter}","{shift} < z x c v b n m , . - {shift}","{cancel} {space} {alt} {combo} {accept}"],"alt-shift":['| ! " # $ % & / ( ) = ? » {bksp}',"{tab} Q W € R T Y U I O P ̈ `","A S D F G H J K L Ç ª ^ {enter}","{shift} > Z X C V B N M ; : _ {shift}","{cancel} {space} {alt} {combo} {accept}"]}},function(t,e,a){"use strict";e.a={name:"german-qwertz-1",lang:["de"],normal:["̂ 1 2 3 4 5 6 7 8 9 0 ß ́ {bksp}","{tab} q w e r t z u i o p ü +","a s d f g h j k l ö ä # {enter}","{shift} < y x c v b n m , . - {shift}","{accept} {alt} {space} {alt} {cancel}"],shift:['° ! " § $ % & / ( ) = ? ̀ {bksp}',"{tab} Q W E R T Z U I O P Ü *","A S D F G H J K L Ö Ä ' {enter}","{shift} > Y X C V B N M ; : _ {shift}","{accept} {alt} {space} {alt} {cancel}"],alt:["̂ 1 ² ³ 4 5 6 { [ ] } \\ ́ {bksp}","{tab} @ w € r t z u i o p ü ̃","a s d f g h j k l ö ä # {enter}","{shift} | y x c v b n µ , . - {shift}","{accept} {alt} {space} {alt} {cancel}"]}},function(t,e,a){"use strict";e.a={name:"french-azerty-1",lang:["fr"],normal:["² & é \" ' ( - è _ ç à ) = {bksp}","{tab} a z e r t y u i o p ^ $","q s d f g h j k l m  ù * {enter}","{shift} < w x c v b n , ; : ! {shift}","{accept} {alt} {space} {alt} {cancel}"],shift:["{sp:1} 1 2 3 4 5 6 7 8 9 0 ° + {bksp}","{tab} A Z E R T Y U I O P ¨ £","Q S D F G H J K L M % µ {enter}","{shift} > W X C V B N ? . / § {shift}","{accept} {alt} {space} {alt} {cancel}"],alt:["² & ~ # { [ | ` \\ ^ @ ] } {bksp}","{tab} a z € r t y u i o p ^ ¤","q s d f g h j k l m  ù * {enter}","{shift} < w x c v b n , ; : ! {shift}","{accept} {alt} {space} {alt} {cancel}"],"alt-shift":["{sp:1} 1 ~ # { [ | ` \\ ^ @ ] } {bksp}","{tab} A Z € R T Y U I O P ¨ ¤","Q S D F G H J K L M % µ {enter}","{shift} > W X C V B N ? . / § {shift}","{accept} {alt} {space} {alt} {cancel}"]}},function(t,e,a){"use strict";e.a={language:"Français (French)",display:{a:"✔:Valider (Shift+Enter)",accept:"Valider:Valider (Shift+Enter)",alt:"AltGr:Charactère alternatif",b:"←:Suppr arrière",bksp:"←Suppr:Suppr arrière",c:"✖:Annuler",cancel:"Annuler:Annuler (Échap)",clear:"C:Effacer",combo:"ö:Bacsuler les touches combo",dec:".:Decimal",e:"↵:Entrée",enter:"Entrée:Entrée",lock:"⇪ Verr Mag:Verouillage majuscule",s:"⇧:Majuscule",shift:"Maj:Majuscule",sign:"±:Change de signe",space:" :Espace",t:"⇥:Tabulation",tab:"⇥ Tab:Tabulation"},wheelMessage:"Utiliser la molette de la souris pour voir les autres lettres"}},function(t,e,a){"use strict";e.a={language:"All (English translation)",display:{a:"✔:Accept (Shift+Enter)",accept:"Accept:Accept (Shift+Enter)",alt:"AltGr:Alternate Graphemes",b:"←:Backspace",bksp:"Bksp:Backspace",c:"✖:Cancel (Esc)",cancel:"Cancel:Cancel (Esc)",clear:"C:Clear",combo:"ö:Toggle Combo Keys",dec:".:Decimal",e:"↵:Enter",enter:"Enter:Enter",lock:"⇪ Lock:Caps Lock",s:"⇧:Shift",shift:"Shift:Shift",sign:"±:Change Sign",space:" :Space",t:"⇥:Tab",tab:"⇥ Tab:Tab"},wheelMessage:"Use mousewheel to see other keys"}},function(t,e,a){"use strict";e.a={language:"Español (Spanish)",display:{a:"✔:Acceptar (Cambio+Inscribir)",accept:"Acceptar:Acceptar (Cambio+Inscribir)",alt:"AltGr:Grafemas Alternativos",b:"←:Retroceso",bksp:"Bksp:Retroceso",c:"✖:Cancelar (Esc)",cancel:"Cancelar:Cancelar (Esc)",clear:"C:Vaciar",combo:"ö:Alternar las Teclas Combinados",dec:",:Decimal",e:"↵:Inscribir",enter:"Inscribir:Inscribir",lock:"⇪ Bloq:Mayús",s:"⇧:Cambio",shift:"Cambio:Cambio",sign:"±:Cambiar Signo",space:" :Espacio",t:"⇥:Tab",tab:"⇥ Tab:Tab"},wheelMessage:"Utilice la rueda del mouse para ver otras teclas"}},function(t,e,a){"use strict";e.a={language:"Deutsch (German)",display:{a:"✔:Übernehmen (Umschalt+Enter)",accept:"Übernehmen:Übernehmen (Umschalt+Enter)",alt:"AltGr:Alt Graph",b:"←:Rücktaste",bksp:"Rück:Rücktaste",c:"✖:Abbrechen (Esc)",cancel:"Abbrechen:Abbrechen (Esc)",clear:"C:Löschen",combo:"ö:Tottasten umschalten",dec:",:Dezimal",e:"↵:Eingabe",enter:"Enter:Eingabe",lock:"⇩:Feststelltaste",s:"⇧:Umschalttaste",shift:"Umschalt:Umschalttaste",sign:"±:Vorzeichen wechseln",space:" :Leertaste",t:"⇥:Tabulatortaste",tab:"⇥ Tab:Tabulatortaste"},wheelMessage:"Mausrad benutzen, um weitere Tasten zu sehen"}},function(t,e,a){"use strict";e.a={language:"Português (Portuguese)",display:{a:"✔:Aceitar (Shift+Enter)",accept:"Aceitar:Concluir (Shift+Enter)",alt:"AltGr:Carateres Adicionais/CTRL+ALT",b:"←:Retroceder",bksp:"← Bksp:Retroceder",c:"✖:Cancelar/Escape (Esc)",cancel:"Cancel:Cancelar/Escape(Esc)",clear:"C:Limpar",combo:"ö:Acentuação Automática",dec:".:Decimal",e:"↵:Introduzir/Mudar de Linha",enter:"Enter↵:Introduzir/Mudar de Linha",lock:"⇪ Lock:CapsLock/Maiúsculas",s:"⇧:Shift/Maiúsculas",shift:"⇪ Shift:Maiúsculas-Minúsculas",sign:"±:Mudar Sinal",space:" :Espaço",t:"⇥:Tab/Tabela/Avançar",tab:"⇥ Tab:Tabela/Avançar"},wheelMessage:"Use a roda do rato/navegador para ver mais teclas",comboRegex:/([`\'~\^\"ao\u00b4])([a-z])/gim,combos:{"´":{a:"á",A:"Á",e:"é",E:"É",i:"í",I:"Í",o:"ó",O:"Ó",u:"ú",U:"Ú",y:"ý",Y:"Ý"},"'":{}}}},function(t,e,a){"use strict";e.a={language:"Polski (Polish)",display:{a:"✔:Akceptuj (Shift+Enter)",accept:"Accept:Akceptuj (Shift+Enter)",alt:"AltGr:Polskie znaki",b:"←:Cofnij",bksp:"Bksp:Cofnij",c:"✖:Anuluj (Esc)",cancel:"Cancel:Anuluj (Esc)",clear:"C:Czyść",combo:"ö:Klawisze kombo",dec:".:Dziesiętny",e:"↵:Enter",enter:"Enter:Enter",lock:"⇪ Lock:Caps Lock",s:"⇧:Shift",shift:"Shift:Shift",sign:"±:Zmień znak",space:" :Spacja",t:"⇥:Tab",tab:"⇥ Tab:Tab"},wheelMessage:"Użyj rolki aby zobaczyć pozozstałe klawisze"}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa5 flex"},[a("div",{staticClass:"example ba bw1 example-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"pa2 w-100 black bw0",attrs:{type:"text",placeholder:"Type anything"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),a("KeyboardWithProvider",{attrs:{classnames:{wrapper:"wrapper-class tc",row:"row-class",key:"key-class pa2"},layout:t.currentLayout,lang:t.currentLang},on:{trigger:t.onKeyboardTrigger},scopedSlots:t._u([{key:"input:q",fn:function(e){var n=e.args;return a("span",{},[t._v(t._s(n.value)+" (with scoped-slot)")])}},{key:"action:shift",fn:function(e){e.args;return a("span",{},[t._v("⇧")])}}])},[a("span",{attrs:{slot:"action:shift"},slot:"action:shift"},[t._v("⇧")]),t._v(" "),a("span",{attrs:{slot:"action:bksp"},slot:"action:bksp"},[t._v("⌫")])])],1),t._v(" "),a("div",{staticClass:"w-25 ml3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentLayout,expression:"currentLayout"}],staticClass:"w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentLayout=e.target.multiple?a:a[0]}}},t._l(t.layouts,function(e,n){return a("option",{domProps:{value:n}},[t._v(t._s(n))])})),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentLang,expression:"currentLang"}],staticClass:"w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentLang=e.target.multiple?a:a[0]}}},t._l(t.locales,function(e,n){return a("option",{domProps:{value:n}},[t._v(t._s(n))])}))])])},r=[],s={render:n,staticRenderFns:r};e.a=s},function(t,e,a){"use strict";var n=a(29),r=a(32),s=a(33),c=(a.n(s),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(e.layouts,e.locales,{name:"KeyboardWithProvider",functional:!0,render:function(t,e){var a=e.parent,s=e.data,c=(e.slots,e.children);return t(r.a,[a.$createElement(n.a,s,c)])}});t.component(a.name,a)});e.a=c},function(t,e,a){"use strict";var n=a(6),r=a(31),s=a(1),c=s(n.a,r.a,!1,null,null,null);e.a=c.exports},function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return s}),a.d(e,"c",function(){return c});var n=function(){function t(t,e){var a=[],n=!0,r=!1,s=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!e||a.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(t){var e=/\{(.*)\}/,a=t.match(e)||[],r=n(a,2),s=r[1];return{value:s||t,type:s?"action":"input"}},s=function(t,e){return t.split(/\s+/).map(e)},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=e.split(":");return n(a,1)[0]||t}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-keyboard",class:[t.classnames.wrapper,"theme-"+t.theme]},[t.rowsToDisplay?t._l(t.rowsToDisplay,function(e){return a("div",{staticClass:"row",class:t.classnames.row},t._l(e,function(e,n){return a("button",{key:n,staticClass:"keybtn",class:[t.classnames.key,"key-"+e.type+"-"+e.value,e.value===t.internalTypeset&&"action"===e.type?"-active":""],attrs:{type:"button"},on:{click:function(a){t.onKeyPress(e)}}},[a("slot-renderer",{attrs:{vnode:t.$scopedSlots[e.type+":"+e.value]&&t.$scopedSlots[e.type+":"+e.value]({args:e})}},[t._v("\n          "+t._s(e.translation)+"\n        ")])],1)}))}):t._e()],2)},r=[],s={render:n,staticRenderFns:r};e.a=s},function(t,e,a){"use strict";var n=a(7),r=a(1),s=r(n.a,null,!1,null,null,null);e.a=s.exports},function(t,e){}],[8]);
//# sourceMappingURL=client.7487471f.js.map