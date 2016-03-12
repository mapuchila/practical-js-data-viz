 // JAVASCRIPT FOR JS DATA VIZ 


//Size bars according to percentage value

function size_bars() {

	var height; //global variable in order to set value dynamically

    $(".bar").each(function(){
      
      height = Number($(this).attr("data-num")) * 4; // highest percentage is 100, so a bar can't be taller than 400px

      $(this).css("height",height+"px");

      // deal with the percentage values' color smaller than 20px
      // if (height <= 20) {
      // 	$(this).css("color","#707070");
      // } 
      // else {
      //   $(this).css("color","#fff");
      // }
      
    });
    

}


//Initialize functions

$(document).ready(function(){

	size_bars();
	

});	