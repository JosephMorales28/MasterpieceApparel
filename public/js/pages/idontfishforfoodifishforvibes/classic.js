import { classic_main, classic_gallery } from "./main.js";
import { idontfish_section } from "./section.js";

export function classic(){
    return classic_main() + classic_gallery()+ idontfish_section();
}