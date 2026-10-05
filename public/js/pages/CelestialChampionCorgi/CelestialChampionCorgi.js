import { celestialchampioncorgi_main, celestialchampioncorgimain_gallery } from "./main.js";
import { celestialchampioncorgi_section } from "./section.js";

export function celestialchampioncorgimain(){
    return celestialchampioncorgi_main() + celestialchampioncorgimain_gallery() + celestialchampioncorgi_section();
}