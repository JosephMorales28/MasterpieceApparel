const pageContent={
    about:{
        title:'About Masterpiece Apparel',
        description:'Masterpiece Apparel is an independent apparel brand bringing original illustrations to everyday wear.',
        paragraph:"I'm Joseph Morales a graphic designer and web developer from Philippines. I build this site for my small business ecommerce my products are shirts apparel, accesories and more. I hope you like and buy my products thank you.",
        details:['Every design starts with an idea and is made to help you express your own style.','We create graphic apparel and accessories with creativity, quality, and individuality in mind.']
    },
    shop:{
        title:'Shop Our Collection',
        description:'Explore original Masterpiece Apparel designs and discover your next favorite shirt.',
        details:['New apparel releases are added regularly.','Visit our Redbubble store to view available sizes, colors, and ordering options.']
    },
    service:{
        title:'Creative Services',
        description:'Need artwork for apparel or a creative project? Masterpiece Apparel offers original design services.',
        details:['We can help with graphic design concepts, apparel artwork, and visual ideas.','Send us a message to discuss your project and receive more details.']
    },
    blog:{
        title:'Masterpiece Apparel Blog',
        description:'Read product announcements, design notes, and the latest news from Masterpiece Apparel.',
        details:['Check back soon for new releases and behind-the-scenes updates.']
    },
    contact:{
        title:'Contact Masterpiece Apparel',
        description:'Have a question, collaboration idea, or feedback? We would love to hear from you.',
        details:['Connect with Masterpiece Apparel on Facebook and Instagram for updates and messages.','Facebook: masterpieceapparelbyjoseph','Instagram: masterpieceapparelbyjoseph']
    },
    idontfishforfoodifishforvibes:{
        title:"I don't fish for food I fish for vibes"
    }
};

export function exp_main(page) {
    switch (page) {

        case 'home': {
            const mainHero = 'Get our new shirt release and buy now on Masterpiece Apparel and enjoy a discount.';

            return `
                <main>
                    <div class="main_hero">
                       <img src="/img/menwear.webp"/>
                       <h1>${mainHero}</h1>
                    </div>
                </main>
            `;
        }

        case 'about': {
            const about = pageContent[page];

            return `
                <main>
                    <div class="main_about">
                    <h1>${about.title}</h1>
                    <p>${about.description}</p>
                    ${about.details.map(detail => `<p>${detail}</p>`).join('')}
                    <h1>Founder of Masterpiece Apparel</h1>
                    <picture>
                        <img
                            src="/img/joseph.webp"
                            srcset="/img/joseph.webp 700w"
                            sizes="(max-width:800px)700px"
                            alt="Joseph profile"
                            loading="lazy"
                            fetchpriority="high"
                        >
                    </picture>
                    <p>${about.paragraph}</p>
                    </div>
                </main>
            `;
        }

        case 'idontfishforfoodifishforvibes': {
            const fishing = pageContent[page];

            return `
                <main class="page_idontfishforfoodifishforvibes">
                    <h1>${fishing.title}</h1>
                </main>
            `;
        }

        default: {
            const content = pageContent[page];

            if (!content) {
                return `
                    <main class="page-content">
                        <section class="page-content__inner">
                            <h1>404 - Page Not Found</h1>
                        </section>
                    </main>
                `;
            }

            return `
                <main class="page-content">
                    <section class="page-content__inner">
                        <h1>${content.title}</h1>
                        <p class="page-content__lead">${content.description}</p>
                        ${content.details.map(detail => `<p>${detail}</p>`).join('')}
                    </section>
                </main>
            `;
        }
    }
}