(function(root){
'use strict';
const Y=root.WonderYear,C=root.WonderCurriculum;
const mathHands=[
'Use counters to show 8 + 5 by making ten. Draw the ten and the leftovers.',
'Use 15 counters. Remove 7, then write the related addition fact to check.',
'Hide some of 20 counters under a cup. Count the visible ones and explain how to find the hidden part.',
'Make a story with two changes. Draw it, write two equations, and explain the order.',
'Make pairs with 11, 12, 13, and 14 objects. Record the odd and even groups.',
'Arrange up to 25 counters in rows of equal length. Write an addition equation for each arrangement.',
'Draw ten bundles of ten. Explain why they have the same value as one hundred.',
'Build 406 with drawn hundreds, tens, and ones. Explain why the zero matters.',
'Write 372 in words, numerals, and expanded form. Ask someone to match the three forms.',
'Count by fives from 85 to 125. Explain what happens when you cross 100.',
'Count by tens from 180 and by hundreds from 180. Compare the two patterns.',
'Use place value to compare 507 and 570. Explain the first place that differs.',
'Show 24 + 32 with drawings. Connect each part of the model to the written equation.',
'Show 38 + 27 with a drawing that includes exchanging ten ones for a ten.',
'Draw 63 − 28. Show the exchange, then check with addition.',
'Add 17, 23, 14, and 26 in two different groupings. Explain why both totals agree.',
'Draw a model for 268 + 157. Explain each regrouping and check the total.',
'Draw the exchanges for 400 − 158. Use addition to check the result.',
'Start at 560. Add 100, subtract 10, then subtract 100. Explain which digits change.',
'Explain why 49 + 26 can be solved as 50 + 25. Use counters or a drawing.',
'With a grown-up, measure three safe objects. Choose a ruler or tape and start at zero.',
'Measure one strip with 1-cm and 2-cm paper units. Explain why the counts differ.',
'Estimate three lengths in centimeters or meters, then measure. Compare estimates and results.',
'Measure two pencils to the nearest centimeter. Draw and calculate the difference.',
'Draw a 40-cm ribbon joined to a 25-cm ribbon, with 12 cm removed. Label each step.',
'Draw equally spaced marks from 20 to 50. Show 27 + 16 with jumps.',
'Use a paper clock with movable hands to show 2:15, 4:30, and 7:55. Explain both hands.',
'Make a schedule showing a morning, noon, afternoon, and evening event using a.m. and p.m.',
'Use drawn US coins to make 67 cents in two ways. Check each total.',
'Draw a pretend $2.35 purchase paid with $3.00. Count the change; no real purchase is needed.',
'Measure six safe objects to the nearest centimeter. Make a line plot with one X per object.',
'Ask up to six people a non-private favorite-fruit question. Make a single-unit bar graph and compare categories.',
'Draw a triangle, quadrilateral, pentagon, and hexagon. Label side and corner counts.',
'Examine a safe box-shaped model. Draw or trace its faces and compare it with a flat square.',
'Draw a rectangle partitioned into 4 rows of 5 equal squares. Count using rows and columns.',
'Draw equal rectangles split into halves, thirds, and fourths. Show two different shapes of equal halves.'
];
const language=[
['Complete sentences','A sentence expresses a complete thought. “The cat naps.” tells who and what happens.','Turn “Near the tree” into a complete sentence.','L.2.1.f'],
['Nouns and plural nouns','Nouns name people, places, things, or ideas. Some plurals change spelling: child becomes children.','Write sentences using children, feet, and mice.','L.2.1.b'],
['Collective nouns','A collective noun names a group: a team of players, a flock of birds.','Use team and flock in two complete sentences.','L.2.1.a'],
['Past-tense verbs','Some past-tense verbs do not use -ed. Go becomes went, and eat becomes ate.','Tell about yesterday using went, saw, and ate.','L.2.1.d'],
['Reflexive pronouns','A reflexive pronoun refers back to the subject: “Pip made it himself.”','Finish: I helped myself. She helped ___. They helped ___.','L.2.1.c'],
['Adjectives','Adjectives describe nouns. A narrow path differs from a wide path.','Describe a familiar object using two precise adjectives.','L.2.1.e'],
['Adverbs','An adverb can tell how an action happens: “The child walked carefully.”','Change “Pip spoke” by adding an adverb and explain the difference.','L.2.1.e'],
['Join related ideas','Words such as and, but, and because can connect ideas. Choose a link that fits the meaning.','Join “It rained” and “We went inside” using because.','L.2.1.f'],
['Capitals for names','Names of people, places, holidays, and products begin with capital letters.','Edit: “maya read about india on monday.” Explain the capitals.','L.2.2.a'],
['Greetings and closings','A friendly letter can begin “Dear Pip,” and end “Your friend,” before the name.','Write a short pretend letter with commas in the greeting and closing.','L.2.2.b'],
['Contractions','An apostrophe can stand for omitted letters: do not becomes don’t.','Expand can’t, isn’t, and we’re, then use one contraction in a sentence.','L.2.2.c'],
['Showing ownership','An apostrophe can show possession: “the bird’s nest” is a nest belonging to one bird.','Write about one cat’s bowl and one child’s book.','L.2.2.c'],
['Spelling patterns','Known word patterns can help spell a new word. Check unusual spellings in a dictionary.','Use light to help spell night and bright. Check each word.','L.2.2.d'],
['Use a dictionary','A beginning dictionary lists words and meanings. Alphabetical order helps you locate a word.','Put garden, gate, and game in alphabetical order, then check a dictionary.','L.2.2.e'],
['Formal and informal speech','How we speak can change with the situation. A report often uses more complete, precise wording than a quick chat.','Say one greeting to a friend and one introduction for a class report.','L.2.3.a'],
['Compare shades of meaning','Words such as stroll, walk, and march suggest different ways of moving. Choose one that matches your meaning.','Act or describe the difference between whisper, speak, and shout.','L.2.5.b'],
['Compound words','Two familiar words can combine: rain + coat = raincoat. Their meanings can help explain the new word.','Explain the parts of bedroom, sunlight, and backpack.','L.2.4.d'],
['Use new vocabulary','Practice a new word in conversation and writing. A clear sentence can help another person understand it.','Choose three words learned this year. Define each and use it in a new sentence.','L.2.6']
];
Y.weeks=Y.math.map((m,i)=>({number:i+1,title:m[0],math:`year2-m-${i+1}`,reading:`year2-r-${i+1}`,science:`year2-s-${Math.floor(i/2)+1}`,social:`year2-h-${Math.floor(i/2)+1}`,hands:mathHands[i],language:language[Math.floor(i/2)],checkpoint:(i+1)%9===0}));
Y.days=['Explore','Practice','Investigate','Create','Share & review'];
Y.tasks=function(week,day){const w=Y.weeks[week-1],r=C.lessons.find(l=>l.id===w.reading),s=C.lessons.find(l=>l.id===w.science),h=C.lessons.find(l=>l.id===w.social),revisit=week%2===0;
const common={key:'reading-time',title:'Choose a book and read together',text:'Spend about 15–20 minutes with a suitable book from home, school, or a library. Discuss one detail and one question. This independent reading extends the short in-app text.',minutes:20};
const days=[
[{key:'math',title:'Learn the math idea',text:'Open the worked example. Build a model before trying the five practice problems.',lesson:w.math,minutes:20},{key:'reader',title:'Meet this week’s text',text:'Listen or read once for meaning. Tell a grown-up who or what it is about, then try the comprehension check.',lesson:w.reading,minutes:20},{key:'science',title:revisit?'Revisit the investigation':'Begin the investigation',text:revisit?'Return to your earlier notes. Repeat the observation or test and compare the evidence.':s.activity,lesson:w.science,minutes:20}],
[{key:'math',title:'Model it with your hands',text:w.hands,lesson:w.math,minutes:20},{key:'words',title:w.language[0],text:w.language[1]+' '+w.language[2],minutes:15},{key:'social',title:revisit?'Compare another source':'Explore people and places',text:revisit?'Return to this topic with a second public picture, book, or willing grown-up’s account. Describe a similarity and a difference.':h.activity,lesson:w.social,minutes:20}],
[{key:'math',title:'Practice and explain',text:'Try five problems again. Explain one strategy aloud. If you need help, use a model and try a fresh problem.',lesson:w.math,minutes:20},{key:'reader',title:'Read closely',text:'Reread this week’s text. Find evidence for the answer, ask a new question, and reread one sentence with expression.',lesson:w.reading,minutes:20},{key:'science',title:'Record your evidence',text:s.activity+' Add a dated drawing, observation table, or explanation to your notebook.',lesson:w.science,minutes:20}],
[{key:'math',title:'Make a problem for someone',text:'Create a problem about '+mTitle(w)+'. Solve it yourself, then ask someone to solve it and compare strategies.',lesson:w.math,minutes:20},{key:'write',title:'Write, revise, and share',text:r.writing+' Reread your draft, add one useful detail, and check capitals and punctuation.',minutes:25},{key:'social',title:'Explain with a source',text:'Use the lesson and your investigation to answer a question about '+h.title.toLowerCase()+'. Name your source and explain one thing you still wonder.',lesson:w.social,minutes:20}],
[{key:'review',title:w.checkpoint?'Quarter checkpoint':'Mix and revisit',text:w.checkpoint?'Try the quarter checkpoint in the math workshop. Explain a model from this quarter and ask a grown-up which skills need more practice.':'Revisit one earlier math lesson and one earlier reading passage. Try without a hint first, then ask for help if needed.',lesson:w.checkpoint?`year2-check-${week}`:Y.weeks[Math.max(0,week-3)].math,minutes:25},{key:'share',title:'Share your learning',text:'Show your week’s writing or drawing. Speak in complete sentences, listen to a question, and respond with a detail from your work.',minutes:15},{key:'reflect',title:'Plan your next small step',text:'Write one thing you can explain and one thing you want to practice. A grown-up can review your work and repeat this week before moving on.',minutes:10}]
];return[...days[day],common];};
function mTitle(w){return w.title.toLowerCase();}
for(const week of [9,18,27,36])C.lessons.push({id:`year2-check-${week}`,grade:2,subject:'maths',kind:'math',yearCheckpoint:week,title:`Quarter ${week/9}: mixed math check`,objective:'Explain and apply a sample of skills from this quarter.',standard:'Quarter review sample',minutes:20,order:200+week});
const p=C.problem;C.problem=(l,seed=0)=>{if(!l.yearCheckpoint)return p(l,seed);const end=l.yearCheckpoint,start=end-9,index=start+Math.abs(seed)%9;return p(C.lessons.find(x=>x.id===`year2-m-${index+1}`),seed);};
Y.language=language;
})(typeof globalThis!=='undefined'?globalThis:this);
