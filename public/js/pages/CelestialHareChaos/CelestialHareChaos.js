import { idontfish_main, main_gallery } from "./main.js";
import { idontfish_section } from "./section.js";

export function idontfishforfood(){
    return idontfish_main()+main_gallery()+idontfish_section();
}