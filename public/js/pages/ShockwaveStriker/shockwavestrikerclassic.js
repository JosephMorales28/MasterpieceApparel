import { shockwavestrikerclassic_main, shockwavestrikerclassic_gallery } from "./main.js";
import { shockwavestriker_section } from "./section.js";

export function shockwavestrikerclassicmain(){
    return shockwavestrikerclassic_main() + shockwavestrikerclassic_gallery()+ shockwavestriker_section();
}