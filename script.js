// Prompt to get username
var userName = prompt("Hi :) What's your name?");
var paragraph = document.getElementById("name");
paragraph.textContent = userName + ",";

var welcome = document.getElementById('name');

// Change the position of "name" paragraph
welcome.style.position = 'absolute';
welcome.style.top = '70px';
welcome.style.left = '990px';


// Elements of background

// BUTTERFLY 

const myImage = document.getElementById('butterfly');

// Change the position of the image
myImage.style.position = 'absolute';
myImage.style.top = '100px';
myImage.style.left = '670px';

// BIRDS 

const birds = document.getElementById('birds');

// Change the position of the image
birds.style.position = 'absolute';
birds.style.top = '100px';
birds.style.left = '200px';


// GIRL 

const girl = document.getElementById('girl');

// Change the position of the image
girl.style.position = 'absolute';
girl.style.top = '120px';
girl.style.left = '670px';

// BREATHE 

const breathe = document.getElementById('breathe');

// Change the position of the image
breathe.style.position = 'absolute';
breathe.style.top = '80px';
breathe.style.left = '1050px';



// Start of canvas 

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// mountain 

var grd = ctx.createLinearGradient(100,200,200,0);
grd.addColorStop(0,"#502449");
grd.addColorStop(1,"#A84768");
ctx.beginPath();
ctx.fillStyle = grd;
ctx.moveTo(500, 750);
ctx.lineTo(800, 200); 
ctx.lineTo(1500, 800);
ctx.fill();

//TREES LEFT SIDE
// tree 1
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(05, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(10, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#768837"; // green
ctx.fill();


// tree 2
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(500, 650, 20, 100); //first value y, second value x

// draw leaves
var grd= ctx.createLinearGradient(20,100,200,0);
grd.addColorStop(0,"#449F14");
grd.addColorStop(1,"#175210"); //green
ctx.beginPath();
ctx.fillStyle = grd;
ctx.arc(510, 650, 50, 0, 2 * Math.PI, false);
ctx.fill();

// tree 3
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(450, 650, 20, 100);

// draw leaves
var grd= ctx.createLinearGradient(20,80,200,0);
grd.addColorStop(1,"#D78D37");
grd.addColorStop(0,"#9E560E"); //yellow
ctx.beginPath();
ctx.arc(455, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = grd;
ctx.fill();

// tree 4
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(400, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(410, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#D4B300"; // green
ctx.fill();

// tree 5
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(350, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(355, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#DB9802"; // green
ctx.fill();

// tree 6
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(300, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(305, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#FDBB28"; // green
ctx.fill();

// tree 7
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(250, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(255, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#806D00"; // green
ctx.fill();

// tree 8
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(200, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(210, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#768837"; // green
ctx.fill();

// tree 9
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(140, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(145, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#806D00"; // green
ctx.fill();

// tree 10
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(100, 650, 20, 100); //first value y, second value x

// draw leaves
var grd= ctx.createLinearGradient(20,100,200,0);
grd.addColorStop(0,"#449F14");
grd.addColorStop(1,"#175210"); //green
ctx.beginPath();
ctx.fillStyle = grd;
ctx.arc(105, 650, 50, 0, 2 * Math.PI, false);
ctx.fill();

// tree 11
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(50, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(55, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#806D00"; // green
ctx.fill();

// TREES RIGHT SIDE
// tree 1
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(1400, 650, 20, 100); //first value y, second value x

// draw leaves
var grd= ctx.createLinearGradient(20,100,200,0);
grd.addColorStop(0,"#449F14");
grd.addColorStop(1,"#175210"); //green
ctx.beginPath();
ctx.fillStyle = grd;
ctx.arc(1405, 650, 50, 0, 2 * Math.PI, false);
ctx.fill();

// tree 2
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(1350, 650, 20, 100);

// draw leaves
var grd= ctx.createLinearGradient(20,80,200,0);
grd.addColorStop(1,"#D78D37");
grd.addColorStop(0,"#9E560E"); //yellow
ctx.beginPath();
ctx.arc(1355, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = grd;
ctx.fill();

// tree 3
// draw trunk
ctx.fillStyle = "#8B4513"; // brown
ctx.fillRect(1300, 650, 20, 100);

// draw leaves
ctx.beginPath();
ctx.arc(1305, 650, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "#D4B300"; // green
ctx.fill();



// Clouds
const clouds = [
  { circle1: { x: 50, y: 50, radius: 30 }, circle2: { x: 70, y: 30, radius: 25 }, circle3: { x: 90, y: 50, radius: 30 }, circle4: { x: 70, y: 70, radius: 25 } },
  { circle1: { x: 150, y: 70, radius: 20 }, circle2: { x: 170, y: 50, radius: 30 }, circle3: { x: 190, y: 70, radius: 20 }, circle4: { x: 170, y: 90, radius: 30 } },
  { circle1: { x: 250, y: 50, radius: 25 }, circle2: { x: 270, y: 30, radius: 30 }, circle3: { x: 290, y: 50, radius: 25 }, circle4: { x: 270, y: 70, radius: 30 } },
  { circle1: { x: 350, y: 50, radius: 30 }, circle2: { x: 370, y: 50, radius: 25 }, circle3: { x: 390, y: 50, radius: 30 }, circle4: { x: 370, y: 70, radius: 30 } }
];

// Loop through the array of cloud objects and draw each cloud on the canvas
for (let i = 0; i <50; i++) {
  const cloud = clouds[i];
  ctx.beginPath();
  ctx.arc(cloud.circle1.x, cloud.circle1.y, cloud.circle1.radius, 0, 2 * Math.PI);
  ctx.arc(cloud.circle2.x, cloud.circle2.y, cloud.circle2.radius, 0, 2 * Math.PI);
  ctx.arc(cloud.circle3.x, cloud.circle3.y, cloud.circle3.radius, 0, 2 * Math.PI);
  ctx.arc(cloud.circle4.x, cloud.circle4.y, cloud.circle4.radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFCDD0";
  ctx.fill();
}




