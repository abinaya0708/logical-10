document.write("Write a program to clone an array"+"<br>");
function test2(arr)
{
    return arr.slice(0);
}
document.write(test2([1,2,3,4])+"<br>");
document.write(test2([1,2,[3,4]])+"<br><br>");
console.log(test2([1,2,3,4]));
console.log(test2([1,2,[3,4]]));