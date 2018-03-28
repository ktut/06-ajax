$("button").on("click", function() {
    var animal = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      let results = response.data;

      for (var i = 0; i < results.length; i++) {
        let animalDiv = $("<div>");
        let p = $("<p>");
        let animalImage = $("<img>");

        p.text(results[i].rating);
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#gifs-appear-here").prepend(animalDiv);
      }

    });
  });