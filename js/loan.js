$(function(){
	
	 $("#ipt1").click(function(){
	 	 $("#slide1").css("display","block")
	 	 $("#ipt1 img").prop("src","img/icon_down.png")
	 })
	 
	 
	 $("#slide1 li").hover(function(){
	 	$(this).css("background","#2288F6")
	 },function(){
	     $(this).css("background","white")
	 })
	 
	 $("#slide1 li").click(function(){
	 	$("#p1 .ll").html($(this).html())
	 	$("#slide1").css("display","none")
	 	$("#ipt1 img").prop("src","img/down.png")
	 })
	 
	 //下面
	 
	  $("#ipt2").click(function(){
	 	 $("#slide2").css("display","block")
	 	 $("#ipt2 img").prop("src","img/icon_down.png")
	 })
	 
	 
	 $("#slide2 li").hover(function(){
	 	$(this).css("background","#2288F6")
	 },function(){
	     $(this).css("background","white")
	 })
	 
	 $("#slide2 li").click(function(){
	 	$("#p2 .ll").html($(this).html())
	 	$("#slide2").css("display","none")
	 	$("#ipt2 img").prop("src","img/down.png")
	 })
	 
	 
})