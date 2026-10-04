(function(root){
'use strict';
const C=root.WonderCurriculum;
const math=[
['Make ten, then add','facts','2.OA.B.2','Use a ten to solve an addition fact.'],
['Think addition to subtract','factsub','2.OA.B.2','Use a missing-addend fact to subtract.'],
['A missing part','missing','2.OA.A.1','Find an unknown part in an addition story.'],
['Two steps in a story','twostep','2.OA.A.1','Represent two changes with two equations.'],
['Pairs, odd and even','parity','2.OA.C.3','Pair objects and identify a leftover.'],
['Rows and columns','rows','2.OA.C.4','Use equal addends to count an array.'],
['Build a hundred','hundred','2.NBT.A.1','Bundle ten tens into a hundred.'],
['Hundreds, tens and ones','expanded','2.NBT.A.1','Build a number from its place values.'],
['Read a number name','names','2.NBT.A.3','Connect words to a three-digit numeral.'],
['Counting by fives','skip5','2.NBT.A.2','Continue a pattern by adding five.'],
['Counting by tens and hundreds','skip100','2.NBT.A.2','Count across hundreds within 1,000.'],
['Compare three-digit numbers','compare3','2.NBT.A.4','Compare hundreds, then tens, then ones.'],
['Add without regrouping','addplain','2.NBT.B.5','Combine equal place values.'],
['Regroup a ten','addcarry','2.NBT.B.5','Exchange ten ones for one ten.'],
['Subtract with a trade','subcarry','2.NBT.B.5','Trade a ten before subtracting ones.'],
['Add four numbers','four','2.NBT.B.6','Group addends to make friendly totals.'],
['Add hundreds','addhundred','2.NBT.B.7','Connect a place-value model to addition.'],
['Regroup across zeros','subzero','2.NBT.B.7','Explain each exchange when subtracting.'],
['Mental jumps','mental','2.NBT.B.8','Add or subtract 10 or 100 mentally.'],
['Why a strategy works','strategy','2.NBT.B.9','Explain why exchanging place values preserves a number.'],
['Choose a measuring tool','tool','2.MD.A.1','Choose a ruler or measuring tape for an object.'],
['Small units, more units','units','2.MD.A.2','Compare measurements using different-sized units.'],
['Estimate before measuring','estimate','2.MD.A.3','Choose a reasonable unit and estimate.'],
['How much longer?','difference','2.MD.A.4','Compare lengths measured in the same unit.'],
['Ribbons and lengths','ribbon','2.MD.B.5','Solve a two-part length story.'],
['Jumps on a number line','numberline','2.MD.B.6','Use equal intervals to represent addition.'],
['Five-minute clock times','clock5','2.MD.C.7','Read the minute hand in groups of five.'],
['Morning and afternoon','ampm','2.MD.C.7','Distinguish a.m. from p.m. in a daily schedule.'],
['Coins and change','coins','2.MD.C.8','Combine US coin values and find change.'],
['Dollars and cents','dollars','2.MD.C.8','Represent a money amount in cents.'],
['A measurement line plot','lineplot','2.MD.D.9','Read repeated measurements from a line plot.'],
['Read a bar graph','bar','2.MD.D.10','Compare categories on a single-unit graph.'],
['Sort by shape attributes','attributes','2.G.A.1','Identify a shape using sides and corners.'],
['Faces of a cube','cube','2.G.A.1','Describe the equal square faces of a cube.'],
['Tile a rectangle','tile','2.G.A.2','Partition a rectangle into equal square units.'],
['Equal shares','shares','2.G.A.3','Name halves, thirds and fourths of one whole.']
];
function problem(l,seed=0){const k=Math.abs(seed)%5;let a,b,answer,prompt,steps,options,visual=null;
const set=(q,n,h)=>{prompt=q;answer=n;steps=h;};
switch(l.yearMode){
case'facts':a=8+k%2;b=3+k;set(`${a} + ${b}`,a+b,[`Move ${10-a} from ${b} to make ten with ${a}.`,`Ten and ${b-(10-a)} make ${a+b}.`]);break;
case'factsub':a=12+k;b=4+k%3;set(`${a} − ${b}`,a-b,[`Ask: ${b} plus what equals ${a}?`,`Count from ${b} to ten, then from ten to ${a}.`,`The difference is ${a-b}.`]);break;
case'missing':a=12+k;b=21+2*k;set(`Pip had some shells. Pip found ${a} more and now has ${b}. How many shells did Pip have at first?`,b-a,[`The unknown starting amount plus ${a} equals ${b}.`,`Undo the increase: ${b} − ${a} = ${b-a}.`]);break;
case'twostep':a=24+k;b=13+k;set(`There are ${a} books. ${b} arrive, then 8 are borrowed. How many remain?`,a+b-8,[`First add: ${a} + ${b} = ${a+b}.`,`Then subtract 8: ${a+b} − 8 = ${a+b-8}.`]);break;
case'parity':a=10+k;options=['odd','even'];set(`Pair ${a} counters. Is ${a} odd or even?`,a%2?'odd':'even',[`Make ${Math.floor(a/2)} pairs.`,a%2?'One is left over, so the number is odd.':`${a/2} + ${a/2} = ${a}. No counter is left over, so it is even.`]);break;
case'rows':case'tile':a=2+k%4;b=2+k%3;visual={type:'array',a,b};set(`A rectangle has ${a} rows of ${b} squares. How many squares?`,a*b,[`Each row contains ${b} equal squares.`,`${Array(a).fill(b).join(' + ')} = ${a*b}.`]);break;
case'hundred':a=1+k;set(`${a*10} tens make how many hundreds?`,a,['Ten tens have the same value as one hundred.',`${a*10} tens = ${a} hundreds.`]);break;
case'expanded':a=2+k;b=3+k%3;set(`What number is ${a*100} + ${b*10} + 6?`,a*100+b*10+6,[`Use ${a} hundreds, ${b} tens and 6 ones.`,`The numeral is ${a*100+b*10+6}.`]);break;
case'names':a=2+k;b=3+k;set(`Write ${['two','three','four','five','six'][k]} hundred ${['thirty','forty','fifty','sixty','seventy'][k]}-two as a numeral.`,a*100+b*10+2,[`The hundreds digit is ${a}.`,`There are ${b} tens and 2 ones: ${a*100+b*10+2}.`]);break;
case'skip5':a=75+k*5;set(`Count by fives: ${a}, ${a+5}, ${a+10}, ___`,a+15,[`Each step increases by 5.`,`${a+10} + 5 = ${a+15}.`]);break;
case'skip100':a=120+k*10;set(`Count by hundreds: ${a}, ${a+100}, ${a+200}, ___`,a+300,[`Keep tens and ones the same. Add one hundred.`,`The next number is ${a+300}.`]);break;
case'compare3':a=345+k*100;b=354+k*100;options=['<','=','>'];set(`${a} ___ ${b}`, '<',[`The hundreds are equal.`,`Compare tens: 4 tens are less than 5 tens, so ${a} < ${b}.`]);break;
case'addplain':a=21+k;b=32;set(`${a} + ${b}`,a+b,C.addSteps(a,b));break;
case'addcarry':a=36+k;b=27;set(`${a} + ${b}`,a+b,C.addSteps(a,b));break;
case'subcarry':a=62+k;b=28;set(`${a} − ${b}`,a-b,C.subSteps(a,b));break;
case'four':a=12+k;b=18-k;set(`${a} + ${b} + 24 + 16`,70,[`${a} and ${b} make 30.`,`24 and 16 make 40.`,`30 + 40 = 70.`]);break;
case'addhundred':a=246+k*10;b=134;set(`${a} + ${b}`,a+b,C.addSteps(a,b));break;
case'subzero':a=300+k*100;b=126+k;set(`${a} − ${b}`,a-b,C.subSteps(a,b));break;
case'mental':a=450+k*10;b=k%2?10:100;set(`${a} − ${b}`,a-b,[`Remove ${b===10?'one ten':'one hundred'}.`,`The other place values stay the same: ${a-b}.`]);break;
case'strategy':options=['The value stays the same.','The number becomes larger.','The number becomes smaller.'];set('Why can we trade 1 ten for 10 ones?',options[0],['One ten and ten ones both have value 10.','Changing the grouping does not change the total.']);break;
case'tool':options=['Measuring tape','Kitchen scale','Thermometer'];set('Which tool can measure the distance around a large box?',options[0],['A measuring tape bends around the box.','A scale measures mass; a thermometer measures temperature.']);break;
case'units':a=8+2*k;set(`A strip is ${a} centimeters long. How many 2-centimeter blocks cover it with no gaps?`,a/2,[`Each block covers 2 centimeters.`,`${a/2} groups of 2 cover ${a} centimeters. Bigger units need fewer units.`]);break;
case'estimate':options=['About 15 centimeters','About 15 meters','About 15 kilometers'];set('Which is a reasonable estimate for the length of a pencil?',options[0],['Compare with a familiar hand-sized object.','Centimeters are sensible for a pencil; meters and kilometers are much too large.']);break;
case'difference':a=36+k;b=19+k;set(`A ribbon is ${a} cm long. Another is ${b} cm long. How many centimeters longer is the first?`,a-b,[`Both lengths use centimeters.`,`Subtract: ${a} − ${b} = ${a-b} cm.`]);break;
case'ribbon':a=30+k;b=15+k;set(`Join ribbons of ${a} cm and ${b} cm, then cut off 7 cm. How many centimeters remain?`,a+b-7,[`Add the lengths: ${a+b} cm.`,`Subtract the cut piece: ${a+b} − 7 = ${a+b-7} cm.`]);break;
case'numberline':a=25+k*5;b=13;set(`Start at ${a} on a number line. Jump 10 right, then 3 right. Where do you land?`,a+b,[`The first jump lands at ${a+10}.`,`Three more equal unit intervals land at ${a+13}.`]);break;
case'clock5':a=2+k;b=5*(k+1);visual={type:'year-clock',hour:a,minute:b};set(`The hour is ${a}. Read the clock: how many minutes past ${a}?`,b,[`Each numbered interval around the clock is 5 minutes.`,`The minute hand points to ${k+1}, so ${k+1} groups of 5 = ${b} minutes.`]);break;
case'ampm':options=['a.m.','p.m.'];set('Pip eats breakfast at 7 in the morning. Is this a.m. or p.m.?','a.m.',['Midnight to before noon is a.m.','Seven in the morning is 7 a.m.']);break;
case'coins':a=25+10*(k+1);b=18+k;set(`You have a quarter and ${k+1} dimes. Spend ${b} cents. How many cents remain?`,a-b,[`A quarter is 25 cents. Each dime is 10 cents.`,`Start with ${a} cents. ${a} − ${b} = ${a-b} cents.`]);break;
case'dollars':a=k+1;set(`How many cents are in $${a}.25?`,a*100+25,[`Each dollar is 100 cents.`,`${a*100} cents + 25 cents = ${a*100+25} cents.`]);break;
case'lineplot':a=2+k;b=3+k;visual={type:'year-plot',labels:['4 cm','5 cm','6 cm'],counts:[a,b,1]};set('The line plot shows leaf lengths. How many leaves measure 5 cm?',b,['Each X represents one measured leaf.','Count only the X marks above 5 cm: '+b+'.']);break;
case'bar':a=4+k;b=2+k;visual={type:'year-bar',labels:['Apples','Pears','Plums'],counts:[a,b,3]};set('How many more apples than pears are shown?',a-b,[`The apple bar shows ${a}; the pear bar shows ${b}.`,`${a} − ${b} = ${a-b}.`]);break;
case'attributes':a=[3,4,5,6,3][k];options=['triangle','quadrilateral','pentagon','hexagon'];set(`A flat closed shape has ${a} straight sides and ${a} corners. What is its name?`,options[a-3],[`Count all straight sides and corners.`,`A ${options[a-3]} has ${a} sides.`]);break;
case'cube':set('How many square faces does a cube have?',6,['Imagine a box: top, bottom, front, back, left and right.','Those are six square faces.']);break;
case'shares':a=[2,3,4,2,4][k];set(`A whole rectangle is split into ${a} equal shares. How many ${a===2?'halves':a===3?'thirds':'fourths'} make the whole?`,a,[`The name describes the number of equal shares in the whole.`,`${a} ${a===2?'halves':a===3?'thirds':'fourths'} make one whole.`]);break;
default:throw Error('Unknown year math skill: '+l.yearMode);
}
return{prompt,answer,display:String(answer),steps,options,visual,a,b,mode:l.yearMode};}
const originalProblem=C.problem;C.problem=(l,seed)=>l.yearMode?problem(l,seed):originalProblem(l,seed);
math.forEach((m,i)=>C.lessons.push({id:`year2-m-${i+1}`,grade:2,subject:'maths',kind:'math',yearMode:m[1],title:m[0],objective:m[3],standard:m[2],minutes:15,order:100+i,week:i+1}));
root.WonderYear={math,problem,weeks:[],grade:2};
if(typeof module!=='undefined')module.exports=root.WonderYear;
})(typeof globalThis!=='undefined'?globalThis:this);
