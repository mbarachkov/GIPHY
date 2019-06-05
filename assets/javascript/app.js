var topics = ["Kevin Hart", "Chris Rock", "Jerry Seinfeld", "Dave Chappelle", "jim carry"];

for (var i = 0; i < topics.length; i++){
    console.log(topics[i]);
}


$("button").on("click", function () {

    var gifInfo = $(this).attr("data-gifInfo");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifInfo + "&api_key=Ryiilh7baQ2Gu06AFkJn7lBs6gexkzpS&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating " + results[i].rating);

                var newGif = $("<img>");
                newGif.attr("src", results[i].images.fixed_height.url);

                gifDiv.html(p);
                gifDiv.html(newGif)
                $("#gif-responses").prepend(gifDiv);
            }
        })

})