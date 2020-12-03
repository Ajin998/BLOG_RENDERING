import { data } from "./data.js";
const root = document.querySelector(".screen-to-render");
var num;
var result;

//For rendering block content
export let render_blog = (res) => {
  if (res.length > 1) {
    result = res;
    num = res[Math.floor(Math.random() * (res.length-1) - 0 + 1) + 0];
    document.querySelector(
      ".screen-to-render"
    ).innerHTML = `<h1>${num.title}</h1>
    <img src="${num.imageUrl}" class="banner-image" width="80%; alt="Blog_image" />
    <p class="blog-content">${num.content}</p>`;
    render_aside(num);
  }
  else{
    document.querySelector(
      ".screen-to-render"
    ).innerHTML = `<h1>${res[0].title}</h1>
    <img src="${res[0].imageUrl}" class="banner-image" width="80%; alt="Blog_image" />
    <p class="blog-content">${res[0].content}</p>`;
    render_aside(res[0]);
  }
};

//For rendering related links ka section.
function render_aside(blog) {
  let aside = document.querySelector("aside");
  aside.innerHTML = `<h1 id="aside-header"> Related Links </h1>`;
  let ul = document.createElement("ul");
  ul.className = "aside-list-item";
  aside.appendChild(ul);
  blog.links.forEach((link) => {
    let list = document.createElement("li");
    list.id = link.id;
    list.innerHTML = link.title;
    list.onclick = () => {
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

  function to_render(i) {
    return i.id == event.target.id;
  }
  render_blog(result.filter(to_render));
  // console.log(result[0].id == "2rvqpdbpka3n3fhd");

  //render the blog with specified id
  //   let data_to_fetch= result.filter((i)=>
  //     i.id === event.target.id);
  //  render_blog(data_to_fetch[0]);
}
