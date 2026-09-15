import { shockwavestrikersweatshirt_main, shockwavestrikersweatshirt_gallery } from "./main.js";
import { shockwavestriker_section } from "./section.js";

export function shockwavestrikersweatshirtmain(){
    return shockwavestrikersweatshirt_main() + shockwavestrikersweatshirt_gallery() + shockwavestriker_section();
}