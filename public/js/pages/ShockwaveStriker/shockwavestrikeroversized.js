import { shockwavestrikeroversized_main, shockwavestrikeroversized_gallery } from "./main.js";
import { shockwavestriker_section } from "./section.js";
export function shockwavestrikeroversizedmain(){
    return shockwavestrikeroversized_main() + shockwavestrikeroversized_gallery() + shockwavestriker_section();
}