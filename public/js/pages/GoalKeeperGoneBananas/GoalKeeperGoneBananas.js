import { goalkeepergonebananas_main, goalkeepergonebananasmain_gallery } from "./main.js";
import { goalkeepergonebananas_section } from "./section.js";

export function goalkeepergonebananasmain(){
    return goalkeepergonebananas_main() + goalkeepergonebananasmain_gallery() + goalkeepergonebananas_section();
}