$.post("module/getData.php", {}, function (resp) {
    var doc = $(resp);
    var weight = parseInt(doc.find("height").html().split("/")[1]);
    var height = parseInt(doc.find("height").html().split("/")[0]);
    var head = doc.find("playerimage").html().match(/src=\"(.*)\"/i)[1];
    var foot = doc.find("foot").html().match(/(:?right|left)Foot([1-5])/gm);
    var bridDay = doc.find("birthdate").html().substring(0,10);
    console.log(height, head, foot, bridDay);
});