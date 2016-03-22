$(document).ready(function(e) {
    $(".productos .prod").click(function(e) {
		var link=$('<a>',{text: 'Eliminar',title: 'quitar',href: '#', class:"del", click: function(){ $(this).closest(".prod").remove();return false;} });
		var tmp=$(this);
        $($(tmp)).clone().append(link).appendTo(".canasta");
    });
	$(".canasta .del").click(function(e) {
		alert("--");
    });
});