import { lightningpawstrikerclassic_main, lightningpawstrikerclassic_gallery } from "./main.js";
import { lightningpawstriker_section } from "./section.js";

export function lightningpawstrikerclassicmain(){
    return lightningpawstrikerclassic_main() + lightningpawstrikerclassic_gallery()+ lightningpawstriker_section();
}