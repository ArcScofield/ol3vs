$.post("module/getData.php", {}, function (resp) {
    var doc = $(resp);
    var nation = doc.find("nationality").html();
    var weight = parseInt(doc.find("height").html().split("/")[1]);
    var height = parseInt(doc.find("height").html().split("/")[0]);
    var head = doc.find("playerimage").html().match(/src=\"(.*)\"/i)[1];
    var foot = [];
    doc.find("foot").html().replace(/(:?right|left)Foot([1-5])/gm, function (a,b,c) {
    	foot.push(~~c);
    });
    var bridDay = doc.find("birthdate").html().substring(0,10);
    var ycnl = doc.find("traits").html();
    console.log(weight, height, head, foot, bridDay, ycnl);
});