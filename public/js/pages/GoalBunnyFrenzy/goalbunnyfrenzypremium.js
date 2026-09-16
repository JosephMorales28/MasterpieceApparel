import { goalbunnyfrenzypremium_main, goalbunnyfrenzypremium_gallery } from "./main.js";
import { goalbunnyfrenzy_section } from "./section.js";

export function goalbunnyfrenzypremiummain(){
    return goalbunnyfrenzypremium_main() + goalbunnyfrenzypremium_gallery() + goalbunnyfrenzy_section();
}