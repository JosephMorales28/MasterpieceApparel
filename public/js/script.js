import {exp_header} from './components/header.js';
import{routes} from './routes.js';
import {exp_footer} from './components/footer.js';

const supportedPages=['about','shop','service','blog','contact','idontfishforfoodifishforvibes'];
const lastPathSegment=window.location.pathname.split('/').filter(Boolean).pop() || 'home';
const pageName=lastPathSegment.replace(/\.html$/, '');
const page=pageName==='index' || pageName==='home' ? 'home' : supportedPages.includes(pageName) ? pageName : 'home';

const render=routes[page];

const app = document.getElementById("app");

app.replaceChildren();

app.insertAdjacentHTML(
  "beforeend",
  [
    exp_header(page),
    render(),
    exp_footer(page)
  ].join("")
);