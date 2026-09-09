import { shockwavestriker_main, shockwavestrikermain_gallery } from "./main.js";
import { shockwavestriker_section } from "./section.js";

export function shockwavestrikermain(){
    return shockwavestriker_main() + shockwavestrikermain_gallery() + shockwavestriker_section();
}