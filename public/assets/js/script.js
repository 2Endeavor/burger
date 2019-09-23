$(document).ready(function() {
$(".change-devoured").on("click", function(event) {


  var id = $(this).data("id");
 
  var newDevoured = $(this).data("newdevoured");
 

  var newDevouredState = {
    devoured: 1 // 1 indicates the burger is eaten
  };


  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevouredState
  }).then(
    function() {

      // Reload the page to get the updated list
      location.reload();
    }
  );
 
});
// create the click handler
$(".delete-burger").on("click", function(event){
  var id =$(this).data("id");

  
  // Send the DELETE request
  $.ajax("/api/burgers/" + id, {   
    type: "DELETE"
  }). then(
    function(){

      // location,reload();
    }

    )
  })
    
})