var modal = document.querySelector(".modal2");
var previews = document.querySelectorAll(".gallery img");
var previews2 = document.querySelectorAll(".gallery2 img");
var original = document.querySelector(".full-img");
var caption = document.querySelector(".caption");


previews.forEach(preview =>{
	preview.addEventListener("click", ()=>{
		modal.classList.add("open");
		original.classList.add("open")
		// dynamic
		var originalSrc = preview.getAttribute("data-original");
		original.src =originalSrc

		var altText = preview.alt;
		caption.textContent = altText;

	})
})

previews2.forEach(preview =>{
	preview.addEventListener("click", ()=>{
		modal.classList.add("open");
		original.classList.add("open")
		// dynamic
		var originalSrc = preview.getAttribute("data-original");
		original.src =originalSrc

		var altText = preview.alt;
		caption.textContent = altText;

	})
})

modal.addEventListener("click", (e) => {
	if(e.target.classList.contains("modal2")){
		modal.classList.remove("open");
		original.classList.remove("open");
	}
});



