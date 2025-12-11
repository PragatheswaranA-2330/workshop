// express DEMO
const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id : 1,name : "pragathes"}];

app.get('/users',(req,res) => res.json(users));

app.post('/users', (req, res) => {
    const newUser = {id : users.lenght+1, ...req.body};
    users.push(newUser);
    res.json(newUser);
})

app.listen(3001, () => console.log('Server is running on http://localhost:3001'));