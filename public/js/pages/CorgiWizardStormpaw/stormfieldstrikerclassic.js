import { stormfieldstrikerclassic_main, stormfieldstrikerclassic_gallery } from "./main.js";
import { stormfieldstriker_section } from "./section.js";

export function stormfieldstrikerclassicmain(){
    return stormfieldstrikerclassic_main() + stormfieldstrikerclassic_gallery()+ stormfieldstriker_section();
}