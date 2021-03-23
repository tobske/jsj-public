var app=function(){"use strict";function e(){}const n=e=>e;function t(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(t)}function r(e){return"function"==typeof e}function a(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function o(n,...t){if(null==n)return e;const i=n.subscribe(...t);return i.unsubscribe?()=>i.unsubscribe():i}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?e=>requestAnimationFrame(e):e;const h=new Set;function d(e){h.forEach(n=>{n.c(e)||(h.delete(n),n.f())}),0!==h.size&&u(d)}function f(e,n){e.appendChild(n)}function p(e,n,t){e.insertBefore(n,t||null)}function g(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function b(){return v(" ")}function w(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function k(e,n){const t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,n),t}const y=new Set;let $,x=0;function z(e,n){const t=(e.style.animation||"").split(", "),i=t.filter(n?e=>e.indexOf(n)<0:e=>-1===e.indexOf("__svelte")),s=t.length-i.length;s&&(e.style.animation=i.join(", "),x-=s,x||u(()=>{x||(y.forEach(e=>{const n=e.__svelte_stylesheet;let t=n.cssRules.length;for(;t--;)n.deleteRule(t);e.__svelte_rules={}}),y.clear())}))}function S(e){$=e}function _(){const e=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(n,t)=>{const i=e.$$.callbacks[n];if(i){const s=k(n,t);i.slice().forEach(n=>{n.call(e,s)})}}}const A=[],H=[],E=[],J=[],M=Promise.resolve();let D=!1;function j(e){E.push(e)}let B=!1;const L=new Set;function T(){if(!B){B=!0;do{for(let e=0;e<A.length;e+=1){const n=A[e];S(n),I(n.$$)}for(A.length=0;H.length;)H.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];L.has(n)||(L.add(n),n())}E.length=0}while(A.length);for(;J.length;)J.pop()();D=!1,B=!1,L.clear()}}function I(e){if(null!==e.fragment){e.update(),s(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(j)}}let K;function V(e,n,t){e.dispatchEvent(k(`${n?"intro":"outro"}${t}`))}const N=new Set;let P;function G(e,n){e&&e.i&&(N.delete(e),e.i(n))}function O(e,n,t,i){if(e&&e.o){if(N.has(e))return;N.add(e),P.c.push(()=>{N.delete(e),i&&(t&&e.d(1),i())}),e.o(n)}}const R={duration:0};function W(t,i,s){let a,o,l=i(t,s),f=!1,p=0;function g(){a&&z(t,a)}function v(){const{delay:i=0,duration:s=300,easing:r=n,tick:v=e,css:b}=l||R;b&&(a=function(e,n,t,i,s,r,a,o=0){const l=16.666/i;let c="{\n";for(let e=0;e<=1;e+=l){const i=n+(t-n)*r(e);c+=100*e+`%{${a(i,1-i)}}\n`}const u=c+`100% {${a(t,1-t)}}\n}`,h=`__svelte_${function(e){let n=5381,t=e.length;for(;t--;)n=(n<<5)-n^e.charCodeAt(t);return n>>>0}(u)}_${o}`,d=e.ownerDocument;y.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(m("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?g+", ":""}${h} ${i}ms linear ${s}ms 1 both`,x+=1,h}(t,0,1,s,i,r,b,p++)),v(0,1);const w=c()+i,k=w+s;o&&o.abort(),f=!0,j(()=>V(t,!0,"start")),o=function(e){let n;return 0===h.size&&u(d),{promise:new Promise(t=>{h.add(n={c:e,f:t})}),abort(){h.delete(n)}}}(e=>{if(f){if(e>=k)return v(1,0),V(t,!0,"end"),g(),f=!1;if(e>=w){const n=r((e-w)/s);v(n,1-n)}}return f})}let b=!1;return{start(){b||(z(t),r(l)?(l=l(),(K||(K=Promise.resolve(),K.then(()=>{K=null})),K).then(v)):v())},invalidate(){b=!1},end(){f&&(g(),f=!1)}}}function C(e){e&&e.c()}function U(e,n,i){const{fragment:a,on_mount:o,on_destroy:l,after_update:c}=e.$$;a&&a.m(n,i),j(()=>{const n=o.map(t).filter(r);l?l.push(...n):s(n),e.$$.on_mount=[]}),c.forEach(j)}function F(e,n){const t=e.$$;null!==t.fragment&&(s(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function q(e,n){-1===e.$$.dirty[0]&&(A.push(e),D||(D=!0,M.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Z(n,t,r,a,o,l,c=[-1]){const u=$;S(n);const h=t.props||{},d=n.$$={fragment:null,ctx:null,props:l,update:e,not_equal:o,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:c};let f=!1;if(d.ctx=r?r(n,h,(e,t,...i)=>{const s=i.length?i[0]:t;return d.ctx&&o(d.ctx[e],d.ctx[e]=s)&&(d.bound[e]&&d.bound[e](s),f&&q(n,e)),t}):[],d.update(),f=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);d.fragment&&d.fragment.l(e),e.forEach(g)}else d.fragment&&d.fragment.c();t.intro&&G(n.$$.fragment),U(n,t.target,t.anchor),T()}S(u)}class Q{$destroy(){F(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(){}}const X=[];function Y(e,n){return{subscribe:ee(e,n).subscribe}}function ee(n,t=e){let i;const s=[];function r(e){if(a(n,e)&&(n=e,i)){const e=!X.length;for(let e=0;e<s.length;e+=1){const t=s[e];t[1](),X.push(t,n)}if(e){for(let e=0;e<X.length;e+=2)X[e][0](X[e+1]);X.length=0}}}return{set:r,update:function(e){r(e(n))},subscribe:function(a,o=e){const l=[a,o];return s.push(l),1===s.length&&(i=t(r)||e),a(n),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&(i(),i=null)}}}}function ne(n,t,i){const a=!Array.isArray(n),l=a?[n]:n,c=t.length<2;return Y(i,n=>{let i=!1;const u=[];let h=0,d=e;const f=()=>{if(h)return;d();const i=t(a?u[0]:u,n);c?n(i):d=r(i)?i:e},p=l.map((e,n)=>o(e,e=>{u[n]=e,h&=~(1<<n),i&&f()},()=>{h|=1<<n}));return i=!0,f(),function(){s(p),d()}})}function te(e,n){if(e instanceof RegExp)return{keys:!1,pattern:e};var t,i,s,r,a=[],o="",l=e.split("/");for(l[0]||l.shift();s=l.shift();)"*"===(t=s[0])?(a.push("wild"),o+="/(.*)"):":"===t?(i=s.indexOf("?",1),r=s.indexOf(".",1),a.push(s.substring(1,~i?i:~r?r:s.length)),o+=~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(o+=(~i?"?":"")+"\\"+s.substring(r))):o+="/"+s;return{keys:a,pattern:new RegExp("^"+o+(n?"(?=$|/)":"/?$"),"i")}}function ie(e){let n,t,i;var r=e[0];function a(e){return{props:{params:e[1]}}}return r&&(n=new r(a(e))),{c(){n&&C(n.$$.fragment),t=v("")},m(e,s){n&&U(n,e,s),p(e,t,s),i=!0},p(e,[i]){const o={};if(2&i&&(o.params=e[1]),r!==(r=e[0])){if(n){P={r:0,c:[],p:P};const e=n;O(e.$$.fragment,1,0,()=>{F(e,1)}),P.r||s(P.c),P=P.p}r?(n=new r(a(e)),C(n.$$.fragment),G(n.$$.fragment,1),U(n,t.parentNode,t)):n=null}else r&&n.$set(o)},i(e){i||(n&&G(n.$$.fragment,e),i=!0)},o(e){n&&O(n.$$.fragment,e),i=!1},d(e){e&&g(t),n&&F(n,e)}}}function se(){const e=window.location.href.indexOf("#/");let n=e>-1?window.location.href.substr(e+1):"/";const t=n.indexOf("?");let i="";return t>-1&&(i=n.substr(t+1),n=n.substr(0,t)),{location:n,querystring:i}}const re=Y(se(),(function(e){const n=()=>{e(se())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));ne(re,e=>e.location),ne(re,e=>e.querystring);function ae(n,t,i){let s,r=e;!function(e,n,t){e.$$.on_destroy.push(o(n,t))}(n,re,e=>i(4,s=e)),n.$$.on_destroy.push(()=>r());let{routes:a={}}=t,{prefix:l=""}=t;class c{constructor(e,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:t,keys:i}=te(e);this.path=e,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=t,this._keys=i}match(e){l&&e.startsWith(l)&&(e=e.substr(l.length)||"/");const n=this._pattern.exec(e);if(null===n)return null;if(!1===this._keys)return n;const t={};let i=0;for(;i<this._keys.length;)t[this._keys[i]]=n[++i]||null;return t}checkConditions(e){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](e))return!1;return!0}}const u=a instanceof Map?a:Object.entries(a),h=[];for(const[e,n]of u)h.push(new c(e,n));let d=null,f={};const p=_(),g=(e,n)=>{setTimeout(()=>{p(e,n)},0)};return n.$set=e=>{"routes"in e&&i(2,a=e.routes),"prefix"in e&&i(3,l=e.prefix)},n.$$.update=()=>{if(17&n.$$.dirty){i(0,d=null);let e=0;for(;!d&&e<h.length;){const n=h[e].match(s.location);if(n){const t={component:h[e].component,name:h[e].component.name,location:s.location,querystring:s.querystring,userData:h[e].userData};if(!h[e].checkConditions(t)){g("conditionsFailed",t);break}i(0,d=h[e].component),i(1,f=n),g("routeLoaded",t)}e++}}},[d,f,a,l]}class oe extends Q{constructor(e){super(),Z(this,e,ae,ie,a,{routes:2,prefix:3})}}const le=[];let ce;function ue(e){e.node.classList.remove(e.className),e.pattern.test(ce)&&e.node.classList.add(e.className)}function he(e,n){if(!(n=n&&"string"==typeof n?{path:n}:n||{}).path&&e.hasAttribute("href")&&(n.path=e.getAttribute("href"),n.path&&n.path.length>1&&"#"==n.path.charAt(0)&&(n.path=n.path.substring(1))),n.className||(n.className="active"),!n.path||n.path.length<1||"/"!=n.path.charAt(0)&&"*"!=n.path.charAt(0))throw Error('Invalid value for "path" argument');const{pattern:t}=te(n.path),i={node:e,className:n.className,pattern:t};return le.push(i),ue(i),{destroy(){le.splice(le.indexOf(i),1)}}}function de(e,{delay:t=0,duration:i=400,easing:s=n}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:i,easing:s,css:e=>"opacity: "+e*r}}function fe(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Herzlich Willkommen</h1> \n    <p>\n        Jeder Mensch ist einzigartig und so wie er ist vollkommen. Wir erhalten ständig die nötigen Informationen, um als „System Mensch“ vital zu bleiben. Häufig verstehen wir\n        diese Botschaften nicht mehr und geraten aus unserer Mitte. Auf der Suche nach einer Lösung übersehen wir, dass wir selbst für uns verantwortlich sind. In der Folge\n        reagieren wir entweder gar nicht oder unangemessen. Jede Veränderung im System trägt die Information der Lösung schon in sich.\n    </p> \n    <p>\n        Meine Gabe und damit Aufgabe ist es, die in diesem System innewohnenden Botschaften, also Lösungsansätze zu sehen und in eine für den Klienten verständliche Sprache zu\n        übersetzen.\n    </p>"},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}re.subscribe(e=>{ce=e.location+(e.querystring?"?"+e.querystring:""),le.map(ue)});class pe extends Q{constructor(e){super(),Z(this,e,null,fe,a,{})}}function ge(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Über Mich</h1> \n    <p>\n        Silke Heinisch, Jahrgang 1965.\n    </p> \n    <p>\n        Nach abgeschlossenem Ingenieursstudium in Dresden und einer Dekade Familienzeit im Allgäu zog ich mit meiner Familie in den Großraum Hamburg.\n        Dort hatte ich im Jahr 2001 den ersten Kontakt mit Jin Shin Jyutsu® (JSJ) und absolvierte die Ausbildung zur Jin Shin Jyutsu® Praktikerin.\n        Ich folgte meiner inneren Stimme und begann mit wachsendem Erfolg zu praktizieren.\n        Die vielen Erfahrungen, die ich mit den Menschen bei dieser Arbeit teilen durfte, sind die heutige Basis, für meine ganzheitliche Praxis.\n        Seit 2012 lebe und arbeite ich im Raum Karlsruhe als Jin Shin Jyutsu® Praktikerin mit schamanisch-systemischem Ansatz.\n    </p>"},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}function me(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Jin Shin Jyutsu</h1> \n    <p>\n        Jin Shin Jyutsu® ist eine alte, von Jiro Murai wieder entdeckte Kunst aus Japan. Die Behandlung bietet eine wirkungsvolle Hilfe, die von einfachen Variationen auch vom Behandelten selbst erlernt und weitergeführt werden kann. Diese Methode hat den Vorteil, dass sie jederzeit zur Verfügung steht und fast überall einsetzbar ist: in der U-Bahn, bei Konferenzen, beim Warten auf den Bus - die ideale Heilweise für den modernen Menschen.<br>\n        Beim Jin Shin Jyutsu® wird mit sechsunszwanzig &quot;Sicherheitsenergieschlössern&quot; gearbeitet. Ist eines oder mehrere dieser Schlösser blockiert, kann die sich daraus ergebende Blockade unsere Lebensenergie schwächen. Diese Schlösser sitzen an unterschiedlichen Stellen unseres Körpers. In dem die Fingerspitzen oder Handflächen in verschiedenen Kombinationen aufgelegt werden, hamonisieren sich Körper, Geist und Seele. Schmerzzustände sowie chronische und akute Krankheiten werden gelindert.\n    </p> \n    <p>\n        Jin shin Jyutsu® ist die Kunst des Glücklichseins, die Kunst der Langlebigkeit und die Kunst der Güte.\n    </p>"},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}function ve(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Stellvertretend Blockaden lösen</h1> \n\t<p>\n\t\tMenschen und Systeme geraten gelegentlich aus dem Gleichgewicht, insbesondere Familiensysteme. <br>\n\t\tDies kann sich in offenen Lebensfragen und gesundheitlichen Blockaden äußern. Traumatische Erfahrungen, die von Betroffenen nicht verarbeitet wurden, bleiben häufig nicht nur für diese selbst eine starke Belastung, sondern auch in nachfolgenden Generationen können sich diese ungelösten Erlebnisse z.B. in Träumen, unerklärlichen Ängsten oder Zwängen, Schuldgefühlen, mangelndem Selbstwert, gesundheitlichen Problemen…zeigen. Wo die Aufarbeitung nicht oder nur unvollständig gelingt, kann dies zur Last für Urenkel/innen und weitere Generationen werden.\t</p> \n\t<p>\n\t\tSilke Heinisch und Anne Steinmann (bzw. Ines Haftmann oder Vera Frohberg) bilden in einem geschützten Rahmen Ihr Anliegen ab.<br>\n\t\tSie zeigen die dahinter liegenden Zusammenhänge auf, lösen – soweit möglich- Verstrickungen und finden eine neue heilsame Ordnung. So kann Versöhnung stattfinden und sich die Möglichkeit für Veränderung bieten.\n\n\t</p> \n\t<p>\n\t\tAuch unerkannte Gaben und Potentiale von unseren Ahnen können so entdeckt, gestärkt und gelebt werden.<br>\n\t\tIm beruflichen Kontext können auf diese Weise Unternehmens-Systeme bereinigt werden und zur Entstehung einer positiven Unternehmenskultur beitragen. Dies führt zu einem Arbeitsleben mit noch mehr Verständnis, Wertschätzung und gesteigerter Produktivität.\n\n\t</p> \n\t<p>\n\t\t4 Hände und 2 Herzen<br>\n\t\tAlternativ oder als Nachbehandlung können Sie sich mit Jin Shin Jyutsu behandeln lassen.\n\t</p>"},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}function be(n){let t,i;return{c(){t=m("div"),t.innerHTML='<h1>Partner</h1> \n    <div class="partners svelte-l4ii84"><div class="partner svelte-l4ii84"><img src="anne.jpg" alt="Anne Steinmann" width="120px" height="120px" class="svelte-l4ii84"> \n            <h4>Anne Steinmann</h4> \n            <p>\n                TherapeuticTouch - Meditation - Heilsame Klangkunst -\n                Wahrnehmungsschulung\n            </p> \n            <p>0173-9836738 / info@anne-steinmann.de</p> \n            <p><a href="http://anne-steinmann.de/">www.anne-steinmann.de</a></p> \n            <p>\n                Kurse und Einzelbehandlungen in der Praxis im\n                Hofgut Holzmühle, 67368 Westheim\n            </p></div> \n        <div class="partner svelte-l4ii84"><img src="ulrich.jpg" alt="Ulrich Böld" width="120px" height="120px" class="svelte-l4ii84"> \n            <h4>Ulrich Böld</h4> \n            <p>Heilpraktiker für Psychotherapie</p> \n            <p>ulrichbold@aol.com</p> \n            <p><a href="http://ulrichbold.com">http://ulrichbold.com</a></p></div> \n        <div class="partner svelte-l4ii84"><img src="vera.jpg" alt="Vera Frohberg" width="120px" height="120px" class="svelte-l4ii84"> \n              <h4>Vera Frohberg</h4> \n            <p>Heilpraktikerin</p> \n            <p>0721/4708588</p> \n            <p><a href="http://hpbohnen.avior.uberspace.de/">www.hp-frohberg.de</a></p></div> \n    <div class="partners svelte-l4ii84"><div class="partner svelte-l4ii84"><img src="christian.jpg" alt="Christian Grygas" width="120px" height="120px" class="svelte-l4ii84"> \n            <h4>Christian Grygas</h4> \n            <p>Jin Shin Jyutsu in Dresden            </p> \n            <p><a href="http://www.jsj-in-dresden.de/">http://www.jsj-in-dresden.de/</a></p></div></div></div>'},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}function we(n){let t,i;return{c(){t=m("div"),t.innerHTML='<h1>Termine</h1> \n    <div class="row svelte-ca1agx"><div class="column svelte-ca1agx"><h4 class="svelte-ca1agx">Wöchentliche Treffen von Selbsthilfegruppen</h4> \n            <p class="svelte-ca1agx">Dienstag von 09:30 Uhr bis 12:00 Uhr</p> \n            <p class="svelte-ca1agx">von 19.00 Uhr bis 21.30 Uhr</p> \n            <h4 class="svelte-ca1agx">Hand in Hand mit Anne Steinmann</h4> \n            <p class="svelte-ca1agx">Mittwochs in der Holzmühle</p> \n            <h4 class="svelte-ca1agx">Einzeltermine nach Absprache und Anmeldung</h4> \n            <p class="svelte-ca1agx">\n                Silke Heinisch<br>\n                0151 68128102<br>\n                jsj-silke@gmx.de\n            </p></div> \n        <div class="column svelte-ca1agx"><div class="date svelte-ca1agx"><h4 class="svelte-ca1agx">25.04. 2021 - Praxistag in Dresden</h4> \n                <p class="svelte-ca1agx">10 - 16 Uhr, mit Christian Grygas und Ines Haftmann</p> \n                <h4 class="svelte-ca1agx">26. - 29.04.2021 - Einzeltermine in Dresden</h4> \n                <h4 class="svelte-ca1agx">12. - 13.06.2021 - Der Boden, der Aufprall und das Lösen</h4> \n                <p class="svelte-ca1agx">10. - 18 Uhr, mit Rene Wermke in der Holzmühle</p> \n                <h4 class="svelte-ca1agx">14. - 15.06.2021 - Einzeltermine mit Rene Wermke</h4> \n                <p class="svelte-ca1agx"><a href="https://www.interkinetix.de/">https://www.interkinetix.de/</a></p></div></div></div>'},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}function ke(n){let t,i;return{c(){t=m("div"),t.innerHTML='<h1>Kontakt</h1> \n    <div class="person svelte-dvo3i1"><img src="silke.jpg" alt="Silke Heinisch" width="180px" height="180px" class="svelte-dvo3i1"> \n        <h4 class="svelte-dvo3i1">Telefon</h4> \n        <p class="svelte-dvo3i1">0151 68128102</p> \n        <h4 class="svelte-dvo3i1">E-Mail</h4> \n        <p class="svelte-dvo3i1">jsj-silke@gmx.de</p> \n        <p class="svelte-dvo3i1">Anfragen bezüglich Terminen per E-Mail werden schnellstmöglich beantwortet.</p></div>'},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}function ye(n){let t,i;return{c(){t=m("div"),t.innerHTML="<h1>Impressum</h1> \n    <p>Verantwortlich für diese Seite: Silke Heinisch</p> \n    <h4>Rechtsinformation</h4> \n    <p>\n        Wer die Selbstheilungskräfte eines Klienten durch Strömen aktiviert und dabei keine Diagnosen stellt, benötigt keine Heilpraktikererlaubnis.\n        Die Tätigkeit des Jin Shin Jyutsu®-Praktikers ersetzt keine ärztliche Behandlung. (BVG v. 02.03.2004/ AZ 1BvR784/03)\n    </p> \n    <h4>Haftungsausschluss</h4> \n    <p>\n        Inhalt des Onlineangebotes: Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität\n        der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen,\n        die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter\n        und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen,\n        sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.\n        Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor,\n        Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,\n        zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.\n    </p>"},m(e,n){p(e,t,n)},p:e,i(e){i||j(()=>{i=W(t,de,{}),i.start()})},o:e,d(e){e&&g(t)}}}const $e=[{route:"/",component:pe,name:"Home"},{route:"/ueber-mich",component:class extends Q{constructor(e){super(),Z(this,e,null,ge,a,{})}},name:"Über Mich"},{route:"/jin-shin-jyutsu",component:class extends Q{constructor(e){super(),Z(this,e,null,me,a,{})}},name:"Jin Shin Jyutsu®"},{route:"/blockaden-loesen",component:class extends Q{constructor(e){super(),Z(this,e,null,ve,a,{})}},name:"Blockaden Lösen"},{route:"/partner",component:class extends Q{constructor(e){super(),Z(this,e,null,be,a,{})}},name:"Partner"},{route:"/termine",component:class extends Q{constructor(e){super(),Z(this,e,null,we,a,{})}},name:"Termine"},{route:"/kontakt",component:class extends Q{constructor(e){super(),Z(this,e,null,ke,a,{})}},name:"Kontakt"},{route:"/impressum",component:class extends Q{constructor(e){super(),Z(this,e,null,ye,a,{})}},name:"Impressum"},{route:"*",component:pe}],xe=$e.reduce((e,n)=>(e[n.route]=n.component,e),{});function ze(e,n,t){const i=e.slice();return i[1]=n[t],i}function Se(n){let t,i,s,a,o,l,c,u,h=n[1].name+"";return{c(){t=m("div"),i=m("a"),s=v(h),l=b(),w(i,"href",a="#"+n[1].route),w(i,"class","svelte-tsl5k4"),w(t,"class","nav-element svelte-tsl5k4")},m(n,a){var h;p(n,t,a),f(t,i),f(i,s),f(t,l),c||(h=o=he.call(null,i),u=h&&r(h.destroy)?h.destroy:e,c=!0)},p:e,d(e){e&&g(t),c=!1,u()}}}function _e(n){let t,i,s=n[0],r=[];for(let e=0;e<s.length;e+=1)r[e]=Se(ze(n,s,e));return{c(){t=m("div"),i=m("div");for(let e=0;e<r.length;e+=1)r[e].c();w(i,"class","nav-bar svelte-tsl5k4"),w(t,"class","nav-bar-container svelte-tsl5k4")},m(e,n){p(e,t,n),f(t,i);for(let e=0;e<r.length;e+=1)r[e].m(i,null)},p(e,[n]){if(1&n){let t;for(s=e[0],t=0;t<s.length;t+=1){const a=ze(e,s,t);r[t]?r[t].p(a,n):(r[t]=Se(a),r[t].c(),r[t].m(i,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=s.length}},i:e,o:e,d(e){e&&g(t),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(r,e)}}}function Ae(e){return[$e.filter(e=>!!e.name)]}class He extends Q{constructor(e){super(),Z(this,e,Ae,_e,a,{})}}function Ee(n){let t,i,s,r,a,o,l;return s=new He({}),o=new oe({props:{routes:xe}}),{c(){t=m("div"),i=m("div"),C(s.$$.fragment),r=b(),a=m("div"),C(o.$$.fragment),w(i,"class","header svelte-1w9ea1b"),w(a,"class","content svelte-1w9ea1b"),w(t,"class","container svelte-1w9ea1b")},m(e,n){p(e,t,n),f(t,i),U(s,i,null),f(t,r),f(t,a),U(o,a,null),l=!0},p:e,i(e){l||(G(s.$$.fragment,e),G(o.$$.fragment,e),l=!0)},o(e){O(s.$$.fragment,e),O(o.$$.fragment,e),l=!1},d(e){e&&g(t),F(s),F(o)}}}return new class extends Q{constructor(e){super(),Z(this,e,null,Ee,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
