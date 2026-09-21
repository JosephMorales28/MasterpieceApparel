import { goalbunnyfrenzyoversized_main, goalbunnyfrenzyoversized_gallery } from "./main.js";
import { goalbunnyfrenzy_section } from "./section.js";
export function goalbunnyfrenzyoversizedmain(){
    return goalbunnyfrenzyoversized_main() + goalbunnyfrenzyoversized_gallery() + goalbunnyfrenzy_section();
}