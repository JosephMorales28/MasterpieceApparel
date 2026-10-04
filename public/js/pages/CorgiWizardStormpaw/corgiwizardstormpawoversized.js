import { corgiwizardstormpawoversized_main, corgiwizardstormpawoversized_gallery } from "./main.js";
import { corgiwizardstormpaw_section } from "./section.js";
export function corgiwizardstormpawoversizedmain(){
    return corgiwizardstormpawoversized_main() + corgiwizardstormpawoversized_gallery() + corgiwizardstormpaw_section();
}