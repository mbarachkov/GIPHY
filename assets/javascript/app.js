var topics = ["Kevin Hart", "Chris Rock", "Mitch Hedberg", "Dave Chappelle", "jim carry", "Will Ferrell", "Dane Cook", "Andy Milonakis", "Ryan Reynolds"];


$(document).ready(function () {
    makeButtons();

    function makeButtons() {
        $(".buttons").empty();
        for (var i = 0; i < topics.length; i++) {
            var btn = $("<button>");
            btn.addClass("btn");
            btn.attr("data-topic", topics[i]);
            btn.text(topics[i]);
            $(".buttons").append(btn);
        }
    }

    $("#press-btn").click(function () {
        event.preventDefault();
        var topic = $("#inputText").val().trim();
        topics.push(topic);
        makeButtons();
    });

    $(".btn").on("click", function () {
        var btn = $(this).attr("data-topic")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btn + "&limit=10&api_key=Ryiilh7baQ2Gu06AFkJn7lBs6gexkzpS";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var topics = response.data
                $("#gif-responses").empty();
                for (var i = 0; i < topics.length; i++) {
                    var img = $("<img>")
                    img.addClass("giphy-image");
                    img.attr("src", topics[i].images.original.url);
                    img.attr("alt", name);
                    $("#gif-responses").append(img);
                }

            });

    })
})



// var gifDiv = $("<div class='gif'>");
                // var rating = response.data.rating;
                // console.log(btn);

                // var pOne = $("<p>").text("Rating: " + rating);
                // gifDiv.html(pOne);

                // var imgURL = response.data.image_original_url;
                // var image = $("<img>").attr("src", imgURL);
                // $("#gif-responses").html(image);