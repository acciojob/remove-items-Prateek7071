//your JS code here. If required
document.querySelector('input[type="button"]').addEventListener('click',(e)=>{
	let scolor = document.getElementById('colorSelect')
	scolor.remove(scolor.value)
})