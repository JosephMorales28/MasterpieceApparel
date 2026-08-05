import { homeMain } from "./main.js";
import { homeArticle } from "./article.js";
import { homeSection} from "./section.js";

export function homePage(){
     return homeMain()+homeSection()+ homeArticle();
}