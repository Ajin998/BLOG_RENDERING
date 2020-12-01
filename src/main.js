import { render_blog} from "./blog.js";
import {data} from "./data.js";

render_blog(data[Math.floor(Math.random()* data.length)]);
// freshBlog(data);