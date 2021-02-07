var today = new Date();
let weekday;
if (today.getDay() == 5) {
    document.getElementById("fri").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.querySelector("tl").setAttribute("class","promo");
}