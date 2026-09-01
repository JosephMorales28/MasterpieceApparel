import { exp_header } from './components/header.js';
import{ routes } from './routes.js';
import { exp_footer } from './components/footer.js';
import { shopSearch } from './pages/shop/shopsearch.js';

const supportedPages=['about','shop','service','blog','contact',404,
                      'idontfishforfoodifishforvibes','classicshirt','premiumshirt','oversizedshirt','sweatshirt','premiumoversizedhoodie','lightweighthoodie','premiumoversizedsweatshirt',
                      'deepseamonster','deepseamonsterclassicshirt','deepseamonsterpremiumshirt','deepseamonsteroversizedshirt','deepseamonstersweatshirt','deepseamonsterpremiumoversizedhoodie'];
const lastPathSegment=window.location.pathname.split('/').filter(Boolean).pop() || 'home';
const pageName=lastPathSegment.replace(/\.html$/, '');
const page=pageName==='index' || pageName==='home' ? 'home' : supportedPages.includes(pageName) ? pageName : 'notfoundpage';

const render=routes[page] ?? routes.notfoundpage;//change the routes.home to routes.notfoundPage if 404 page is created

const app = document.getElementById("app");

app.insertAdjacentHTML(
  "beforeend",
  [
    exp_header(page),
    render(),
    exp_footer()
  ].join("")
);

if (page==="shop"){
    shopSearch();
}