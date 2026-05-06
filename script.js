const add = document.querySelector("#add");
    const subtract = document.querySelector("#subtract");
    const reset = document.querySelector("#reset");
    const count = document.querySelector("#count");
    const counter = document.querySelector("#counter")

    let countValue = 0;

    count.textContent = countValue;


    add.addEventListener("click", ()=>{
      
      if(countValue<10){
        countValue++;
      }

      count.textContent = countValue;
      updateColor();
    });


    subtract.addEventListener("click", ()=>{
      
      if(countValue >-10){
        countValue--;
      }

      count.textContent = countValue;
      updateColor();
      });


    reset.addEventListener("click", ()=>{
      countValue = 0;
      updateColor();
      count.textContent = countValue;

    });

    function updateColor(){
      if(countValue<0){
        count.style.color = "red";
      }
      else if(countValue>0){
        count.style.color = "green";
      }
      else{
        count.style.color = "black";
      }
    }
