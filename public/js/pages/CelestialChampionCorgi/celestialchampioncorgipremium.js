import { celestialchampioncorgipremium_main, celestialchampioncorgipremium_gallery } from "./main.js";
import { celestialchampioncorgi_section } from "./section.js";

export function celestialchampioncorgipremiummain(){
    return celestialchampioncorgipremium_main() + celestialchampioncorgipremium_gallery() + celestialchampioncorgi_section();
}