var setup = function () {
 alert(1);
 return function () {
 alert(2);
 };
};
var my = setup(); 
my();
//////////////////////////////////////////////////////////////
var mobs = function () {
 alert("Hello mobs!");
 mobs = function () {
 alert("!");
 };
};
mobs();
mobs();