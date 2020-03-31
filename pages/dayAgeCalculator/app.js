function dAge() {
    let birth = document.getElementById("birth").value;

    const msBetweenBirthn70 = Date.parse(birth);
    const msBetweenNown70 = Date.now();
    const ageInMilliseconds = msBetweenNown70 - msBetweenBirthn70;

    var ms = ageInMilliseconds;
    var s = 1000;
    var min = s*60;
    var h = min*60;
    var day = h*24;

    var days = Math.round(ms/day);


    document.getElementById("result").innerHTML = days;
    console.log(Math.round(ms/day));
}