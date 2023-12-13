let barThree = document.querySelector(".bar3");
let barFour = document.querySelector('.bar4');
let temp = "$52.36";
let temp1 = "$34.91";


barThree.addEventListener("click", function(){
    barThree.style.backgroundColor = "green";
    barThree.style.display = temp;
});

barFour.addEventListener('click', function(){
    barFour.style.backgroundColor = "violet";
});