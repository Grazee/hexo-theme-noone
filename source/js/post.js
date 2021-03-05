// 删除图片后面的换行符
$("article#post img")
    .next()
    .remove();

// 添加图片标题
$("article#post img")
    .each(function() {
        if ($(this).attr("alt")) {
            var title = $(this).attr("alt");
            $(this).after("<span class=\"image-title\">" + title + "</span>");
        }
    });

// 点击放大图片
$("article#post img")
    .click(function() {
        showImage($(this));
    });

function showImage(image) {
    var div = $("div#fullscreen-image");
    var img = $("div#fullscreen-image img");    
    div.show();
    img.attr("src", image.attr("src"));
    var top = (div.height() - img.height()) / 2;
    var left = (div.width() - img.width()) / 2;
    img.css("top", top);
    img.css("left", left);
}

// 点击方法的图片关闭
$("div#fullscreen-image").click(function(){
    $("div#fullscreen-image").hide();
});
