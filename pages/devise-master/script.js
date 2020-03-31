const url = "http://data.fixer.io/api/latest?access_key=f64250899729d826318cf09d00409de7&base=EUR&symbols=USD,GBP,JPY,EUR,ZAR,AUD,BRL,CAD,CNY,INR,SGD,CHF,AED,VND";

function recupererValeur() {
$.ajax({
    url: url,
    type: 'GET',
    success: function(res, status, req) {


        var rates = res.rates,
        fromAmount = document.getElementById('fromAmount').value,
        from = document.getElementById('from').value,
        to = document.getElementById('to').value,
        result = fromAmount * rates[to] / rates[from];

        document.getElementById("toAmount").value = result

        console.log(toAmount);    
    }
});

};

var icon = document.getElementById('icon')

icon.addEventListener('click', function() {
    if(icon.className === "fas fa-moon") {
        document.body.style.background = "black"
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    } else {
        document.body.style.background = ""
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
})