import { houndofthunderpremium_main, houndofthunderpremium_gallery } from "./main.js";
import { houndofthunder_section } from "./section.js";

export function houndofthunderpremiummain(){
    return houndofthunderpremium_main() + houndofthunderpremium_gallery() + houndofthunder_section();
}