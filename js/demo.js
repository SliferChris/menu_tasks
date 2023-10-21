//SELECT A COLOUR FROM MENU
$("#colours ").on("change", function () {
//STORES USER SELECTED VALUE FROM THE MENU WITH THE ID COLOURS
let pnlcol = $(this).val();
//PASSES pnlcol VALUE TO THE BACKGROUND COLOUR
$("#image-holder, h2").css({backgroundColor: pnlcol, color: "#fff"});
}) //END FUNCTION

//SELECT AN IMAGE FROM THE MENU
$("#images").on("change", function () {
const imgArray = ["meadow.jpg", "whiteroom.jpg", "coffee.jpg", "ronaldo.png"];
let selectedImage = $(this).val();
//TEST TO SEE IF USER SELECTION IS EMPTY
if (selectedImage === "") {
    //SET TO  DEFAULT IMAGE CODE
    //$("#image-holder > img").attr("src", "images/default.jpg");
} else {
    //IF SELECTION NOT EMPTY LOOP THROUGH ARRAY & DISPLAY SELECTED IMAGE
    for (i = 0; i <= imgArray.length; i++) {
        if (selectedImage === imgArray[i]) {
            $("#image-holder > img").attr("src", "images/" + selectedImage);
        } //END MAIN IF
    } //END LOOP
} //END ELSE 
}) // END FUCTION

// INPUT NAME & DISPLAY TO PANEL
$("button").on("click", function (){
// COLLECT THE USER NAME FROM THE INPUT
let nameInput = $("#sbmt-name").val();
//DISPLAY THE NAME AS TEXT TO THE PANEL
$(".name-display").text("Welcome " + nameInput);
}) //END FUNCTION