document.querySelector("#mens").addEventListener("click", fun);

function fun() {
    window.location.href = "therapies.html";
}
document.querySelector("#go1").addEventListener("click",change)
function change() {
    // let change = document.querySelector("#go1").value;
    window.location.href = "index.html";
    // console.log(change);
}

let data = [
    {
        image: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667386493900-1d5e09.jpeg"

    },
    {
        image: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/partner-app-supply/1667472964177-812867.jpeg"

    },
    {
        image: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg"

    },
    {
        image: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667594664089-1b275d.jpeg"

    },
    {
        image: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233650651-818df5.jpeg"
    },
    {
        image: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg"

    },
]


let a = 0;
let b = 1;
let c = 2;
let d = 3;
image_1(data[a]);
image_2(data[b]);
image_3(data[c]);
image_4(data[d]);

function image_1(out) {
    document.querySelector("#img1").innerHTML = "";
    let img = document.createElement("img");
    img.src = out.image;
    document.querySelector("#img1").append(img);

}
function image_2(out) {
    document.querySelector("#img2").innerHTML = "";
    let img = document.createElement("img");
    img.src = out.image;
    document.querySelector("#img2").append(img);

}
function image_3(out) {
    document.querySelector("#img3").innerHTML = "";
    let img = document.createElement("img");
    img.src = out.image;
    document.querySelector("#img3").append(img);

}
function image_4(out) {
    document.querySelector("#img4").innerHTML = "";
    let img = document.createElement("img");
    img.src = out.image;
    document.querySelector("#img4").append(img);

}

document.querySelector("#bit7").addEventListener("click", forward);

function forward() {

    a = a + 1;
    b = b + 1;
    c = c + 1;
    d = d + 1;
    if (a > 2) {
        // a = 0;
        
    }
    if (b > 3) {
        // b = 0;
    }
    if (c > 4) {
        // c = 0;
    }
    if (d > 5) {
        // d = 0;
        return;
    }
    image_1(data[a]);
    image_2(data[b]);
    image_3(data[c]);
    image_4(data[d]);

}

document.querySelector("#bit8").addEventListener("click", backward);

function backward() {

    a = a - 1;
    b = b - 1;
    c = c - 1;
    d = d - 1;
    if (a > 2) {
        // a = 0;
        
    }
    if (b > 3) {
        // b = 0;
    }
    if (c > 4) {
        // c = 0;
    }
    if (a< 0) {
        // a=1;
        // d = 0;
        return;
    }
    image_1(data[a]);
    image_2(data[b]);
    image_3(data[c]);
    image_4(data[d]);

}

let arr=[
    
]