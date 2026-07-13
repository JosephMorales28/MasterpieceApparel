import {exp_header} from '../js/header.js';
import {exp_main} from './main.js';
import { exp_article } from './article.js';
import {exp_aside} from './aside.js';
import { exp_footer } from './footer.js';

document.getElementById('app').innerHTML=exp_header()+exp_main()+exp_article()+exp_aside()+exp_footer();