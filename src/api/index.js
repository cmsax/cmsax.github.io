const get = async url => {
  const res = await fetch(url);
  return await res.json();
};

const post = async (url, data) => {
  // Default options are marked with *
  const response = await fetch(url, {
    body: JSON.stringify(data),
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json"
    },
    method: "POST",
    mode: "cors",
    redirect: "follow",
    referrer: "no-referrer"
  });
  return await response.json(); // parses response to JSON
};

const base =
  process.env.NODE_ENV === "production"
    ? "https://api.unoiou.com"
    : "http://localhost:5555";
export const Photos = get(`${base}/home/photos`);
export const Projects = get(`${base}/home/projects`);
export const Games = get(`${base}/home/games`);
export const Stacks = get(`${base}/home/stacks`);
export const Urls = token => post(`${base}/home/urls`, { token });
