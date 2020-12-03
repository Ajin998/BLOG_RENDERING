import { render_blog } from "./blog.js";

let url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

const get_data = async (url) => {
  await axios(url)
    .then((res) => render_blog(res.data))
    .catch((err) => console.error(err));
};
export let data = get_data(url);
