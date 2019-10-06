$(document).ready(function(){

	var $image = $('#image');
	var options = {
		aspectRatio : 16 / 9,
		preview : ".cropped-imaged-preview",
		viewMode : 2,
		ready : function(e){
			console.log(e);
		},
		cropstart : function(e){
			console.log(e);
		},
		cropmove : function(e){
			console.log(e);
		},
		cropend : function(e){
			console.log(e);
		},
		crop : function(e){
			console.log(e);
		},
		zoome : function(e){
			console.log(e);
		}
	}

	var aspectRatio = $('.aspect-ratio');

	$image.cropper(options);
	
	$('.aspect-ratio').on('click', function(e){
		console.log($(this).html());
	})


})