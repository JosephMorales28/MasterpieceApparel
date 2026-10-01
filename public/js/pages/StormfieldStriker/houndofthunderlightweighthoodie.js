import { houndofthunderlightweighthoodie_main, houndofthunderlightweighthoodie_gallery } from "./main.js";
import { houndofthunder_section } from "./section.js";

export function houndofthunderlightweighthoodiemain(){
    return houndofthunderlightweighthoodie_main() + houndofthunderlightweighthoodie_gallery() + houndofthunder_section();
}