// Your server code here...
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
/* to disable something for whole file*/


mongoose.connect('mongodb://localhost/testDatabase');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('were connected!');
});

// ---------------------------------------------------

app.use(bodyParser.json());

/*
//error handler
app.use((err, request, response, next) => {
  console.log();
  next();
});
*/
const app = express();
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('too many errors! its dangerous to go alone!');
  }
  return console.log('HEY! Listen!');
});

const contacts = [
  {
    id: 1,
    name: 'Wurst Donut',
    occupation: 'FBI Agent',
  },
  {
    id: 2,
    name: 'Spike Spiegel',
    occupation: 'Booty Hunter',
  }
];

app.get('/contacts', (request, response) => {
  return response.json(contacts);
});

app.post('/', (request, response) => {
  console.log(request.body);
  const user = {
    id: user.length + 1,
    ...request.body
  };
  contacts.push(user);
  return response.json(user);
});
/*
user.save()
  .then(storedUser => {
    console.log('User was saved');
    return response.json(storedUser);
  })
  .catch(() => {
    console.log('User was NOT saved');
    return response.json('Executed!')
  });
*/
app.get('/contacts/:id', (request,response) => {
  const foundUser = contacts.find((user) => {
    return String(user.id) === request.params.id;
  });
  return response.json(foundUser || null);
});
