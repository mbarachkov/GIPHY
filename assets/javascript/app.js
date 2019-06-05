var topics = ["Kevin Hart", "Chris Rock", "Jerry Seinfeld", "Dave Chappelle", "jim carry"];

$(document).ready(function () {
    $("button").click(function () {
        $("input:text").val();
        console.log($("input:text").val());
        topics.push($("input:text").val());

    });

    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var btn = $("<button>");
        btn.addClass("btn btn-success");
        btn.attr("data-topic", topics[i]);
        btn.text(topics[i]);
        $(".buttons").append(btn);
    }

});






// $("#button-addon1").on("click", function() {
//     var inputText = document.getElementById("inputText").nodeValue;
//     topics.push(inputText);
//     $("#buttons").append(inputText);
// })

// $("#press-btn").on("click", function () {

//     console.log(topics[i]);
//     var btn = $("<button>");
//     btn.addClass("btn btn-success press-btn");
//     btn.attr("data-topic", topics[i]);
//     btn.text(topics[i]);
//     $(".buttons").append(btn)


//     var gifInfo = this.innerText;
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + window.encodeURI(gifInfo) + "&limit=10&api_key=Ryiilh7baQ2Gu06AFkJn7lBs6gexkzpS";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             console.log(queryURL);
//             console.log(response);

//             var results = response.data;
//             for (var i = 0; i < topics.length; i++) {
//                 var gifDiv = $("<div>");
//                 var newGif = $("<img>");

//                 newGif.attr("src", results[i].images.original.url);
//                 gifDiv.html(newGif)
//                 $(".buttons").append(btn);
//             }
//         })
//     arrPush();
// })
