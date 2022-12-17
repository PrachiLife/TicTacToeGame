console.log("Welcome To Tic-Tac-Toe Game");
let turn='x';
let win=0;
function changeTurn(turn)
{
	return turn==='x'?'0':'x';
}
let boxes=document.getElementsByClassName('box'); //It will return Html collection.
for(i=0;i<boxes.length;i++)
{	

	//boxes[i].addEventListener("click",myfun,{once:true});//Event can take place only one time when the box is clicked(Read).
	boxes[i].addEventListener("click",myfun);
	let boxtext=boxes[i].querySelector(".boxtext");
	function myfun()
	{
		if(win == 1) //when game won either by X or 0 then user does not able to click on any unfilled box.
		{
			return;
		}
		boxtext.innerText=turn;
		win=checkwon();
		//turn=changeTurn(turn);
		if(win!=1)
		{
			turn=changeTurn(turn);
			document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
		}
		else
		{
			document.getElementsByClassName("info")[0].innerText="Game Won By "+turn;			
		}
		
	}
}
function checkwon()
{
	boxtext=document.getElementsByClassName("boxtext");
	won=[
	[0,1,2,0,20,70],
	[3,4,5,0,20,206],
	[6,7,8,0,20,345],
	[0,3,6,90,201,121],
	[1,4,7,90,201,-15],
	[2,5,8,90,201,-158],
	[0,4,8,45,181,137],
	[2,4,6,135,149,-168],
	 ]
	 j=0;	
	 for(i=0;i<won.length;i++)
	 {
	 	if(win == 1)
	 	{
	 		return;
	 	}
		if( (boxtext[won[i][j]].innerText !== '') && (boxtext[won[i][j+1]].innerText !== '') && (boxtext[won[i][j+2]].innerText !== ''))
	 		{
	 			if (
	 				(boxtext[won[i][j]].innerText === boxtext[won[i][j+1]].innerText) &&
	 				(boxtext[won[i][j+1]].innerText === boxtext[won[i][j+2]].innerText)
	 				)
	 				{
	 					win=1;
						document.getElementById("line").style=`background-color:#620437; transform:rotate(${won[i][j+3]}deg) translate(${won[i][j+4]}px,${won[i][j+5]}px); transition:2s 1s ease-in-out;`;
	 					return win;
	 				}
	 		}
	 }
}
document.getElementById("reset").addEventListener("click",reset);
function reset()
{
	boxtext=document.getElementsByClassName("boxtext");
	for(i=0;i<boxtext.length;i++)
	{
		boxtext[i].innerHTML='';
	}
	win=0;
	console.log(win);
	turn='x';
	document.getElementById("line").style=`none`;
}