//click on X to delete entire Todo
$("ul").on("click", "span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
	$(this).remove(); //to remove the li of particular span
})
});

//To Strike Off Specific Todos By Clicking on ToDo
$("ul").on("click", "li", function(){
	$(this).toggleClass('stroked');
});

$("input[type='text']").on("keydown",function(e){
if(e.keyCode === 13) {

	//grabbing entered value
	var value = $(this).val();
	$("input").val(""); //place it before append otherwise it will not show placeholder
	//create a new li and add to ul
	$("ul").append("<li> <span> X </span> " + value + "</li>");
}
});

$(".material-icons").on("click",function(){
$("input[type='text']").fadeToggle();
});

//we need to use .on on all ul instead of li or span as we need new li's, i
//it will start to relect actions on it