$(document).ready(function(){

	var $image = $('#image');

	$image.cropper({
		//aspectRatio: 16 / 9,
		preview: ".cropped-imaged-preview",
		crop(event){
//			console.log("start - x : " + event.detail.x);
//			console.log("start - y : " + event.detail.y);
//			console.log("Width : " + event.detail.width);
//			console.log("Height : " + event.detail.height);
//			console.log("Rotate : " + event.detail.rotate);
			console.log(event.detail.scaleX);
		    console.log(event.detail.scaleY);
		}
	});


})