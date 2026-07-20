document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CONTACT FORM (SAFE)
    ========================== */
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "") {
                alert("Please enter your full name.");
                return;
            }

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            let phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            if (message === "") {
                alert("Please enter your message.");
                return;
            }

            alert("Form submitted successfully!");
        });
    }


    

});


    /* =========================
       REGISTER FORM
    ========================== */


     let REGISForm = document.getElementById("registerForm");

    if (REGISForm) {
        REGISForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let namee = document.getElementById("fullname").value.trim();
            let emaile = document.getElementById("emails").value.trim();
            let phonee = document.getElementById("phoneno").value.trim();
            let createpass = document.getElementById("createpassword").value.trim();
            let conformpas = document.getElementById("confrompassword").value.trim();

            if (namee === "") {
                alert("Please enter your full name.");
                return;
            }

            let emailPatter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPatter.test(emaile)) {
                alert("Please enter a valid email address.");
                return;
            }

            let phonePatter = /^[0-9]{10}$/;
            if (!phonePatter.test(phonee)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }
            
           if (createpass === "") {
        alert("Please enter password.");
        return;
        }

        if (conformpas === "") {
            alert("Please confirm your password.");
            return;
            }

        if (createpass !== conformpas) {
            alert("Passwords do not match.");
            return;
            }

        let user = {
        fullname: namee,
        email: emaile,
        phone: phonee,
        password: createpass
        };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");
    window.location.href = "login.html";

        
        });
    }


     /* =========================
       LOGIN FORM
    ========================== */

    let loginForm = document.getElementById("loginform");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        let user = JSON.parse(localStorage.getItem("user"));

        if (user == null) {
            alert("Please Register First");
            return;
        }

        if (email === user.email && password === user.password) {
            alert("Login Successful");
            window.location.href = "index.html";
        } else {
            alert("Invalid Email or Password");
        }
    });
}




/* =========================Add to cart and button function  add ========================== */



let count = 0;

// Add Button
let addButtons = document.querySelectorAll(".addCart");
                            //btn button  class name
addButtons.forEach(function(btn){

    btn.onclick = function(){

        count++;
        //cart count id name
        document.getElementById("cartCount").innerHTML = count;

        //btn.style.display = "none";

        //btn.nextElementSibling.style.display = "inline-block";

    }

});


// Remove Button
let removeButtons = document.querySelectorAll(".removeCart");

removeButtons.forEach(function(btn){

    btn.onclick = function(){

        count--;

        document.getElementById("cartCount").innerHTML = count;

       // btn.style.display = "none";

        //btn.previousElementSibling.style.display = "inline-block";

    }

});



// shop code js

const searchBox = document.getElementById("searchBox");
const category = document.getElementById("category");
const products = document.querySelectorAll(".product-item");

function filterProducts() {

    let searchValue = searchBox.value.toLowerCase().trim();
    let categoryValue = category.value;

    products.forEach(function(product){

        let productName = product.querySelector("h5").textContent.toLowerCase();
        let productCategory = product.getAttribute("data-category");

        let searchMatch = productName.includes(searchValue);
        let categoryMatch = categoryValue === "all" || productCategory === categoryValue;

        if(searchMatch && categoryMatch){
            product.style.display = "";
        }else{
            product.style.display = "none";
        }

    });

}

searchBox.addEventListener("input", filterProducts);
category.addEventListener("change", filterProducts);