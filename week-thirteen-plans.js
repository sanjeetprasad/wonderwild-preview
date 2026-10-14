(function(root){
'use strict';
const units=[{
materials:'Twenty large counters, two ten-frames, numeral cards 0–20, h e n p t r d letter cards, two identical paper sheets, drawing materials and an adult-selected read-aloud.',
math:[
'Check counting through ten first. Fill one ten-frame, then put one counter on another frame. Model touching each counter once and naming eleven as the whole. Repeat with twelve; show numeral cards after the child counts.',
'Build thirteen, fourteen and fifteen on two frames, one set at a time. Count every object or count on from the known ten. If a space is counted as an object, touch only filled spaces and recount with a partner.',
'Make sixteen and seventeen with large counters. Move counted objects to a separate area if keeping track is difficult. Match the total to a numeral card, then draw one set and explain how the drawing represents every object.',
'Build eighteen, nineteen and twenty. Rearrange the same twenty counters into two clear rows, predict the total and check it. Revisit five minus two with counters so the earlier operation work is not lost.',
'Choose a fresh set of twelve to twenty counters without showing its numeral. Ask the child to count, label and rearrange it. Use the weekly review, record the strategy and support needed, and return to smaller sets if one-to-one counting is uncertain.'
],reading:[
'An adult models the short e in hen, then the consonants h and n without extra vowel sounds. Blend h-e-n while tracking the spellings. Contrast the middle vowel with short i in pin using spoken models rather than a pronunciation score.',
'Build hen with tiles, replace h with p, and blend pen. Explain both meanings. If the child guesses hen again, point to the changed first spelling, model it and blend through the whole new word.',
'Change the final n of pen to t for pet. Blend red separately and identify its middle vowel. Use each word orally; explain that pet can name an animal or describe a gentle action in a sentence.',
'Introduce every new/helper word in A hen and a red pen before opening its passage. Read one sentence together, then invite a reread. Locate the color word in the sentence instead of guessing from a picture.',
'Mix hen, pet, red and pen with familiar pin and mat. Read one word at a time, then spell pen from an adult’s spoken model before checking the tiles. Reread the passage and record decoding separately from understanding.'
],writing:[
'Draw a group of eleven objects and add a numeral label. Dictate one sentence describing the group. A grown-up writes the child’s exact meaning and reads it back, pointing to spaces between words.',
'Draw a hen and build or write hen beside it. Say a sentence about the pretend hen. Try one familiar letter independently before comparing it with a model; support comfortable grip and large movements.',
'Choose which pretend pet would suit a story and tell why. A grown-up scribes the opinion and reason. Read it back and ask whether the reason actually explains the choice.',
'Draw the two locations from the shade investigation and label one with a known word or invented spelling. Dictate what was noticed, keeping the observation separate from what was predicted.',
'Choose one drawing from the week and add a detail that helps another person understand it. Share the work, listen to one question and revise a label or dictated sentence in response.'
],inquiry:[
'Read the linked shade investigation together. Check the adult safety conditions and choose two safe locations. Draw a prediction about the identical paper sheets before placing them; never look directly at the sun.',
'Observe both papers for the same time. An adult checks safe touch conditions first. Record warmer, similar or unsure in the child’s words; do not supply an expected result when the difference is unclear.',
'Repeat the comparison if weather permits, keeping paper type and time alike. Note clouds or wind that might affect the test. Compare today’s observation with yesterday’s without claiming all days behave identically.',
'Draw a simple map of the two observation spots with symbols for sunlight and shade. Add a key and ask a partner to find each spot; improve a symbol if the partner cannot interpret it.',
'Share the map, prediction and actual observations. Explain one difference between a guess before testing and a record afterward. Complete the inquiry checks and choose a new question for an adult-supported investigation.'
]
},{
materials:'Large craft sticks bundled by tens with adult help, number chart through 120, paper numeral cards, syllable word cards, a shoe box prepared by an adult, a toy, paper and an adult-selected read-aloud.',
math:[
'Check counting from eighteen through twenty-two using large sticks or a chart. Add one stick at a time; exchange ten loose sticks for a bundle of the same ten. Count again to show that exchanging preserves the total.',
'Start at twenty-eight, thirty-eight and fifty-eight on separate turns and count five numbers. Model saying the new ten after nine ones. Match the spoken number to a written numeral; shorten the range when a transition needs more support.',
'Build nine bundles and eight loose sticks. Add one, then one again, exchanging the ten loose sticks. Count ten bundles as one hundred sticks. Explain why one hundred follows ninety-nine rather than ninety-ten.',
'Count from one hundred eight through one hundred twelve, then from one hundred eighteen to one hundred twenty. Use the chart and bundles to check. Revisit eight plus five with a make-ten model as a delayed operation review.',
'Ask for a short sequence beginning at a fresh number such as forty-seven or one hundred sixteen. Have the child write one numeral and represent its quantity. Use the review and record where a model was needed; memorized recitation alone is not a quantity check.'
],reading:[
'Say sunset naturally, then tap its two spoken syllables. Compare with one-beat sun. Explain that syllables are spoken word parts, not the count of letters. An adult models the word before asking the child to tap it.',
'Show sun and set tiles, blend each familiar chunk, then say sunset as a whole word. Try nap and kin with an adult and discuss a napkin’s use. Do not require the child to discover a division rule from unfamiliar words.',
'Model picnic and rabbit naturally, then blend the displayed chunks. Explain that the two b letters in rabbit do not make two separate spoken beats. Compare a syllable tile with a single-letter tile so the units are clear.',
'Introduce the passage’s listed new and helper words, then read A sunset picnic together. Locate when Pip can sit in the last sentence. Discuss why the title alone does not tell what food is present.',
'Mix sunset, napkin, picnic and rabbit, allowing the child to say the whole word after blending chunks. Tap the syllables of a familiar spoken word such as backpack with adult support. Keep the spoken transfer separate from independent decoding evidence.'
],writing:[
'Choose a preferred place for a pretend picnic and state an opinion aloud. Write or dictate an opening sentence. Explain that another person may prefer a different place without being wrong.',
'Add one reason connected to the chosen picnic place. Compare “I like it” with a specific reason such as shade or room to sit. Keep imagined features labeled as part of the pretend plan.',
'Draw a map of the picnic place with a key and at least two landmarks. Ask a partner to locate the proposed sitting spot. Revise a symbol if the map communicates something different from the intended place.',
'Add a closing sentence to the opinion. Reread the opening, reason and ending for meaning, then check familiar spellings and a capital at the beginning; an adult may scribe words beyond current spelling knowledge.',
'Share the opinion and map with a partner, listen to one question and revise a detail. Keep an earlier draft beside the revision and describe what became clearer rather than treating the polished page as independent work.'
],inquiry:[
'An adult prepares the shoe box openings described in the linked light investigation. Keep the same toy and viewing position while covering and uncovering the separate light opening. Predict which condition will reveal more details.',
'Observe both conditions under normal room light and draw details actually seen. Do not put a box over a head or aim lights at eyes. If light leaks in, record that condition rather than calling it complete darkness.',
'Repeat the comparison and ask a partner to record what changed. Keep the toy and viewing position alike. Explain that seeing more detail when light enters is evidence, while a claim about every possible toy would go beyond this test.',
'Draw a map of the tabletop with the box and two nearby landmarks, using a key. Ask a partner to locate the box from the map. Explain how the map answers where, while the observation record answers what was noticed.',
'Share prediction, observation and map, and complete the inquiry review. Describe one limitation, such as light leaking into the box, and one change that would make a future comparison clearer with adult help.'
]
}];
for(let grade=0;grade<2;grade++)root.WonderOpeningMonth.units[grade].push(units[grade]);
root.WonderWeekThirteenPlans={units};
})(globalThis);
