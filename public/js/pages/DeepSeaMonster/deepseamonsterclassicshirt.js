import { deepseamonsterclassic_main ,deepseamonsterclassic_gallery } from "./main.js";
import { deepsea_section } from "./section.js";

export function deepseamonsterclassicmain(){
    return deepseamonsterclassic_main() + deepseamonsterclassic_gallery() + deepsea_section();
}