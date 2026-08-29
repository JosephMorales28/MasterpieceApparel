import { lightweighthoodie_main, lightweighthoodie_gallery } from "./main.js";
import { idontfish_section } from "./section.js";

export function lightweighthoodiemain(){
    return lightweighthoodie_main() + lightweighthoodie_gallery() + idontfish_section();
}