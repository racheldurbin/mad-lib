$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const personInput = $("input#person").val();
    const placeInput = $("input#place").val();
    const thingInput = $("input#thing").val();
    const phraseInput = $("input#phrase").val();
    const action1Input = $("input#action1").val();
    const action2Input = $("input#action2").val();
    const action3Input = $("input#action3").val();
    const adjectiveInput = $("input#adjective").val();

    $(".person").text(personInput);
    $(".place").text(placeInput);
    $(".thing").text(thingInput);
    $(".phrase").text(phraseInput);
    $(".action1").text(action1Input);
    $(".action2").text(action2Input);
    $(".action3").text(action3Input);
    $(".adjective").text(adjectiveInput);

    $("#story").show();
    
    event.preventDefault();
  });
});