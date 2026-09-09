import { celestialharechaosclassic_main, celestialharechaosclassic_gallery } from "./main.js";
import { celestialharechaos_section } from "./section.js";

export function celestialharechaosclassicmain(){
    return celestialharechaosclassic_main() + celestialharechaosclassic_gallery()+ celestialharechaos_section();
}