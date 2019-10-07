var $image;
var cropper;
var options = {
	//aspectRatio : 16 / 9,
	preview : ".cropped-imaged-preview",
	viewMode : 0,
	ready : function(e){
		//console.log(e);
	},
	cropstart : function(e){
		//console.log(e);
	},
	cropmove : function(e){
		//console.log(e);
	},
	cropend : function(e){
		//console.log(e);
	},
	crop : function(e){
		//console.log(e);
	},
	zoome : function(e){
		//console.log(e);
	}
}

function init(){
	
	$image.cropper(options);
	cropper = $image.data('cropper');
	console.log({cropper});
}

$(document).ready(function(){

	$image = $('#image');
	init();

	$('.aspect-ratio').on('click', function(e){
		console.log("Setting aspect ration to : " + $(this).html());
		var data = $(this).html().split(":");
		var ratio = NaN;
		if(data.length > 1) {
			ratio = data[0] / data[1];
		}
		cropper.setAspectRatio(ratio);
		$('.aspect-ratio').removeClass('active');
		$(this).addClass('active');
	});

	$('.view-mode').on('click', function(e){
		console.log("Setting view mode to : " + $(this).html());
		var data = $(this).data('value');
		cropper.destroy();
		options.viewMode = Number(data);
		init();
	});

})



