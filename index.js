import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));



app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{

    res.render("index.ejs")
})

app.get("/post", (req, res)=>{

    res.render("post.ejs")
})

app.get("/newPost", (req, res)=>{

    res.render("newPost.ejs")
})

app.get("/about", (req, res)=>{

    res.render("about.ejs")
})

app.get("/contact", (req, res)=>{

    res.render("contact.ejs")
})
app.post("/newPost", (req,res)=>{

    const {title, author, content} = req.body;
function handleclick(){



}

    res.render("/post.ejs",{
        title:title,
        author:author,
        content:content,

    })
})


app.listen(port, ()=>{

    console.log(`server runing on port ${port}`)
})