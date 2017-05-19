function principal(){
	var arrayPhotos= ["assets/img/a1.jpg","assets/img/a2.jpg","assets/img/a3.jpg","assets/img/a4.jpg"]

	var photos = document.getElementById("fotopandas");

	//CREAR DIVS PARA CADA FOTO

	arrayPhotos.forEach(function(element){
		var box = document.createElement("div");//solo para crear cada div
		photos.appendChild(box);
		box.setAttribute("class", "pictures");
		box.setAttribute("id", "div" + arrayPhotos.indexOf(element));

		var fotopandas = document.createElement("img");
		fotopandas.setAttribute("class","foto");
		fotopandas.setAttribute("id","foto" + arrayPhotos.indexOf(element));
		fotopandas.setAttribute("src", element);

		box.appendChild(fotopandas);
		photos.appendChild(box);



	});
		


}

principal();