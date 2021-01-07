var rootref = firebase.database().ref().child('ImageDB');
var time=0;
rootref.on('child_added', snap => {
    var image = snap.child('Image').val();
    var img = new Image();
    // time+=1;
    img.src = "data:image/png;base64," + image
    var span='<span>'
        $("#gallery_div").append(span,img,'</span>');

    // if(time%4==0){
    //     var div='<div id='+time+'>'
    //     $("#gallery_div").append(div,img,'</div>');
    // }
    // else{
    //     var span='<span id='+time+'>'
    //     $("#gallery_div").append(span,img,'</span>');
    // }
});
$(document).on('click','img',function(){
    var imgs='<img src="'+$(this).attr('src')+'">';
    //var picsrc=imgs.outerHTML;
    localStorage.setItem("pic", imgs);
    alert('請到聊天室內按送出');
    window.close();
    //alert(picsrc);
    //var test= sessionStorage.getItem("pic", imgs);
    //console.log(test)
});
