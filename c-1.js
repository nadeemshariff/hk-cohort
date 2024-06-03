// let a = 10;
// a = 2;
// console.log(a);

// Write a program to greet a person given their first and last name

// let firstName = "Nadeem";
// let lastName = "Shariff";
// console.log("Hello " + firstName + " " + lastName);

// 2. Write a program that greets a person based on their gender.(ifelse)

// let gender = "male";
// if (gender === "male") {
//     console.log("Hello Mr. Nadeem");
// } else {
//     console.log("Hello Mrs. Nadeem aka Mansha");
// }

// 3.write a program that counts from 0-1000 and prints (for loop)

// for (let i = 0; i <= 1000; i++) {
//     console.log(i);
// }

// 3. Write a program that calculates the area of a rectangle

// let length = 10;
// let breadth = 15;
// let area = length * breadth;
// console.log(area);


//Arrays

// let person1 = "nadeem";
// let person2 = "shariff";
// let person3 = "mohsin";

// const personArray = ["nadeem", "shariff" , "mohsin"];

// console.log(personArray)

const ages = [21, 22, 23, 24, 25];
const numberOfPeople = ages.length;

for (let i = 0; i < numberOfPeople; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]); 
    }
}