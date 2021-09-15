

// var x = document.getElementById('nav-over');
// var y = document.getElementById('header__infor');
// function viec1() {
//     y.style.display = "block";
// }
// function viec2() {
//       y.style.display = "none"; 
// }

// x.addEventListener('mousemove', viec1);
// y.addEventListener('mousemove', viec1);
// y.addEventListener('mouseout', viec2);
// x.addEventListener('mouseout', viec2);


function btn() {
    var item = document.getElementById('header__bottom-button');
    if(item.style.display === "none"){
        item.style.display = "block";
        item.style.animation = "exam 0.5s forwards";
    } else{
        if(item.style.display !== "none"){
            item.style.display = "none";
            item.style.animation = "exams 0.5s forwards"
        }
    }
}

