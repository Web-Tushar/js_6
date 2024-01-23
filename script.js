// let result = document.querySelector(".result")

// let students = ["imran", "tushar", "ali","anik","shawon","rayhan","rakib","mamun","hasib"]
// // console.log(students.length)

// for(let i = 0; i < students.length; i++){
     // result.innerHTML = (`${students[i]} ${i}`);
     // console.log(`${i}: ${students[i]}`)
     

// }
// let text = "";
// let namta = "12"

// for (let i = 1; i <= 10; i++){
//      text += namta + "X" + i + " = " + namta*i;

// }
// document.getElementsByClassName(".result").innerHTNL = text;

let text = "";
let namta = "12"
for (let i = 1; i < 10; i++) {
  text += namta + "X" + i + " = " + namta*i + "<br>" ;
}

document.getElementById("result").innerHTML = text;