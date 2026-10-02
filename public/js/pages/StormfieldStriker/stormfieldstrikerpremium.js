import { stormfieldstrikerpremium_main, stormfieldstrikerpremium_gallery } from "./main.js";
import { stormfieldstriker_section } from "./section.js";

export function stormfieldstrikerpremiummain(){
    return stormfieldstrikerpremium_main() + stormfieldstrikerpremium_gallery() + stormfieldstriker_section();
}