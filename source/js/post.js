$("article#post img")
    .next()
    .remove();

$("article#post img")
    .each(function() {
        if ($(this).attr("alt")) {
            var title = $(this).attr("alt");
            $(this).after("<span class=\"image-title\">" + title + "</span>");
        }
});
