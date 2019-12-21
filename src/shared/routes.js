import Home from '../pages/Home.svelte';
import UeberMich from '../pages/UeberMich.svelte';
import JinShinJyutsu from '../pages/JinShinJyutsu.svelte';
import BlockadenLoesen from '../pages/BlockadenLoesen.svelte'
import Partner from '../pages/Partner.svelte';
import Termine from '../pages/Termine.svelte';
import Kontakt from '../pages/Kontakt.svelte';
import Impressum from '../pages/Impressum.svelte';

export const routeObjects = [
  {route: '/', component: Home, name: 'Home'},
  {route: '/ueber-mich', component: UeberMich, name: 'Über Mich'},
  {route: '/jin-shin-jyutsu', component: JinShinJyutsu, name: 'Jin Shin Jyutsu®'},
  {route: '/blockaden-loesen', component: BlockadenLoesen, name: 'Stellvertretende Blockaden Lösen'},
  {route: '/partner', component: Partner, name: 'Partner'},
  {route: '/termine', component: Termine, name: 'Termine'},
  {route: '/kontakt', component: Kontakt, name: 'Kontakt'},
  {route: '/impressum', component: Impressum, name: 'Impressum'},
  {route: '*', component: Home}
];

export const routes = routeObjects.reduce((svelteRoutes, routeObject) => {
  svelteRoutes[routeObject.route] = routeObject.component;
  return svelteRoutes;
}, {});
