document.getElementById("header").addEventListener("mouseover", function() {
    document.getElementsByClassName("content-wrapper").style.backgroundColor = "green";
});
    
document.getElementById("header").addEventListener("mouseout", function() {
    document.getElementsByClassName("content-wrapper").style.backgroundColor = "red";
});
