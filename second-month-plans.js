(function(root){
'use strict';
// Original plans. Adults model oral sounds; observations are not automated mastery scores.
const units=[[
{materials:'Ten large counters, two trays, a ten-frame, L/l U/u R/r W/w cards, safe paper/fabric/cardboard samples, paper and a pencil.',
math:[
'Revisit counting five before extending the group. Fill five spaces in the top row of a ten-frame, then add one below and count all six. Ask the child to build a different group of six; move counted objects if any are skipped.',
'Build seven and eight on a ten-frame. Point to one filled space per spoken number and leave empty spaces uncounted. Ask how the frame helps keep track. Count all before inviting five-and-some-more thinking.',
'Make nine, then ten counters. Cover the numeral cards and ask the child to tell the total. Remove the frame, rearrange the same ten objects in a row, and check whether the quantity changed.',
'A pretend picnic needs eight plates. Count out eight paper circles from a larger pile, then stop. Pair each with one of eight pretend visitors. Revisit a group of three and explain what tells you when to stop counting.',
'Ask for six objects and then nine, without first building a model. Use the weekly review and record whether each object received one count. If counting loses track, return to a row or a smaller group next time.'
],reading:[
'Show L/l and name the letter. A grown-up models the first sound in leaf, without an extra uh. Match both forms and compare l with a familiar m. Example words are oral models; independent reading of leaf is not expected.',
'Introduce U/u and the short vowel in umbrella. Compare its spoken vowel with short a in apple using adult models. Match U/u, then revisit A/a and one earlier consonant. Letter-name audio does not demonstrate the short vowel.',
'Introduce R/r with rain as an oral example. Use the grown-up’s natural accent and model without adding a separate vowel. Find R/r among three familiar pairs; ask for a name and an example sound separately.',
'Introduce W/w with web. Compare the letter form with M/m, then listen to adult examples web and moon. Review L/l, U/u and R/r in mixed order. Repeat the spoken model when needed instead of asking the child to guess.',
'Match the four new letter pairs mixed with four earlier pairs. Ask for an example sound without a picture clue, then offer a model if needed. Record which pairs to revisit; do not treat a matching quiz as proof of sound knowledge.'
],writing:[
'Draw the six picnic plates and label the group with 6 after a model. Dictate what the plates are for. A grown-up writes the sentence and points to its beginning while reading it back.',
'Model the strokes for L and l with a large pencil or finger in the air. Let the child try, then use l as an initial-sound label for a spoken word that starts like leaf.',
'Draw something noticed in a safe material sample. Say a describing word, then dictate a sentence using it. Ask whether the sentence tells what was actually observed.',
'Make a drawing for a partner and add a known letter or numeral label. Explain the label aloud. Invite one question and add a detail that makes the meaning clearer.',
'Choose one drawing from this week. Point to a label, retell the message and explain one detail added. Save or keep the paper work to compare with a later attempt.'
],inquiry:[
'Examine clean paper, fabric and cardboard with a grown-up. Describe a visible or touchable property without tasting. Start a three-column picture record and distinguish a material name from a describing word.',
'Predict which safe sample bends easily. Gently bend each sample without tearing it, using a similar motion. Record what happened; a prediction can change after a test.',
'Sort the samples into bends easily and harder to bend under this test. Explain a borderline case instead of forcing certainty. Compare properties of these samples, not every possible paper or fabric.',
'Choose a sample for a pretend foldable book cover. Explain a property that fits that job, then try folding it. Ask whether its behavior matched the prediction and whether another sample might work better.',
'Share the material record and point to evidence for a choice. Ask one new question, such as what happens when a cover gets wet. Plan an adult-supported test later instead of claiming an untested answer.'
]},
{materials:'Numeral cards 0–10, ten large counters, J/j V/v Y/y Z/z cards, paper, a pencil and a familiar picture book.',
math:[
'Count a set of six, then place a 6 card beside it. Model how the numeral names the quantity. Invite the child to choose a card for seven objects, counting again rather than relying on the shape of the arrangement.',
'Place cards 0, 8 and 10 next to three trays. Build each quantity and check with a partner. Leave the zero tray empty and explain that it still has a numeral describing how many objects are there.',
'Draw nine dots and model writing 9 beside them. Offer large tracing or a numeral card if handwriting is difficult. Repeat with six; keep the quantity task separate from judging pencil control.',
'Pip puts a 7 card beside eight counters. Invite the child to check and repair the mismatch by changing either the card or the group. Ask for two different ways to make them agree.',
'Choose three cards including zero and a number above five. Build and label each group without a demonstration, then use the review. Record whether help was needed with counting, numeral recognition or writing.'
],reading:[
'Introduce J/j using jam as the oral sound example. Match both forms, then compare J with a known capital. A grown-up models the brief initial sound without adding uh; the word jam need not be read independently yet.',
'Introduce V/v using van. Listen to the adult say van and fan and notice that their beginnings differ. Match V/v and revisit F/f; speech differences and accents are not automatically scored by the app.',
'Introduce Y/y using yak, with y representing a consonant sound here. Say that y can work differently in other words that will be learned later. Match the pair and review the short-u example from last week.',
'Introduce Z/z with zip as an oral model. Compare adult examples zip and sip; then match Z/z and S/s. Use the family’s letter name for z and separate that name from the speech sound.',
'Mix J/j, V/v, Y/y and Z/z with two earlier pairs. Ask the child to match forms and offer one example sound. Revisit a missed pair with a model, then try again later without requiring a timed response.'
],writing:[
'Draw a task that helps a shared space. Tell who could do it and dictate one sentence. Avoid assigning jobs by gender; any willing person can contribute in a suitable way.',
'Try a large J/j after watching a stroke model. Add an initial letter to a drawing of an orally named object. Accept supported letter formation while keeping the child’s intended message.',
'Make a small sign for a shared activity using a picture and a familiar label. Read the sign aloud with a grown-up and ask a partner what they think it means.',
'Revise the sign after listening to the partner. Add a clearer picture, letter or dictated phrase, and explain why the change may help others understand.',
'Share the finished sign and tell what changed from the first version. Point to any letters or numerals that you recognize and name one label to practise next.'
],inquiry:[
'Choose a shared task such as putting books away. Discuss who benefits when it is done. Make a picture list of two helpful actions and let the child suggest one they can safely do.',
'Act out two people needing the same book. Try taking turns and choosing another book while waiting. Ask how each choice affects both people; there can be more than one fair solution.',
'Create a simple agreement for returning materials. Model the action, then invite the child to explain its purpose. Distinguish a rule that protects shared use from a personal preference.',
'Try the agreement during an actual short activity. Notice what worked and what was unclear. Revise one step together rather than blaming a person for a confusing instruction.',
'Explain a shared responsibility and give an example of how it helped. Use a picture or observation from the week as evidence, then choose one agreement worth continuing.'
]},
{materials:'Ten large counters, a ten-frame, Q/q X/x and review letter cards, two safe equal-sized material samples, a tray, a small spoon of water, paper and a pencil.',
math:[
'Build six counters. Add exactly one and count seven, then return to six before removing one and counting five. Emphasize that both comparisons start at six. Point to what changed in the model.',
'Choose starting groups of four, seven and nine. For each, predict one more, then check by adding an object. Say the next counting number and connect it to the new object.',
'Build five, eight and ten in separate turns. Remove one each time and count the remaining objects. If the child names the removed object instead of the remainder, circle the group the question asks about.',
'Tell a story about seven visitors with one arriving and then one leaving. Model each step and notice the return to seven. Compare with last week’s numeral cards to label each quantity.',
'Try one more than six and one less than nine without an adult demonstration. Complete the review, including unchanged quantities. Ask for an explanation and plan a smaller starting group if counting is not yet reliable.'
],reading:[
'Introduce Q/q beside u using queen as an oral example. Explain that qu commonly spells the two sounds k then w in words like queen. Do not describe qu as a single speech sound or require independent reading of queen.',
'Introduce X/x using fox, where x is at the end and represents k followed by s. The grown-up says the whole word, then models those ending sounds. Match X/x and avoid inventing an initial short sound for x.',
'Review short a, e, i, o and u with familiar oral examples and letter cards. Listen to each grown-up model before matching. These names and examples prepare for blending; no speed goal is needed.',
'Mix six consonants from earlier groups, including one pair needing support. Match capital and lowercase forms and model example sounds. Revisit q with u and x at the end of fox separately from single-sound consonants.',
'Sample familiar letters across all groups in brief turns. Record names and example sounds separately. If m, a, t, s, p and n are not secure with support, repeat them before the short-a blending work next week.'
],writing:[
'Draw a before-and-after counter story and add numeral labels. Dictate what changed by one. Read the labels with a grown-up and make sure the drawing matches the spoken story.',
'Try Q/q and X/x after large stroke models. Choose one earlier letter to make from memory, then compare with a card and revise without erasing the effort from the record.',
'Draw a tested material and dictate a sentence about what happened. Include a specific observation, such as a dark wet patch, rather than only calling the sample good or bad.',
'Add a second picture showing a different sample. Tell a comparison sentence and ask a grown-up to scribe it. Point to the two pictures that support the comparison.',
'Choose a letter label and a quantity label from this month. Explain what each communicates and dictate one goal for next week. Adults may keep a dated sample of the work.'
],inquiry:[
'With an adult, ask which of two safe samples takes up a small amount of water. Place equal-sized pieces on a tray and predict. Keep this test away from electrical devices; do not taste the materials or water.',
'An adult puts the same small spoonful of water on each sample. Observe what happens after the same short wait. Record visible wetting or water remaining on the surface, using these observations to refine the prediction.',
'Repeat using fresh pieces if available. Compare the records, and say if results differ. Discuss why using different amounts of water could make the comparison less useful.',
'Choose a sample for wiping a pretend spill based on the record. Explain a trade-off, such as soaking up water but tearing easily. Do not conclude that one material is best for every purpose.',
'Show the prediction, observation and revised choice in order. Explain which evidence changed the idea, and ask what a fair next test would keep the same.'
]},
{materials:'Paper circles and squares in two colors, ten large counters, m a t s p n letter tiles, paper, a pencil and a familiar read-aloud book.',
math:[
'Mix three paper circles and four squares, varying the colors. Model a shape-only sort so two colors can belong in one group. Count each category and ask which has more, pairing objects to check.',
'Use the same pieces but sort by color instead of shape. State the new rule before sorting. Count each category and explain why an object can change groups when the rule changes.',
'Give a partner two trays sorted by shape. Ask them to explain the rule and find a misplaced piece. Repair the sort, then count again so the category counts match the objects.',
'Draw a record with one mark for each object under its category label. Compare the marks with the trays. Ask what happens to the total when the same objects are sorted differently.',
'Sort a fresh set using one stated rule, count both groups and identify fewer, more or equal. Use the review and revisit one-more/one-less with a category. Record the explanation, not just the totals.'
],reading:[
'Check m, a and t with adult sound models. Slide m-a-t together to read mat, then say what a mat is. Invite a blend of sat after reviewing s. Return to oral blending if individual spellings still require substantial help.',
'Build map and mat. Change only the last spelling and blend again, pointing left to right. Ask the child to explain what changed instead of guessing from a picture or memorizing the card’s position.',
'Blend pan and tap with support, then say their sounds and build them from tiles without a printed model. If a spelling is unknown, show it and try another word later. The adult records support rather than a speech score.',
'Introduce the helper word a and the name Sam before reading the new Mat for Sam passage. Review sat and every other listed word. Find what Sam sat on using a detail from the text, then reread one sentence.',
'Read a mixed set of mat, map, sat and pan in a new order and spell one after an adult says it. Reread the passage for meaning. Compare decoding with comprehension and choose one spelling or word to revisit next week.'
],writing:[
'Draw a mat and label it by saying its sounds, then choosing letters with help. Compare the label to a model after the attempt. Dictate a sentence that explains the drawing.',
'Draw two short-a objects, such as a map and a pan. Add a label for each and read the labels back. Ask a partner to match them without relying on where they were placed.',
'Dictate a three-event account of a shared job, using first, then and last orally. A grown-up writes it beneath three pictures; the child points to the picture for each event.',
'Reread the account and add one missing detail after a partner’s question. Model a starting capital and ending mark, while allowing the grown-up to scribe words beyond the child’s spelling knowledge.',
'Share the revised account and a short-a label. Explain one improvement since the start of the month. Keep a dated work sample and identify a next reading or writing goal.'
],inquiry:[
'Draw a pretend library area with a book basket, reading spot and return tray. Use symbols and a key. Explain how placing materials clearly could help people share the space.',
'Describe a route from the reading spot to the return tray. Let a partner follow with a finger and ask questions. Revise unclear location words or symbols after listening.',
'Test the plan with paper objects and two pretend readers. Notice whether both can use the space and return books. Gather observations instead of assuming the first design works for everyone.',
'Move one feature to solve a noticed problem and update the map. Compare old and new versions, using the test as evidence for the change. Explain who the change may help.',
'Present the map, shared agreement and one material choice from this month. Explain how each helps the pretend space work. Name one unanswered question or improvement for a future test.'
]}
],[
{materials:'Ten large counters in two colors, two trays, cap/cape and tap/tape cards, animal pictures from a nonfiction book, paper and a pencil.',
math:[
'Build a whole of seven from parts four and three. Model 4 + 3 = 7 and 7 − 4 = 3 using the same counters. Point to the whole in both equations; changing the operation does not change which quantity was the whole.',
'Use parts two and six to make eight. Tell an addition story and a subtraction story with that model. Ask what each number represents and check subtraction by rejoining the parts.',
'Build nine from five and four, then hide one part. Use related addition to explain the hidden quantity. If the child adds the whole and known part, return to a drawing that clearly encloses both parts in the whole.',
'Use two equal parts, three and three, to make six. Record 3 + 3 = 6 and 6 − 3 = 3. Explain why swapping the identical parts does not produce a different-looking addition fact.',
'Make two related stories with new parts, then complete the review. Ask the child to identify the whole before calculating and to show one independent check. Revisit a ten partner from the previous month.'
],reading:[
'Review cap and tap as short-a words. Model cap to cape by adding final e and compare the spoken vowels. Explain this pattern for these examples without claiming every final e changes the preceding vowel.',
'Read cap/cape and tap/tape in mixed order. Point through the spelling and attend to final e before saying the whole word. If the child guesses from cap alone, compare both full spellings side by side.',
'Say cape and invite a tile build without a printed model, then check all letters. Repeat with tap to contrast the pattern. Tell a sentence using each word so spelling practice remains connected to meaning.',
'Read Fix the cape after its introduced and helper words. Model with and its th spelling as the passage note requests. Ask why the tape is needed and locate the relevant sentence before rereading.',
'Try a fresh short/long pair, man/mane, with adult teaching of meaning and the same final-e pattern. Revisit ship and chat. Record which reading required modeling; this is practice evidence, not an assigned reading level.'
],writing:[
'Draw an imagined cape repair and plan three events orally. Write or dictate the first sentence naming who and what happened. Check that a listener can understand without seeing the drawing.',
'Add a next event using then. Use tape or cape in a sentence and check its spelling against the word cards after an independent attempt.',
'Write or dictate an ending that follows from the earlier events. Read all sentences aloud and decide whether any event is missing.',
'Invite a reader question, then revise a sentence to answer it. Check meaning before editing capitals, spaces and ending marks with adult support.',
'Share the finished sequence and explain one revision. Compare an early and later version to identify what became clearer; keep the versions for the month portfolio.'
],inquiry:[
'Look at a clear nonfiction picture of a bird and a fish with a grown-up. Name visible external parts and record the source. Separate an observed part from a guess about how the animal uses it.',
'Read a short reliable description of how the pictured animal moves or obtains food. Connect one external part to that task. Do not assume all animals with a similar-looking part use it identically.',
'Draw the two animals and label a shared feature and a difference. Ask how the chosen pictures limit what can be learned about the whole species.',
'Choose one body part and explain how it can help the animal. Use a source detail as support, then identify a new question that the picture alone cannot answer.',
'Share a claim, its evidence and an open question. Revisit the plant-part drawing from month one and compare how observing visible parts helped with both topics.'
]},
{materials:'Ten large counters, a cover card, pin/pine and kit/kite cards, scrap paper/cardboard, a paper figure, crayons and a pencil.',
math:[
'Build eight counters, keep three visible and cover five. Model 3 + □ = 8. Count on from three while tracking five added counts, then uncover to check. The box represents one missing number, not a signal to add all written numbers.',
'Move the box to the beginning: □ + 2 = 7. Model the known part two and whole seven. Find five as the missing part and check by placing it back into the equation.',
'Give a story where four counters are present and some arrive to make nine. Draw before and after, then solve 4 + □ = 9. Compare the model with a story asking for the total instead.',
'Write 6 + □ = 10 and □ + 6 = 10. Explain why the same missing part works for both. Invite a new equation using a known whole and part, then swap with a partner.',
'Solve a new missing-part task without a demonstrated solution, then use the review. Ask the child to check by substitution and explain what the box means. Return to covered counters if the whole is mistaken for the missing part.'
],reading:[
'Review pin and kit with short i, then model pine and kite with final e. A pine is a kind of tree; a kit is a set of things for a job. Discuss meaning before trying to use the words in sentences.',
'Mix pin, pine, kit and kite. Read each full spelling, naming the vowel contrast after reading. Revisit cap/cape to connect the new pair with last week’s pattern.',
'Say kite and invite a tile build without a printed model. Check final e, then try kit. If e is missing, compare the written word and intended spoken word with an adult model.',
'Read A kite by the pine after its helper notes. Point to the sentence that tells where the kite is. Reread smoothly after accurate blending, and explain what the word pine means in context.',
'Introduce the transfer pair bit/bite with meanings and an adult model. Blend both and explain the final-e difference. Revisit one short-a pair and one sh/ch word, recording support separately for each pattern.'
],writing:[
'Plan a short invented kite story with who, where and one problem. Write or dictate a beginning that introduces the scene. A grown-up may supply spellings beyond the current phonics work.',
'Add a sentence explaining what happens next. Use a precise place phrase, such as beside a tree, to make the scene easier to imagine.',
'Write or dictate an ending showing what the character does about the problem. Read the whole sequence and check that events connect sensibly.',
'Ask a partner to retell the story. Revise one unclear sentence after hearing the retelling, then check sentence boundaries and familiar spellings.',
'Read the revised story aloud or have a grown-up read your dictated words. Point to one improvement and name a detail that helps the listener understand the order.'
],inquiry:[
'Use a reliable animal picture or text to examine a turtle’s shell as protection. Plan a pretend cover for a paper figure that keeps gentle falling paper scraps off it. This is a model, not protective equipment for people or animals.',
'Sketch a cover inspired by the curved or enclosing shape of a shell. Choose safe scrap materials and explain a property that might help. Do not test on a living animal.',
'Build the cover with adult help. Drop the same few light paper scraps from the same low height with and without the cover. Observe how many reach the paper figure; do not use heavy objects.',
'Revise a gap or weak point identified in the first test. Repeat the gentle test in the same way, then compare records instead of declaring the design perfect.',
'Explain which animal feature inspired the cover and what the test showed. Name one limit of the model: a paper-scrap test does not show that the design protects against real hazards.'
]},
{materials:'Ten large counters, equals cards, camp/tent/nest/pond cards, paper and a pencil, plus an optional willing adult or public source about a familiar place.',
math:[
'Build five counters on each side of a paper equals sign. Model five equals five as same value. Then build 3 + 2 on one side and five on the other; compare quantities rather than the number of written symbols.',
'Check 7 = 4 + 3 by building both sides. Explain that the total need not be on the right. Try 6 = 2 + 3 and identify why it is false without simply reversing the writing.',
'Build 2 + 5 and 4 + 3 in separate trays. Match both groups and state whether the equation is true. Discuss how different parts can form equal wholes.',
'Sort a few written equations into true and false after checking each side. Include subtraction such as 8 − 2 = 6 and an unequal example. Ask the child to repair a false equation by changing one number.',
'Use the review and ask for a model supporting one true and one false judgment. Revisit a missing addend. If the child treats equals as an instruction to calculate, return to equal matching groups on both sides.'
],reading:[
'Blend camp while retaining both m and p at the end. Compare its four spoken sounds with a short word such as cap. Say each with an adult and discuss how leaving out m changes the word.',
'Read tent and pond, pointing to each final consonant. Invite tile builds and ensure the final sound is not dropped. Revisit a long-i word to contrast with these short-vowel examples.',
'Read nest with both ending sounds. Change only its first letter to make rest after introducing r if needed. Explain the new meaning and keep the full ending when rereading.',
'Read Camp with Pip after checking its introduced/helper words. Find what Pip can spot using text evidence. Reread a sentence with natural phrasing after decoding accurately.',
'Mix camp, tent, nest and pond with cape and kite. Read the entire word before classifying its spelling pattern. Spell one familiar final-group word with adult observation and choose an ending to revisit if needed.'
],writing:[
'Draw a pretend camp scene and list two possible events orally. Write or dictate a beginning sentence with a clear subject and action.',
'Add a next event using a known camp word accurately. Check its final consonants after saying the sounds; use a model for unfamiliar spellings in the rest of the sentence.',
'Write or dictate a closing sentence. Invite a partner to identify beginning, middle and end without rearranging the original paper.',
'Revise one event or location detail after the partner’s question. Check whether the new sentence fits the scene and maintains a sensible sequence.',
'Share the story and explain a change you made. Listen to the partner’s response, then choose one sentence to keep as an example of clear writing.'
],inquiry:[
'Choose a question about the past of a familiar public place, such as how a park was used earlier. Discuss which sources could help and which questions an ordinary photograph may not answer.',
'With adult help, examine a dated public picture, a short public description or a willing adult’s account. Record the type of source and what it says without storing private personal details.',
'Separate something directly visible or stated from an inference. For example, an empty bench in a photograph does not show that no one ever used it. Ask what further evidence might help.',
'Compare the source with a current observation or a second source when available. Identify a similarity, a difference and any uncertainty about the comparison.',
'Tell a short evidence-based account of then and now. Name the source type and one thing still unknown. Clearly label imagined examples if no real source was available.'
]},
{materials:'Ten large counters, box and equals cards, short-vowel/final-e word cards, paper, a pencil and earlier observation drawings.',
math:[
'Build 3 + 4 on one side of an equals card. Put five counters on the other and ask how many more are needed to match seven. Record 3 + 4 = 5 + □ and explain why the answer is two, not seven or twelve.',
'Try □ + 1 = 4 + 2. Model the complete side first, then build the missing side to the same value. Check by substituting five in the box and evaluating both sides.',
'Compare 6 = 4 + 2 with 4 + 2 = 6. Explain why both are true. Then create a different expression with the same value and verify it with counters.',
'Repair 2 + 5 = 3 + 3 by changing one number. Accept different valid repairs when both sides agree, then ask the child to justify the chosen change.',
'Complete the month review, including an equation with the box on the left. Explain one solution with a model and revisit a related subtraction fact. Save a short observation of strategy and support to plan the next block.'
],reading:[
'Review cap/cape and pin/pine in mixed order. Ask the child to attend to every spelling before deciding how to blend. Use adult models for an unfamiliar contrast rather than timing the reading.',
'Read the mixed-word lesson with cap, cape, pin and pine. Explain one short/long-vowel contrast and give each word a meaningful sentence. Do not classify a word from its picture alone.',
'Dictate one familiar short-vowel word and one final-e word for tile spelling. Check each against its spoken form and a model. Include camp as a cumulative check on final consonant groups.',
'Read the new Cape in the pine passage after its complete word and helper inventory. Ask where the cape is and whether the text tells how it got there. Distinguish a stated fact from a possible invented explanation.',
'Reread a passage from this month and try a fresh taught pair such as mad/made. Record accurate blending, comprehension and support separately. Choose a pattern needing more practice before adding new vowel spellings.'
],writing:[
'Select one story from this month and state its main event aloud. Identify a sentence that could better explain who, where or what happened.',
'Revise that sentence with one precise detail. Compare the versions and ask a listener which information was added, then decide whether it improves the story.',
'Check capitals, spaces, end marks and two familiar phonics words after reviewing meaning. A grown-up helps with untaught spellings without rewriting the child’s whole message.',
'Prepare a clean copy or dictated version with an illustration. Read it aloud or listen to the grown-up read it; correct anything that changes the intended meaning.',
'Share the piece, an earlier draft and a reading sample. Explain a writing improvement and one next goal. Keep the portfolio as evidence of work, not a standardized attainment rating.'
],inquiry:[
'Bring together this month’s animal observation and community source record. Explain which questions each source can answer, and why a picture alone cannot settle every question about behavior or the past.',
'Choose one observation to show on a labeled drawing and one past event to place on a before/now line. Explain why the two formats communicate different information.',
'Ask a partner to interpret the drawing and line. Listen for a misunderstanding and revise a label or ordering clue, preserving any uncertainty in the source.',
'Revisit the shell-inspired cover and explain a design change using test evidence. Compare this process with revising a story or a map: each change should have a reason.',
'Present one claim supported by an observation, one supported by a source, and one question still open. Select a useful next investigation without treating guesses as established facts.'
]}
]];
for(let grade=0;grade<2;grade++)root.WonderOpeningMonth.units[grade].push(...units[grade]);
root.WonderK1SecondPlans={units};
})(globalThis);
