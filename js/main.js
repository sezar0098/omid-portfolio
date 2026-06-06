
const txt='IT TECHNICIAN';
let i=0;
function t(){if(i<txt.length){typing.innerHTML+=txt[i++];setTimeout(t,90)}}
t();

const c=document.getElementById('bg'),x=c.getContext('2d');
function rs(){c.width=innerWidth;c.height=innerHeight}rs();onresize=rs;
let p=[...Array(120)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5),vy:(Math.random()-.5)}));
(function a(){
x.clearRect(0,0,c.width,c.height);
p.forEach(o=>{o.x+=o.vx;o.y+=o.vy;if(o.x<0||o.x>c.width)o.vx*=-1;if(o.y<0||o.y>c.height)o.vy*=-1;
x.fillStyle='#0af';x.fillRect(o.x,o.y,2,2);});
requestAnimationFrame(a);
})();
