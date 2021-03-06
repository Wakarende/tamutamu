// business interface
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    let pizzaType = $("#pizza option:selected").val();
    let sizeType = $( "#size option:selected").val();
    let crustType = $( "#crust option:selected").val();
    let pizzaTopping = []
      $("input:checkbox[name=toppings]:checked").each(function() {
        pizzaTopping.push($(this).val());
      });
  });

  var totalCost = 
});