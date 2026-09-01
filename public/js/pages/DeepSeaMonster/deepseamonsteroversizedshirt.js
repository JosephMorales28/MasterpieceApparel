import { deepseamonsteroversized_main, deepseamonsteroversized_gallery } from "./main.js";
import { deepsea_section } from "./section.js";
export function deepseamonsteroversized(){
    return deepseamonsteroversized_main() + deepseamonsteroversized_gallery() + deepsea_section();
}