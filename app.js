const express = require("express")
const requestTime = require('./Middlewares/requestTime.js')
// create an instance of an express app which storing all the express methods
const app = express() 
 
const port = process.env.PORT || 5000;
app.listen(port, (err)=>{
    err? console.log(err): console.log(`Listening for request on port ${port}`)
})

// Apply the css by using the static express  
app.use(express.static('public'))

// set the view engine type
app.set("view engine", "ejs")
app.set("views", "./views")

// Apply middleware
app.use(requestTime)

app.get("/", (req, res)=>{
    const products=[
        {title:'T-shirt',price: "500 $", color: "red & green", stock:"25 pieces" },
        {title:'coat',price: "680 $", color: "red, green & black", stock:"13 pieces" },
        {title:'sweater',price: "250 $", color: "white & gray", stock:"100 pieces" },
       ];
    res.render('Home', {title: "Home page", products} )
})


app.get("/contact", (req, res)=>{
    res.render('Contact', {title: "Contact page"} )
})


app.get("/services", (req, res)=>{
    res.render('Services', {title: "Services page"} )
})

app.use((req, res)=>{
    res.status(404).render("404",{title:'404'})
    })