var express = require("express");
var app = express();

//Don't use EJS suffix when calling res.render()
app.set("view engine", "ejs");

//Routes to home page
app.get("/", function(req, res){
    res.render("landing");

});

//Routes to the campgrounds page
app.get("/campgrounds", function(req, res){
   var campgrounds = [
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3751/9580653400_e1509d6696.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"}
    ]
    res.render("campgrounds", {campgrounds:campgrounds});

});

//Activated when user completes new campground form
app.post("/campgrounds", function(req, res){
    res.send("You hit the POST");
    // get data from form and add to campgrounds array
    // redirect back to campgrounds route

});

//Server is ran on port 8080
app.listen(process.env.PORT || 8888, function(){
    console.log("YelpCamp Server Has Started!");
});


