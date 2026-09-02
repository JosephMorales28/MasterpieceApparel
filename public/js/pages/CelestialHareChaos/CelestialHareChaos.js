import { celestialharechaos_main, celestialharechaosmain_gallery } from "./main.js";
import { celestialharechaos_section } from "./section.js";

export function celestialharechaosmain(){
    return celestialharechaos_main() + celestialharechaosmain_gallery() + celestialharechaos_section();
}