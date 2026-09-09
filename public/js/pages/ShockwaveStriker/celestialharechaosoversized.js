import { celestialharechaosoversized_main, celestialharechaosoversized_gallery } from "./main.js";
import { celestialharechaos_section } from "./section.js";
export function celestialharechaosoversizedmain(){
    return celestialharechaosoversized_main() + celestialharechaosoversized_gallery() + celestialharechaos_section();
}