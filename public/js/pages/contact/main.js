class Contact{
    constructor(company,address,email,mobilenumber){
        this.company=company;
        this.address=address;
        this.email=email;
        this.mobilenumber=mobilenumber;
    }
    getContactInfo(){
        return`
                <div>
                   <h3>${this.company}</h3>
                   <p>address: ${this.address}</p>
                   <p>email: ${this.email}</p>
                   <p>phone number: ${this.mobilenumber}</p>
                </div>
        `;
    }
}

export function contactMain(){
    const contact=[
          new Contact(
                   "Masterpiece Apparel Store",
                   "14°37'35.8'N, 120°58'13.7'E Metro Manila, Philippines",
                   "cc569d809cb2@gmail.com",
                   "+639-###-###-###"
          ),
          new Contact(
                  "Head Office",
                  "14°37'35.8'N, 120°58'13.7'E Metro Manila, Philippines",
                  "josephmo2893@gmail.com",
                  "+639-###-###-###"
          )
    ];

    const contactHTML=contact.map(newcontact=>newcontact.getContactInfo()).join('');
    const contactFollow=[{
                         follow:"Follow on",
                         facebook:"https://facebook.com/masterpieceapparelbyjoseph",
                         instagram:"https://instagram.com/masterpieceapparelbyjoseph"
    }]
    return `
            <main>
               <div id="contactmain">
                  <h1>Masterpiece Apparel - Contact Us</h1>
                  <p>Get in touch with the Masterpiece Apparel team. Whether you have questions about our designs, orders, collaborations, or business inquiries, we’re here to help.</p>
                  <h2>Store location</h2>
                  ${contactHTML}
                  ${contactFollow.map(contactfollow=>`
                        <h2>${contactfollow.follow}</h2>
                        <p>Stay updated on new drops, limited releases, and streetwear announcements.</p>
                        <a href="${contactfollow.facebook}">Facebook</a></br>
                        <a href="${contactfollow.instagram}">Instagram</a>
                        `).join('')
                    }
               </div>
            </main>`;
}