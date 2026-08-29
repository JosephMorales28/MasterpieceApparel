import { homePage } from './pages/home/home.js';
import { aboutPage } from './pages/about/about.js';
import { shopPage } from './pages/shop/shop.js';
import { servicePage } from './pages/service/service.js';
import { blogPage } from './pages/blog/blog.js';
import { contactPage } from './pages/contact/contact.js';
import { idontfishforfood } from './pages/idontfishforfoodifishforvibes/idontfishforfoodifishforvibes.js';
import { deepsea } from './pages/DeepSeaMonster/deepseamonster.js';
import { classic } from './pages/idontfishforfoodifishforvibes/classic.js';
import { premiummain } from './pages/idontfishforfoodifishforvibes/premium.js';
import { oversized } from './pages/idontfishforfoodifishforvibes/oversized.js';
import { sweatshirt } from './pages/idontfishforfoodifishforvibes/sweatshirt.js';
import { premiumoversizedhoodiemain } from './pages/idontfishforfoodifishforvibes/premiumoversizedhoodie.js';
import { lightweighthoodiemain } from './pages/idontfishforfoodifishforvibes/lightweighthoodie.js';

export const routes = {
    home: homePage,
    about: aboutPage,
    shop: shopPage,
    service: servicePage,
    blog: blogPage,
    contact:contactPage,
    idontfishforfoodifishforvibes:idontfishforfood,
    classicshirt:classic,
    deepseamonster:deepsea,
    premiumshirt:premiummain,
    oversizedshirt:oversized,
    sweatshirt,
    premiumoversizedhoodie:premiumoversizedhoodiemain,
    lightweighthoodie:lightweighthoodiemain
};