import { premiumoversizedhoodie_main, premiumoversizedhoodie_gallery} from "./main.js";
import { idontfish_section } from "./section.js";
export function premiumoversizedhoodiemain(){
    return premiumoversizedhoodie_main() + premiumoversizedhoodie_gallery() + idontfish_section();
}