/*Question 1: For an give array with marks of students -> [85,75,44,37,89,99]. 
find the average marks of the entire class*/

let marks = [85,75,44,37,89,99];

let  sum=0;
for (let val of marks){
    sum+=val;

}
console.log(sum);

let avg= sum/marks.length;

console.log(`avg marks of the class = ${avg}`);



// output 
//429
// avg marks of the class = 71.5