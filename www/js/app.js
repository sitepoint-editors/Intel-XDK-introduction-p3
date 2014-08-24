function getData(){
    
    return data;
    
    console.log("retrieving data");
    
}

function displayData(){
    
    console.log("Clean the #photoList div tag");
    
    $("#photoList").html('');
    
    var data = getData();
    
    $.each(data, function(index, photo){
        
        var img = $.create("img", {src: "images/" + photo.url, alt: "something"});
        img.attr("data-id", photo.id);
        img.attr("style", "width: 100%; margin: 2px auto; display: block;");
        
        var imgContainer = $.create("div",{});
        imgContainer.append(img);
        
        console.log("Append img " + photo.id + " on the #photoList container");
        
        $("#photoList").append(imgContainer);
    
    });
}

$("#photoList").on("click", "img", function (){
    
    var id = $(this).attr('data-id');
    
    $("#photo h3").html(getData()[id].title);
    $("#photo img").attr("src", "images/" + getData()[id].url);
    $("#photo p").html(getData()[id].description);
    
    console.log("You clicked: " + id + " photo");
    
    $.ui.loadContent("#photo",false,false,"pop");
    
});

$("#emailButton").on("click", function(){
    
    var src = $("#photoImg").attr("src");
    
    console.log(src);
    
    intel.xdk.device.sendEmail(
        'Hi, Check out this photo:' + src, // The body raw
        "aleksanderkoko@gmail.com",     // To the email that you want to send
        "Something cool that i found",  // The subject
        true,                           // Is Html
        "",                             // CCed
        ""                              // BCCed
    );
    
    console.log("Did you send the email?");
    
});