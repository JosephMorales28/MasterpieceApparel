export function homeSection(){
    const sectionpage="What Our Buyer Says";
    const clientcard=[
                      {
                         name:"John Smith",
                         socialmed: "Lifestyle Shopper",
                         comments:"When I purchase these shirt on masterpiece apparel, It so comfortable to wear and so stylish, It's perfect."
                      },
                      {
                         name:"Anna Doyle Moore",
                         socialmed: "Parent",
                         comments:"All I can tell is awesome, the designs are playful, my two kids love it."
                      },
                      {
                         name:"Thomas Simon Jr.",
                         socialmed: "Online Buyer",
                         comments:"After delivering my order the package was arrive fast secure and good conditions there is no damage and missing part all completes the products I buy matches size perfectly."
                      }
                    ];
    return`
           <section>
               <h1>${sectionpage}</h1>
               <div class="homesection">
                   ${clientcard.map(item=>`
                        <div class="clientcard">
                           <div>
                              <p>${item.name}</p>
                              <span>${item.socialmed}</span>
                              <p class="section_comment">${item.comments}</p>
                           </div>
                        </div>
                      `).join(``)}
              </div>
           </section>
          `;
}