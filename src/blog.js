import { data } from "./data.js";
const root = document.querySelector(".screen-to-render");

//For rendering block content
export const render_blog = (x) => {
  document.querySelector(".screen-to-render").innerHTML = `<h1>${x.title}</h1>
<img src="${x.imageUrl}" class="banner-image" width="80%;" />
<p class="blog-content">${x.content}</p>`;
  render_aside(x);
};

//For rendering related links ka section.
function render_aside(blog) {
  let aside = document.querySelector("aside");
  aside.innerHTML = `<h1 id="aside-header"> Related Links </h1>`;
  let ul = document.createElement('ul');
  ul.className="aside-list-item";
  aside.appendChild(ul);
  blog.links.forEach((link) => {
    let list = document.createElement('li');
    list.id =link.id;
    list.innerHTML = link.title;
    list.onclick =()=>{
      freshBlog(event);
    };
    ul.appendChild(list);
    // aside.insertAdjacentHTML(
    //   "beforeend",
    //   `<li id =${link.id}>${link.title}</li>  `
    // );
  });
}


//EVENT LISTENER KA PART 
function freshBlog(event) {
  document.querySelector(".screen-to-render").innerHTML = "";
  document.querySelector("aside").innerHTML = "";

  //render the blog with specified id
  let data_to_fetch= data.filter((i)=>
    i.id === event.target.id);
 render_blog(data_to_fetch[0]); 
}
