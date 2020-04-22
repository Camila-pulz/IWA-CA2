//these code were written by Mikhail Timofeev. Code available on https://github.com/mikhail-cct/CA1-In-class-Demo

function draw_table(){
    $("#results").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/html")
};

function select_row()
{
	$("#mediaBucket tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var category = $(this).prevAll("tr").children("td[colspan='8']").length - 1;
		var record = $(this).attr("id") - 1;
		delete_row(category, record);
	})
};

function delete_row(categ, rec)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				category: categ,
				record: rec
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function(){
    draw_table();
});
