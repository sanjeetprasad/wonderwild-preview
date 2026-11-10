(function(root){
'use strict';
const units=[
  {
    "materials": "Adult-selected leaf photographs or large safe fallen leaves, paper reference strips, prepared reading words and drawing tools.",
    "math": [
      "Open Compare two lengths. Align one end of two straight paper strips, point to the other ends and explain which strip is longer. Let the child move the strips to check.",
      "Compare the same strips and now name the shorter one. Explain how longer and shorter describe the same pair from different viewpoints, with adult prompts recorded.",
      "Find two equal-length strips and align both starts and ends. Say equal length rather than guessing a winner; check a new pair with a different width.",
      "Move one strip farther right and discuss why position can mislead us. Realign the starts before comparing, then describe length without using width or color as evidence.",
      "Use Length comparison review and compare an unfamiliar pair away from the screen. Record endpoint alignment, comparison language and support separately from quiz choices."
    ],
    "reading": [
      "Open Put a story in order and build pot, mud, pat and sun. Prepare the helper and new words with an adult, linking pats to the familiar spelling of pat.",
      "Read Pip makes a mud pot together. Point to each sentence and mime filling, patting and setting down the pot without handling mud or other unknown materials.",
      "Draw the three events on separate pieces of paper and put them in order. Use first, next and last to tell what happened, returning to the text when unsure.",
      "Ask what happened before the pot was set in the sun and after it was filled. Check whether the text actually says the mud dried; separate a possible next event from a stated one.",
      "Use Story order review, then retell with the drawings and no answer choices. Record omitted or reordered events and adult prompts separately; plan a new story for transfer."
    ],
    "writing": [
      "Draw two safe objects from the investigation and dictate one observable property for each. Keep the child\u2019s wording and mark any label written by a grown-up.",
      "Draw two groups of objects and give each group a label describing the sorting rule. Explain why one object belongs there, rather than naming only its color by habit.",
      "Write or dictate a comparison sentence using longer, shorter or equal length after aligning two objects. Point from each word to the object it describes.",
      "Share the sorting picture and ask a partner to explain the rule. Revise an unclear label or add an arrow while keeping the original idea visible for comparison.",
      "Present the revised picture and sentence, checking that both match an observation. Choose a familiar letter or word to practise and record adult spelling support."
    ],
    "inquiry": [
      "Open Sort objects by useful properties. A grown-up selects leaf pictures or large safe fallen leaves. Compare visible features without tasting leaves or picking unknown plants.",
      "Choose one visible property such as smooth or toothed leaf edges. State the sorting rule first and discuss unclear cases with an adult instead of forcing a label.",
      "Sort the same objects with a new rule such as length compared with one reference strip. Align starts and explain why changing the rule can change the groups.",
      "Ask a partner to follow your stated sorting rule and compare choices. If you disagree, point to the observed property and clarify the rule rather than hiding the object.",
      "Use the property-sorting checks and describe a leaf using two properties. Explain that this sorting does not identify its species; record adult observations separately from the child\u2019s."
    ]
  },
  {
    "materials": "Safe paper strips for shapes, an adult-supervised sky view or dated sky photographs, prepared reading words and drawing tools.",
    "math": [
      "Open Build and describe shapes. Trace and count each straight side of a triangle once, then use three paper strips to make a closed triangle with no open corner.",
      "Build a rectangle with four straight sides and four square corners. Compare it with a four-sided shape that lacks square corners and explain why side count alone is not enough.",
      "Build a square with four equal sides and square corners. Explain that a square is also a rectangle, then describe the extra equal-side property that makes it a square.",
      "Turn your shapes and redraw them in another size or color. Ask a partner what changed and which defining attributes stayed the same; avoid naming by position alone.",
      "Use Shape attributes review and give a partner directions to build a new shape without showing yours. Record construction, attribute language and adult support separately."
    ],
    "reading": [
      "Open Find the topic and its details and build nest, twig, soft and eggs. Model gg as a spelling chunk and the final s sound in eggs without equating tiles with speech sounds.",
      "Prepare all new and helper words before reading Bird nests together. Connect nests to nest and twigs to twig, then ask what the three sentences are all about.",
      "Name bird nests as the topic and point to two details about materials or contents. Explain that soft grass is one detail, not the topic covering the whole selection.",
      "Discuss some compared with all and reread the sentences carefully. Try a new sentence about nests and decide whether it fits, distinguishing it from what the text actually states.",
      "Use Topic and details review and then say the topic and two details without choices. Record adult prompts and plan transfer to a longer unfamiliar information text."
    ],
    "writing": [
      "Draw a safe sky view or an adult-selected photograph and label its observation time. Write or dictate what was visible, separating it from what you expected to see.",
      "Add a sentence describing clouds, the Moon or another visible feature. Never invent a star count or look toward the sun to add a detail; an adult may scribe your words.",
      "Make a second timed drawing and write a comparison sentence. Name a difference in what was visible without claiming that an unseen object no longer exists.",
      "Share the two records and clarify a label or time detail. Add one question another observation could help answer and identify any adult-provided wording.",
      "Present a short information page with a topic sentence and two recorded details. Check a familiar spelling and sentence boundary, keeping observations distinct from predictions."
    ],
    "inquiry": [
      "Open Keep a sky observation record with a grown-up. Use a safe sky view or adult-selected dated pictures; never look directly at the sun or aim binoculars toward it.",
      "Record the time and visible clouds or Moon during daylight without seeking the sun. The Moon is sometimes visible during the day, but no particular sighting is promised.",
      "Compare an early-evening observation or photograph with the daytime record. Note the actual visible features; clouds can hide objects and a short visit may show little.",
      "Discuss what cannot be concluded from not seeing a star or the Moon. Record visibility from this place and time without claiming unseen objects have disappeared.",
      "Use the sky-record checks and propose another safe observation with an adult. Label photographs as sources and record their times rather than pretending they were live sightings."
    ]
  }
];
for(let grade=0;grade<2;grade++)root.WonderOpeningMonth.units[grade].push(units[grade]);
root.WonderWeekTwentyFivePlans={units};
})(globalThis);
