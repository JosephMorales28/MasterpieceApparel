import { shockwavestrikerpremium_main, shockwavestrikerpremium_gallery } from "./main.js";
import { shockwavestriker_section } from "./section.js";

export function shockwavestrikerpremiummain(){
    return shockwavestrikerpremium_main() + shockwavestrikerpremium_gallery() + shockwavestriker_section();
}