$(document).foundation()
var wW = $(window).width();
var wH = $(window).height();
var dH = $(document).height();
var oneQuarter = dH / 4; 			oneQuarter = Math.round(oneQuarter);
var twoQuarter = oneQuarter * 2; 	
var threeQuarter = oneQuarter * 3; 	
var fourQuarter = (oneQuarter * 4) - wH;	


//console.log("window height:"+wH+ "document height:"+dH+ " oneQuarter:" + oneQuarter +  " twoQuarter:" + twoQuarter + " threeQuarter:" + threeQuarter + " fourQuarter:" +fourQuarter);

// $(document).on('scroll', function () {

// 	//console.log($(document).scrollTop())

//     if ($(document).scrollTop() >= oneQuarter) {
//         $("#sticky-footer").addClass("slide-up");
//     } else if ($(document).scrollTop() <= oneQuarter) { 
//         $("#sticky-footer").removeClass("slide-up");
//     }
// });


	var lastScrollTop = 0;
	$(document).on('scroll', function () {
	   var st = $(window).scrollTop();
	   if (st > lastScrollTop){
	      $("#sticky-footer").addClass("slide-up");
	   } else {
	      $("#sticky-footer").removeClass("slide-up");
	   }
	   lastScrollTop = st;
	});



