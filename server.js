const http = require("http");
const fs = require("fs");
const server = http
  .createServer((req, res) => {
    // console.log("i am server");
    //   console.log(s);
    console.log(req.url);
    // console.log(req.method);
    let path = "./views/";
    switch (req.url) {
      case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
        res.statusCode = 200;
        path += "about.html";
        break;
      case "/about-me":
        res.statusCode = 301;
        res.setHeader("Location", "/about");
        res.end();

        break;
      default:
        path += "404.html";
        break;
    }

    // res.setHeader("Content-Type", "text/html");
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  })
  .listen(8000, undefined, () => {
    console.log("listening");
  });
