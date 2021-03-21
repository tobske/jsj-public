var app=function(){"use strict";function e(){}const n=e=>e;function t(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(t)}function r(e){return"function"==typeof e}function o(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function a(n,...t){if(null==n)return e;const i=n.subscribe(...t);return i.unsubscribe?()=>i.unsubscribe():i}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?e=>requestAnimationFrame(e):e;const h=new Set;function d(e){h.forEach(n=>{n.c(e)||(h.delete(n),n.f())}),0!==h.size&&u(d)}function f(e,n){e.appendChild(n)}function g(e,n,t){e.insertBefore(n,t||null)}function p(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function k(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function w(e,n){const t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,n),t}const y=new Set;let $,x=0;function z(e,n){const t=(e.style.animation||"").split(", "),i=t.filter(n?e=>e.indexOf(n)<0:e=>-1===e.indexOf("__svelte")),s=t.length-i.length;s&&(e.style.animation=i.join(", "),x-=s,x||u(()=>{x||(y.forEach(e=>{const n=e.__svelte_stylesheet;let t=n.cssRules.length;for(;t--;)n.deleteRule(t);e.__svelte_rules={}}),y.clear())}))}function S(e){$=e}function _(){const e=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(n,t)=>{const i=e.$$.callbacks[n];if(i){const s=w(n,t);i.slice().forEach(n=>{n.call(e,s)})}}}const A=[],H=[],E=[],J=[],M=Promise.resolve();let j=!1;function T(e){E.push(e)}let B=!1;const D=new Set;function L(){if(!B){B=!0;do{for(let e=0;e<A.length;e+=1){const n=A[e];S(n),I(n.$$)}for(A.length=0;H.length;)H.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];D.has(n)||(D.add(n),n())}E.length=0}while(A.length);for(;J.length;)J.pop()();j=!1,B=!1,D.clear()}}function I(e){if(null!==e.fragment){e.update(),s(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(T)}}let K;function N(e,n,t){e.dispatchEvent(w(`${n?"intro":"outro"}${t}`))}const P=new Set;let V;function O(e,n){e&&e.i&&(P.delete(e),e.i(n))}function G(e,n,t,i){if(e&&e.o){if(P.has(e))return;P.add(e),V.c.push(()=>{P.delete(e),i&&(t&&e.d(1),i())}),e.o(n)}}const R={duration:0};function W(t,i,s){let o,a,l=i(t,s),f=!1,g=0;function p(){o&&z(t,o)}function b(){const{delay:i=0,duration:s=300,easing:r=n,tick:b=e,css:v}=l||R;v&&(o=function(e,n,t,i,s,r,o,a=0){const l=16.666/i;let c="{\n";for(let e=0;e<=1;e+=l){const i=n+(t-n)*r(e);c+=100*e+`%{${o(i,1-i)}}\n`}const u=c+`100% {${o(t,1-t)}}\n}`,h=`__svelte_${function(e){let n=5381,t=e.length;for(;t--;)n=(n<<5)-n^e.charCodeAt(t);return n>>>0}(u)}_${a}`,d=e.ownerDocument;y.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(m("style")).sheet),g=d.__svelte_rules||(d.__svelte_rules={});g[h]||(g[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const p=e.style.animation||"";return e.style.animation=`${p?p+", ":""}${h} ${i}ms linear ${s}ms 1 both`,x+=1,h}(t,0,1,s,i,r,v,g++)),b(0,1);const k=c()+i,w=k+s;a&&a.abort(),f=!0,T(()=>N(t,!0,"start")),a=function(e){let n;return 0===h.size&&u(d),{promise:new Promise(t=>{h.add(n={c:e,f:t})}),abort(){h.delete(n)}}}(e=>{if(f){if(e>=w)return b(1,0),N(t,!0,"end"),p(),f=!1;if(e>=k){const n=r((e-k)/s);b(n,1-n)}}return f})}let v=!1;return{start(){v||(z(t),r(l)?(l=l(),(K||(K=Promise.resolve(),K.then(()=>{K=null})),K).then(b)):b())},invalidate(){v=!1},end(){f&&(p(),f=!1)}}}function q(e){e&&e.c()}function U(e,n,i){const{fragment:o,on_mount:a,on_destroy:l,after_update:c}=e.$$;o&&o.m(n,i),T(()=>{const n=a.map(t).filter(r);l?l.push(...n):s(n),e.$$.on_mount=[]}),c.forEach(T)}function C(e,n){const t=e.$$;null!==t.fragment&&(s(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function F(e,n){-1===e.$$.dirty[0]&&(A.push(e),j||(j=!0,M.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Z(n,t,r,o,a,l,c=[-1]){const u=$;S(n);const h=t.props||{},d=n.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:c};let f=!1;if(d.ctx=r?r(n,h,(e,t,...i)=>{const s=i.length?i[0]:t;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(d.bound[e]&&d.bound[e](s),f&&F(n,e)),t}):[],d.update(),f=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);d.fragment&&d.fragment.l(e),e.forEach(p)}else d.fragment&&d.fragment.c();t.intro&&O(n.$$.fragment),U(n,t.target,t.anchor),L()}S(u)}class Q{$destroy(){C(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(){}}const X=[];function Y(e,n){return{subscribe:ee(e,n).subscribe}}function ee(n,t=e){let i;const s=[];function r(e){if(o(n,e)&&(n=e,i)){const e=!X.length;for(let e=0;e<s.length;e+=1){const t=s[e];t[1](),X.push(t,n)}if(e){for(let e=0;e<X.length;e+=2)X[e][0](X[e+1]);X.length=0}}}return{set:r,update:function(e){r(e(n))},subscribe:function(o,a=e){const l=[o,a];return s.push(l),1===s.length&&(i=t(r)||e),o(n),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&(i(),i=null)}}}}function ne(n,t,i){const o=!Array.isArray(n),l=o?[n]:n,c=t.length<2;return Y(i,n=>{let i=!1;const u=[];let h=0,d=e;const f=()=>{if(h)return;d();const i=t(o?u[0]:u,n);c?n(i):d=r(i)?i:e},g=l.map((e,n)=>a(e,e=>{u[n]=e,h&=~(1<<n),i&&f()},()=>{h|=1<<n}));return i=!0,f(),function(){s(g),d()}})}function te(e,n){if(e instanceof RegExp)return{keys:!1,pattern:e};var t,i,s,r,o=[],a="",l=e.split("/");for(l[0]||l.shift();s=l.shift();)"*"===(t=s[0])?(o.push("wild"),a+="/(.*)"):":"===t?(i=s.indexOf("?",1),r=s.indexOf(".",1),o.push(s.substring(1,~i?i:~r?r:s.length)),a+=~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~i?"?":"")+"\\"+s.substring(r))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(n?"(?=$|/)":"/?$"),"i")}}function ie(e){let n,t,i;var r=e[0];function o(e){return{props:{params:e[1]}}}return r&&(n=new r(o(e))),{c(){n&&q(n.$$.fragment),t=b("")},m(e,s){n&&U(n,e,s),g(e,t,s),i=!0},p(e,[i]){const a={};if(2&i&&(a.params=e[1]),r!==(r=e[0])){if(n){V={r:0,c:[],p:V};const e=n;G(e.$$.fragment,1,0,()=>{C(e,1)}),V.r||s(V.c),V=V.p}r?(n=new r(o(e)),q(n.$$.fragment),O(n.$$.fragment,1),U(n,t.parentNode,t)):n=null}else r&&n.$set(a)},i(e){i||(n&&O(n.$$.fragment,e),i=!0)},o(e){n&&G(n.$$.fragment,e),i=!1},d(e){e&&p(t),n&&C(n,e)}}}function se(){const e=window.location.href.indexOf("#/");let n=e>-1?window.location.href.substr(e+1):"/";const t=n.indexOf("?");let i="";return t>-1&&(i=n.substr(t+1),n=n.substr(0,t)),{location:n,querystring:i}}const re=Y(se(),(function(e){const n=()=>{e(se())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));ne(re,e=>e.location),ne(re,e=>e.querystring);function oe(n,t,i){let s,r=e;!function(e,n,t){e.$$.on_destroy.push(a(n,t))}(n,re,e=>i(4,s=e)),n.$$.on_destroy.push(()=>r());let{routes:o={}}=t,{prefix:l=""}=t;class c{constructor(e,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:t,keys:i}=te(e);this.path=e,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=t,this._keys=i}match(e){l&&e.startsWith(l)&&(e=e.substr(l.length)||"/");const n=this._pattern.exec(e);if(null===n)return null;if(!1===this._keys)return n;const t={};let i=0;for(;i<this._keys.length;)t[this._keys[i]]=n[++i]||null;return t}checkConditions(e){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](e))return!1;return!0}}const u=o instanceof Map?o:Object.entries(o),h=[];for(const[e,n]of u)h.push(new c(e,n));let d=null,f={};const g=_(),p=(e,n)=>{setTimeout(()=>{g(e,n)},0)};return n.$set=e=>{"routes"in e&&i(2,o=e.routes),"prefix"in e&&i(3,l=e.prefix)},n.$$.update=()=>{if(17&n.$$.dirty){i(0,d=null);let e=0;for(;!d&&e<h.length;){const n=h[e].match(s.location);if(n){const t={component:h[e].component,name:h[e].component.name,location:s.location,querystring:s.querystring,userData:h[e].userData};if(!h[e].checkConditions(t)){p("conditionsFailed",t);break}i(0,d=h[e].component),i(1,f=n),p("routeLoaded",t)}e++}}},[d,f,o,l]}class ae extends Q{constructor(e){super(),Z(this,e,oe,ie,o,{routes:2,prefix:3})}}const le=[];let ce;function ue(e){e.node.classList.remove(e.className),e.pattern.test(ce)&&e.node.classList.add(e.className)}function he(e,n){if(!(n=n&&"string"==typeof n?{path:n}:n||{}).path&&e.hasAttribute("href")&&(n.path=e.getAttribute("href"),n.path&&n.path.length>1&&"#"==n.path.charAt(0)&&(n.path=n.path.substring(1))),n.className||(n.className="active"),!n.path||n.path.length<1||"/"!=n.path.charAt(0)&&"*"!=n.path.charAt(0))throw Error('Invalid value for "path" argument');const{pattern:t}=te(n.path),i={node:e,className:n.className,pattern:t};return le.push(i),ue(i),{destroy(){le.splice(le.indexOf(i),1)}}}function de(e,{delay:t=0,duration:i=400,easing:s=n}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:i,easing:s,css:e=>"opacity: "+e*r}}function fe(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Herzlich Willkommen</h1> \n    <p>\n        Jeder Mensch ist einzigartig und so wie er ist vollkommen. Wir erhalten ständig die nötigen Informationen, um als „System Mensch“ vital zu bleiben. Häufig verstehen wir\n        diese Botschaften nicht mehr und geraten aus unserer Mitte. Auf der Suche nach einer Lösung übersehen wir, dass wir selbst für uns verantwortlich sind. In der Folge\n        reagieren wir entweder gar nicht oder unangemessen. Jede Veränderung im System trägt die Information der Lösung schon in sich.\n    </p> \n    <p>\n        Meine Gabe und damit Aufgabe ist es, die in diesem System innewohnenden Botschaften, also Lösungsansätze zu sehen und in eine für den Klienten verständliche Sprache zu\n        übersetzen.\n    </p>"},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}re.subscribe(e=>{ce=e.location+(e.querystring?"?"+e.querystring:""),le.map(ue)});class ge extends Q{constructor(e){super(),Z(this,e,null,fe,o,{})}}function pe(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Über Mich</h1> \n    <p>\n        Silke Heinisch, Jahrgang 1965.\n    </p> \n    <p>\n        Nach abgeschlossenem Ingenieursstudium in Dresden und einer Dekade Familienzeit im Allgäu zog ich mit meiner Familie in den Großraum Hamburg.\n        Dort hatte ich im Jahr 2001 den ersten Kontakt mit Jin Shin Jyutsu® (JSJ) und absolvierte die Ausbildung zur Jin Shin Jyutsu® Praktikerin.\n        Ich folgte meiner inneren Stimme und begann mit wachsendem Erfolg zu praktizieren.\n        Die vielen Erfahrungen, die ich mit den Menschen bei dieser Arbeit teilen durfte, sind die heutige Basis, für meine ganzheitliche Praxis.\n        Seit 2012 lebe und arbeite ich im Raum Karlsruhe als Jin Shin Jyutsu® Praktikerin mit schamanisch-systemischem Ansatz.\n    </p>"},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}function me(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Jin Shin Jyutsu</h1> \n    <p>\n        Jin Shin Jyutsu® ist eine alte, von Jiro Murai wieder entdeckte Kunst aus Japan. Die Behandlung bietet eine wirkungsvolle Hilfe, die von einfachen Variationen auch vom Behandelten selbst erlernt und weitergeführt werden kann. Diese Methode hat den Vorteil, dass sie jederzeit zur Verfügung steht und fast überall einsetzbar ist: in der U-Bahn, bei Konferenzen, beim Warten auf den Bus - die ideale Heilweise für den modernen Menschen.<br>\n        Beim Jin Shin Jyutsu® wird mit sechsunszwanzig &quot;Sicherheitsenergieschlössern&quot; gearbeitet. Ist eines oder mehrere dieser Schlösser blockiert, kann die sich daraus ergebende Blockade unsere Lebensenergie schwächen. Diese Schlösser sitzen an unterschiedlichen Stellen unseres Körpers. In dem die Fingerspitzen oder Handflächen in verschiedenen Kombinationen aufgelegt werden, hamonisieren sich Körper, Geist und Seele. Schmerzzustände sowie chronische und akute Krankheiten werden gelindert.\n    </p> \n    <p>\n        Jin shin Jyutsu® ist die Kunst des Glücklichseins, die Kunst der Langlebigkeit und die Kunst der Güte.\n    </p>"},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}function be(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Stellvertretend Blockaden lösen</h1> \n\t<p>\n\t\tMenschen und Systeme geraten gelegentlich aus dem Gleichgewicht, insbesondere Familiensysteme. <br>\n\t\tDies kann sich in offenen Lebensfragen und gesundheitlichen Blockaden äußern. Traumatische Erfahrungen, die von Betroffenen nicht verarbeitet wurden, bleiben häufig nicht nur für diese selbst eine starke Belastung, sondern auch in nachfolgenden Generationen können sich diese ungelösten Erlebnisse z.B. in Träumen, unerklärlichen Ängsten oder Zwängen, Schuldgefühlen, mangelndem Selbstwert, gesundheitlichen Problemen…zeigen. Wo die Aufarbeitung nicht oder nur unvollständig gelingt, kann dies zur Last für Urenkel/innen und weitere Generationen werden.\t</p> \n\t<p>\n\t\tSilke Heinisch und Anne Steinmann (bzw. Ines Haftmann oder Vera Frohberg) bilden in einem geschützten Rahmen Ihr Anliegen ab.<br>\n\t\tSie zeigen die dahinter liegenden Zusammenhänge auf, lösen – soweit möglich- Verstrickungen und finden eine neue heilsame Ordnung. So kann Versöhnung stattfinden und sich die Möglichkeit für Veränderung bieten.\n\n\t</p> \n\t<p>\n\t\tAuch unerkannte Gaben und Potentiale von unseren Ahnen können so entdeckt, gestärkt und gelebt werden.<br>\n\t\tIm beruflichen Kontext können auf diese Weise Unternehmens-Systeme bereinigt werden und zur Entstehung einer positiven Unternehmenskultur beitragen. Dies führt zu einem Arbeitsleben mit noch mehr Verständnis, Wertschätzung und gesteigerter Produktivität.\n\n\t</p> \n\t<p>\n\t\t4 Hände und 2 Herzen<br>\n\t\tAlternativ oder als Nachbehandlung können Sie sich mit Jin Shin Jyutsu behandeln lassen.\n\t</p>"},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}function ve(n){let t,i;return{c(){t=m("div"),t.innerHTML='<h1>Partner</h1> \n    <div class="partners svelte-l4ii84"><div class="partner svelte-l4ii84"><img src="anne.jpg" alt="Anne Steinmann" width="120px" height="120px" class="svelte-l4ii84"> \n            <h4>Anne Steinmann</h4> \n            <p>\n                TherapeuticTouch - Meditation - Heilsame Klangkunst -\n                Wahrnehmungsschulung\n            </p> \n            <p>0173-9836738 / info@anne-steinmann.de</p> \n            <p>www.anne-steinmann.de</p> \n            <p>\n                Kurse und Einzelbehandlungen in der Praxis im\n                Hofgut Holzmühle, 67368 Westheim\n            </p></div> \n        <div class="partner svelte-l4ii84"><img src="ulrich.jpg" alt="Ulrich Böld" width="120px" height="120px" class="svelte-l4ii84"> \n            <h4>Ulrich Böld</h4> \n            <p>Heilpraktiker für Psychotherapie</p> \n            <p>ulrichbold@aol.com</p> \n            <p>http://ulrichbold.com</p></div></div>'},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}function ke(n){let t,i;return{c(){t=m("div"),t.innerHTML='<h1>Termine</h1> \n    <div class="row svelte-ca1agx"><div class="column svelte-ca1agx"><h4 class="svelte-ca1agx">Einzeltermine nach persönlicher Absprache</h4> \n            <p class="svelte-ca1agx">oder</p> \n            <h4 class="svelte-ca1agx">Wöchentliche Treffen von Selbsthilfegruppen</h4> \n            <p class="svelte-ca1agx">Dienstag von 09:30 Uhr bis 12:00 Uhr</p> \n            <p class="svelte-ca1agx">von 19.00 Uhr bis 21.30 Uhr</p> \n            <h4 class="svelte-ca1agx">Terminabsprache und Anmeldung</h4> \n            <p class="svelte-ca1agx">\n                Silke Heinisch\n                0151 68128102\n                jsj-silke@gmx.de\n            </p></div> \n        <div class="column svelte-ca1agx"><div class="date svelte-ca1agx"><h4 class="svelte-ca1agx">Hand in Hand mit Anne Steinmann</h4> \n                <p class="svelte-ca1agx">Mittwochs in der Holzmühle</p></div></div></div>'},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}function we(n){let t,i;return{c(){t=m("div"),t.innerHTML='<h1>Kontakt</h1> \n    <div class="person svelte-dvo3i1"><img src="silke.jpg" alt="Silke Heinisch" width="180px" height="180px" class="svelte-dvo3i1"> \n        <h4 class="svelte-dvo3i1">Telefon</h4> \n        <p class="svelte-dvo3i1">0151 68128102</p> \n        <h4 class="svelte-dvo3i1">E-Mail</h4> \n        <p class="svelte-dvo3i1">jsj-silke@gmx.de</p> \n        <p class="svelte-dvo3i1">Anfragen bezüglich Terminen per E-Mail werden schnellstmöglich beantwortet.</p></div>'},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}function ye(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Impressum</h1> \n    <p>Verantwortlich für diese Seite: Silke Heinisch</p> \n    <h4>Rechtsinformation</h4> \n    <p>\n        Wer die Selbstheilungskräfte eines Klienten durch Strömen aktiviert und dabei keine Diagnosen stellt, benötigt keine Heilpraktikererlaubnis.\n        Die Tätigkeit des Jin Shin Jyutsu®-Praktikers ersetzt keine ärztliche Behandlung. (BVG v. 02.03.2004/ AZ 1BvR784/03)\n    </p> \n    <h4>Haftungsausschluss</h4> \n    <p>\n        Inhalt des Onlineangebotes: Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität\n        der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen,\n        die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter\n        und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen,\n        sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.\n        Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor,\n        Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,\n        zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.\n    </p>"},m(e,n){g(e,t,n)},p:e,i(e){i||T(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&p(t)}}}const $e=[{route:"/",component:ge,name:"Home"},{route:"/ueber-mich",component:class extends Q{constructor(e){super(),Z(this,e,null,pe,o,{})}},name:"Über Mich"},{route:"/jin-shin-jyutsu",component:class extends Q{constructor(e){super(),Z(this,e,null,me,o,{})}},name:"Jin Shin Jyutsu®"},{route:"/blockaden-loesen",component:class extends Q{constructor(e){super(),Z(this,e,null,be,o,{})}},name:"Blockaden Lösen"},{route:"/partner",component:class extends Q{constructor(e){super(),Z(this,e,null,ve,o,{})}},name:"Partner"},{route:"/termine",component:class extends Q{constructor(e){super(),Z(this,e,null,ke,o,{})}},name:"Termine"},{route:"/kontakt",component:class extends Q{constructor(e){super(),Z(this,e,null,we,o,{})}},name:"Kontakt"},{route:"/impressum",component:class extends Q{constructor(e){super(),Z(this,e,null,ye,o,{})}},name:"Impressum"},{route:"*",component:ge}],xe=$e.reduce((e,n)=>(e[n.route]=n.component,e),{});function ze(e,n,t){const i=e.slice();return i[1]=n[t],i}function Se(n){let t,i,s,o,a,l,c,u,h=n[1].name+"";return{c(){t=m("div"),i=m("a"),s=b(h),l=v(),k(i,"href",o="#"+n[1].route),k(i,"class","svelte-h5esij"),k(t,"class","nav-element svelte-h5esij")},m(n,o){var h;g(n,t,o),f(t,i),f(i,s),f(t,l),c||(h=a=he.call(null,i),u=h&&r(h.destroy)?h.destroy:e,c=!0)},p:e,d(e){e&&p(t),c=!1,u()}}}function _e(n){let t,i,s=n[0],r=[];for(let e=0;e<s.length;e+=1)r[e]=Se(ze(n,s,e));return{c(){t=m("div"),i=m("div");for(let e=0;e<r.length;e+=1)r[e].c();k(i,"class","nav-bar svelte-h5esij"),k(t,"class","nav-bar-container svelte-h5esij")},m(e,n){g(e,t,n),f(t,i);for(let e=0;e<r.length;e+=1)r[e].m(i,null)},p(e,[n]){if(1&n){let t;for(s=e[0],t=0;t<s.length;t+=1){const o=ze(e,s,t);r[t]?r[t].p(o,n):(r[t]=Se(o),r[t].c(),r[t].m(i,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=s.length}},i:e,o:e,d(e){e&&p(t),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(r,e)}}}function Ae(e){return[$e.filter(e=>!!e.name)]}class He extends Q{constructor(e){super(),Z(this,e,Ae,_e,o,{})}}function Ee(n){let t,i,s,r,o,a,l;return s=new He({}),a=new ae({props:{routes:xe}}),{c(){t=m("div"),i=m("div"),q(s.$$.fragment),r=v(),o=m("div"),q(a.$$.fragment),k(i,"class","header svelte-1w9ea1b"),k(o,"class","content svelte-1w9ea1b"),k(t,"class","container svelte-1w9ea1b")},m(e,n){g(e,t,n),f(t,i),U(s,i,null),f(t,r),f(t,o),U(a,o,null),l=!0},p:e,i(e){l||(O(s.$$.fragment,e),O(a.$$.fragment,e),l=!0)},o(e){G(s.$$.fragment,e),G(a.$$.fragment,e),l=!1},d(e){e&&p(t),C(s),C(a)}}}return new class extends Q{constructor(e){super(),Z(this,e,null,Ee,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
