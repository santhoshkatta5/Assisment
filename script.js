let output = document.querySelector("#imgdisp");
let output1 = document.querySelector("#sbi1");
let out1 = document.querySelector("#sbi")
let imgs = document.querySelectorAll("img")
let vrbtn = document.querySelector("#veri")
let resbtn = document.querySelector("#rese")



vrbtn.style.display = "none"
resbtn.style.display = "none"

let emp = [];
resbtn.addEventListener("click", () => {
    emp.pop();
    output1.innerHTML = "";
    clicked = 0;
})
// btn = document.addEventListener("click", add)

// const imgs = [
//     {image: "https://picsum.photos/id/237/200/300" },
//     {image: "https://picsum.photos/seed/picsum/200/300" },
//     {image: "https://picsum.photos/200/300?grayscale" },
//     {image: "https://picsum.photos/200/300/" },
//     {image: "https://picsum.photos/200/300.jpg" }
// ];

console.log(imgs[0])
console.log(imgs[0].src)

// txt = "";
// imgs.forEach(e => {
//     txt += `<img width="150px" height="150px" src="${e.image}">`
//     output.innerHTML = txt;
// });

const add = () => {
    index = Math.round(Math.random() * 5);
    let txt = `<img width="250px" height="250px" src=${imgs[index].src}>`;
    emp.push(imgs[index].src)
    console.log(emp)
    out1.innerHTML = txt;
}

add()
let clicked = 0;
imgs.forEach((e, index) => {
    e.addEventListener("click", () => {
        clicked = clicked + 1;
        if (clicked == 1) {
            resbtn.style.display = "none"
            vrbtn.style.display = "";
            resbtn.style.display = "";
            emp.push(e.src)
        }
        if (clicked >= 2) {
            // alert("You can select only 1 image");
            output1.innerHTML = '<h3 style="color:green; font-size:50px">YOU CAN SELECT 1 IMAGE</h3>'
            // window.location.reload();    
        }
    })
});

function check() {
   if(emp[0] == emp[1]){
       output1.innerHTML = '<h3 style="color:green; font-size:50px">YOU ARE NOT A ROBOT</h3>'
    }
    else{
        output1.innerHTML = '<h3 style="color:red; font-size:50px">YOU ARE A ROBOT</h3>'
           }
}