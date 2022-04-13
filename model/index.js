const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/doctors')
  .then(() => console.log('MongoDB connected!'))
  .catch((e) => console.log('MongoDB Error:', e));
