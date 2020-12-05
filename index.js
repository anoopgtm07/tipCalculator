
//Task 1
function calcCircumfrence(radius){
    let circumference = 2*3.14*(radius*radius);
    return `The circumference is: ${circumference}`;
}
let a = calcCircumfrence(28);
console.log(a);





//Task 2
let places = ['Biratnagar', 'Lalitpur', 'Patan', 'Kathmandu', 'Pokhara', 'Palpa'];
places.splice(3,1,'Butwal', 'Chitwan');
console.log('The length of this array is: ' + places.length + ' and the list is: ' + places);
