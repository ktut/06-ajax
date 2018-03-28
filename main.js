//   on clicking a button at the top, make an AJAX call, make the GIF element and add it to the list
$(document).on("click",".js-item",function() {
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

        p.text("rating: " + results[i].rating);
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalImage.attr("data-animate", results[i].images.fixed_height.url);
        animalImage.attr("data-still", results[i].images.fixed_height_still.url);
        animalImage.attr("data-state", "animate");
        animalDiv.append(animalImage);
        animalDiv.append(p);
        $(".js-gifs-appear-here").prepend(animalDiv);
      }
    });

  });

//   pause the anim by clicking on the gif div!
  $(document).on("click",".js-gifs-appear-here > div",function() {
    let thisImage = $(this).children("img");
    let state = thisImage.attr("data-state");
    console.log(state);

    if (state === "still") {
        thisImage.attr("src", thisImage.attr("data-animate"));
        thisImage.attr("data-state", "animate");
    } else {
        thisImage.attr("src", thisImage.attr("data-still"));
        thisImage.attr("data-state", "still");
    }
  });


// add a new button using the Add button
  $(".js-add").on("click", function() {
    let newButton = $("<button>").addClass("js-item").text($(".js-add-buttons").val());
    $(".buttons").prepend(newButton);
  });