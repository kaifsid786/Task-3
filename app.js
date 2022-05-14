const express = require("express");
const app = express();
const axios = require('axios');
app.set('view engine', 'hbs');

  //becoz jo Postman se data aa rha hai wo pure json me hoga --------->
const url="https://fa14698cf08907476b4e16cf8f324646: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@messoldtech-test.myshopify.com/admin/api/2022-04/products.json";

var result="",arr=[],src=[];
axios.get(url).then((response)=>{
    result = response.data ;
    arr=result.products;
}).catch((e)=>{
    console.log(`erroe aa gya ${e}`);
})


app.get('/',(req,res)=>{
    var strId="",strTitle="",strSrc="";

    arr.map((item,i)=>{
        strId =  item.id + "+" + strId;
        strTitle =  item.title + "+" + strTitle;
        strSrc = item.product_type + "+" + strSrc;
    })
    console.log(strSrc);




    res.render("index",{
        str1 : strId,
        str2 : strTitle,
        str3 : strSrc
    });

})




// app.post("/students", async (req,res) =>{
//     try{
//         const data = new Student(req.body);
//         const result = await data.save();
//         res.send("Post request succesful");
//     }catch(e){
//         res.send(e);
//     }
// })

// // GETTING WHOLE DATA USING GET REQUEST --------------------------------------------------->
// app.get("/", async (req,res) =>{
//     try{
//         const result = await Student.find();
//         res.send(result);
//     }catch(e){
//         res.send(e)
//     }
// })

// // GETTING SINGLE  DATA USING GET REQUEST --------------------------------------------------->
// app.get("/students/:name", async (req,res) =>{
//     try{
//         const name = req.params.name;
//         const result = await Student.findOne({name});
//         if(!result){
//             res.status(404).send();
//         }
//         else{
//             res.send(result);
//         }
//     }catch(e){
//         res.send(e)
//     }
// })
app.listen(process.env.PORT || 8000,() =>{
    console.log("Runnig at port 3000");
})