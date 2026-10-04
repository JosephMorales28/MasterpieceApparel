import { corgiwizardstormpaw_main, corgiwizardstormpawmain_gallery } from "./main.js";
import { corgiwizardstormpaw_section } from "./section.js";

export function corgiwizardstormpawmain(){
    return corgiwizardstormpaw_main() + corgiwizardstormpawmain_gallery() + corgiwizardstormpaw_section();
}