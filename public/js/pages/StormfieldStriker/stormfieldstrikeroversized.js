import { stormfieldstrikeroversized_main, stormfieldstrikeroversized_gallery } from "./main.js";
import { stormfieldstriker_section } from "./section.js";
export function stormfieldstrikeroversizedmain(){
    return stormfieldstrikeroversized_main() + stormfieldstrikeroversized_gallery() + stormfieldstriker_section();
}