(function(root){
'use strict';
const C=root.WonderCurriculum;
const specs=[
[0,5,'count-ten','Six, seven, eight…','Count six to ten objects, saying one number for each object.','K.CC.B.5','Build a group of six, then seven, using large counters. Move each counted counter once. Rearrange the group and check that its total is unchanged.'],
[0,6,'numerals-ten','A numeral for every group','Match quantities through ten to written numerals.','K.CC.A.3','Choose a numeral card, make its quantity, then draw and label the group. Include zero and ask a partner to check your match.'],
[0,7,'neighbor-ten','One arrives, one leaves','Find one more or one less than a small quantity.','K.CC.B.4c','Build a group, add one, and name the new total. Start again and remove one. Explain which change made the group larger.'],
[0,8,'sort-ten','The sorting workshop','Sort objects by a stated attribute and count each category.','K.MD.B.3','Sort paper circles and squares into two trays. Count each category, pair objects to compare, then explain the sorting rule.'],
[1,5,'related-ten','Parts belong together','Use related addition to explain subtraction within ten.','1.OA.B.4','Split a whole into two parts. Record an addition and a subtraction using that model. Point to the whole in each equation.'],
[1,6,'missing-ten','The missing part','Find unknown numbers in addition equations within ten.','1.OA.D.8','Hide part of a group under a card. Use the whole and visible part to find what is hidden. Check by joining the parts again.'],
[1,7,'true-equations','Is it equal?','Decide whether addition and subtraction equations are true.','1.OA.D.7','Build the amount on each side of an equals sign. Match the objects. Explain why the sign states that both sides have the same value.'],
[1,8,'equal-expressions','Both sides tell a story','Complete equations with expressions on both sides of the equals sign.','1.OA.D.7','Build two groups that each contain seven, but split them differently. Record an equation such as 3 + 4 = 5 + 2 and explain both sides.']
];
const math=specs.map(([grade,week,k1Mode,title,objective,standard,activity])=>({id:`k1-year-m-${grade}-${week}`,grade,week,k1Mode,kind:'math',subject:'maths',title,objective,standard,activity,minutes:10,order:500+grade*10+week,reviewStatus:'educator-review-needed'}));
const prior=C.problem;
C.problem=function(l,seed=0){if(!math.some(x=>x.id===l.id))return prior(l,seed);const k=Math.abs(Math.trunc(seed))%10;let prompt,answer,steps,visual,options=null;switch(l.k1Mode){
case'count-ten': answer=6+k%5;prompt='How many counters fill this frame? Count each filled space once.';visual={type:'k1-frame',n:answer};steps=['Track one filled space for each number you say. Empty spaces are not counters.','The top row holds five. Continue counting the filled spaces in the next row.','The last count is '+answer+', so there are '+answer+' counters.'];break;
case'numerals-ten':answer=[0,6,9,7,10,8,3,1,5,2][k];prompt='Which numeral matches the number of counters?';visual={type:'k1-frame',n:answer};steps=answer?['Count filled spaces once each; do not count empty spaces.','The group contains '+answer+' counters.','Write '+answer+' to name this quantity.']:['There are no filled spaces.','The quantity is zero. The numeral 0 names it.'];break;
case'neighbor-ten':{const n=2+k%7,more=k%2===0;answer=n+(more?1:-1);prompt=`There are ${n} counters. ${more?'One more joins':'One is removed'}. How many now?`;visual={type:'k1-frame',n};steps=[`Start with ${n}. The picture shows the starting group.`,more?'Add exactly one counter and say the next counting number.':'Remove exactly one counter and count what remains.',`The new total is ${answer}. ${more?'One more makes the group larger.':'One less makes the group smaller.'}`];break;}
case'sort-ten':{const circles=1+k%5,squares=5-k%5;answer=k%2?squares:circles;prompt=`Sort by shape. How many ${k%2?'squares':'circles'} are there?`;visual={type:'k1-sort',circles,squares};steps=['Look at shape, not color or position.','Put circles in one group and squares in another.',`Count only the ${k%2?'squares':'circles'}: ${answer}. Check that every object belongs to exactly one group.`];break;}
case'related-ten':{const a=2+k%4,b=1+Math.floor(k/2)%4,total=a+b;answer=k%2?a:b;prompt=`${a} + ${b} = ${total}. What is ${total} − ${k%2?b:a}?`;visual={type:'k1-equation',left:`${a} + ${b}`,right:String(total)};steps=[`The whole ${total} contains the parts ${a} and ${b}.`,`Taking away the part ${k%2?b:a} leaves the other part ${answer}.`,`Check: ${answer} + ${k%2?b:a} = ${total}.`];break;}
case'missing-ten':{const part=1+k%5,total=part+1+Math.floor(k/2)%4;answer=total-part;prompt=k%2?`□ + ${part} = ${total}. What number belongs in the box?`:`${part} + □ = ${total}. What number belongs in the box?`;visual={type:'k1-equation',left:k%2?`□ + ${part}`:`${part} + □`,right:String(total)};steps=[`The whole is ${total}, and a known part is ${part}.`,`Count on from ${part} to ${total}, tracking how many counts you add.`,`The missing part is ${answer}. Check: ${part} + ${answer} = ${total}.`];break;}
case'true-equations':{const examples=[['3 + 4','7',7,7],['8','5 + 2',8,7],['9 − 3','6',6,6],['4 + 1','3 + 3',5,6],['6','6',6,6],['2 + 5','5 + 2',7,7],['7 − 2','4',5,4],['8 − 4','2 + 2',4,4],['1 + 6','8',7,8],['10 − 1','8',9,8]];const[left,right,a,b]=examples[k];answer=a===b?'True':'False';options=['True','False'];prompt=`Is ${left} = ${right} true or false?`;visual={type:'k1-equation',left,right};steps=[`The left side has value ${a}.`,`The right side has value ${b}.`,a===b?'The values match, so the equation is true.':'The values differ, so the equation is false. An equals sign means the same value.'];break;}
case'equal-expressions':{const a=2+k%4,b=2+k%3,total=a+b,known=1+k%4;answer=total-known;const left=k%2?`${known} + □`:`${a} + ${b}`,right=k%2?`${a} + ${b}`:`${known} + □`;prompt=`${left} = ${right}. What number belongs in the box?`;visual={type:'k1-equation',left,right};steps=[`The complete side has ${a} + ${b}, which is ${total}.`,`The other side must also make ${total}; it already has a part of ${known}.`,`The missing part is ${answer}, because ${known} + ${answer} = ${total}.`];break;}
}return{mode:l.k1Mode,prompt,answer,display:String(answer),steps,visual,options};};
const reviewRows=[
[0,5,'Counting through ten',[
['How many counters are shown?',['6','8','7'],1,'Count the five in the first row, then three more. Eight counters fill the spaces.',{type:'k1-frame',n:8}],
['Seven counters are moved into a circle. None are added or removed. How many now?',['7','0','8'],0,'The arrangement changed, but the same seven counters are present.'],
['Pip counts one counter twice. What would help?',['Say the numbers faster','Count only the largest counter','Move each counted counter to a second tray'],2,'Moving each counted object once separates counted objects from those still waiting.']]],
[0,6,'Read the quantity',[
['Which numeral describes an empty tray?',['6','1','0'],2,'No counters means zero. Write 0 to represent the quantity.'],
['Which numeral matches this frame?',['9','6','10'],0,'Nine spaces are filled. Count the five in the top row and four below.',{type:'k1-frame',n:9}],
['A card says 6. Pip has five counters. How can Pip match the card?',['Remove one','Add one','Spread them apart'],1,'Five and one more is six. Changing spacing alone does not change the quantity.']]],
[0,7,'One changes the group',[
['Six counters are present. One more joins. How many now?',['5','6','7'],2,'After six, the next counting number is seven. One more makes seven.'],
['Eight counters are present. One is removed. How many remain?',['7','9','8'],0,'One less than eight is seven. Build eight and move one away to check.'],
['Two groups each have six counters. One is spread out. Which has more?',['The spread-out group','Neither: they are equal','The closer group'],1,'Spacing does not change the six objects in either group. Pairing them shows equal quantities.']]],
[0,8,'Sort, count and compare',[
['How many squares are shown?',['6','3','4'],1,'Count only the squares. There are three squares and three circles.',{type:'k1-sort',circles:3,squares:3}],
['Four circles and two squares were sorted by shape. Which category has fewer?',['Circles','They are equal','Squares'],2,'Pair two squares with two circles. Two circles are left, so the square category has fewer.'],
['Pip moves six objects into two sorting trays. None are lost. How many objects altogether?',['6','2','8'],0,'Sorting the same objects into categories does not change the total of six.']]],
[1,5,'Related number stories',[
['4 + 3 = 7. What is 7 − 4?',['3','4','7'],0,'Four and three are parts of seven. Removing four leaves three.'],
['Which addition checks 8 − 5 = 3?',['8 + 5 = 13','5 + 3 = 8','3 + 3 = 6'],1,'Joining the removed part five and remaining part three recreates the starting eight.'],
['In 2 + 6 = 8, which number names the whole?',['2','6','8'],2,'The two parts, two and six, combine into the whole eight.']]],
[1,6,'Find a missing part',[
['3 + □ = 8. What belongs in the box?',['3','5','8'],1,'Count on five from three to reach eight. Three plus five equals eight.'],
['□ + 2 = 7. What belongs in the box?',['9','2','5'],2,'The unknown is a part, not the whole. Five plus two makes seven.'],
['Which equation checks a missing part of four in 6 + □ = 10?',['6 + 4 = 10','6 + 10 = 16','10 + 4 = 14'],0,'Substitute four into the original box. Both sides then have value ten.']]],
[1,7,'Check both sides',[
['Which equation is true?',['6 = 2 + 3','4 + 1 = 6','7 = 3 + 4'],2,'Three plus four has value seven. The equals sign works with a number on the left too.'],
['Is 5 + 2 = 4 + 3 true?',['Yes: both sides make seven','No: the numbers look different','No: two sums cannot be equal'],0,'Different expressions can have the same value. Count or build each side to check.'],
['Pip writes 8 − 2 = 5. Which explanation helps?',['An answer always follows the sign','The left side is six, so the values do not match','Subtraction cannot use equals'],1,'Eight minus two has value six, while the right side is five. The equation is false.']]],
[1,8,'Equal values, different parts',[
['3 + 4 = 5 + □. What belongs in the box?',['2','7','12'],0,'The left side is seven. Five needs two more to make seven on the right.'],
['□ + 1 = 4 + 2. What belongs in the box?',['6','7','5'],2,'Four plus two is six. The missing part plus one must also equal six, so the part is five.'],
['Why is 6 = 9 − 3 true?',['The largest number comes first','Both sides have value six','Equals means write the next number'],1,'Nine minus three is six. An equals sign states that the two sides have the same value.']]]
];
const reviews=reviewRows.map(([grade,week,title,rows])=>{const source=math.find(l=>l.grade===grade&&l.week===week),questions=rows.map(([question,options,answer,explanation,visual])=>({question,options,answer,explanation,...(visual?{visual}:{})}));return{id:`k1-review-${grade}-${week}`,grade,week,subject:'maths',kind:'inquiry',k1Review:true,title,objective:source.objective,standard:source.standard,teach:source.activity+' Use a model and explain your thinking. This short review helps choose what to revisit; it does not establish mastery.',activity:'Make a different example away from the screen. Explain your model to a grown-up, then return to one earlier skill that needed help.',questions,...questions[0],minutes:10,order:530+grade*10+week,reviewStatus:'educator-review-needed'};});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function visual(v){if(v.type==='k1-frame')return '<div class="k1-ten-frame" role="img" aria-label="Ten-frame with '+v.n+' filled spaces and '+(10-v.n)+' empty spaces">'+Array.from({length:10},(_,i)=>'<span class="k1-frame-cell" aria-hidden="true">'+(i<v.n?'<i></i>':'')+'</span>').join('')+'</div>';if(v.type==='k1-equation')return '<div class="k1-equality" role="img" aria-label="'+esc(v.left+' equals '+v.right)+'"><span>'+esc(v.left)+'</span><b>=</b><span>'+esc(v.right)+'</span></div>';if(v.type==='k1-sort'){const shapes=[];for(let i=0;i<Math.max(v.circles,v.squares);i++){if(i<v.circles)shapes.push('circle');if(i<v.squares)shapes.push('square');}return '<div class="k1-sort-model" role="img" aria-label="'+v.circles+' circles and '+v.squares+' squares mixed together">'+shapes.map((s,i)=>'<span aria-hidden="true" class="k1-sort-piece '+s+' '+(i%3?'green':'gold')+'"></span>').join('')+'</div>';}return'';}
C.lessons.push(...math,...reviews);
root.WonderK1Second={math,reviews,visual};
})(globalThis);
