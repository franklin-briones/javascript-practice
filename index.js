// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// Inititalize passenger count as 0
let count = 0

// Define count element in JS
let countEl = document.getElementById('count-el')

// Listen for clicks on the increment button
function increment() {
    count += 1
    console.log(count)
    countEl.textContent=count
}


// Create button to save passenger count

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countHist = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countHist
    // NB: Make sure to not delete the existing content of the paragraph
    count = 0
    countEl.textContent=count
}