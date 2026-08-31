import { homePage } from './pages/home/home.js';
import { aboutPage } from './pages/about/about.js';
import { shopPage } from './pages/shop/shop.js';
import { servicePage } from './pages/service/service.js';
import { blogPage } from './pages/blog/blog.js';
import { contactPage } from './pages/contact/contact.js';
import { notfoundpage }from './pages/404/notfoundpage.js';
import { idontfishforfood } from './pages/idontfishforfoodifishforvibes/idontfishforfoodifishforvibes.js';
import { classic } from './pages/idontfishforfoodifishforvibes/classic.js';
import { premiummain } from './pages/idontfishforfoodifishforvibes/premium.js';
import { oversized } from './pages/idontfishforfoodifishforvibes/oversized.js';
import { sweatshirt } from './pages/idontfishforfoodifishforvibes/sweatshirt.js';
import { premiumoversizedhoodiemain } from './pages/idontfishforfoodifishforvibes/premiumoversizedhoodie.js';
import { lightweighthoodiemain } from './pages/idontfishforfoodifishforvibes/lightweighthoodie.js';
import { premiumoversizedsweatshirt } from './pages/idontfishforfoodifishforvibes/premiumoversizedsweatshirt.js';
import { deepsea } from './pages/DeepSeaMonster/deepseamonster.js';
import { deepseamonsterclassicmain } from './pages/DeepSeaMonster/deepseamonsterclassicshirt.js';

export const routes = {
    home: homePage,
    about: aboutPage,
    shop: shopPage,
    service: servicePage,
    blog: blogPage,
    contact:contactPage,
    notfoundpage,
    
    idontfishforfoodifishforvibes:idontfishforfood,
    classicshirt:classic,
    premiumshirt:premiummain,
    oversizedshirt:oversized,
    sweatshirt,
    premiumoversizedhoodie:premiumoversizedhoodiemain,
    lightweighthoodie:lightweighthoodiemain,
    premiumoversizedsweatshirt,

    deepseamonster:deepsea,
    deepseamonsterclassicshirt: deepseamonsterclassicmain
};