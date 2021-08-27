document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.body');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi100";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 150){
            if(trangthai == "duoi100")
            {
                trangthai="tren100";
                menu.classList.add('menutora');
            }
        }
        else{
            if(trangthai=="tren100"){
            menu.classList.remove('menutora');
            trangthai="duoi100";}
        }
    
    })
})

function myFunction() {
  var x = document.getElementById("saler");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  

     function broFunction() {
       var x = document.getElementById("saler");
       if (x.style.display === "block") {
         x.style.display = "none";
       } 
       else {
         x.style.display = "none";
       }
     } 



    // $(window).on('load',function(){
    //    var delayMs = 1000; // delay in milliseconds
      
    //   setTimeout(function(){
    //        $('#myModal').modal('show');
    //     }, delayMs);
    //  });    
  

    const targetDiv = document.getElementById("myModal");
const btn = document.getElementById("close-im");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

