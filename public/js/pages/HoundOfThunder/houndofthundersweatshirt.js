import { houndofthundersweatshirt_main, houndofthundersweatshirt_gallery } from "./main.js";
import { houndofthunder_section } from "./section.js";

export function houndofthundersweatshirtmain(){
    return houndofthundersweatshirt_main() + houndofthundersweatshirt_gallery() + houndofthunder_section();
}