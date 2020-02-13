let input=document.querySelector("input");
let ul=document.querySelector('ul');
document.querySelector("input").onkeypress=function () {
	if (input.value=='' && event.keyCode==13) {
		alert('Введите слово');
		let audio= new Audio();
		audio.src='Nope.mp3';
		audio.play();
	}
	if (event.keyCode==13 && input.value!='') {
		let li=document.createElement("li");
		let img=document.createElement("img");
		let span=document.createElement("span");
		span.innerHTML=input.value;
		img.setAttribute('src','garbage.svg');
		li.appendChild(img);
		li.appendChild(span);
		ul.appendChild(li);
		input.value="";
	}
}
ul.onclick=function () {
	let target=event.target;
	if (target.tagName=="LI" || target.tagName=='SPAN') {
		target.classList.toggle('check')
	}
	else if (target.tagName=='IMG') {
		target.parentElement.remove();
	}
}
document.querySelector('.clear').onclick=function () {
	ul.innerHTML='';
	input.value='';
}
document.querySelector('.finish').onclick=function () {
	let liALL=document.querySelectorAll('li');
	for (let i = 0; i < liALL.length; i++) {
		liALL[i].classList.add("check");

	}
}