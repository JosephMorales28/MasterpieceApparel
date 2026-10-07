import { celestialchampioncorgiclassic_main, celestialchampioncorgiclassic_gallery } from "./main.js";
import { celestialchampioncorgi_section } from "./section.js";

export function celestialchampioncorgiclassicmain(){
    return celestialchampioncorgiclassic_main() + celestialchampioncorgiclassic_gallery()+ celestialchampioncorgi_section();
}