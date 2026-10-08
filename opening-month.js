(function(root){
'use strict';
// Original adult-supported daily plans; review and classroom/family trials are pending.
const units=[[
{materials:'Five large counters, two trays, paper, a thick pencil and four letter cards: M/m, S/s, A/a, P/p.',
math:[
'Place three large counters in a row. Model touching one as you say each number, then sweep your hand around the group: three tells how many. Invite the child to count two counters without your pointing. If an object is counted twice, move each counted object to a second tray.',
'Build groups of one, two, four and five. After counting, ask how many without recounting for them. Swap roles: the child requests a group and checks the group you make. Keep to one through three if the larger sets are difficult.',
'Put four counters in a tray. Ask the child to move one counter for each count into an empty tray. Deliberately skip a counter once and ask what went wrong. Let the child fix the count; do not ask for speed.',
'Tell this story: two toy visitors arrive, then one more joins. Build the group and count all three. Repeat with three visitors and one more. The task is counting the final group; a written equation is optional.',
'Without a model, ask the child to make a group of five, then a different group of two. Ask how they know each total. Try the weekly review and record whether pointing or a spoken model was needed. Revisit a smaller set if counting is not yet one-to-one.'
],
reading:[
'Entry observation: show a familiar picture book. Ask where reading begins and let the child point to one picture and one printed word. No reading is expected. Show M and m, name the letter, and model the beginning sound in moon without an extra uh. Invite a match between the two forms.',
'Revisit M/m, then introduce S/s with the beginning sound in sun. Say moon and sun; let the child point to the matching letter. Model the sound yourself: browser audio names letters or says whole words, not isolated phonemes. Trace each letter in the air.',
'Introduce A/a using the short vowel in apple. Match uppercase and lowercase a with m and s cards nearby. Clap the beats in a familiar name together; spoken beats are syllables, not letters. Accept an oral or pointing response.',
'Introduce P/p with the beginning sound in pan. Compare m and p in moon and pan using an adult sound model. Ask the child to find P and p among the four pairs. Revisit one unfamiliar letter rather than adding more.',
'Mix the M/m, S/s, A/a and P/p cards. Ask the child to match pairs and name any known letters. Model one example sound for each unfamiliar letter. Together blend m-a-p orally only if those sounds are secure. Record names and sound examples separately.'
],
writing:[
'Draw something noticed today. Ask the child to tell one idea about it. Write their exact sentence below the picture and read it back while pointing to the words.',
'Make a large M in the air and on paper with adult guidance. Invite a drawing of something starting like moon. Drawing and oral explanation are valid participation; neat handwriting is not the goal.',
'Point to the spaces in yesterday’s dictated sentence. Read it together. Ask the child to add one detail to the picture and dictate a word or sentence about it.',
'Try P/p on paper after watching a slow model. Let the child choose a known letter to use as a label for their drawing. Explain what the label stands for.',
'Choose a drawing from the week. The child tells one complete idea; a grown-up writes it if needed. Read the sentence back and invite the child to point to where it starts.'
],
inquiry:[
'Look at a large safe object such as a clean wooden spoon. Separate an observation, such as smooth, from a guess, such as it will roll. Draw one observed feature. Do not taste unknown objects.',
'Compare a cloth and a sheet of paper by looking and gently touching. Name one similarity and one difference. Ask which observation supports each description.',
'Draw three familiar actions from the morning. Arrange them as first, next and last. Ask what happened before the final action. Different households may have different routines.',
'Use paper shapes to show a table and a door in a pretend room. Stand in the room or imagine it from above. Point to one place on both the model and the drawing.',
'Share one observation drawing and one sequence. Ask a question about a partner’s work and listen to the answer. Add a new detail learned from the discussion.'
]},
{materials:'Five large counters, paper numeral cards 0–5, letter cards T/t, N/n, I/i, C/c, paper and a pencil.',
math:[
'Show an empty tray beside a tray with two counters. Explain that zero describes how many counters are in the empty tray. Place the numeral 0 beside it. Invite the child to make an empty group and say what zero means.',
'Make groups of zero, one and three. Match numeral cards to the groups, counting where needed. Switch the positions of the groups and repeat so the child uses quantity rather than location.',
'Start with five counters. Remove them one at a time, counting the remaining group after each move. When none remain, match 0. This is an exploration of quantities, not a timed backward-counting test.',
'Offer numeral cards 0, 2, 4 and 5. The child chooses a card and builds that quantity with counters. Ask how they checked it. Slowly model writing one chosen numeral; do not require perfect formation.',
'Ask the child to match empty, three-counter and five-counter trays to numeral cards. Include a fresh arrangement. Use the weekly review and revisit touching once per object if the quantity match needs support.'
],
reading:[
'Revisit last week’s four letter pairs. Introduce T/t with the start of top. Model a short crisp sound, avoiding an added uh. Match T with t, then trace the forms.',
'Introduce N/n using nest. Compare n and m with adult spoken models. Ask which example begins like nest: nose or sun. This checks a beginning sound orally; it is not a pronunciation score.',
'Introduce I/i with the short vowel in insect. Compare short a and short i using adult models of map and sit. Point to the vowel card; do not require independent word reading yet.',
'Introduce C/c with the k sound in cat. Explain that this is one sound the letter can spell. Revisit t, n and i, then match all four uppercase/lowercase pairs.',
'Review m, a and t. If their sounds are familiar, blend m-a-t slowly and then smoothly. Change m to s to make sat with a model. If blending is difficult, return to matching letters and adult oral blending.'
],
writing:[
'Draw an empty basket and dictate what it holds. A grown-up writes the sentence, points out its first capital and reads it back.',
'Watch a slow T/t model, then try one large letter. Tell a partner something that starts like top. The partner repeats the idea before adding their own.',
'Draw an object noticed yesterday and add a label using a known letter. Ask the child to explain how their letter relates to the object.',
'Point to a word, a letter and a space in a dictated sentence. Use a finger to follow the sentence as a grown-up reads it once.',
'Tell two ideas about one picture. A grown-up writes them as two sentences. Read each one and ask which detail the child wants to add.'
],
inquiry:[
'Observe the same safe object by looking and touching. Record two properties. Explain why guessing its hidden contents would require more evidence.',
'Sort large safe objects into smooth and rough groups by touch. Discuss an object that could fit differently depending on the part touched. Explain the sorting rule.',
'Compare a recent drawing with an earlier one. Describe a change that is visible, and something the drawings cannot tell. A picture is evidence for some questions, not all questions.',
'Make a simple pretend-room map with a door and two familiar objects. Use near and far relative to the door. Move an object and update its map symbol.',
'Ask a partner to follow your room map and find one object. If the map is unclear, change a symbol and try again. Explain how the revision helped.'
]},
{materials:'Five large counters, two trays, letter cards B/b, F/f, O/o, D/d, paper and a pencil.',
math:[
'Count four counters in a row, then spread those same counters far apart. Ask whether the total changed and why. Count to check. Emphasize that changing space does not add an object.',
'Make two different arrangements of three counters: a row and a small cluster. Count each arrangement once. Ask how to remember which objects were already counted; moving them is one option.',
'Count five counters, then let a partner rearrange them while the child watches. Ask for a prediction before recounting. If the child says more, compare the exact counters before and after.',
'Contrast moving counters with adding a counter. Start with three; first rearrange, then add one. Ask which action changes the total and explain with the objects. Remove the added counter to check.',
'Use two, four and five counters in unfamiliar arrangements. Ask the child to count and explain whether moving them changes how many. Use the review and record if a recount was needed; recounting is a useful strategy.'
],
reading:[
'Revisit familiar letter pairs. Introduce B/b with the beginning sound in bed. Compare the uppercase and lowercase forms; model carefully rather than treating reversed forms as a failure.',
'Introduce F/f with fan. Hold the beginning sound briefly, then say the whole word. Ask the child to match F and f and identify whether fan or moon begins with that sound.',
'Introduce O/o using the short vowel in octopus. A grown-up models local pronunciation. Compare pot and pat orally; point to o or a with support as needed.',
'Introduce D/d with dog. Match B/b and D/d beside one another, noticing the forms and saying their names. Trace one at a time with a slow model.',
'Review this week’s four pairs plus two older ones. If the needed sounds are secure, model blending d-o-g and m-o-p. Ask the child to point to the changed beginning and ending spellings; words may remain adult modeled.'
],
writing:[
'Draw the same group before and after moving its counters. Dictate a sentence about what stayed the same. Read the sentence back while pointing.',
'Try F/f after an adult models the strokes. Add a drawing and a meaningful label. Explain the drawing to someone who has not seen it.',
'Look at yesterday’s dictated sentence. Find a space and its ending mark. Dictate another idea about the same topic.',
'Tell a short event in order using first and then. Draw both parts. A grown-up records the child’s words without inventing extra details.',
'Choose one piece to share. Invite a partner to ask a question, then add a drawing detail or dictated sentence that answers it.'
],
inquiry:[
'Arrange three picture cards showing a pretend plant being planted, growing and being watered. Discuss that watering may happen many times; a simple sequence does not show every event.',
'Use yesterday’s work as a source. Ask what happened first and point to evidence. Distinguish what you remember from what is visible on the page.',
'Compare an old and a new drawing of the same safe object, or create two pretend drawings. Describe differences without guessing the artist’s feelings.',
'Ask a willing grown-up one question about an earlier daily routine. Draw an answer and identify that the source was their account. Different people may remember different details.',
'Put a drawing, an object and an account together. Say which could help answer when, what or how questions, and name one question the evidence cannot settle.'
]},
{materials:'Two groups of five large counters, letter cards G/g, E/e, H/h, K/k, paper and a pencil.',
math:[
'Place three counters in one row and four below them. Pair one from each row. Explain that the unpaired counter shows which group has more. Use matching rather than judging how long the row looks.',
'Compare two groups of three with different spacing. Match pairs to show they are equal. Ask the child to spread one row and explain why that does not change equality.',
'Offer groups of two and five. Ask which has fewer and show matching pairs. Switch their positions and ask again, keeping the same quantities.',
'Create a pretend table with four visitors and three cups represented by counters. Match one cup to each visitor. Decide whether another cup is needed and explain using the unpaired visitor.',
'Compare equal groups, then a smaller and larger group up to five. Include a rearranged row and an empty group as a stretch. Use the review and explain more, fewer or equal with evidence.'
],
reading:[
'Introduce G/g with the beginning sound in goat after reviewing known pairs. Explain that this is one common sound for g. Match its two forms and trace with support.',
'Introduce E/e using the short vowel in egg. Model hen and pin, listening for their different middle vowels. Point to e or i as a supported oral activity.',
'Introduce H/h with hat. Model a gentle beginning sound without an extra vowel. Compare hat and mat orally, then match H/h with the other letter pairs.',
'Introduce K/k with kite. Explain that k and c can spell the same beginning sound in these examples. Match K/k, then compare the shapes with C/c.',
'Review all sixteen introduced letter pairs in small groups, stopping before fatigue. Ask for a name and one example sound separately. Model a short-e blend such as h-e-n only if its letters are familiar. Plan which letters to revisit next week.'
],
writing:[
'Draw a group with more objects and a group with fewer. Dictate a sentence explaining the comparison. Point to where the sentence starts.',
'Try a large E/e after a model, then choose a known letter for an independent label. Tell a partner what the label means.',
'Dictate an opinion about a familiar activity and a reason: I like ... because ... . A grown-up writes the child’s idea and reads it back.',
'Add one useful detail to an earlier picture or sentence. Explain how the change helps someone understand it.',
'Select two pieces from this month. Explain one new thing learned and one thing to practise. A grown-up records the plan without labeling the child’s overall ability.'
],
inquiry:[
'Build a pretend room using large objects. Draw it from above, showing a door and two objects. Explain what each mark represents.',
'Create a simple key for the map using a square for a table and a circle for a rug. Match each symbol to its object before trying a route.',
'Describe a route from the door to the rug using near, beside and past. A partner follows the route with a finger on the map and asks about unclear directions.',
'Move one object and update the map. Explain why a map may need to change when the place changes. Compare the old and new versions.',
'Use the finished map to answer a partner’s question. Share one change made after feedback. Revisit observations, sequencing and counting while explaining the room.'
]}
],[
{materials:'Ten large counters, a ten-frame drawn as two rows of five, short-vowel word cards, paper and a pencil.',
math:[
'Entry observation: ask the child to make six counters and explain how they counted. Model keeping that total in mind and adding one counter: six, seven. If the original group cannot yet be counted reliably, revisit smaller sets before counting on.',
'Start with four counters and add two. Say four, then five and six as each new counter arrives. Repeat with five plus two. Ask why it is unnecessary to count the first group again.',
'Tell two joining stories with starting groups of three and six and two new objects each. The child models and counts on, then explains what each count stands for. Count all to check if needed.',
'Compare two strategies for five plus three: count every counter, then start at five and count three more. Discuss why both reach eight. Invite the child to choose a strategy and explain it.',
'Try six plus one and four plus three without a demonstration. Ask for a model or explanation, then use the weekly review. Record the strategy and help used rather than judging speed.'
],
reading:[
'Entry observation: show mat, sit and sun without pictures. Invite the child to blend them; model any unfamiliar letter sound. Separately match uppercase and lowercase letters. If these short-vowel words need substantial help, revisit the kindergarten letter and vowel trail with a grown-up before introducing sh.',
'With adult models, review map/mat, pin/pen and pot/cup. Point to the middle vowel and blend every spelling. Discuss unfamiliar word meanings. Avoid guessing from only the beginning or a picture.',
'Model sh as one sound spelled by two letters in ship. Blend sh-i-p, then sh-o-p. Ask the child to keep the team together while comparing ship and shop. Use whole-word browser audio only as an optional model.',
'Read fish and shut with support, keeping sh together. Revisit two short-vowel words from the entry activity. Ask which spelling represents the team, then build a word using the tiles.',
'Read the connected shop passage with its helper-word notes. Ask where the fish swims and point to the text for evidence. Reread one sentence smoothly. Note decoding support separately from understanding.'
],
writing:[
'Draw one observation and write or dictate a sentence. A grown-up models a starting capital, spaces and an ending mark. Ask the child to read or repeat their own message.',
'Write a known short-vowel word after saying its sounds with support. Use the word as a label and explain how it connects to the drawing.',
'Compose a sentence about a pretend shop. Count its spoken words, then write or dictate them with spaces. Read it back to check the meaning.',
'Add one detail to yesterday’s sentence. Compare the two versions and say what the added words help a reader imagine.',
'Share a complete sentence about this week’s learning. Listen to a question and answer using a detail from the work.'
],
inquiry:[
'Observe a safe plant or a clear plant picture. Identify a leaf, stem and root if visible. Separate visible evidence from parts hidden by a pot; do not pull up a plant just to inspect it.',
'Draw the observed plant and label visible parts with help. Ask how a leaf and a stem differ. Use observations rather than saying every plant looks exactly the same.',
'Compare two plants or pictures. Describe a shared feature and a difference. Record which source was used and avoid deciding needs from appearance alone.',
'Look at an outdoor or houseplant with a grown-up. Ask how it receives light and water. Do not withhold its care for a quick experiment. Discuss what could be observed over time.',
'Revisit the drawing and add one accurate detail. Explain which observation supports it. Ask a new question that could be investigated over several days.'
]},
{materials:'Ten large counters in two colors or shapes, a two-row ten-frame, word cards, paper and a pencil.',
math:[
'Fill a ten-frame. Slide six counters to one side and leave four on the other. Name both parts and the whole. Cover one part, then uncover to check the missing part.',
'Find partners for three, five and seven that make ten. Use the empty spaces in a ten-frame as a model. Record each pair with an equation and explain what the equals sign says about the two sides.',
'Present ten counters with two under a paper cover. Count the visible eight, predict the hidden part, then check. Repeat with different parts so the child cannot use position as a clue.',
'Explain why four plus six and six plus four have the same whole. Build both arrangements. Ask for a different pair that makes ten and compare the models.',
'Find a missing part when nine of ten are visible, then when four are visible. Use the review, including an earlier counting-on task. If help is needed, keep practising with a full frame before removing it.'
],
reading:[
'Model ch as one sound in chin and chat. Blend all three sounds while pointing to ch together. Compare ch with last week’s sh using adult spoken models.',
'Build chin, then build chat by changing both the middle and last spellings with a clear model. Explain that two changes were made. Point to ch, which stayed the same. Read the real words chin and chat again.',
'Read chop and much with support. Notice that ch can appear at the beginning or end. Say the word before naming the spelling location.',
'Mix ship, shop, chin and chat cards. Read through each word and identify sh or ch. Model rather than mark pronunciation wrong if speech recognition would be unreliable.',
'Read the connected chat passage after reviewing its new/helper words. Ask what Pip can do and find the answer in the text. Explain the meaning of chop in this passage before rereading.'
],
writing:[
'Draw an event and tell what happened first. Write or dictate a sentence that includes the event and a subject.',
'Add a second event using then. Read both sentences to check that their order makes sense. A grown-up scribes unfamiliar words when needed.',
'Choose one known ch word to spell, using sound-to-spelling support. Place it in a meaningful sentence rather than a disconnected copying list.',
'Revise one sentence to make a person, place or action clearer. Check the capital and ending mark after checking meaning.',
'Share the two-event story. Invite a partner to retell it and identify any missing detail together.'
],
inquiry:[
'Ask what a familiar plant needs to continue growing. Use a reliable age-appropriate information book or adult explanation to connect water and light with observations. A single picture does not prove a cause.',
'Choose one cared-for plant to observe over time. Draw it today and record the date with help. Keep normal care; do not create harmful conditions for living things.',
'Look again at the plant and compare drawings. State whether a change is actually visible. No visible change in one day is a valid observation.',
'Plan a fair comparison using pictures or a longer adult-supervised observation. Identify what would be kept similar and what question the comparison might answer; do not claim the test is already complete.',
'Explain one plant observation, one fact learned from a source and one remaining question. Distinguish those three kinds of statements.'
]},
{materials:'Ten large counters, two trays, word cards for stop/spot/pond/plan, paper and a pencil.',
math:[
'Act out a story with three counters, then two joining. Identify the first part, joining part and final whole. Write three plus two equals five and explain every number.',
'Model four shells joined by three, then two blocks joined by five. Ask the child to draw each story and choose counting all or counting on. Explain why the situations use joining.',
'Create a story for six plus two. A partner models it, then compares the model with the equation. Repair an unclear story rather than simply correcting its answer.',
'Contrast a joining story with two already-present groups: three red counters and four blue counters in one tray. Both combine parts, though nothing moves in the second story. Model the total.',
'Try new joining and put-together stories, then the weekly review. Ask which number is the whole and revisit a make-ten partner from last week.'
],
reading:[
'Blend stop slowly, keeping s and t as separate sounds. Compare with sh in shop, where two letters spell one sound. Do not count letters as though they always equal sounds.',
'Compare stop and spot by tracking letter order. Build each word with tiles and point to what moved. Read the whole word again before checking meaning.',
'Blend pond and keep both n and d at the end. Practise saying each sound with a grown-up; the app does not automatically score the child’s speech.',
'Read plan and revisit stop, spot and pond in mixed order. Ask the child to identify beginning and ending sounds orally before showing a model if needed.',
'Read the connected pond passage after its introduced words. Ask where Pip can stop and locate the evidence. Reread one sentence with natural phrasing after accurate blending.'
],
writing:[
'Tell an event from a pretend visit to a pond. Write or dictate a beginning sentence naming who and where.',
'Add a middle event and an ending. Read the three parts aloud and check their order.',
'Choose a word from the reading lesson and use it accurately in the story. Ask a partner to explain what the sentence means.',
'Revise the story to answer one reader question. Check sentence capitals, spaces and end marks with help.',
'Share the revised story and describe one change that made it clearer. The adult records support separately from the child’s ideas.'
],
inquiry:[
'Compare a current picture of a classroom object with an older public picture or a clearly labeled pretend example. Identify what can be seen before guessing why it changed.',
'Ask one question about school in the past. Discuss whether a photograph, object or a willing person’s account could help answer it.',
'Collect one answer from a willing grown-up or an age-appropriate public source. Identify the source without recording private family details in the app.',
'Place the older and newer examples on a simple before/now line. Explain which evidence supports the order and what remains uncertain.',
'Tell a short account using the sources. Include one similarity and one difference, and avoid claiming all schools changed in exactly the same way.'
]},
{materials:'Ten large counters, a tray, mixed word cards, paper shapes for a map, paper and a pencil.',
math:[
'Build seven counters and move two away. Name the starting whole, removed part and remaining part. Write seven minus two equals five and check by putting the parts back.',
'Act out eight blocks with three removed and six blocks with one removed. Draw before and after pictures. Ask which quantity the question asks for before solving.',
'Make a taking-away story for nine minus four. A partner solves it using counters and checks by joining the parts. Explain why nine is the starting whole.',
'Compare joining and taking-away stories using the same numbers: four and two make six; six with two removed leaves four. Show the relationship without memorizing a rule alone.',
'Use the month review with a joining story, a taking-away story and a missing part of ten. Ask for a strategy explanation and choose one skill to revisit next week.'
],
reading:[
'Mix shop, chat, stop and pond. Identify which beginnings use a two-letter team for one sound and which keep two consonant sounds. Read every word through to the end.',
'Compare shop with stop, pointing to the changed spelling. Model each word’s sounds and discuss its meaning. Avoid guessing solely from the common first letter.',
'Say a familiar word from the set, then build it without looking at the written model. If a model is needed, record supported practice and retry another day.',
'Read the connected shop-and-pond passage with helper-word support. Ask which two actions Pip can do and point to both words in the text.',
'Revisit entry words mat, sit and sun plus shop, chat and pond. Observe reading and explanation separately, then reread a chosen passage. This is a planning observation, not a standardized reading level.'
],
writing:[
'Draw a familiar or pretend place. Write or dictate a sentence describing one visible feature.',
'Add directions for moving between two places on a simple map. Read the directions to a partner and listen for unclear words.',
'Use a precise location word such as beside or between to improve the directions. Check that the drawing supports the sentence.',
'Choose a piece from the month and revise one idea or detail. Then check capitals, spaces and ending punctuation.',
'Share two pieces and explain one improvement. Tell a grown-up one reading goal and one writing goal for the next month.'
],
inquiry:[
'Draw a pretend park from above with a path, a tree and a bench. Invent a simple symbol for each and explain what a map key does.',
'Ask a partner to match symbols to the key. If a symbol is confusing, revise it and test again. Map symbols are shared meanings, not exact pictures.',
'Describe a route from the path entrance to the bench. A partner follows with a finger and asks for clarification before moving.',
'Move the bench in the pretend park and update the map and directions. Compare both versions and explain why accurate maps need current information.',
'Use the map to answer a where question and the earlier before/now line to answer a when question. Explain how the two tools help with different questions.'
]}
]];
const readAloud=[
'Choose a short story or information book with a grown-up. Look at its cover and name a question. The grown-up reads; pause to discuss the meaning of one useful new word.',
'Read the same text again. Ask who or what it is about and find a picture or spoken detail that helps answer. The adult can reread the relevant part.',
'Retell two events or explain two facts from the text. Ask which detail comes from the text and which is an idea of your own.',
'Compare an event, character or fact with another familiar book or experience. Name a similarity and a difference without needing to read independently.',
'Choose a favorite part and explain why. Ask the grown-up one new question and decide whether the text answers it or another source is needed.'
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function tasks(grade,week,day){const unit=units[grade]?.[week-1];if(!unit||!Number.isInteger(day)||day<0||day>4)return[];const w=root.WonderK1Year.weeks[grade][week-1];return[
{key:'math',title:'Build and explain',text:unit.math[day],lesson:day===4?'k1-review-'+grade+'-'+week:w.mathLesson},
{key:'literacy',title:'Sounds, letters and reading',text:unit.reading[day],lesson:w.readingLesson},
{key:'writing',title:'Draw, write and tell',text:unit.writing[day]},
{key:'inquiry',title:'Notice, investigate and explain',text:unit.inquiry[day],lesson:day===0?w.inquiryLesson:null},
{key:'readaloud',title:'Read together',text:readAloud[day]}
];}
function render(grade,week,selected,entries={}){if(!units[grade]?.[week-1])return'';const day=Math.max(0,Math.min(4,Math.trunc(Number(selected))||0));return '<section class="panel"><h2>Five days to explore · week '+week+'</h2><p>Adult-supported daily plans · educator review pending. Split activities across the day, allow play and movement, and repeat when needed. These plans are not a full school-day timetable.</p><p><strong>Prepare:</strong> '+esc(units[grade][week-1].materials)+'</p><nav class="year-days" aria-label="Opening-month days">'+Array.from({length:5},(_,d)=>'<button type="button" data-k1-day="'+d+'" aria-pressed="'+(d===day)+'">Day '+(d+1)+'</button>').join('')+'</nav><button type="button" class="secondary" id="print-year">Print this day</button><p id="speech-status" role="status">Directions can be read aloud on request. Audio is optional.</p></section><div class="year-tasks">'+tasks(grade,week,day).map(t=>{const key='k1-'+grade+'-'+week+'-'+day+'-'+t.key,r=entries[key]||{};return '<article class="panel year-task"><h2>'+esc(t.title)+'</h2><p>'+esc(t.text)+'</p><button type="button" class="secondary" data-read-word="'+esc(t.text)+'">Hear these directions</button><button type="button" class="secondary" data-stop-directions>Stop audio</button>'+(t.lesson?'<button type="button" class="primary" data-lesson="'+t.lesson+'">Open related practice</button>':'')+(t.key==='readaloud'?'<button type="button" class="secondary" data-page="library">Choose a Book Nook book</button>':'')+'<label><input type="checkbox" data-year-check="'+key+'" '+(r.done?'checked':'')+'> We tried this activity</label><label for="observation-'+key+'">Grown-up observation</label><select id="observation-'+key+'" data-k1-observation="'+key+'">'+[['','Not recorded'],['modeled','Needed a model'],['together','Practised together'],['independent','Tried independently']].map(([v,label])=>'<option value="'+v+'" '+((r.observation||'')===v?'selected':'')+'>'+label+'</option>').join('')+'</select><label for="note-'+key+'">Learning note (optional)</label><textarea id="note-'+key+'" data-year-note="'+key+'" maxlength="2000" placeholder="What helped? What should we revisit?">'+esc(r.note||'')+'</textarea><p class="year-note-print">'+esc(r.note||'')+'</p><small>Participation and adult observations are not mastery scores. Notes stay in this learning space on this device and in downloaded backups; family server saving does not include them.</small></article>';}).join('')+'</div>';}
root.WonderOpeningMonth={units,tasks,render};
})(globalThis);
