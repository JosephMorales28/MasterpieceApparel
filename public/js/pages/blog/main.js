class Blog{
    constructor(name, description){
        this.name=name;
        this.description=description;
    }
    getInfo(){
        return`
              <main>
              <h1>${this.name}</h1>
              <p>${this.description}</p>
              </main>
              `;
    }
} 

export function blogMain(){
   const blogs=[
         new Blog(
            "Web version 1.0",
            "This is the Official Blog and Website of Masterpiece Apparel Version 1.0. "
        )
   ];
   const bloghtml=blogs.map(newblog=>newblog.getInfo()).join(``);

   return bloghtml;
}