const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')

const app = express();
require('./model/index');

const Routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());
app.use(cors)

app.use(Routes);

app.listen(5000, () => console.log(`Server run on port: 5000`));
