$(document).ready(function(){

  $('form').on('submit', function(){
    console.log("faowifjapowifjpaowidfjpawodifj");

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          console.log("success!");
          //do something with the data via front-end framework
          location.reload();
        },
        error: console.log("error up in hur")
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
