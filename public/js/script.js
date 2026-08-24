import { exp_header } from './components/header.js';
import{ routes } from './routes.js';
import { exp_footer } from './components/footer.js';
import { shopSearch } from './pages/shop/shopsearch.js';

const supportedPages=['about','shop','service','blog','contact','idontfishforfoodifishforvibes','classicshirt','premiumshirt','deepseamonster'];
const lastPathSegment=window.location.pathname.split('/').filter(Boolean).pop() || 'home';
const pageName=lastPathSegment.replace(/\.html$/, '');
const page=pageName==='index' || pageName==='home' ? 'home' : supportedPages.includes(pageName) ? pageName : 'home';

const render=routes[page] ?? routes.home;//change the routes.home to routes.notfoundPage if 404 page is created

const app = document.getElementById("app");

app.insertAdjacentHTML(
  "beforeend",
  [
    exp_header(page),
    render(),
    exp_footer(page)
  ].join("")
);

if (page==="shop"){
    shopSearch();
}