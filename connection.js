const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://muskanmandloi:hello@chat.wceydmd.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
