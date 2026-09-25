import { goalkeepergonebananasclassic_main, goalkeepergonebananasclassic_gallery } from "./main.js";
import { goalkeepergonebananas_section } from "./section.js";

export function goalkeepergonebananasclassicmain(){
    return goalkeepergonebananasclassic_main() + goalkeepergonebananasclassic_gallery()+ goalkeepergonebananas_section();
}