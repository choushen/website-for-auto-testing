$(document).ready(function() {
    // Select only the links with the class "load-content"
    $("a").click(function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();
  
      // Get the URL of the linked page
      var url = $(this).attr("href");
        console.log(url)
      // Load the content of the linked page into the "content" div
      $("#content").load(url);
    });
  });