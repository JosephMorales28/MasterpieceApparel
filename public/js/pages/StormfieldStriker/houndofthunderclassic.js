import { houndofthunderclassic_main, houndofthunderclassic_gallery } from "./main.js";
import { houndofthunder_section } from "./section.js";

export function houndofthunderclassicmain(){
    return houndofthunderclassic_main() + houndofthunderclassic_gallery()+ houndofthunder_section();
}