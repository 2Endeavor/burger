$(document).ready(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    var newDevoured = $(this).data("newdevoured");
    console.log(newDevoured);

    var newDevouredState = {
      devoured: newDevoured
    };
  });

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevouredState
  }).then(function() {
    console.log("changed devoured to", newDevoured);
    // Reload the page to get the updated list
    location.reload();
  });
});
