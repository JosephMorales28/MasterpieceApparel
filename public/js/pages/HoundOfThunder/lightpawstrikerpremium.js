import { lightningpawstrikerpremium_main, lightningpawstrikerpremium_gallery } from "./main.js";
import { lightningpawstriker_section } from "./section.js";

export function lightningpawstrikerpremiummain(){
    return lightningpawstrikerpremium_main() + lightningpawstrikerpremium_gallery() + lightningpawstriker_section();
}