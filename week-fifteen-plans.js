(function(root){
'use strict';
const units=[{
materials:'Two sets of ten large counters, paper, known letter tiles, plant and animal factual sources, a simple map and an adult-selected read-aloud.',
math:[
'Make rows of four and seven counters. Pair one from each row and explain which has more and which has fewer. Reverse the rows and describe the comparison again; the question must name the group being compared.',
'Build two sets of six. Pair the counters, then spread one set farther apart. Explain why both still have six even when one row looks longer. Try another equal pair and record whether recounting helped.',
'Compare an empty group with three and then with another empty group. Say zero, fewer and the same number in context. Return to physical matching if the child treats an empty space as one object.',
'Choose two quantities through ten and compare by matching, then by counting. Mix larger-on-top and smaller-on-top examples. Revisit an earlier joining story through five and explain the whole.',
'Try one equal pair and two unequal pairs in fresh arrangements. Use the comparison review and ask for evidence, not just a word choice. Record the strategy and adult support separately from a correct answer.'
],reading:[
'Open Five vowels, five small words. Review cat, hen, pig, dog and sun with an adult sound model as needed. Point to the middle vowel and blend every spelling; do not use a picture as a substitute for decoding.',
'Build cat, then change a to o to make cot. Introduce cot as a small bed and blend the changed word. Keep both consonants while comparing the middle sounds; adult pronunciation may vary by accent.',
'Build pig and change i to e for peg. Explain a peg with a real example or adult description. Mix these words with hen and sun, and ask which spelling changed before reading the whole word naturally.',
'Introduce the listed new and helper words for At the pen, including pen as an enclosure. Read each sentence together. Find where the pig is and avoid inventing a location for the dog that the passage does not state.',
'Use Vowel detective review from the Reading Trail. Revisit one word with each short vowel and reread the passage for meaning. Record sound support and comprehension separately; a correct tile build does not prove fluent reading.'
],writing:[
'Begin an information page about a familiar animal and a plant. Draw both and dictate a topic sentence about water. A grown-up writes the child’s wording and asks whether it matches the intended meaning.',
'Add one observed detail, such as seeing a pet drink. Label the observation with known letters or an adult-scribed sentence. Keep a fact learned from a source separate from what was directly seen.',
'Add one care fact about the plant from a grown-up or factual source. Name that source aloud. Explain why a dog’s bowl and a plant’s watered soil are different ways of providing water.',
'Read the page to a partner and ask what needs explaining. Add a useful label or clearer drawing, and practise one familiar short-vowel word on separate paper if it does not fit the page naturally.',
'Share the revised page and tell one similarity and one difference. Keep independent marks and adult-scribed words identifiable. Choose one remaining question rather than claiming the page explains every living thing.'
],inquiry:[
'Open Water for living things. With adult help, choose a familiar animal and a safe plant to learn about. Observe from an appropriate distance and record one question without interrupting either living thing’s normal care.',
'Use an adult-selected factual source about the chosen animal. Find how it gets water and name the source. Explain that a picture or book gives information but is not a direct observation of this particular animal.',
'Revisit the plant observation from last week. Record its normal watering care with a grown-up and compare with the animal. Do not change care to force a result; no visible plant change is a valid observation.',
'On a simple map, identify a land area and a water area using its key. Explain that a map symbol stands for a place, not real water. Locate two landmarks and describe their positions with near or beside.',
'Share the care comparison and use the inquiry checks. Point to which details came from observation and which came from a source. Ask what another source could help answer, then plan a safe follow-up with an adult.'
]
},{
materials:'Adult-prepared ten-stick bundles and loose sticks, tens/ones mat, numeral cards, word-part tiles, safe flashlight, clear plastic sheet, wax paper, opaque card, paper and an adult-selected read-aloud.',
math:[
'Build twenty-four with two tens and four ones. Point to each digit in 24 and explain its represented quantity. Ask how many sticks the 2 represents, distinguishing two bundles from twenty individual sticks.',
'Build 24 and 42 side by side with bundles. Explain what each digit represents in each number and why swapping the places changes the total. Unbundle one ten if the units are still confusing.',
'Build 30, 50 and 70 with no loose sticks. Explain what zero in the ones place communicates. Compare 7 with 70, naming both the digit and its place rather than treating them as the same quantity.',
'Read a new two-digit numeral and build its tens and ones, then write a numeral for a partner’s model. Revisit a make-ten addition within twenty with counters and explain both the strategy and the total.',
'Use the place-value review after building a fresh numeral. Ask for the quantity represented by either digit, including zero ones. Record confusion between the whole number and one digit’s value as a reason for more concrete practice.'
],reading:[
'Open One cat, two cats. Read cat and cats, explaining how s changes the noun’s meaning. Build cat + s with the tiles. These pieces are meaningful word parts; each tile is not necessarily one speech sound.',
'Compare cats and dogs with an adult’s natural spoken models. The ending sounds different but both name more than one. Read the entire word and avoid assuming that a written s always has the same sound.',
'Read dish and dishes, then box and boxes. Build dish + es and box + es and listen for the extra spoken syllable in these examples. This is practice with selected regular plurals, not a rule for every noun.',
'Introduce the listed words for Dishes by the boxes, including has and by. Read the passage and locate where the cats sit. Discuss why has is not a plural noun even though it ends in s.',
'Use Endings and meaning review from the Reading Trail. Read a mixed set of base and plural nouns and reread the passage. Explain why plural tells more than one but does not supply an exact count; record any adult models.'
],writing:[
'Choose an opinion about which material would work for a pretend viewing window. State the choice and an initial reason. Mark it as an opinion to revisit after observations rather than a proven result.',
'Add an observation from the flashlight comparison to support or change the opinion. Name the tested sample and conditions. Dictation is allowed when spelling would hide the reasoning, but identify adult-scribed text.',
'Draw a simple map of the test area with a key for the source, sample and target. Add a sentence explaining the chosen material. Tell how the drawing helps a reader understand the reason.',
'Write a closing sentence and reread the opinion and reason. Check one familiar plural spelling and a sentence boundary with adult support. Revise a claim such as all plastic if only one sample was tested.',
'Share the opinion page and listen to a partner’s question. Revise one unclear detail and compare the first and last versions. Explain how evidence affected the reason without calling the preference itself a scientific fact.'
],inquiry:[
'Open Which materials let light through? With a grown-up, set up a safe flashlight and paper target. Predict how each adult-prepared sample might change the light. Do not point at eyes or use glass, bags, lasers or the sun.',
'Test the samples one at a time while keeping flashlight, target, distance and room lighting alike. Draw or describe the observed light. Accept differences from a prediction and label results with the actual sample.',
'Repeat one sample and compare records. Discuss whether a changed distance or room light could explain a difference. Describe light passing, scattering or being blocked only as supported by these observations.',
'Draw a map of the setup using a key and landmarks. Compare a simple local map with a globe: one shows a selected area, the other models Earth. Identify land and water without confusing symbols with the real places.',
'Use the inquiry checks and explain one material result with its conditions. Suggest a sample to test another time. Keep this tabletop evidence distinct from a claim about every window or all materials of the same name.'
]
}];
for(let grade=0;grade<2;grade++)root.WonderOpeningMonth.units[grade].push(units[grade]);
root.WonderWeekFifteenPlans={units};
})(globalThis);
