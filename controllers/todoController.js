const data = [
  {item: 'slurp and glurp'},
  {item: 'munch a bunch'},
  {item: 'snooze and cruise'},
];

export default function (app) {
  app.get('/todo', function (req, res) {
    res.render('todo', {todos: data});
  });

  app.post('/todo', function (req, res) {

  });

  app.delete('/todo', function (req, res) {

  });
}