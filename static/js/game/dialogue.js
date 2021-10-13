const dialogueID = "main_dialogue";

class Dialogue {

    constructor() {
        $("#"+dialogueID).fadeIn();
    }

    request(weather_data) {
        //fetch dialogue from the server
        $.post("/environment/post/", weather_data)
            .done(function(dialogue_str) {

                //fade the dialogue out, replace it, and fade in
                $("#"+dialogueID).fadeOut(function() {
                    $("#"+dialogueID).html(dialogue_str);
                    $("#"+dialogueID).fadeIn();
                }); 
            });
    }
}
