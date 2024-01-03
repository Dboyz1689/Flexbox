console.log("Nigga???")

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//     this.getFullName = () => {
//         return(this.firstName + " "+this.lastName)
//     }
// }

// const Person1 = new Person("Denyefa", "Omare", 16-8-2009)
// const Person2 = new Person("Doubra", "Omare", 17-9-2012)
// const Person3 = new Person("Karen", "Omare", 18-11-2018)
// const Person4 = new Person("Eric", "Omare", 7-1-1979)
// const Person5 = new Person("Mary", "Eric-Omare", 21-4-1981)

// console.log(Person4)



let aside = document.getElementById("aside")
let button = document.getElementById("button")
let btn = document.querySelector(".navbare")
let header = document.querySelector(".navb")
let container = document.querySelector(".container")
let a = 0

button.addEventListener("click", (e) => {
    aside.style.animationName = 'aside';
    aside.style.animationFillMode = 'forwards';
})

button.addEventListener("mouseover", (e) => {
    a = 1
    console.log(a)
})

button.addEventListener("mouseleave", (e) => {
    a = 0
    console.log(a)
})

btn.addEventListener("click", (e) => {
    aside.style.animationName = 'back'
    aside.style.animationFillMode = 'backwards';
})

header.addEventListener("click", (e) => {
    aside.style.animationName = 'back'
    aside.style.animationFillMode = 'backwards';
}) 
