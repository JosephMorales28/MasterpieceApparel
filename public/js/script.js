import {exp_header} from './components/header.js?v=20260716';
import {exp_main} from './components/main.js?v=20260716';
import {exp_article} from './components/article.js?v=20260716';
import {exp_aside} from './components/aside.js?v=20260716';
import {exp_footer} from './components/footer.js?v=20260716';

const supportedPages=['about','shop','service','blog','contact','idontfishforfoodifishforvibes'];
const lastPathSegment=window.location.pathname.split('/').filter(Boolean).pop() || 'home';
const pageName=lastPathSegment.replace(/\.html$/, '');
const page=pageName==='index' || pageName==='home' ? 'home' : supportedPages.includes(pageName) ? pageName : 'home';

document.getElementById('app').innerHTML=exp_header(page)+exp_main(page)+exp_article(page)+exp_aside(page)+exp_footer();
