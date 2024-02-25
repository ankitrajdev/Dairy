let slideIndex = 0;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
    }
}

setInterval(() => {
    moveSlide(1);
}, 3000);

showSlides(slideIndex);
function search() {
    document.querySelector(".nav_mob_search").classList.toggle("expand")
}
function toggle() {
    document.querySelector(".nav_link_1").classList.toggle("expand")
}
function author() {
    document.querySelector(".author_info").classList.toggle("expand");
}
function author_close() {
    document.querySelector(".author_info").classList.close("expand");
}
function trackOrder() {
    var orderID = document.getElementById("orderID").value;
    var resultDiv = document.getElementById("result");
    if (orderID.trim() === "") {
        resultDiv.innerHTML ="<p>Please Enter Your Order Id</p>";
    } else {
        resultDiv.innerHTML = "<p>Your order with ID " + orderID + " is currently being processed.</p>";
    }
  }
  document.querySelector(".nav_link_cart").addEventListener("click",function(){
    window.location.href ="cart.html";
    })
    const mainSection = document.querySelector(".main");
    const offlineImage = document.querySelector(".network_disconnect");
    function handleConnectionStatus() {
        if (navigator.onLine) {
          mainSection.style.display = "block";
          offlineImage.style.display = "none";
        } else {
          mainSection.style.display = "none";
          offlineImage.style.display = "block";
        }
      }
      
      handleConnectionStatus();

      window.addEventListener("online", handleConnectionStatus);
      window.addEventListener("offline", handleConnectionStatus);