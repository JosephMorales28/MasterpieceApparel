import { celestialharechaospremium_main, celestialharechaospremium_gallery } from "./main.js";
import { celestialharechaos_section } from "./section.js";

export function celestialharechaospremiummain(){
    return celestialharechaospremium_main() + celestialharechaospremium_gallery() + celestialharechaos_section();
}