import { oversized_main, oversized_gallery } from "./main.js";
import { idontfish_section } from "./section.js";
export function oversized(){
    return oversized_main() + oversized_gallery() + idontfish_section();
}