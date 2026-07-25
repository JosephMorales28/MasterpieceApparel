import {exp_header} from './header.js?v=20260716';
import {exp_main} from './main.js?v=20260716';
import {exp_article} from './article.js?v=20260716';
import {exp_aside} from './aside.js?v=20260716';
import {exp_footer} from './footer.js?v=20260716';

const supportedPages=['about','shop','service','blog','contact','idontfishforfoodifishforvibes'];
const lastPathSegment=window.location.pathname.split('/').filter(Boolean).pop() || 'home';
const pageName=lastPathSegment.replace(/\.html$/, '');
const page=pageName==='index' || pageName==='home' ? 'home' : supportedPages.includes(pageName) ? pageName : 'home';

document.getElementById('app').innerHTML=exp_header(page)+exp_main(page)+exp_article(page)+exp_aside(page)+exp_footer();
