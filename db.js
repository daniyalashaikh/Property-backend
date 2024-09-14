const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shaikhdaniyal:qwertyuiop@cluster0.wv4oa.mongodb.net/property-tech?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log('Connection error:', err));
