import { houndofthunder_main, houndofthundermain_gallery } from "./main.js";
import { houndofthunder_section } from "./section.js";

export function houndofthundermain(){
    return houndofthunder_main() + houndofthundermain_gallery() + houndofthunder_section();
}