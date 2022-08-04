import myexpress from "express";

const app = myexpress();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const number = [1, 2, 3, 4, 5, 6];
  res.render("index", { data: number });
});

const port = 30001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
