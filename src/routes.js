import Home from './pages/Home.svelte';
import UeberMich from './pages/UeberMich.svelte';
import JinShinJyutsu from './pages/JinShinJyutsu.svelte';
import Partner from './pages/Partner.svelte';
import Termine from './pages/Termine.svelte';
import Kontakt from './pages/Kontakt.svelte';
import Impressum from './pages/Impressum.svelte';

const routeList = {
  '/': Home,
  '/ueber-mich': UeberMich,
  '/jin-shin-jyutsu': JinShinJyutsu,
  '/partner': Partner,
  '/termine': Termine,
  '/kontakt': Kontakt,
  '/impressum': Impressum,
  '*': Home
};

export const plainRoutes = routeList;
