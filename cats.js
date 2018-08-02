var mongoose=require("mongoose"); 
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema=new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
    
});

var Cat=mongoose.model("Cat",catSchema);

// var george=new Cat({
//     name:"george",
//     age:4,
//     temperament:"sweet"
// });


// var george=new Cat({
//     name:"Sonakshi",
//     age:7,
//     temperament:"dumb"
// });

// george.save(function(err,cat){
//     if(err){
//         console.log("ERROR!!!!!!!!!");
        
//     }else{
//         console.log("WE SAVED YOUR CAT");
//         console.log(cat);
//     }
// });

Cat.create({
    name:"Meenu",
    age:3,
    temperament:"niceey"
    
} ,function(err,cat){
    if(err){
         console.log("ERROR!!!!!!!!!");
        
     }else{
         console.log("WE SAVED YOUR CAT");
         console.log(cat);
     }
});


// Cat.find({},function(err,cats){
//     if(err){
//         console.log("ERROR");
//         console.log(err);
//     }else{
//         console.log(cats);
//     }
    
// });




