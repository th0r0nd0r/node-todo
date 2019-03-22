import bodyParser from 'body-parser';

const data = [
  {item: 'slurp and glurp'},
  {item: 'munch a bunch'},
  {item: 'snooze and cruise'},
];
const urlencodedParser = bodyParser.urlencoded({extended: false});

export default function (app) {
  app.get('/todo', function (req, res) {
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function (req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo', function (req, res) {

  });
}