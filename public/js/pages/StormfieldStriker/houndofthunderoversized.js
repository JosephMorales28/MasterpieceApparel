import { houndofthunderoversized_main, houndofthunderoversized_gallery } from "./main.js";
import { houndofthunder_section } from "./section.js";
export function houndofthunderoversizedmain(){
    return houndofthunderoversized_main() + houndofthunderoversized_gallery() + houndofthunder_section();
}