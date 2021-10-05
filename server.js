
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');


const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware

app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(postRoutes);





const PORT = 8070;
const DB_URL = 'mongodb+srv://savindi:savi123@mernapp.5upo8.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL)



.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


