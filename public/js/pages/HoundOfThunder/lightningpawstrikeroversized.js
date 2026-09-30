import { lightningpawstrikeroversized_main, lightningpawstrikeroversized_gallery } from "./main.js";
import { lightningpawstriker_section } from "./section.js";
export function lightningpawstrikeroversizedmain(){
    return lightningpawstrikeroversized_main() + lightningpawstrikeroversized_gallery() + lightningpawstriker_section();
}