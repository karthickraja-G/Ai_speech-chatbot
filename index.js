const express =require('express');
const {Server} =require('socket.io');
const app=express();

const PORT=3000;

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public')); 

app.get('/',(req,res)=>{
	res.sendFile('index.html');
});


const server = app.listen(PORT,()=>{
		console.log(`server is running at port ${PORT}`)}) ;

const io =new Server(server);

io.on('connection',(socket)=> {
	console.log('A client connected:',socket.id);
	

	socket.on('chat message', (text) => {
    		console.log('User said:', text);

    		socket.emit('bot reply', 'Hello! I received your message.');
	});
});

