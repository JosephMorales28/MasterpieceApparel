import { aboutMain } from './main.js';
import { aboutSection } from './section.js';

export function aboutPage(){
    
    return aboutMain()+aboutSection();
}