const div=document.querySelector(".container");
div.style.cssText="display:flex;flex-wrap:wrap;height:480px;width:480px;border:1px solid black;color:white;padding:0;margin:0;margin-bottom:20px;";
const btn=document.querySelector(".new");
let rand=false;
function createS(s){
    div.innerHTML="";
    for(let i=0;i<(s*s);i++)
    {
        const square=document.createElement("div");
        const si=480/s;
        square.style.cssText=`box-sizing:border-box;margin:0;padding:0;border:1px solid #0D00FF;height:${si}px;width:${si}px;color:white;`;
        div.appendChild(square);
        if(rand===false){
            square.addEventListener("mouseenter",()=>
            {
                square.style.backgroundColor="red";

            });
        }
        else{//if random key is selected then random color
        square.addEventListener("mouseenter",()=>
        {
            square.style.backgroundColor=getRandomRGB();

        });
        }
        // Initial opacity stored as dataset
        square.dataset.opacity = "1";

        // Click to darken (reduce opacity)
        square.addEventListener("click", () => {
            let current = parseFloat(square.dataset.opacity);
            if (current > 0) {
                current = Math.max(0, current - 0.1); // avoid going below 0
                square.dataset.opacity = current.toFixed(1);
                square.style.opacity = current.toFixed(1);
                console.log("opacity:", current.toFixed(1)); // 🔍 debug line
            }
        });
    }

    
}
let currentSize=16;//current size is global so can remeber new size also
createS(currentSize);
function newS(){
    div.innerHTML="";
    const f=prompt("Enter the new size:");//if 15 then 
    currentSize=Number(f);
    if(currentSize>=0 && currentSize<100){
        createS(currentSize);    
    }
    else{
        alert("enter number btw 0-100");
    }
}
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor="blue";
});
btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor="transparent";
});
btn.addEventListener("click",newS);

const div2=document.querySelector(".btns");
div2.style.cssText=" display:flex;gap:20px; margin-bottom:20px;";
const reset=document.querySelector(".reset");
reset.addEventListener("mouseenter",()=>{
    reset.style.backgroundColor="rgb(0, 255, 72)";
});
reset.addEventListener("mouseleave",()=>{
    reset.style.backgroundColor="transparent";
});
reset.addEventListener("click",()=>{
    currentSize=16;
    rand=false;
    createS(currentSize);
});
//for random color
const random=document.querySelector(".random");
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
//adidng hover effect
random.addEventListener("mouseenter",()=>{
    random.style.backgroundColor="rgb(255, 0, 157)";
});
random.addEventListener("mouseleave",()=>{
    random.style.backgroundColor="transparent";
});
random.addEventListener("click",()=>{
    rand=true;
    createS(currentSize);
});