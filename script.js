let game_grid =$(".frame");
let mesage=$("#mesage");
let turn="X";
let win=false;
let mesagetext;
let count=0;
let output=$(".results");
let lID;

game_grid.find("button").click(function () {
    mesage.html("<p1></p1>");
    if(!win){
        if($(this).html()==""){
            $(this).html(turn);
            chek();
            next();
        }else{
            mesage.html("<p1>Already filled out!</p1>");
        }
    } 
});

function next ()
{
    if (turn == "X"){
        turn="O";
    }else{
        turn = "X";
    }
}

function chek (){
    linChek(".b11", ".b12", ".b13");
    linChek(".b21", ".b22", ".b23");
    linChek(".b31", ".b32", ".b33");
    linChek(".b11", ".b22", ".b33");
    linChek(".b31", ".b22", ".b13");
    linChek(".b31", ".b21", ".b11");
    linChek(".b32", ".b22", ".b12");
    linChek(".b33", ".b23", ".b13");
}

function linChek(poz1, poz2, poz3){
    if($(poz1).html()== $(poz2).html() && $(poz3).html()== $(poz2).html() && $(poz1).html() != ""){
        mesagetext= turn + " Winn !!!";
        mesage.html(mesagetext);
        win=true;
        $(poz1).css( "background-color", "#35f035");
        $(poz2).css( "background-color", "#35f035");
        $(poz3).css( "background-color", "#35f035");
        count ++;
        mesagetext="something";
        let par = document.createElement("p1");
        par.textContent=mesagetext;
        par.className="winnersTx";
        lID="l" + count;
        par.id=lID;
        output.append(par);
        lID="#" +lID;
        mesagetext=`<p1 class="winnersTx">${count}. -  ${turn}</p1><br>`;
        $(lID).html(mesagetext);
    }
}

let reset_button=$("#reset");
reset_button.click(function () {
    turn="X";
    mesagetext="";
    $(".Button").html(mesagetext);
    $(".Button").css( "background-color", "khaki");
    win=false;
    mesage.html(mesagetext);
});