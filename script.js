const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.getElementById("random-btn");

css.textContent =` linear-gradient(to right, #00ff00 , #ff0000) ;`

const generateRandomCOlor=()=>{
	let letters="0123456789ABCDEF"
	let color='#'
	for(let i=0;i<6;i++){
		color+=letters[Math.floor(Math.random()*16)]
	}
	return color
}
css.textContent =` linear-gradient(to right, #00ff00 , #ff0000) ;`

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

randomBtn.addEventListener('click',function(){
	body.style.background = 
	`linear-gradient(to right,  
	${generateRandomCOlor()} 
	, 
	${generateRandomCOlor()} 
	)`;
	css.textContent = body.style.background + ";";
})


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);