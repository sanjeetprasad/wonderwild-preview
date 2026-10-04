(function(root){
'use strict';
const topics=['cat','dog','robot','rocket','castle','flower','butterfly','fish','train','boat','dinosaur','turtle'];
const labels=['Curious cat','Happy puppy','Friendly robot','Rocket adventure','Storybook castle','Flower garden','Butterfly wings','Ocean fish','Little train','Sailing boat','Dinosaur day','Gentle turtle'];
const aliases={cat:/\b(cat|kitten|kitty|cats)\b/,dog:/\b(dog|puppy|dogs)\b/,robot:/\brobots?\b/,rocket:/\b(rocket|space|astronaut|spaceship)\b/,castle:/\b(castle|palace)\b/,flower:/\b(flowers?|garden)\b/,butterfly:/\b(butterfly|butterflies)\b/,fish:/\b(fish|ocean|sea|underwater)\b/,train:/\btrains?\b/,boat:/\b(boats?|ships?|sailboat)\b/,dinosaur:/\b(dinosaur|dino|dinosaurs)\b/,turtle:/\b(turtle|tortoise)\b/};
const ellipse=(x,y,rx,ry)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"/>`;
const circle=(x,y,r)=>ellipse(x,y,r,r);
const path=d=>`<path d="${d}"/>`;
const rect=(x,y,w,h,r=10)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
function motif(topic){const eyes=circle(82,88,5)+circle(118,88,5);switch(topic){
case'cat':return ellipse(100,145,48,55)+path('M55 170 Q5 125 28 95 Q45 82 42 118')+path('M45 72 L48 18 L83 49 Q100 40 117 49 L152 18 L155 72 Q172 127 100 130 Q28 127 45 72 Z')+eyes+path('M93 103 L107 103 L100 110 Z M100 110 Q82 125 78 111 M100 110 Q118 125 122 111 M58 98 L20 88 M58 108 L20 114 M142 98 L180 88 M142 108 L180 114');
case'dog':return ellipse(100,148,50,53)+ellipse(46,76,22,46)+ellipse(154,76,22,46)+ellipse(100,80,53,49)+eyes+ellipse(100,108,18,12)+path('M100 121 Q83 138 76 120 M100 121 Q117 138 124 120')+ellipse(68,188,22,12)+ellipse(132,188,22,12);
case'robot':return rect(40,30,120,86,18)+rect(50,120,100,65)+eyes+rect(74,99,52,8,3)+path('M100 30 L100 15')+circle(100,10,8)+rect(22,122,22,50)+rect(156,122,22,50)+rect(58,185,27,20)+rect(115,185,27,20)+circle(78,145,9)+circle(120,145,9)+rect(78,165,42,8,2);
case'rocket':return path('M65 145 L65 78 Q65 25 100 6 Q135 25 135 78 L135 145 Z')+circle(100,72,23)+circle(100,72,15)+path('M65 112 L30 155 L65 145 Z M135 112 L170 155 L135 145 Z M80 145 Q65 177 100 205 Q135 177 120 145 Z')+path('M65 122 L135 122');
case'castle':return rect(25,80,150,120,0)+rect(12,45,42,155,0)+rect(146,45,42,155,0)+path('M8 45 L33 10 L58 45 Z M142 45 L167 10 L192 45 Z M77 200 L77 155 Q100 125 123 155 L123 200 Z')+rect(82,90,36,30,0)+rect(25,70,15,22,0)+rect(160,70,15,22,0)+path('M55 130 L145 130 M55 172 L76 172 M125 172 L145 172');
case'flower':return path('M100 105 L100 200')+ellipse(70,155,30,13)+ellipse(130,175,30,13)+[0,60,120,180,240,300].map(a=>`<ellipse cx="100" cy="45" rx="20" ry="32" transform="rotate(${a} 100 80)"/>`).join('')+circle(100,80,25);
case'butterfly':return ellipse(53,67,45,55)+ellipse(147,67,45,55)+ellipse(55,151,38,43)+ellipse(145,151,38,43)+ellipse(100,112,15,77)+circle(100,35,16)+path('M94 21 Q66 0 65 20 M106 21 Q134 0 135 20')+circle(50,70,20)+circle(150,70,20)+circle(53,151,15)+circle(147,151,15);
case'fish':return path('M145 90 L195 50 L195 150 L145 112 Z')+ellipse(85,100,70,49)+circle(45,90,7)+path('M74 56 Q99 10 126 60 Z M75 145 Q103 189 125 140 Z M84 82 Q105 100 84 117 M20 114 L39 114')+circle(27,32,10)+circle(8,10,5);
case'train':return rect(22,88,110,73)+rect(125,48,63,113)+rect(135,65,38,35)+rect(39,44,25,44,2)+rect(28,33,46,13,2)+path('M22 116 L132 116 M10 175 L195 175')+[45,95,155].map(x=>circle(x,165,24)+circle(x,165,10)).join('')+circle(52,14,9)+circle(79,5,6);
case'boat':return path('M10 140 L190 140 L160 190 L45 190 Z M100 140 L100 5 M91 22 L28 123 L91 123 Z M110 40 L175 123 L110 123 Z');
case'dinosaur':return ellipse(92,139,66,47)+path('M38 145 Q0 120 8 85 Q28 113 56 108 Z')+rect(120,65,37,94,16)+ellipse(145,57,46,29)+circle(163,50,5)+path('M150 72 L176 72')+rect(52,167,26,35)+rect(117,166,26,36)+path('M42 106 L49 85 L68 97 L79 73 L98 94 L112 77 L125 99 Z');
case'turtle':return ellipse(98,169,23,30)+ellipse(45,135,27,19)+ellipse(151,135,27,19)+ellipse(100,111,65,62)+ellipse(100,35,28,32)+circle(89,28,4)+circle(111,28,4)+path('M88 46 Q100 54 112 46 M100 50 L100 174 M42 85 L100 108 L158 85 M40 133 L100 108 L161 133');
}}
function parse(prompt){const text=String(prompt||'').toLowerCase().slice(0,160),found=topics.filter(t=>aliases[t].test(text));if(!found.length)return null;const subject=found[0],background=/\b(stars?|space|moon|night)\b/.test(text)?'stars':/\b(ocean|sea|underwater|water)\b/.test(text)?'ocean':/\b(garden|flowers?|meadow)\b/.test(text)?'garden':'clouds';const count=/\b(three|3)\b/.test(text)?3:/\b(two|2)\b/.test(text)?2:1;return{subject,background,count};}
function svg(spec){const {subject,background,count}=spec;let backdrop='';
if(background==='stars')backdrop=[ [65,65],[270,60],[530,70],[570,250],[55,265] ].map(([x,y])=>path(`M${x} ${y-24} L${x+8} ${y-7} L${x+26} ${y-5} L${x+12} ${y+8} L${x+17} ${y+27} L${x} ${y+17} L${x-17} ${y+27} L${x-12} ${y+8} L${x-26} ${y-5} L${x-8} ${y-7} Z`)).join('');
else if(background==='ocean')backdrop=[65,155,440,550].map(x=>circle(x,60+(x%90),18)+path(`M${x} 580 Q${x-35} 520 ${x} 475 Q${x+35} 520 ${x} 580 Z`)).join('');
else if(background==='garden')backdrop=[25,470].map(x=>`<g transform="translate(${x} 375) scale(.65)">${motif('flower')}</g>`).join('');
else backdrop=path('M35 100 Q10 65 53 59 Q60 20 96 47 Q145 32 149 73 Q177 104 135 110 L35 110 Z M445 112 Q415 72 458 62 Q465 29 505 50 Q550 35 562 72 Q600 106 560 117 Z')+circle(310,60,28);
const positions=count===1?[[145,170,1.7]]:count===2?[[60,220,1.15],[330,220,1.15]]:[[30,250,.9],[225,200,.9],[420,250,.9]];
return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 627" width="627" height="627"><rect width="627" height="627" fill="white"/><g fill="white" stroke="#202833" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${rect(12,12,603,603,22)}${backdrop}${positions.map(([x,y,s])=>`<g transform="translate(${x} ${y}) scale(${s})">${motif(subject)}</g>`).join('')}</g></svg>`;}
function source(spec){return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg(spec));}
root.WonderDrawing={topics,labels,parse,svg,source};
})(globalThis);
