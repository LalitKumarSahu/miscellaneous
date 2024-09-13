const express = require("express");
const app = express();

let port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register", (req,res)=>{
  let {user,password}=req.query;
  res.send(`standard Get response. welcome ${user}!`);
});
app.post("/register", (req,res)=>{
  let{user,password} = req.body;
  res.send(`standard post response. Welcome ${user}!`);
});

app.listen(port, ()=>{
  console.log(`app is listining to port ${port}`);
})