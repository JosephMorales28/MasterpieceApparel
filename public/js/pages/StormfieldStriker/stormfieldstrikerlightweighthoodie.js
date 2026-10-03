import { stormfieldstrikerlightweighthoodie_main, stormfieldstrikerlightweighthoodie_gallery } from "./main.js";
import { stormfieldstriker_section } from "./section.js";

export function stormfieldstrikerlightweighthoodiemain(){
    return stormfieldstrikerlightweighthoodie_main() + stormfieldstrikerlightweighthoodie_gallery() + stormfieldstriker_section();
}