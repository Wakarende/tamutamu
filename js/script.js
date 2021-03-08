//business interface
function Pizza(toppings,size,crust) {
this.toppings = toppings;
this.size = size;
this.crust = crust;
}

Pizza.prototype.totalToppings = function() {
  if(this.toppings.length != 0) {
    var toppingPrice = this.toppings.length * 100;
    return toppingPrice;
  }else
  alert("kindly choose your toppings!")
}

Pizza.prototype.pizzaSize = function () {
  if(this.size === "Small"){
    return 600;
  }else if(this.size === "Medium"){
    return 800;
  }else if (this.size === "Large") {
    return 1000;
  }else
  alert("kindly select a pizza size!");
}

Pizza.prototype.crustType = function () {
  if(this.crust === "Thick") {
    return 150
  } else if (this.crust === "Normal") {
    return 100
  }else if (this.crust === "Thin") {
    return 50
  }else
  alert("kindly choose a crust size.")
  }

let finalCost;
Pizza.prototype.totalCost = function(totalToppings, pizzaSize, crustType) {
   finalCost = totalToppings + pizzaSize + crustType;
  $("#displayTotalCost").html(finalCost);
  ;
}

//user interface

//calculation of total pizza price
var pizza, pizzaQuantity;
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    $("#show-Bill").show();
    var pizzaName = $("#pizza option:selected").val();
    var checkedSize = $("input:radio[name=sizePizza]:checked").val();
    var checkedCrust = $("input:radio[name=crustPizza]:checked").val();
    var checkedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      checkedToppings.push($(this).val());
    });
    pizzaQuantity = parseInt($("#quantity").val());
    var totalPizzaQuantity = finalCost * pizzaQuantity;

    $("#displaySize").text(checkedSize);
    $("#displayCrust").text(checkedCrust);
    $("#displayName").text(pizzaName);
    $("#displayToppings").text(checkedToppings);
    $("#displayQuantity").text(totalPizzaQuantity);


    pizza = new Pizza(checkedToppings,checkedSize,checkedCrust);

    var totalToppings = pizza.totalToppings();
    var pizzaSize = pizza.pizzaSize();
    var crustType = pizza.crustType();
    pizza.totalCost(pizzaSize,totalToppings,crustType);
    console.log(pizza);
  });
});

//pickup option
$("#pickup").click(function() {
  alert("Your order will be ready within the hour. Your order total is " + finalCost);
});

//delivery option
$("#submit").click(function() {
  var fullName = $("#name").val();
  var location= $("#location").val();
  var phoneNumber = $("#number").val();
  var finalDeliveryTotal = finalCost +150;
  if(fullName == "" || location == "" || phoneNumber == "") {
    alert("please enter your details")
  }else {
    alert("Dear " + fullName + " your pizza will be delivered to " + location + " within the hour." + "Your total cost is " + finalDeliveryTotal);
  }
});

// navigation transition
$(window).scroll(function(){
	$('.navbar-default').toggleClass('scrolled', $(this).scrollTop() > 50);
});