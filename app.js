
confirm("wlecome to task 7");

function getTheName() {
    var n=prompt("what is your name");
    return n;
}
function getTheGender(){
    var gender =prompt("what is your gender");
    if(gender!="male" && gender!="female")
{
    alert("your gender should be male or female");
   
}
return gender; 
}
function getTheAge()
{
    var x=prompt("enter your age");
    if (x<0)
    {
        alert("this is not your real age");
    }
}
function wlecomeming(){
    if(b=="male"||b=="Male"){

        alert("welcome MR  "+a)
        }
        else if(b=="female"||b=="Female")
        {
            alert("welcome MS "+a)
        }
        else if(b!="male" && b!="female")
        {
            alert("welcome "+a)

}
}
function yesOrNoQuastions()
{
var q1=prompt("do you like gaming");
var q2=prompt("do you like league of legends");
var q3=prompt("do you love shawrma");
if (q1 !="yes"&& q1!="no")
{
    q1="invaleid"
}if (q2 !="yes"&& q2!="no")
{
    q2="invaleid"
}
if (q3 !="yes"&& q3!="no")
{
    q3="invaleid"
}
var arr=[];
 return  arr=[q1,q2,q3];
}
function array(){
var quastions=["do you like gaming","do you like league of legends","do you love shawrma"]
for (let i=0;i<c.length;i++)
{
    console.log(quastions[i]);
    console.log(c[i]);
}
}

var a=getTheName()
var b=getTheGender();

getTheAge();
wlecomeming();
var c=yesOrNoQuastions();
array();