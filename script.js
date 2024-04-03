let output = document.querySelector("#imgdisp");
let out1 = document.querySelector("#sbi")
let btn = document.querySelector("button")

// btn = document.addEventListener("click", add)

const imgs = [
    { id: 1, image: "https://picsum.photos/id/237/200/300" },
    { id: 2, image: "https://picsum.photos/seed/picsum/200/300" },
    { id: 3, image: "https://picsum.photos/200/300?grayscale" },
    { id: 4, image: "https://picsum.photos/200/300/" },
    { id: 5, image: "https://picsum.photos/200/300.jpg" }
];



txt = "";
imgs.forEach(e => {
    txt += `<img width="150px" height="150px" src="${e.image}">`
    output.innerHTML = txt;
});

const add = () => {
    index = Math.round(Math.random() * 5);
    let txt = `<img width="150px" height="150px" src="${imgs[index].image}">`;
    out1.innerHTML = txt;
}
add()
