const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
// const router = jsonServer.router("db.json");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({ noCors: false });
console.log(middlewares);

// server.defaults({ noCors: true });

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post("/home/urls", function(req, res) {
  console.log(req.body);
  if (req.body.token === "jkl") {
    res.jsonp([
      {
        title: "GitHub",
        description: "My GitHub profile.",
        requireAuth: false,
        url: "https://github.com/cmsax"
      },
      {
        title: "Wiki",
        description: "Personal Wiki system.",
        requireAuth: true,
        url: "https://github.com/cmsax",
        token: true
      },
      {
        title: "Files",
        description: "Personal cloud file ystem.",
        requireAuth: true,
        url: "https://github.com/cmsax",
        token: true
      },
      {
        title: "Articles",
        description: "Public blog system.",
        requireAuth: false,
        url: "https://www.unoiou.com/articles"
      }
    ]);
  } else {
    res.sendStatus(401);
  }
});

server.use("/home", router);
// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
