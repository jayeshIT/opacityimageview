var data = [];

for (var i = 0; i < 100; i++) {

	var imgView = Ti.UI.createImageView({
		image : '/appicon.png',
		height : 80,
		width : 80,
		top : 10,
		left : 10,
		id : i,
		opacity : 1,
	});
	$.Scroll1.add(imgView);
}

$.Scroll1.addEventListener('click', function(e) {
	
	if (e.source.opacity == 1) {
		
		e.source.opacity = 0.5;
		
		for (var i = 0; i < $.Scroll1.children.length; i++) {
			
			if (e.source.id != $.Scroll1.children[i].id) {

				if ($.Scroll1.children[i].opacity == 0.5) {
					$.Scroll1.children[i].opacity = 1;
				}
			}
		}
	} else {
		e.source.opacity = 1;
	}

});

$.win.open();
