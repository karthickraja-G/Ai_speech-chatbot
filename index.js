const express =require('express');

const app=express();

const PORT=3000;

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public')); 

const server = app.listen(PORT,()=>{
		console.log(`server is running at port ${PORT}`)}) ;


app.get('/',(req,res)=>{
	res.sendFile('index.html');
});
