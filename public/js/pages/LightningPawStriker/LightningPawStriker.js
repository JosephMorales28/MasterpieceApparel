import { lightningpawstriker_main, lightningpawstrikermain_gallery } from "./main.js";
import { lightningpawstriker_section } from "./section.js";

export function lightningpawstrikermain(){
    return lightningpawstriker_main() + lightningpawstrikermain_gallery() + lightningpawstriker_section();
}