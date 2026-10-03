import { stormfieldstriker_main, stormfieldstrikermain_gallery } from "./main.js";
import { stormfieldstriker_section } from "./section.js";

export function stormfieldstrikermain(){
    return stormfieldstriker_main() + stormfieldstrikermain_gallery() + stormfieldstriker_section();
}