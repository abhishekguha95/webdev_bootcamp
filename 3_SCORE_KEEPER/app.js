let p1 = document.querySelector('#p1') // selecting the p1 score increment button
let p2 = document.querySelector('#p2')  // selecting the p2 score increment button
const score = document.querySelector('#score')  // selecting the score display header element

p1score = 0   // initializing variables with values
p2score = 0
let maxScore = 5

const select = document.querySelector('#select')  // selecting the max score select/choose element

// when max score chosen, set user decided max score in variable
select.addEventListener('change', function (e) {
    console.log('select event')
    maxScore = parseInt(select.children[select.selectedIndex].innerText)
    console.log('maxScore: ', maxScore)
})

/* when player 1 button clicked: 
increment player 1 score value, update score display,
if player score reaches max score: show player winning alert and stop further game by disabling buttons */
p1.addEventListener('click', function (e) {
    p1score++
    console.log('p1score: ', p1score)
    console.log(typeof (p1score), typeof (maxScore))
    score.innerText = `${p1score} to ${p2score}`
    if (p1score === maxScore) {
        console.log('p1 wins')
        alert('p1 wins')
        p1.disabled = true
        p2.disabled = true
    }
})

p2.addEventListener('click', function (e) {
    p2score++
    console.log('p2++', p2)
    score.innerText = `${p1score} to ${p2score}`
    if (p2score === maxScore) {
        console.log('p2 wins')
        alert('p2 wins')
        p1.disabled = true
        p2.disabled = true
    }
})
 
const reset = document.querySelector('#reset')    // selecting the reset button
/*when reset button clicked: reset scores,
reset maxScore select option, enable score increment buttons */
reset.addEventListener('click', function () {  
    p1score = 0
    p2score = 0
    score.innerText = `${p1score} to ${p2score}`
    select.selectedIndex = 0
    p1.disabled = false
    p2.disabled = false
})