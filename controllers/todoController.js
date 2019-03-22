import bodyParser from 'body-parser';

let data = [
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

  app.delete('/todo/:item', function (req, res) {
    data = data.filter(todo => (
      todo.item.replace(/ /g, '-') !== req.params.item
    ));
    res.json(data);
  });
}