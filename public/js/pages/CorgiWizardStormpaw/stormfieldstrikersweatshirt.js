import { stormfieldstrikersweatshirt_main, stormfieldstrikersweatshirt_gallery } from "./main.js";
import { stormfieldstriker_section } from "./section.js";

export function stormfieldstrikersweatshirtmain(){
    return stormfieldstrikersweatshirt_main() + stormfieldstrikersweatshirt_gallery() + stormfieldstriker_section();
}