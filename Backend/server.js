import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready');
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          setup: "Why don't scientists trust atoms?",
          punchline: "Because they make up everything!"
        },
        {
          setup: "What do you get when you cross a snowman and a vampire?",
          punchline: "Frostbite!"
        },
        {
          setup: "Did you hear about the mathematician who’s afraid of negative numbers?",
          punchline: "He’ll stop at nothing to avoid them!"
        },
        {
          setup: "Why don't skeletons fight each other?",
          punchline: "They don't have the guts!"
        },
        {
          setup: "Why did the scarecrow win an award?",
          punchline: "Because he was outstanding in his field!"
        }
      ];
      
    res.send(jokes);
})

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`Hii, Server is running at port number : ${port}`);
})