import { deepseamonsterpremium_main, deepseamonsterpremium_gallery } from "./main.js";
import { deepsea_section } from "./section.js";

export function deepseamonsterpremium(){
    return deepseamonsterpremium_main() + deepseamonsterpremium_gallery() + deepsea_section();
}