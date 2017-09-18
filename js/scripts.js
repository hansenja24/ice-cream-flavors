$(document).ready(function() {
  var flavorInput = ["chocolate", "vanilla", "strawberry", "earl grey", "green tea", "corn", "durian", "yam"];
      flavorInput.forEach(function(flavor) {
        $("#list ul").append("<li>"+flavor+"</li>");
      });
});
