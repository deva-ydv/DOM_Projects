const reviews = [
  { id: 1, name: "name1", job: "job1", img: "img1", info: "loremkjdsfjj111" },
  { id: 2, name: "name2", job: "job2", img: "img2", info: "loremkjdsfjj222" },
  { id: 3, name: "name3", job: "job3", img: "img3", info: "loremkjdsfjj333" },
  { id: 4, name: "name4", job: "job4", img: "img4", info: "loremkjdsfjj444" },
];


const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const randomBtn = document.querySelector('.randomBtn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded',()=>{
    showPersonInfo()
})

function showPersonInfo(){
    const item = reviews[currentItem]; // becoz this currentItem is variable
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;

}
// next btn
nextBtn.addEventListener('click',()=>{
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPersonInfo()
})
// previous btn
prevBtn.addEventListener('click',()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPersonInfo()
})

// random btn
randomBtn.addEventListener('click',()=>{
    currentItem = Math.floor(Math.random() * reviews.length)
    showPersonInfo()
})