//menubar
$(function(){
  var work_top = $("#second").offset().top;
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if( scroll >= work_top){
      $("#navbar").fadeIn(300);
    } else {
      $("#navbar").fadeOut(300);
    }
  });
});

//smooth scrollTop
$(function(){
  $('a[href^=#]').on("click", function(){
    var href = $(this).attr("href");
    var target = $(href);//$(this.hash)
    var targetY = target.offset().top;
    $("html, body").animate({scrollTop:targetY}, 400, 'swing');

    console.log(targetY);
    return false;
  });
});

//bg 駆動
$(function () {
		move_bg();
});
 function move_bg() {
 	$("#second, #forth").animate({
 		backgroundSize: "2020px"
 	}, 3000).animate({
 		backgroundSize: "1920px"
 	}, 3000);

 	setTimeout("move_bg()",6000);
 }

//human駆動
$(function(){
  rect();
});

function rect() {
  $("#human1, #human3").animate({marginTop: "10px"}, 1000)
  .animate({marginTop: "0px"}, 1000);
//要素にmarginがなければpixelだけでも可能
  $("#human2").animate({marginTop: "-=10px"}, 750)
  .animate({marginTop: "+=10px"}, 750);

  setTimeout("rect()");
};


$(function(){
	var icatch = $("#eye_catch");	//背景
	var copy = $("#catch_copy");	//テキスト
	var mask = $("#mask");	//FadeIn用

	mask.fadeOut(function(){
		copy.fadeIn(1000);
	});

	icatch.animate({//背景変化
		backgroundSize: "100%"
	}, 3000, function(){
		mask.fadeIn(1000, function(){//changein
			icatch.css({//第2段落css書き換え120%表示
				"background-image": "url('./main2.jpg')",
				"background-size": "120%"
			});
			copy.hide().children("p").html("弊社が信頼される理由");//HTML書き換え

      //第2段落開始
      mask.fadeOut(1000 , function(){//changeout
				copy.fadeIn(1000);
			});

			icatch.animate({
				backgroundSize: "100%"
			}, 3000, function(){
				mask.fadeIn(1000, function(){
					icatch.css("background", "none");
					copy.hide();
					mask.fadeOut(600, function(){
						$("#main_img").fadeIn(1500);
					});
				});
			});

		});
	});

});

//botton
$(function(){
  $("#send").hover(function(){
    $("#send img").attr("src","./send_on.png")
  },function(){
    $("#send img").attr("src","./send_off.png")
  });
});
