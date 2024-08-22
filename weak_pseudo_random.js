webgoat.customjs.assignRandomVal = function () {
	var x = Math.floor((Math.random() * 100) + 1);
	var y = Math.floor((Math.random() * 200) + 2);
	document.getElementById("magic_num").value = x;
};
