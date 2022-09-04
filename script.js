// const profiles = [
//     {first:"Princewill", middle:"Samuel",yearOfBirth:1993},
//     {first:"Princess", middle:"Lizbon",yearOfBirth:1995},
//     {first:"Alpha", middle:"Sam",yearOfBirth:1998},
//     {first:"Scott", middle:"Judas",yearOfBirth:1991},
//     {first:"Emman", middle:"Grace",yearOfBirth:1992},
//     {first:"Charles", middle:"Everlasting",yearOfBirth:1994},
//     {first:"Promise", middle:"Ikpa",yearOfBirth:1996},
//     {first:"Daniel", middle:"Okon",yearOfBirth:1999},
// ]
// const filteredProfile= profiles.filter((profile => (profile.yearOfBirth < 1995) ))
// console.table(filteredProfile);

const panels= document.querySelectorAll(".panel");
console.log(panels)
function handleClick(e){
    if(e.propertyName.includes("flex"))
    this.classList.toggle("open")
}
function handleClickActive(){
    this.classList.toggle("open-active")
}
panels.forEach(panel =>panel.addEventListener("click",handleClickActive));
panels.forEach(panel =>panel.addEventListener("transitioned",handleClick));
