/*que 4 */
let textchange = document.getElementById("textchange");

function replaceText()
{
    textchange.innerHTML = "Hello world";
}

/*que 5 */
// let change = document.getElementById("helloworld");
function changetext()
{
    let change = document.getElementById("helloworld");
    change.innerText = "Welcome to Elevation Academy"
}
/*que 6 */
/* using function*/

let styleAttribute = document.getElementById("heading");
function color()
{
    styleAttribute.style.color = "Red";
}

/*
without dom function give styling to particular attribute:

    document.getElementById("heading").style.color = "Red";

*/

/*using setAttribute with id:-
var set = document.getElementById("heading");
set.style.color = "gray"
function color()
{
    set.setAttribute("id","getcolor");
    getcolor.style.color = "Red";
}
*/

/*
using if else everytime condition change acc to current color inside function 

var set = document.getElementById("heading");
set.style.color = "gray"
function color()
{
    if(set.style.color === "gray")
    {
        set.style.color = "red"; 
    }
    else{
        set.style.color = "gray";
    }  
}

*/

/*
let set = document.getElementsByClassName("setcolor");
function color()
{
    let set = document.getElementsByClassName("setcolor");
    set[0].setAttribute("class","getcolor");
    set[0].style.color = "Red";
}
*/
/*que 7 */
function flex()
{
    let flexdir = document.getElementById("parent_id");
     flexdir.style.flexDirection = "row";

    if(flexdir.style.flexDirection === "row")
    {
        flexdir.style.flexDirection = "column"; 
    }
    else{
        flexdir.style.flexDirection = "row";
    }
}
/* using class: 
function flex()
{
    let flexdir = document.getElementsByClassName("parent");
    flexdir[0].style.flexDirection = "row";
    
    if(flexdir[0].style.flexDirection === "row")
    {
        flexdir[0].style.flexDirection = "column"; 
    }
    else
    {
        flexdir[0].style.flexDirection = "row";
    }
}
*/
/*que 8 */
/*que 9 */
let timeclock = document.getElementById("time");

function showtime()
{
    let timefetch = new Date();
    let hrs = timefetch.getHours();
    let min = timefetch.getMinutes();
    let sec = timefetch.getSeconds();
       
    timeclock.innerText = `Time:${hrs}:${min}:${sec}`;
}

setInterval(() => {
    showtime();
}, 1000);

