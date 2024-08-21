import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));



app.use(bodyParser.urlencoded({ extended: true }));


let posts = [];
let nextId = 1;

app.get("/", (req, res)=>{

    res.render("index.ejs",{posts:posts})
})

app.get("/post", (req, res)=>{

    res.render("post.ejs", {posts:posts})
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
app.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render("edit.ejs", { post: post });
});

app.post('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send('Post not found');
    }
    post.title = req.body.title;
    post.author = req.body.author;
    post.content = req.body.content;
    res.redirect('/');
});


app.post("/posts", (req,res)=>{

    const newPost = {
        id: nextId++,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: new Date()
    };

    app.post('/delete/:id', (req, res) => {
        posts = posts.filter(p => p.id !== parseInt(req.params.id));
        res.redirect('/');
    });
    

    posts.push(newPost);
    res.redirect('/');
})




app.listen(port, ()=>{

    console.log(`server runing on port ${port}`)
})