(function(root){
'use strict';
const data=[
[0,1,'Counting carefully','Touch or move each object once as you count. The last number tells how many are in the group. A grown-up may read the question, and counters may be used. Ask for help when needed; these checks guide practice.',[
 ['Count this group. How many counters?',['2','3','4'],1,'Touch each of the three counters once: one, two, three. The group has three.',[3]],
 ['Pip says one number for each of five objects. The last number is five. How many objects?',['4','6','5'],2,'The final count tells the group’s total. Five objects were counted.'],
 ['Which way helps avoid counting an object twice?',['Move each counted object to a new tray','Count as fast as possible','Skip the last object'],0,'Moving each counted object makes it clear which objects are already included.']
]],
[0,2,'Zero and quantities','Zero means there are none of the objects being counted. Match a numeral to the quantity by counting each object once. The empty group is still a quantity we can describe.',[
 ['Which numeral matches this empty group?',['1','0','5'],1,'No counters are present. The numeral 0 represents none of these counters.',[0]],
 ['Count the counters. Which numeral matches?',['2','3','4'],2,'Count each counter once. The final count is four, so choose 4.',[4]],
 ['A tray has two counters. All two are removed. How many remain?',['0','2','4'],0,'All the counters were removed. None remain, so the quantity is zero.']
]],
[0,3,'Same counters, new arrangement','Moving a set into a different arrangement does not change its quantity unless something is added or removed. Count carefully to check your prediction, and explain what changed.',[
 ['Pip spreads four counters farther apart without adding or removing any. How many now?',['5','4','0'],1,'Only the spacing changed. The same four counters are still present.'],
 ['Which action changes how many are in a group of three?',['Move the three into a row','Move the three closer together','Add one more counter'],2,'Adding one changes the quantity from three to four. Rearranging the same three does not.'],
 ['What numeral matches a tray with no counters?',['0','1','3'],0,'An empty tray contains zero counters. Zero names this quantity.']
]],
[0,4,'Compare and explain','Compare groups by matching one object from each. An unpaired object shows the group with more. If all objects have partners, the groups are equal, even if they take up different space.',[
 ['One group has two counters. Another has five. Which group has fewer?',['The group of five','The group of two','They are equal'],1,'Pair two counters from each group. The group of five has extras, so the group of two has fewer.'],
 ['Two groups each have three counters. One row is spread farther apart. What is true?',['The longer row has more','The shorter row has more','The quantities are equal'],2,'Both groups still have three. Matching one to one shows equal quantities.'],
 ['Four visitors each need a cup. There are three cups. What should Pip do?',['Add one cup','Remove one cup','Spread the cups apart'],0,'Matching leaves one visitor without a cup. One more cup makes four.']
]],
[1,1,'Counting-on review','Count the starting group accurately first. To add a small group, keep the known total and say a new number for each object that joins. Counting all is another way to check the result.',[
 ['There are six birds. One more arrives. How many now?',['6','7','8'],1,'Start at six and count one more: seven. There are seven birds.'],
 ['Start at four and count on three. Where do you finish?',['6','4','7'],2,'The three new counts are five, six and seven. Finish at seven.'],
 ['Pip knows there are five counters and adds two. Which counts track only the new counters?',['Six, seven','Five, six','One, two'],0,'The starting group is already counted. Say six for the first new counter and seven for the second.']
]],
[1,2,'Parts of ten review','Ten can be separated into two parts. Use a ten-frame or counters to find the missing part, then join the parts to check the whole. Revisit counting on when it helps.',[
 ['Nine counters are visible out of ten. How many are hidden?',['2','1','9'],1,'Nine and one make ten. One counter is hidden.'],
 ['Four red counters and some blue counters make ten. How many are blue?',['5','4','6'],2,'Six counters fill the remaining spaces. Four plus six equals ten.'],
 ['There are five shells. Two more arrive. How many shells altogether?',['7','3','6'],0,'Count on from five: six, seven. Five plus two equals seven.']
]],
[1,3,'Joining and parts review','A joining story combines a starting group with objects that arrive. A put-together story also combines parts, even if no objects move. Identify the question and explain each number in the model.',[
 ['Four shells are in a tray and three more are added. How many altogether?',['6','7','1'],1,'Join four and three, or count on three from four. The total is seven.'],
 ['A bag contains two red blocks and five blue blocks. Which equation gives the total?',['5 − 2 = 3','2 + 2 = 4','2 + 5 = 7'],2,'The two groups are parts of the same whole. Two plus five equals seven.'],
 ['A ten-frame has six filled spaces. How many more counters fill it?',['4','6','3'],0,'A full frame holds ten. Six and four make ten.']
]],
[1,4,'Opening-month math review','Choose a model that fits the story. Join parts when finding a whole; remove a part when finding what remains. Use addition to check subtraction and a ten-frame to revisit missing parts.',[
 ['Eight blocks are on a tray. Three are removed. How many remain?',['11','5','3'],1,'Start with eight and move three away. Five remain; five plus three checks the starting eight.'],
 ['Three visitors arrive, then four more arrive. How many visitors now?',['1','6','7'],2,'The groups join: three plus four equals seven.'],
 ['Three counters are one part of ten. What is the other part?',['7','3','6'],0,'Three and seven make ten. Build a full frame to check.']
]]
];
const lessons=data.map(([grade,week,title,teach,rows])=>{const questions=rows.map(([question,options,answer,explanation,counterGroups])=>({question,options,answer,explanation,...(counterGroups?{counterGroups}:{})}));return{id:'k1-review-'+grade+'-'+week,grade,subject:'maths',kind:'inquiry',k1Review:true,title,objective:'Explain and apply a small sample of this month’s number ideas.',minutes:10,order:450+grade*10+week,standard:null,reviewStatus:'educator-review-needed',teach,activity:'Make a different problem with large counters. Ask a grown-up to solve it, then explain how you checked their answer. Choose one idea to revisit later. The short review is practice evidence, not a full assessment.',questions,...questions[0]};});
root.WonderCurriculum.lessons.push(...lessons);root.WonderK1Reviews={lessons};
})(globalThis);
