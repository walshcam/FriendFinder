//Action that happens upon clicking submit
$("#newCharacter").on("click", function() {
    
    //Create New Character On Submit

    let scores = [
        parseInt($("#question1").val()),
        parseInt($("#question2").val()),
        parseInt($("#question3").val()),
        parseInt($("#question4").val()),
        parseInt($("#question5").val()),
        parseInt($("#question6").val()),
        parseInt($("#question7").val()),
        parseInt($("#question8").val()),
        parseInt($("#question9").val()),
        parseInt($("#question10").val())
    ]

    let newCharacter =
        {
            "name": $("#name").val().trim(),
            "photo": $("#idURL").val().trim(),
            "scores": scores
        }

    $.post("api/friends", newCharacter)
        .then(function(data) {
            console.log(data)
        });

    //Dynamically Create Modal Content
    $("#bestMatchPhoto").attr("src","images/animal-nature-ocean-51964.jpg");
    $("#bestMatchName").text("I haven't figured this last bit out yet, but here's a picture of a fail whale! Look in the terminal to see your match...");

    //activate modal
    $(".modal").addClass('is-active')
    
});

//Modal Close

$(".modal-background").on("click", function () {
    $(".modal").removeClass("is-active")
})