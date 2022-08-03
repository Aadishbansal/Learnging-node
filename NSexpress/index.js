import myexpress from "express";

const app = myexpress();

app.get("/", (req, res) => {
  res.send("this is a home page");
});
app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

// http://localhost:3001/query?name=z
app.get("/query", (req, res) => {
  const a = req.query.name;
  res.send(a);
});
// http://localhost:3001/uri/2134546
app.get("/uri/:name", (req, res) => {
  const a = req.params.name;
  res.send(a);
});
app.get("/head", (req, res) => {
  const a = req.headers.name;
  res.send(a);
});
/*
// http://localhost:3001/query?name=z&age=23
app.get("/query", (req, res) => {
  const a = req.query.name;
  const b = req.query.age;
  res.send(a + " " + b);
});
// http://localhost:3001/uri/aadish/21
app.get("/uri/:name/:age", (req, res) => {
  const a = req.params.name;
  const b = req.params.age;
  res.send(a + " " + b);
});
app.get("/head", (req, res) => {
  const a = req.headers.name;
  const b = req.headers.age;
  res.send(a + " " + b);
});
app.use(myexpress.json());
app.get("/body", (req, res) => {
  const a = req.body.name;
  const b = req.body.age;
  res.send(a + " " + b);
});
*/
app.use(myexpress.json());
app.get("/body", (req, res) => {
  const a = req.body.name;
  res.send(a);
});

app.listen(3001, () => {
  console.log("server listening on port 3001");
});
