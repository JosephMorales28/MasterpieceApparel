import { premium_main, premium_gallery } from "./main.js";
import { idontfish_section } from "./section.js";

export function premiummain(){
    return premium_main()+premium_gallery()+ idontfish_section();
}