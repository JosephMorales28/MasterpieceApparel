import { sweatshirt_main, sweatshirt_gallery } from "./main.js";
import { idontfish_section } from "./section.js";

export function sweatshirt(){
    return sweatshirt_main() + sweatshirt_gallery() + idontfish_section();
}