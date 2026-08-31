import { deepsea_main ,deepsea_gallery} from "./main.js";
import { deepsea_section } from "./section.js";
export function deepsea(){
    return deepsea_main() + deepsea_gallery() + deepsea_section();
}