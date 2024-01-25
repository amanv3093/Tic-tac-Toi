let boxes=document.querySelectorAll(".box");
let winner=document.querySelector("#winner");
let turn=true;

let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],]
let y=0,p1=0,p2=0,tie=0,count=0;

let plyr1=document.getElementById("plyr1")
let plyr2=document.getElementById("plyr2")
let ties=document.getElementById("ties")

let Reset=document.getElementById("Reset");
Reset.addEventListener(("click"),()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   count=0;
    turn=true;
    winner.innerHTML="";
    winner.innerText="0 turn"
  console.log("reset working")
    y=0;
 

})



winner.innerText="0 turn"
boxes.forEach((box)=>{
    box.addEventListener(("click"),(e)=>{
     if(turn){
            box.innerText="0"
            winner.innerText="x turn"
            turn=false;
        }else{
            box.innerText="x"
            winner.innerText="0 turn"
            turn=true;

        }
        box.disabled=true;
        checked();
        
      
    })
})

function checked(){
    for(let pattern of arr){
        y++;
       
        // console.log(pattern)
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""  ){
            if(pos1===pos2 && pos2===pos3){
                for(let box of boxes){
                    box.disabled=true;
                }
                winner.innerHTML=pos1+" is winner";
                count++;
                if(pos1==='0'){
                    plyr1.innerText=++p1;
                    console.log("zero")

                }else if(pos1==='x'){
                    plyr2.innerText=++p2;
                }
             

            }

        }
        if(y>=72 && count==0){
            winner.innerText="Draw";
            ties.innerText=++tie;
         

        }
        
    }
}

