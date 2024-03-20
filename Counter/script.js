// 1st method 
// const displayCounter = document.getElementById('display-counter')
// const incremenBtn = document.getElementById('increment')
// const decrementBtn = document.getElementById('decrement')
// const reset = document.getElementById('reset')

// let count = 0;

// function updateCounter(){
//     displayCounter.textContent = count;
// }

// incremenBtn.addEventListener('click',()=>{
//     count++;
//     updateCounter()
// })
// decrementBtn.addEventListener('click',()=>{
//     count--;
//     updateCounter()
// })
// reset.addEventListener('click',()=>{
//     count = 0;
//     updateCounter()
// })

// updateCounter()

// 2nd method 
const displayCounter = document.getElementById('display-counter')
const btns = document.querySelectorAll('.btn')

let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains("increment")){
            count++;
        }
        else if(styles.contains("decrement")){
            count--;
        }
        else{
            count = 0;
        }
        displayCounter.textContent = count;
    })

})
