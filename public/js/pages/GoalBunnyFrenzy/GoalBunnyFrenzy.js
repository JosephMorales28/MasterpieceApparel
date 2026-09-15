import { goalbunnyfrenzy_main, goalbunnyfrenzymain_gallery } from "./main.js";
import { goalbunnyfrenzy_section } from "./section.js";

export function goalbunnyfrenzymain(){
    return goalbunnyfrenzy_main() + goalbunnyfrenzymain_gallery() + goalbunnyfrenzy_section();
}