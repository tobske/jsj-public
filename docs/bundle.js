var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),l=a?e=>requestAnimationFrame(e):e;const u=new Set;let d,h=!1;function f(){u.forEach(e=>{e[0](c())||(u.delete(e),e[1]())}),(h=u.size>0)&&l(f)}function m(e){let t;return h||(h=!0,l(f)),{promise:new Promise(n=>{u.add(t=[e,n])}),abort(){u.delete(t)}}}function p(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function y(){return $(" ")}function w(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}let k,x=0,z={};function S(e,t){e.style.animation=(e.style.animation||"").split(", ").filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")).join(", "),t&&!--x&&l(()=>{if(x)return;let e=d.cssRules.length;for(;e--;)d.deleteRule(e);z={}})}function A(e){k=e}const H=[],_=[],J=[],E=[],M=Promise.resolve();let j,T=!1;function O(e){J.push(e)}function I(){const e=new Set;do{for(;H.length;){const e=H.shift();A(e),K(e.$$)}for(;_.length;)_.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];e.has(n)||(n(),e.add(n))}J.length=0}while(H.length);for(;E.length;)E.pop()();T=!1}function K(e){e.fragment&&(e.update(e.dirty),s(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(O))}function P(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const B=new Set;let L;function D(e,t){e&&e.i&&(B.delete(e),e.i(t))}function R(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),L.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const N={duration:0};function V(n,r,s){let o,a,l=r(n,s),u=!1,h=0;function f(){o&&S(n,o)}function p(){const{delay:r=0,duration:s=300,easing:i=t,tick:p=e,css:g}=l||N;g&&(o=function(e,t,n,r,s,i,o,a=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*i(e);l+=100*e+`%{${o(r,1-r)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`;if(!z[h]){if(!d){const e=b("style");document.head.appendChild(e),d=e.sheet}z[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length)}const f=e.style.animation||"";return e.style.animation=`${f?`${f}, `:""}${h} ${r}ms linear ${s}ms 1 both`,x+=1,h}(n,0,1,s,r,i,g,h++)),p(0,1);const v=c()+r,$=v+s;a&&a.abort(),u=!0,O(()=>P(n,!0,"start")),a=m(e=>{if(u){if(e>=$)return p(1,0),P(n,!0,"end"),f(),u=!1;if(e>=v){const t=i((e-v)/s);p(t,1-t)}}return u})}let g=!1;return{start(){g||(S(n),i(l)?(l=l(),(j||(j=Promise.resolve()).then(()=>{j=null}),j).then(p)):p())},invalidate(){g=!1},end(){u&&(f(),u=!1)}}}function U(e,t,r){const{fragment:o,on_mount:a,on_destroy:c,after_update:l}=e.$$;o.m(t,r),O(()=>{const t=a.map(n).filter(i);c?c.push(...t):s(t),e.$$.on_mount=[]}),l.forEach(O)}function C(e,t){e.$$.fragment&&(s(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function W(e,t){e.$$.dirty||(H.push(e),T||(T=!0,M.then(I)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function q(t,n,i,o,a,c){const l=k;A(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let h=!1;var f;d.ctx=i?i(t,u,(e,n)=>{d.ctx&&a(d.ctx[e],d.ctx[e]=n)&&(d.bound[e]&&d.bound[e](n),h&&W(t,e))}):u,d.update(),h=!0,s(d.before_update),d.fragment=o(d.ctx),n.target&&(n.hydrate?d.fragment.l((f=n.target,Array.from(f.childNodes))):d.fragment.c(),n.intro&&D(t.$$.fragment),U(t,n.target,n.anchor),I()),A(l)}class F{$destroy(){C(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const G=[];function Q(e,t){return{subscribe:Z(e,t).subscribe}}function Z(t,n=e){let r;const s=[];function i(e){if(o(t,e)&&(t=e,r)){const e=!G.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),G.push(n,t)}if(e){for(let e=0;e<G.length;e+=2)G[e][0](G[e+1]);G.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(o,a=e){const c=[o,a];return s.push(c),1===s.length&&(r=n(i)||e),o(t),()=>{const e=s.indexOf(c);-1!==e&&s.splice(e,1),0===s.length&&(r(),r=null)}}}}function X(t,n,r){const o=!Array.isArray(t),a=o?[t]:t,c=n.length<2;return Q(r,t=>{let r=!1;const l=[];let u=0,d=e;const h=()=>{if(u)return;d();const r=n(o?l[0]:l,t);c?t(r):d=i(r)?r:e},f=a.map((e,t)=>e.subscribe(e=>{l[t]=e,u&=~(1<<t),r&&h()},()=>{u|=1<<t}));return r=!0,h(),function(){s(f),d()}})}function Y(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,s,i,o=[],a="",c=e.split("/");for(c[0]||c.shift();s=c.shift();)"*"===(n=s[0])?(o.push("wild"),a+="/(.*)"):":"===n?(r=s.indexOf("?",1),i=s.indexOf(".",1),o.push(s.substring(1,~r?r:~i?i:s.length)),a+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(a+=(~r?"?":"")+"\\"+s.substring(i))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(t?"(?=$|/)":"/?$"),"i")}}function ee(e){var t,n,r=e.component;function i(e){return{props:{params:e.componentParams}}}if(r)var o=new r(i(e));return{c(){o&&o.$$.fragment.c(),t=$("")},m(e,r){o&&U(o,e,r),g(e,t,r),n=!0},p(e,n){var a={};if(e.componentParams&&(a.params=n.componentParams),r!==(r=n.component)){if(o){L={r:0,c:[],p:L};const e=o;R(e.$$.fragment,1,0,()=>{C(e,1)}),L.r||s(L.c),L=L.p}r?((o=new r(i(n))).$$.fragment.c(),D(o.$$.fragment,1),U(o,t.parentNode,t)):o=null}else r&&o.$set(a)},i(e){n||(o&&D(o.$$.fragment,e),n=!0)},o(e){o&&R(o.$$.fragment,e),n=!1},d(e){e&&v(t),o&&C(o,e)}}}function te(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let r="";return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const ne=Q(te(),function(e){const t=()=>{e(te())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});X(ne,e=>e.location),X(ne,e=>e.querystring);function re(e,t,n){let r;!function(e,t,n){e.$$.on_destroy.push(function(e,t){const n=e.subscribe(t);return n.unsubscribe?()=>n.unsubscribe():n}(t,n))}(e,ne,e=>{n("$loc",r=e)});let{routes:s={}}=t;class i{constructor(e,t){if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:n,keys:r}=Y(e);this.path=e,this.component=t,this._pattern=n,this._keys=r}match(e){const t=this._pattern.exec(e);if(null===t)return null;if(!1===this._keys)return t;const n={};let r=0;for(;r<this._keys.length;)n[this._keys[r]]=t[++r]||null;return n}}const o=s instanceof Map?s:Object.entries(s),a=[];for(const[e,t]of o)a.push(new i(e,t));let c=null,l={};return e.$set=(e=>{"routes"in e&&n("routes",s=e.routes)}),e.$$.update=((e={component:1,$loc:1})=>{if(e.component||e.$loc){n("component",c=null);let e=0;for(;!c&&e<a.length;){const t=a[e].match(r.location);t&&(n("component",c=a[e].component),n("componentParams",l=t)),e++}}}),{routes:s,component:c,componentParams:l}}class se extends F{constructor(e){super(),q(this,e,re,ee,o,["routes"])}}let ie,oe=[];function ae(e){e.node.classList.remove(e.className),e.pattern.test(ie)&&e.node.classList.add(e.className)}function ce(e,{delay:t=0,duration:n=400}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,css:e=>`opacity: ${e*r}`}}function le(t){var n,r;return{c(){(n=b("div")).innerHTML="<h1>Herzlich Willkommen</h1> <p>\n\t\t\t        Jeder Mensch ist einzigartig und so wie er ist vollkommen. Wir erhalten ständig die nötigen Informationen, um als „System Mensch“ vital zu bleiben. Häufig verstehen wir\n\t\t\t        diese Botschaften nicht mehr und geraten aus unserer Mitte. Auf der Suche nach einer Lösung übersehen wir, dass wir selbst für uns verantwortlich sind. In der Folge\n\t\t\t        reagieren wir entweder gar nicht oder unangemessen. Jede Veränderung im System trägt die Information der Lösung schon in sich.\n\t\t\t    </p> <p>\n\t\t\t        Meine Gabe und damit Aufgabe ist es, die in diesem System innewohnenden Botschaften, also Lösungsansätze zu sehen und in eine für den Klienten verständliche Sprache zu\n\t\t\t        übersetzen.\n\t\t\t    </p>"},m(e,t){g(e,n,t)},p:e,i(e){r||O(()=>{(r=V(n,ce,{})).start()})},o:e,d(e){e&&v(n)}}}ne.subscribe(e=>{ie=e.location+(e.querystring?"?"+e.querystring:""),oe.map(ae)});class ue extends F{constructor(e){super(),q(this,e,null,le,o,[])}}function de(t){var n,r;return{c(){(n=b("div")).innerHTML="<h1>Über Mich</h1> <p>\n\t\t\t        Silke Heinisch, Jahrgang 1965.\n\t\t\t    </p> <p>\n\t\t\t        Nach abgeschlossenem Ingenieursstudium in Dresden und einer Dekade Familienzeit im Allgäu zog ich mit meiner Familie in den Großraum Hamburg.\n\t\t\t        Dort hatte ich im Jahr 2001 den ersten Kontakt mit Jin Shin Jyutsu® (JSJ) und absolvierte die Ausbildung zur Jin Shin Jyutsu® Praktikerin.\n\t\t\t        Ich folgte meiner inneren Stimme und begann mit wachsendem Erfolg zu praktizieren.\n\t\t\t        Die vielen Erfahrungen, die ich mit den Menschen bei dieser Arbeit teilen durfte, sind die heutige Basis, für meine ganzheitliche Praxis.\n\t\t\t        Seit 2012 lebe und arbeite ich im Raum Karlsruhe als Jin Shin Jyutsu® Praktikerin mit schamanisch-systemischem Ansatz.\n\t\t\t    </p>"},m(e,t){g(e,n,t)},p:e,i(e){r||O(()=>{(r=V(n,ce,{})).start()})},o:e,d(e){e&&v(n)}}}function he(t){var n,r;return{c(){(n=b("div")).innerHTML='<h1>Jin Shin Jyutsu</h1> <p>\n\t\t\t        Jin Shin Jyutsu® ist eine alte, von Jiro Murai wieder entdeckte Kunst aus Japan. Die Behandlung bietet eine wirkungsvolle Hilfe, die von einfachen Variationen auch vom Behandelten selbst erlernt und weitergeführt werden kann. Diese Methode hat den Vorteil, dass sie jederzeit zur Verfügung steht und fast überall einsetzbar ist: in der U-Bahn, bei Konferenzen, beim Warten auf den Bus - die ideale Heilweise für den modernen Menschen.\n\t\t\t        Beim Jin Shin Jyutsu® wird mit sechsunszwanzig "Sicherheitsenergieschlössern" gearbeitet. Ist eines oder mehrere dieser Schlösser blockiert, kann die sich daraus ergebende Blockade unsere Lebensenergie schwächen. Diese Schlösser sitzen an unterschiedlichen Stellen unseres Körpers. In dem die Fingerspitzen oder Handflächen in verschiedenen Kombinationen aufgelegt werden, hamonisieren sich Körper, Geist und Seele. Schmerzzustände sowie chronische und akute Krankheiten werden gelindert.\n\t\t\t    </p>'},m(e,t){g(e,n,t)},p:e,i(e){r||O(()=>{(r=V(n,ce,{})).start()})},o:e,d(e){e&&v(n)}}}function fe(t){var n,r;return{c(){(n=b("div")).innerHTML='<h1>Partner</h1> <div class="partners svelte-l4ii84"><div class="partner svelte-l4ii84"><img src="/anne.jpg" alt="Anne Steinmann" width="120px" height="120px" class="svelte-l4ii84"> <h4>Anne Steinmann</h4> <p>\n\t\t\t                TherapeuticTouch - Meditation - Heilsame Klangkunst -\n\t\t\t                Wahrnehmungsschulung\n\t\t\t            </p> <p>0173-9836738 / info@anne-steinmann.de</p> <p>www.anne-steinmann.de</p> <p>\n\t\t\t                Kurse und Einzelbehandlungen in der Praxis im\n\t\t\t                Hofgut Holzmühle, 67368 Westheim\n\t\t\t            </p></div> <div class="partner svelte-l4ii84"><img src="/ulrich.jpg" alt="Ulrich Böld" width="120px" height="120px" class="svelte-l4ii84"> <h4>Ulrich Böld</h4> <p>Heilpraktiker für Psychotherapie</p> <p>ulrichbold@aol.com</p> <p>http://ulrichbold.com</p></div></div>'},m(e,t){g(e,n,t)},p:e,i(e){r||O(()=>{(r=V(n,ce,{})).start()})},o:e,d(e){e&&v(n)}}}function me(t){var n,r;return{c(){(n=b("div")).innerHTML='<h1>Termine</h1> <div class="row svelte-ca1agx"><div class="column svelte-ca1agx"><h4 class="svelte-ca1agx">Einzeltermine nach persönlicher Absprache</h4> <p class="svelte-ca1agx">oder</p> <h4 class="svelte-ca1agx">Wöchentliche Treffen von Selbsthilfegruppen</h4> <p class="svelte-ca1agx">Dienstag von 09:30 Uhr bis 12:00 Uhr</p> <p class="svelte-ca1agx">von 19.00 Uhr bis 21.30 Uhr</p> <h4 class="svelte-ca1agx">Terminabsprache und Anmeldung</h4> <p class="svelte-ca1agx">\n\t\t\t                Silke Heinisch\n\t\t\t                0151 68128102\n\t\t\t                jsj-silke@gmx.de\n\t\t\t            </p></div> <div class="column svelte-ca1agx"><div class="date svelte-ca1agx"><h4 class="svelte-ca1agx">Einführung in die Anwendung</h4> <p class="svelte-ca1agx">18.09.2019 Seminarbeginn 19.00 Uhr</p></div> <div class="date svelte-ca1agx"><h4 class="svelte-ca1agx">Hand in Hand mit Anne Steinmann</h4> <p class="svelte-ca1agx">Mittwochs in der Holzmühle</p></div> <div class="date svelte-ca1agx"><h4 class="svelte-ca1agx">Hand in Hand mit Ines Haftmann</h4> <p class="svelte-ca1agx">06.11.2019-13.11.2019</p> <p class="svelte-ca1agx">Dresden Könneritzstraße 19</p></div></div></div>'},m(e,t){g(e,n,t)},p:e,i(e){r||O(()=>{(r=V(n,ce,{})).start()})},o:e,d(e){e&&v(n)}}}function pe(t){var n,r;return{c(){(n=b("div")).innerHTML='<h1>Kontakt</h1> <div class="person svelte-dvo3i1"><img src="/silke.jpg" alt="Silke Heinisch" width="180px" height="180px" class="svelte-dvo3i1"> <h4 class="svelte-dvo3i1">Telefon</h4> <p class="svelte-dvo3i1">0151 68128102</p> <h4 class="svelte-dvo3i1">E-Mail</h4> <p class="svelte-dvo3i1">jsj-silke@gmx.de</p> <p class="svelte-dvo3i1">Anfragen bezüglich Terminen per E-Mail werden schnellstmöglich beantwortet.</p></div>'},m(e,t){g(e,n,t)},p:e,i(e){r||O(()=>{(r=V(n,ce,{})).start()})},o:e,d(e){e&&v(n)}}}function ge(t){var n,r;return{c(){(n=b("div")).innerHTML="<h1>Impressum</h1> <p>Verantwortlich für diese Seite: Silke Heinisch</p> <h4>Rechtsinformation</h4> <p>\n\t\t\t        Wer die Selbstheilungskräfte eines Klienten durch Strömen aktiviert und dabei keine Diagnosen stellt, benötigt keine Heilpraktikererlaubnis.\n\t\t\t        Die Tätigkeit des Jin Shin Jyutsu®-Praktikers ersetzt keine ärztliche Behandlung. (BVG v. 02.03.2004/ AZ 1BvR784/03)\n\t\t\t    </p> <h4>Haftungsausschluss</h4> <p>\n\t\t\t        Inhalt des Onlineangebotes: Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität\n\t\t\t        der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen,\n\t\t\t        die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter\n\t\t\t        und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen,\n\t\t\t        sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.\n\t\t\t        Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor,\n\t\t\t        Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,\n\t\t\t        zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.\n\t\t\t    </p>"},m(e,t){g(e,n,t)},p:e,i(e){r||O(()=>{(r=V(n,ce,{})).start()})},o:e,d(e){e&&v(n)}}}const ve=[{route:"/",component:ue,name:"Home"},{route:"/ueber-mich",component:class extends F{constructor(e){super(),q(this,e,null,de,o,[])}},name:"Über Mich"},{route:"/jin-shin-jyutsu",component:class extends F{constructor(e){super(),q(this,e,null,he,o,[])}},name:"Jin Shin Jyutsu®"},{route:"/partner",component:class extends F{constructor(e){super(),q(this,e,null,fe,o,[])}},name:"Partner"},{route:"/termine",component:class extends F{constructor(e){super(),q(this,e,null,me,o,[])}},name:"Termine"},{route:"/kontakt",component:class extends F{constructor(e){super(),q(this,e,null,pe,o,[])}},name:"Kontakt"},{route:"/impressum",component:class extends F{constructor(e){super(),q(this,e,null,ge,o,[])}},name:"Impressum"},{route:"*",component:ue}],be=ve.reduce((e,t)=>(e[t.route]=t.component,e),{});function $e(e,t,n){const r=Object.create(e);return r.route=t[n],r}function ye(t){var n,r,s,i,o,a=t.route.name+"";return{c(){n=b("div"),r=b("a"),s=$(a),o=y(),w(r,"href","#"+t.route.route),w(r,"class","svelte-rjf9kb"),w(n,"class","nav-element svelte-rjf9kb")},m(e,t){g(e,n,t),p(n,r),p(r,s),i=function(e,t,n){if(!t&&e.hasAttribute("href")&&(t=e.getAttribute("href"))&&t.length>1&&"#"==t.charAt(0)&&(t=t.substring(1)),n||(n="active"),!t||t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))throw Error('Invalid value for "path" argument');const{pattern:r}=Y(t),s={node:e,className:n,pattern:r};return oe.push(s),ae(s),{destroy(){oe=oe.splice(oe.indexOf(s),1)}}}.call(null,r)||{},p(n,o)},p:e,d(e){e&&v(n),i&&"function"==typeof i.destroy&&i.destroy()}}}function we(t){var n,r;let s=t.fullRoutesOnly,i=[];for(let e=0;e<s.length;e+=1)i[e]=ye($e(t,s,e));return{c(){n=b("div"),r=b("div");for(let e=0;e<i.length;e+=1)i[e].c();w(r,"class","nav-bar svelte-rjf9kb"),w(n,"class","nav-bar-container svelte-rjf9kb")},m(e,t){g(e,n,t),p(n,r);for(let e=0;e<i.length;e+=1)i[e].m(r,null)},p(e,t){if(e.fullRoutesOnly){let n;for(s=t.fullRoutesOnly,n=0;n<s.length;n+=1){const o=$e(t,s,n);i[n]?i[n].p(e,o):(i[n]=ye(o),i[n].c(),i[n].m(r,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=s.length}},i:e,o:e,d(e){e&&v(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(i,e)}}}function ke(e){return{fullRoutesOnly:ve.filter(e=>!!e.name)}}class xe extends F{constructor(e){super(),q(this,e,ke,we,o,[])}}function ze(e){var t,n,r,s,i,o=new xe({}),a=new se({props:{routes:be}});return{c(){t=b("div"),n=b("div"),o.$$.fragment.c(),r=y(),s=b("div"),a.$$.fragment.c(),w(n,"class","header svelte-vdcmrr"),w(s,"class","content svelte-vdcmrr"),w(t,"class","container svelte-vdcmrr")},m(e,c){g(e,t,c),p(t,n),U(o,n,null),p(t,r),p(t,s),U(a,s,null),i=!0},p(e,t){var n={};e.routes&&(n.routes=be),a.$set(n)},i(e){i||(D(o.$$.fragment,e),D(a.$$.fragment,e),i=!0)},o(e){R(o.$$.fragment,e),R(a.$$.fragment,e),i=!1},d(e){e&&v(t),C(o),C(a)}}}return new class extends F{constructor(e){super(),q(this,e,null,ze,o,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map