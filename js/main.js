export function exp_main(){
    if (window.location.pathname==="/" || window.location.pathname.endsWith("index.html")){
        const main_hero='Get our new shirt release and buy now on masterpiece apparel and enjoy discount.';
        return`
              <main>
              <h1>${main_hero}</h1>
              </main>
        `;
    }
    return "";
}