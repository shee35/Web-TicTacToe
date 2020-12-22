
let arr=[[$("#id11"), $("#id12"), $("#id13")], [$("#id21"), $("#id22"), $("#id23")],[$("#id31"), $("#id32"), $("#id33")]];
let resetbtn = $("#reset");
let player1 = $("#score1");
let player2 = $("#score2");
let winrtxt = $("#dispwinner");

resetbtn.click(function(){
    reset();
});

let count =0;
let Player1Score=0;
let Player2Score=0;

for( let i=0; i<3; i++){
  for(let j=0; j<3; j++){
       arr[i][j].click(function(){
           if(count<9){
            if(count%2==0){
                count++;
                arr[i][j].html("X");
            }
            else {
                count++;
                arr[i][j].html("O");
            }
           }
          else{
              resetboard();
          }
          checkWinner();
       });
   }
}

function reset(){
    Player1Score=0;
    Player2Score=0;
    player1.text(Player1Score);
    player2.text(Player2Score);
    winrtxt.html("");
    resetboard();
};

function resetboard(){
    count=0;
    for( let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            arr[i][j].html("-");
        }
    }

}

function checkWinner(){
    for( let i=0; i<3; i++){
        // column winning
        if((arr[0][i].html()=="X")&&(arr[1][i].html()=="X")&&(arr[2][i].html()=="X")){
            Player1Score+=1;
            player1.text(Player1Score);
            console.log(Player1Score);
            winrtxt.html(" 'X' is the winner!! ");
            resetboard();
        }

        else if((arr[0][i].html()=="O")&&(arr[1][i].html()=="O")&&(arr[2][i].html()=="O")){
            Player2Score+=1;
            player2.text(Player2Score);
            console.log(Player2Score);
            winrtxt.html(" 'O' is the winner!! ");
            resetboard();
        }
        // row winning
        else if((arr[i][0].html()=="X")&&(arr[i][1].html()=="X")&&(arr[i][2].html()=="X")){
            Player1Score+=1;
            player1.text(Player1Score);
            console.log(Player1Score);
            winrtxt.html(" 'X' is the winner!! ");
            resetboard();
        }

        else if((arr[i][0].html()=="O")&&(arr[i][1].html()=="O")&&(arr[i][2].html()=="O")){
            Player2Score+=1;
            player2.text(Player2Score);
            console.log(Player2Score);
            winrtxt.html(" 'O' is the winner!! ");
            resetboard();
        } 
        // diagonal winning
        else if((arr[0][0].html()=="X")&&(arr[1][1].html()=="X")&&(arr[2][2].html()=="X")){
            Player1Score+=1;
            player1.text(Player1Score);
            console.log(Player1Score);
            winrtxt.html(" 'X' is the winner!! ");
            resetboard();
        }

        else if((arr[0][0].html()=="O")&&(arr[1][1].html()=="O")&&(arr[2][2].html()=="O")){
            Player2Score+=1;
            player2.text(Player2Score);
            console.log(Player2Score);
            winrtxt.html(" 'O' is the winner!! ");
            resetboard();
        }
        // diagonal 2nd
        else if((arr[0][2].html()=="X")&&(arr[1][1].html()=="X")&&(arr[2][0].html()=="X")){
            Player1Score+=1;
            player1.text(Player1Score);
            console.log(Player1Score);
            winrtxt.html(" 'X' is the winner!! ");
            resetboard();
        }

        else if((arr[0][2].html()=="O")&&(arr[1][1].html()=="O")&&(arr[2][0].html()=="O")){
            Player2Score+=1;
            player2.text(Player2Score);
            console.log(Player2Score);
            winrtxt.html(" 'O' is the winner!! ");
            resetboard();
        }

    }
};
