import { corgiwizardstormpawpremium_main, corgiwizardstormpawpremium_gallery } from "./main.js";
import { corgiwizardstormpaw_section } from "./section.js";

export function corgiwizardstormpawpremiummain(){
    return corgiwizardstormpawpremium_main() + corgiwizardstormpawpremium_gallery() + corgiwizardstormpaw_section();
}