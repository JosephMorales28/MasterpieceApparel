import { goalbunnyfrenzyclassic_main, goalbunnyfrenzyclassic_gallery } from "./main.js";
import { goalbunnyfrenzy_section } from "./section.js";

export function goalbunnyfrenzyclassicmain(){
    return goalbunnyfrenzyclassic_main() + goalbunnyfrenzyclassic_gallery()+ goalbunnyfrenzy_section();
}