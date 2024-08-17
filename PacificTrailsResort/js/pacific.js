/*
by Aaron White
WEBD-225-40, Week 2
Borrowed heavily from the code and instruction
of Raymond Camden at the following website:
https://www.raymondcamden.com/2022/03/27/saving-form-data-in-client-side-storage

It seems to me JS functions are set up similarly to how PHP would handle this scenario, but
the JS Listeners allow instant action instead of how the data (with PHP) would
be sent to a PHP file, processed, and then returned to the original web page.
 */

// create EventListener
document.addEventListener('DOMContentLoaded', info,false);
// create global variables
let myFName, myLName, myEmail, myComments;

function info() {
    // get the DOM objects one time
    myFName = document.querySelector("#myFName");
    myLName = document.querySelector("#myLName");
    myEmail = document.querySelector("#myEmail");
    myComments = document.querySelector("#myComments");

    // listen for input on all form fields to record instantly
    let entries = Array.from(document.querySelectorAll(
        "#reservation input, #reservation textarea"));
    entries.forEach(e => e.addEventListener("input", handleChange, false));

    // check for saved form info and retrieve if exists
    let saved = getForm();
    if(saved) {
        myFName.value = saved.myFName;
        myLName.value = saved.myLName;
        myEmail.value = saved.myEmail;
        myComments.value = saved.myComments;
    }

    // clear form after "submit", otherwise, stays until cache is cleared
    document.querySelector("#reservation").addEventListener("submit", () => {
        window.localStorage.removeItem("form");
    }, false);
    // submit clears form on click!
    // how to determine if submit was successful? Links to external site!
    // future fix could link first to PHP file to check payload and then link to external site.
    // PHP file would then be responsible for clearing "form"
}

function getForm() {
    // check & retrieve any info stored in form array
    let f = window.localStorage.getItem("form");
    if(f) return JSON.parse(f);
}

function handleChange(e) {
    console.log("handleChange");
    // get all values and store in form array
    let form = {};
    form.myFName = myFName.value;
    form.myLName = myLName.value;
    form.myEmail = myEmail.value;
    form.myComments = myComments.value;

    // store info
    saveForm(form);
}

function saveForm(form) {
    // simplify information and save in array
    let f = JSON.stringify(form);
    window.localStorage.setItem("form", f);
}

// Mobile Menu //
