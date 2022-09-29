const firstname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const studynumber = document.querySelector("#studynumber");
const sub = document.querySelector(".sub");
const err = document.querySelector(".err")
const fnerr = document.querySelector(".fnerr");
const lnerr = document.querySelector(".lnerr");
const stiderr = document.querySelector(".stiderr");
const inp = document.querySelector(".inp");
const form = document.querySelector("form");
const Aesm = document.querySelector(".matn");
console.log(Aesm)

// let ferrors = '';
// let lerrors = '';
// let numerrors = '';

// function onlyLetters(str) {
//     return /^[a-zA-Z]+$/.test(str);
// }

// function onlyNumber(num) {
//     return /^[0-9]+$/.test(num);
// }

inp.addEventListener("click", () => {
    err.style.display = "none"
})
sub.addEventListener("click", posting)

function posting(e) {

    fnerr.innerText = "";
    lnerr.innerText = "";
    stiderr.innerText = "";

    e.preventDefault();
    const header = {
        "Content-type": "application/json; charset=UTF-8"
    }
    const data = JSON.stringify({
        name: firstname.value,
        lastname: lname.value,
        student_id: studynumber.value,
    })
    fetch('http://192.168.137.1:3000/api/postdata', {

        // Adding method type
        method: 'POST',

        // Adding body or contents to send
        body: data,

        // Adding headers to the request
        headers: header,
    })

    .then((response) => response.json())
        .then((data) => {
            console.log(data)

            if (data.Code == 404) {
                console.log("hi")
                    // sub.setAttribute("href", "http://google.com")
                    // console.log(sub)
                window.location.href = "../ARASH/index2.html";
                console.log(form)
            } else if (data.code == 204) {

                // sub.setAttribute("href", "http://google.com")
                // console.log(sub)

                Aesm.innerText = `${data.deatils.name}me${data.deatils.lastname}`;
                window.location.href = "../ARASH/index.html";
                console.log(form)
            } else {
                console.log("im here")
                data.forEach(e => {
                    console.log(e.context.label)
                    if (e.context.label == "name") {
                        fnerr.innerText = `*${e.message}`
                    } else
                    if (e.context.label == "lastname") {
                        lnerr.innerText = `*${e.message}`
                    } else
                    if (e.context.label == "student_id") {
                        stiderr.innerText = `*${e.message}`
                    }
                });
            }

            err.style.display = "flex";

        })
}


// firstname.addEventListener("keydown", (e) => {
//     ferrors = ferrors + e.key;
//     if (e.keyCode == 8) {
//         ferrors = ferrors.slice(0, ferrors.length - 10)
//     }
//     if (ferrors.length == 0 && e.keyCode == 8) {
//         ferrors = ""
//     }
//     if (!(onlyLetters(ferrors))) {
//         fnerr.innerText = 'you can only use letters';
//     } else {
//         fnerr.innerText = ''
//     }
//     if (!(ferrors.length > 2 && ferrors.length <= 255)) {
//         fnerr.innerText = 'please enter a valid first name'
//     }
//     console.log(ferrors)

// })




// lname.addEventListener("keydown", (e) => {
//     lerrors = lerrors + e.key;
//     if (e.keyCode == 8) {
//         lerrors = lerrors.slice(0, lerrors.length - 10)
//     }
//     // if (e.keyCode == 16) {
//     //     lerrors = lerrors.slice(0, lerrors.length - 5)
//     //     console.log(lerrors)
//     // }
//     if (lerrors.length == 0 && e.keyCode == 8) {
//         lerrors = ""
//     }
//     if (!(onlyLetters(lerrors))) {
//         lnerr.innerText = 'you can only use letters';
//     } else {
//         lnerr.innerText = ''
//     }
//     console.log(lerrors)
// })
// studynumber.addEventListener("keydown", (e) => {

//     if (numerrors.length == 0 && e.keyCode == 8) {
//         console.log("hi")
//         numerrors = numerrors.slice(0, numerrors.length - 10)
//     }
//     numerrors = numerrors + e.key;

//     if (e.keyCode == 8) {
//         numerrors = numerrors.slice(0, numerrors.length - 10)
//         console.log(numerrors)
//     }


//     if (!(onlyNumber(numerrors))) {
//         stiderr.innerText = 'you can only use number';
//     } else {
//         stiderr.innerText = ''
//     }
//     if (numerrors.length == 9) {
//         console.log(numerrors)
//         const header = {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//         const data = JSON.stringify({
//             name: ferrors.toLocaleUpperCase(0),
//             lastname: lerrors,
//             student_id: numerrors,
//         })
//         fetch('http://192.168.137.1:3000/api/postdata', {

//                 // Adding method type
//                 method: 'POST',

//                 // Adding body or contents to send
//                 body: data,

//                 // Adding headers to the request
//                 headers: header,
//             })
//             .then((response) => response.json())
//             .then((data) => {

//             })
//     }

// })


// fetch('http://192.168.137.1:3000/api/postdata', {

//         // Adding method type
//         method: 'POST',

//         // Adding body or contents to send
//         body: data,

//         // Adding headers to the request
//         headers: header,