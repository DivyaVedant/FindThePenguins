$(document).ready(function () {
	var score = 0;
	var highscore = 0;

	//This code will run after your page loads
	$("#score").html('Score : ' + score + '<br> High Score : ' + highscore);
	//alert("Yaaaarrrr! Let Play Pengiun Game!");


	//Shuffling Random Images//
	RandomImage();

	$("body").on("click", ".Peng:not(.addPen)", function (event) {
		var p = document.getElementById('penguinsSound');
		p.currentTime = 0;
		p.play();
		setGame($(this));
	});


	//Updating Score//
	function setGame(pen) {
		//alert("Hello");
		var num = pen.attr('id');
		//alert(num);
		//var Char = num.substr(num.length - 1);
		var Char = $("#"+num).data("val");
		//alert(Char);
		if (pen.hasClass("Peng addYeti")) {
			var p = document.getElementById('yetiSound');
			p.currentTime = 0;
			p.play();
			pen.css('background-image', 'url(images/yeti.png)');
			setTimeout(function(){
				alert("Yaaaarrrr ! Its Yetiiit");
				if(score > highscore){
					highscore = score;	
				}
				score = 0;
				$("#score").html('Score: ' + score + '<br> High Score : ' + highscore);
				//alert("Game Over. Want to Play Next Game Click Ok.");
				$(".addPen").removeAttr("style");
				$(".addPen").removeClass("addPen");
				if(confirm("Game Over. Want to Play Next Game ?")){
					$(".addYeti").removeAttr("style");
					$(".addYeti").removeClass("addYeti");
					RandomImage();
				}
				else{
					alert("Your high score is : " + highscore + ". \n Thank you");
					location.reload();
				}
			}, 100);
		} else {
			pen.addClass('addPen');
			pen.css('background-image', 'url(images/penguin_' + Char + '.png)');
			score = score + 1;
			$("#score").html('Score : ' + score + '<br> High Score : ' + highscore);
		}
	}

	function RandomImage() {
		var min=1;
		var max=15;
		var n = Math.floor(Math.random() * (max - min + 1) + min);
		//console.log("id = " + n);
		$("#penguin" + n).addClass('addYeti');
		//$("#penguin" + n).attr('id', 'yeti');
	}

});