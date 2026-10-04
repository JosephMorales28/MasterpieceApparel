import { corgiwizardstormpawclassic_main, corgiwizardstormpawclassic_gallery } from "./main.js";
import { corgiwizardstormpaw_section } from "./section.js";

export function corgiwizardstormpawclassicmain(){
    return corgiwizardstormpawclassic_main() + corgiwizardstormpawclassic_gallery()+ corgiwizardstormpaw_section();
}