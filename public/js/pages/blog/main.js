class Blog{
    constructor(name, description,image,loading,priority){
        this.name=name;
        this.description=description;
        this.image=image;
        this.loading=loading;
        this.priority=priority;
    }
    getInfo(){
        return`
              <main>
                 <div id="blogmain">
                    <h1>${this.name}</h1>
                    <p>${this.description}</p>
                 </div>
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