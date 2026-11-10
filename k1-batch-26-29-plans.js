(function(root){
'use strict';
const units=[
  [
    {
      "materials": "Adult-approved balance or its illustrated model, large safe objects, story picture, plant photographs, paper and drawing tools.",
      "math": [
        "Open Read a balance. Point to the lower pan and explain that it holds the heavier load in this model. Compare the same two loads without using object size as proof.",
        "Use the balance picture to name the lighter load and the heavier load. Explain why these two descriptions refer to opposite sides of the same comparison.",
        "Find a balanced example and describe the loads as equal in weight. A level beam is different from an empty pan; inspect the actual objects before making a claim.",
        "With a grown-up, compare two safe large objects using an appropriate balance. Predict first, observe next, and revise a prediction if the balance gives different evidence.",
        "Use Read a balance review and explain a new illustrated comparison. Record whether the child reads the pan positions, uses weight words and needs adult prompts."
      ],
      "reading": [
        "Open Match the picture and the words and prepare cat, mat, hat and red. Read the printed words with adult help before using the illustration to check meaning.",
        "Read the three story sentences and point to the matching cat, mat and hats. Distinguish the red hat beside the mat from the hat Sam holds.",
        "Name one detail shown in both words and picture. Then find a picture-only detail, such as the mat color, and explain where that information came from.",
        "Cover the picture briefly while rereading a familiar sentence. Use its letters rather than inventing a word from the scene; uncover the picture to check the relationship.",
        "Use Picture and words review and explain a detail without answer choices. Record adult decoding support separately from the child identifying information sources."
      ],
      "writing": [
        "Draw a plant from an adult-selected picture and dictate two visible parts. Label what can actually be seen without guessing the plant age or exact species.",
        "Add a drawing of the plant surroundings and label a visible detail such as a pot or soil. Explain which details belong to the picture and which were your own ideas.",
        "Invite a grown-up to describe one way people care for a familiar plant. Write or dictate that example as a family practice, not as something every family must do.",
        "Share the drawing and ask a partner to point to the detail named by each label. Revise one unclear label or arrow while keeping the child\u2019s meaning.",
        "Present the revised drawing and a sentence about the observed plant. Say what remains unknown and keep the record for comparison with a later observation."
      ],
      "inquiry": [
        "Open Notice a plant and its place with a grown-up. Use a safe familiar plant or a clear photograph; do not taste, pull or handle an unknown plant.",
        "Observe visible leaves and a stem, then look at the surroundings. Describe what is visible without assuming hidden roots are absent or every plant looks the same.",
        "Compare two adult-selected plant photographs and name a visible similarity and difference. A photograph does not by itself tell what care caused a difference.",
        "Ask a willing grown-up about one plant-care routine and listen respectfully. Families may have different routines or no plants; use a classroom example if preferred.",
        "Use the plant-and-place checks and revisit one unanswered question. Record the child\u2019s observations separately from information supplied by a person or picture caption."
      ]
    },
    {
      "materials": "Large paper circles and squares in two colors, Two helpers text, animal habitat pictures and drawing materials.",
      "math": [
        "Open Sort by shape and color. State both rules, such as red and circle, then place only objects meeting both rules in the chosen group.",
        "Compare a red square and a blue circle with the red-circle rule. Explain why matching just one attribute is not enough to enter that group.",
        "Change one rule while keeping the other fixed and sort the same shapes again. Say which objects changed groups and which stayed, with reasons.",
        "Ask a partner to guess the two rules from a sorted group, then reveal them. Use a counterexample to show why color alone or shape alone does not explain the group.",
        "Use Sort by shape and color review and sort safe paper pieces away from the screen. Record whether the child checks both attributes or needs a modeled example."
      ],
      "reading": [
        "Open Compare two characters and prepare bag, cup, map and cap. Read Two helpers with a grown-up and keep each named item with the right character.",
        "Find what Sam has and what Kim has, pointing to the story for evidence. Draw each helper with only the items the text assigns to that person.",
        "Explain what both characters do: they help pack. Compare this shared action with their different belongings instead of mixing the characters\u2019 details.",
        "Ask whether the story tells how each character feels and check the actual sentences. Distinguish a possible feeling from a feeling explicitly stated in the story.",
        "Use Compare two characters review, then tell one similarity and one difference orally. Record pointing, rereading and adult prompts separately from answer choices."
      ],
      "writing": [
        "Draw two animal pictures selected by a grown-up and label a visible body part on each. Dictate a comparison that sticks to what the pictures show.",
        "Add a drawing of one animal\u2019s pictured surroundings. Label a shelter or water source only if shown or identified by the adult-approved source.",
        "Write or dictate one way a family might care for a familiar pet with adult help. Explain that not all families have pets and wild animals should be left alone.",
        "Share the comparison with a partner and clarify a vague word such as thing. Replace it with a part or place name while identifying adult spelling support.",
        "Present the revised comparison and name its source. Include one unanswered question rather than guessing how all animals or families behave."
      ],
      "inquiry": [
        "Open Compare animals and surroundings using adult-selected photographs. Observe from pictures or a safe distance and never approach or feed unfamiliar animals.",
        "Name one visible similarity and difference between two animals. Explain why the same body part can look different without assuming one animal is better.",
        "Find a pictured place providing shelter or water and discuss what the source supports. A single photograph may not show every resource the animal uses.",
        "Listen to a willing person\u2019s example of caring for an animal or shared outdoor place. Compare routines respectfully without treating one household as typical of all.",
        "Use the animal-observation checks and explain how a claim could be checked with another source. Record the child\u2019s observation and adult-provided information separately."
      ]
    },
    {
      "materials": "Large sortable paper shapes, familiar-word cards, plant/animal pictures, a small set of choices and writing materials.",
      "math": [
        "Open Compare sorted groups and count each category once. Match objects one to one across two groups before naming which has more or fewer.",
        "Find two categories with equal counts and explain how pairing confirms equality. Rearrange the same objects and check that spacing did not change the totals.",
        "Compare a named pair of groups rather than always choosing the biggest group on the screen. Point to the question\u2019s categories before counting.",
        "Make a small collection with an empty category and compare it with a nonempty one. Explain zero as none in that category, not a missing answer.",
        "Use Compare sorted groups review and explain a fresh sorting/counting example. Record classification, one-to-one counting and comparison language separately."
      ],
      "reading": [
        "Open Write and check familiar words and prepare sun, hat, bag and map. Build each word, say its sounds with adult help and notice the letters in order.",
        "Ask a grown-up to say a familiar target word without showing it. Write it on paper, then reveal the model and compare the letters from left to right.",
        "Choose a written word needing a change and revise one letter at a time. Explain the change without treating an incorrect first attempt as a reason to stop.",
        "Use one familiar word in a dictated or written sentence and reread it. Adult handwriting help may be needed; tile choices do not assess pencil control.",
        "Use Write and check familiar words review and keep an original and revised sample. Record spelling, handwriting assistance and independent checking separately."
      ],
      "writing": [
        "Draw a shared classroom or family activity and label two familiar objects. Choose whether to write a known word independently or ask a grown-up for its spelling.",
        "Add a sentence about how people take turns in the activity. Explain which part reflects a real example and which part is an imagined plan.",
        "Revise one object label by comparing it with a prepared word card. Keep the first attempt visible so the child can explain the corrected letter sequence.",
        "Ask a partner whether the drawing and sentence explain the activity clearly. Add a detail about who acts next without including private family information.",
        "Present the revised page and name one word checked independently. Record adult contributions and choose a familiar spelling to revisit after a break."
      ],
      "inquiry": [
        "Open Make a fair classroom choice with a grown-up. Use a fictional class choosing between two safe activities, with every participant offered one choice.",
        "Record each fictional vote once using large counters or picture marks. Sort into the two activity groups and compare counts, including a possible tie.",
        "Discuss a fair tie plan such as taking turns, agreed before counting. A larger group does not justify ignoring access needs or making an unsafe choice.",
        "Connect the fictional choice to sharing care for a plant or common space. Ask how a rule can include someone who cannot join in the same way.",
        "Use the fair-choice checks and explain the agreed procedure. Record respectful reasoning separately from the ability to identify the larger number."
      ]
    },
    {
      "materials": "Large counters, short-vowel word cards, clean reusable paper, a fictional shared-space picture and drawing tools.",
      "math": [
        "Open Join groups within ten and act out a joining story with large counters. Count the starting group, add the arriving group and explain the new total.",
        "Write or dictate an addition equation for a physical joining story. Point to which group each number describes before naming the sum.",
        "Try a story where zero new counters arrive and explain why the total stays the same. Zero describes an empty joining group, not a skipped instruction.",
        "Use a different pair of parts with the same total and compare the two models. Count all objects to check without claiming that the stories themselves are identical.",
        "Use Join groups within ten review and tell a fresh story for a model. Record counting, story-equation matching and adult prompts separately."
      ],
      "reading": [
        "Open Review short-vowel patterns and prepare map, mop, cap and cup. An adult models the middle vowel carefully while keeping beginning and ending sounds audible.",
        "Compare map with mop and point to the changed middle letter. Blend each complete word rather than guessing from the shared beginning and ending.",
        "Compare cap with cup and connect the vowel change to the spoken word. Use an adult model if the vowel sounds are hard to distinguish in the child\u2019s speech variety.",
        "Ask a grown-up to say one target word and choose or write its letters, then check the model. Record oral listening and written spelling as different observations.",
        "Use Review short-vowel patterns review and reread the supported sentences. Note which vowel contrasts need another short practice after a break."
      ],
      "writing": [
        "Draw a fictional shared table before tidying and dictate a sentence naming the problem. Include only safe classroom materials, not real private household details.",
        "Plan one way to reuse a clean paper scrap and label the new use with a familiar word. Ask an adult before reusing packaging or any unknown material.",
        "Draw the table after the proposed change and write or dictate what was moved or reused. Distinguish a planned result from a change actually tried.",
        "Ask a partner whether the plan gives everyone space and access to needed materials. Revise one label or instruction in response to a specific concern.",
        "Present a two-page before-and-after mini-book with adult support. Explain one change and one observation still needed, preserving the child\u2019s original wording."
      ],
      "inquiry": [
        "Open Care for a shared place with a grown-up and use a fictional table or safe classroom space. Do not handle sharp, dirty or unknown waste.",
        "Choose one small action such as putting clean paper scraps in a reuse tray. Predict what will change, then observe the actual safe trial if available.",
        "Count or compare safe items before and after without claiming that a single trial solves all waste. Explain what was reused and what still needs an adult decision.",
        "Discuss a fair shared rule so materials remain accessible to everyone. Include a turn-taking or adapted role for someone who cannot carry or sort objects.",
        "Use the shared-place checks and revise one part of the plan from evidence. Record participation, safety choices and the child\u2019s explanation separately."
      ]
    }
  ],
  [
    {
      "materials": "Safe paper shape pieces, large cubes, supported plant text and diagram, timed sky records, paper and drawing tools.",
      "math": [
        "Open Compose flat and solid shapes. Join two matching right triangles along their longest sides and trace the outside square, keeping the inside joining line separate.",
        "Join two equal squares along a complete side to form a rectangle. Explain how the smaller pieces differ from the boundary of the whole composed shape.",
        "Join two equal cubes face to face to form a rectangular prism. Describe it as a solid with depth rather than calling the whole object a flat rectangle.",
        "Turn a composed model and describe the pieces and whole again. Separate the pieces, rebuild the model and check for gaps or overlaps before naming its shape.",
        "Use Compose flat and solid shapes review and build an unfamiliar arrangement. Record hands-on composing and explanation separately from selecting a familiar picture."
      ],
      "reading": [
        "Open Use headings and a diagram and prepare roots, stem, leaf and soil. Model the spelling chunks and prepare leaf and leaves before the supported reading.",
        "Read the Roots heading and its two sentences, then use the diagram to locate roots. Explain that a heading points to a topic while the sentences provide details.",
        "Read the Stem heading and its sentence. Point to the diagram part holding up leaves, connecting the visual label to information in the text.",
        "Ask a detail question and choose the section likely to answer it. Reread to check; neither a heading nor the diagram supplies an unstated plant age.",
        "Use Headings and diagrams review and locate a detail without answer choices. Record adult support, then plan another text with headings for later transfer."
      ],
      "writing": [
        "Choose two timed sky records and write a topic sentence about what was observed. Identify a live observation or photograph as its source rather than mixing them silently.",
        "Add a sentence about one visible feature in the first record. Use a precise time label and separate a cloud, Moon or star observation from an untested prediction.",
        "Add a comparison sentence about the second record, allowing no visible change. Avoid saying an object disappeared simply because clouds or light hid it from view.",
        "Ask a willing grown-up about an evening routine or tradition they choose to share. Write their example respectfully and label it as one person\u2019s experience.",
        "Revise the information page so observed sky details and the shared family example are clearly distinguished. Check one familiar spelling and a sentence ending."
      ],
      "inquiry": [
        "Open Compare sky records with a grown-up. Use existing timed records or safe sky views; never look directly at the sun or aim binoculars toward it.",
        "Compare two observations made at different times and name only visible differences. The Moon can sometimes be visible during daylight; no sighting is guaranteed.",
        "Look for clouds or other limits to the view and record them. A missing object in a drawing may reflect visibility or an incomplete drawing rather than absence.",
        "Discuss how people use evening routines or traditions without ranking them. A family may choose not to share; a fictional classroom routine is an acceptable alternative.",
        "Use the sky-record checks and state one question requiring more observations. Keep conclusions limited to the records instead of claiming a universal daily pattern."
      ]
    },
    {
      "materials": "Paper rectangles and circles for sharing, two nest information texts, optional family drawings and timed sky records.",
      "math": [
        "Open Equal shares of a whole and identify two equal parts as halves. Compare with two unequal parts and explain why simply having two pieces is insufficient.",
        "Partition a paper rectangle into four equal parts and name them fourths. Rejoin the parts to show that the same whole is being described throughout.",
        "Compare halves and fourths of equal-sized paper wholes. Explain that more equal shares make each share smaller when the whole size stays the same.",
        "Try another valid partition direction and compare its equal shares with your first model. Use matching or folding to check equality rather than judging color.",
        "Use Equal shares of a whole review and make a new physical partition. Record equal-sharing reasoning separately from recognizing a familiar shaded picture."
      ],
      "reading": [
        "Open Compare two information texts and prepare nest, twig, mud and grass. Read Text A and Text B separately, checking introduced and helper words first.",
        "Find a detail about nesting material in each text and name its source. Do not attribute a material to both texts unless both actually mention it.",
        "Locate the shared detail about nests holding eggs. Explain how two texts can share a topic and one fact while providing different supporting details.",
        "Make a simple two-column drawing or dictated record of the details from each text. Reread both texts to check that a detail has not moved to the wrong column.",
        "Use Compare two information texts review and give one shared and one different detail orally. Record support and reserve broader transfer for new texts later."
      ],
      "writing": [
        "Create a page about a routine or tradition a willing family member chooses to share. Give the person\u2019s example a title and avoid private or identifying details.",
        "Write or dictate two details from the conversation and ask the speaker whether you understood. Mark a remembered statement separately from an invented example.",
        "Compare the shared example with a fictional classroom routine, naming one similarity and difference. Explain that neither example represents every family.",
        "Use a heading to organize the page, then revise a detail a listener found unclear. A grown-up may scribe, with the child choosing the meaning and words.",
        "Present the page only with the speaker\u2019s permission, or use the fictional example. Check a familiar spelling and explain what the page does not claim."
      ],
      "inquiry": [
        "Open Learn about a shared tradition with an adult. Invite an optional, nonprivate example from a willing person; use a fictional routine if no one wishes to share.",
        "Ask what people do and what the routine means to the speaker. Listen without assuming that everyone in a community follows the same practice.",
        "Compare the example with a classroom routine and name evidence for each detail. Keep the speaker\u2019s statement distinct from your own prediction or opinion.",
        "Revisit one sky observation and its time label as a separate source exercise. Discuss how an observation record differs from a person describing a tradition.",
        "Use the tradition-and-source checks and choose one respectful follow-up question. Participation, listening and source identification require observation beyond a quiz score."
      ]
    },
    {
      "materials": "Teaching clock or paper clock, context-clue text, dated sky pictures, optional routine cards and writing materials.",
      "math": [
        "Open Read hours and half hours and read an exact hour. Notice that the minute hand points to twelve while the hour hand identifies the hour.",
        "Read a half-hour time and locate the hour hand between two numbers. Name the hour already passed, rather than the next number the hand is approaching.",
        "Match analog clock pictures to digital times ending in :00 or :30. Include twelve o\u2019clock and half past twelve, checking both hands each time.",
        "Set a paper clock for a fictional routine and ask a partner to read it. Explain that the clock face alone does not tell morning or evening.",
        "Use Read hours and half hours review and show a new time on a model. Record hand-position reasoning and adult help rather than treating a memorized label as mastery."
      ],
      "reading": [
        "Open Use clues around a word and prepare damp, dry, wet and drip. Read the supported cloth text with all unfamiliar words prepared by a grown-up.",
        "Locate the clues showing that damp means a little wet. Point to nearby words and connect them to the situation instead of choosing a meaning only from the first letter.",
        "Try replacing damp with a little wet and reread the sentence. Check whether the substituted meaning fits the surrounding text without changing its main meaning.",
        "Compare damp with dry using the story evidence. A word may have more than one meaning in other contexts, so keep this explanation tied to this selection.",
        "Use Use clues around a word review and explain the clue orally. Record adult vocabulary support and later practise with a new short context."
      ],
      "writing": [
        "Create a fictional day page with two clock labels and a sentence for each event. Mark morning or evening explicitly because the clock picture alone cannot show that.",
        "Write a sentence comparing one timed sky record with another. Describe what was visible rather than assuming every evening has the same clouds or Moon view.",
        "Add a clear explanation of a familiar routine word for an imagined reader. Use nearby words that help someone infer its meaning from the sentence.",
        "Share the page and ask a partner to read the times and explain the unfamiliar word. Revise a missing time label or vague clue based on that feedback.",
        "Present the revised page with one observation and one fictional routine clearly marked. Check a known spelling and record any adult-generated sentence parts."
      ],
      "inquiry": [
        "Open Times, routines and sky views with a grown-up. Use timed photographs or safe observations without looking toward the sun, and record the source.",
        "Compare a clock time with a morning/evening label and explain why both may be needed. Different households may follow different routines at the same time.",
        "Look at two sky records made on different days at a similar time. Describe visible similarities and differences without expecting the sky to repeat exactly.",
        "Ask a willing person about a routine they choose to share or use a fictional one. Discuss differences respectfully without calling a household routine wrong.",
        "Use the time-and-view checks and state one limit of the records. Reading a clock and explaining a source are separate skills to observe with adult support."
      ]
    },
    {
      "materials": "Large three-category picture cards, cumulative spelling text, teacher-selected local sunrise/sunset records and drawing tools.",
      "math": [
        "Open Organize three categories and name the sorting categories before counting. Place each object in exactly one matching group and check for missing or duplicate objects.",
        "Count each category and record its number beside the correct label. Compare the record with the original collection one category at a time.",
        "Include an empty category and record zero rather than omitting its label. Explain that all three categories remain part of the data record.",
        "Rearrange the objects without adding or removing any and rebuild the record. Check that category totals stay the same even when positions change.",
        "Use Organize three categories review and make a new three-category collection. Record classification and accurate recording separately from simply choosing a number."
      ],
      "reading": [
        "Open Review spelling patterns and prepare rain, train, seed and green. Point to ai and ee while retaining the initial consonant groups in train and green.",
        "Compare rain and train, explaining the extra starting consonant. Blend the whole word so the familiar vowel team does not cause an initial sound to be skipped.",
        "Compare seed and green and identify their shared ee spelling. Keep their remaining letters distinct; a shared spelling pattern does not make the words interchangeable.",
        "Use adult dictation to write a target word, compare with the model and revise. Try a prepared new example later to distinguish recall of these words from transfer.",
        "Use Review spelling patterns review and reread the connected text. Record independent decoding, dictation support and patterns needing another practice."
      ],
      "writing": [
        "Make a simple information page from two adult-selected local daylight records. Label the place and dates without adding private address details.",
        "Write one comparison using the records, such as which date has more daylight when the source supplies that information. Do not infer it from cloudiness.",
        "Arrange the two dated records on a left-to-right timeline and add a later observation plan. Explain the difference between an existing record and a future prediction.",
        "Share the page with a partner and check that each statement points to its source. Revise a missing date or unclear label instead of filling a gap with a guess.",
        "Present the revised page and one question requiring more dates. Check familiar spelling patterns while keeping source interpretation distinct from handwriting support."
      ],
      "inquiry": [
        "Open Compare daylight records with a grown-up. Use trusted adult-selected sunrise/sunset or daylight-duration records for one place; do not observe the sun directly.",
        "Locate the dates and the stated daylight durations or adult-calculated durations. Compare what the provided numbers show without expecting all places to match.",
        "Put the dated records in time order and mark a future date separately. A timeline organizes evidence but does not by itself explain why a change happened.",
        "Discuss why a cloudy day can still have many hours between sunrise and sunset. Separate visibility of sunshine from the duration of daylight.",
        "Use the daylight-record checks and state the limits of two records. More dates and reliable sources are needed before describing a seasonal pattern."
      ]
    }
  ]
];
const inquiry=[
  {
    "id": "k1-inquiry-0-26",
    "grade": 0,
    "week": 26,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Notice a plant and its place",
    "objective": "Describe visible plant parts and surroundings while distinguishing observation from supplied information.",
    "teach": "Observe a safe familiar plant or adult-selected photograph. Name visible parts and surroundings without tasting, pulling or touching unknown plants. Hidden parts may still be present. Ask a willing grown-up about one care routine, or use a classroom example; no household must share. Compare the source of a picture detail with the source of a spoken statement.",
    "activity": "Draw the plant and its place, label visible details and record one question that needs another source.",
    "questions": [
      {
        "question": "A photograph does not show the roots. What can we conclude?",
        "options": [
          "The roots may be hidden",
          "The plant has no roots",
          "Every plant has visible roots"
        ],
        "answer": 0,
        "explanation": "A photograph can hide parts below soil or outside the frame. Not shown does not mean absent."
      },
      {
        "question": "How should we describe one family\u2019s plant-care routine?",
        "options": [
          "Every family does it",
          "As that family\u2019s example",
          "As the only right routine"
        ],
        "answer": 1,
        "explanation": "One shared example tells us about that household, not the practices of every family."
      },
      {
        "question": "Which detail belongs in an observation drawing?",
        "options": [
          "An invented plant age",
          "A guessed species name",
          "A visible leaf or stem"
        ],
        "answer": 2,
        "explanation": "Draw and label what the source shows. Age and species may require information beyond this picture."
      }
    ],
    "question": "A photograph does not show the roots. What can we conclude?",
    "options": [
      "The roots may be hidden",
      "The plant has no roots",
      "Every plant has visible roots"
    ],
    "answer": 0,
    "explanation": "A photograph can hide parts below soil or outside the frame. Not shown does not mean absent.",
    "minutes": 12,
    "order": 1800,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-26",
    "grade": 1,
    "week": 26,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Compare sky records",
    "objective": "Compare timed sky observations and describe limits of visibility.",
    "teach": "Use safe sky views or adult-selected timed photographs. Never look directly at the sun or aim binoculars toward it. Record time, clouds and visible objects; the Moon can sometimes be visible in daylight. A clouded view does not show that an object has disappeared. Compare observations with an optional shared evening routine, keeping these sources distinct.",
    "activity": "Make two timed drawings and explain a visible similarity, difference and unanswered question.",
    "questions": [
      {
        "question": "What should accompany a sky drawing?",
        "options": [
          "An observation time and source",
          "Only a favorite color",
          "A guessed date"
        ],
        "answer": 0,
        "explanation": "A time and source help explain when and how the observation was recorded."
      },
      {
        "question": "Clouds hide an object. What does that tell us?",
        "options": [
          "It no longer exists",
          "It is not visible from this view now",
          "It can never be seen again"
        ],
        "answer": 1,
        "explanation": "A limited view describes visibility at that place and time; it does not establish absence."
      },
      {
        "question": "Does one evening record show what every evening looks like?",
        "options": [
          "Yes, always",
          "Only if it is neat",
          "No, more observations are needed"
        ],
        "answer": 2,
        "explanation": "Sky conditions and visible objects can differ. One record cannot establish a universal pattern."
      }
    ],
    "question": "What should accompany a sky drawing?",
    "options": [
      "An observation time and source",
      "Only a favorite color",
      "A guessed date"
    ],
    "answer": 0,
    "explanation": "A time and source help explain when and how the observation was recorded.",
    "minutes": 12,
    "order": 1801,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-27",
    "grade": 0,
    "week": 27,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Compare animals and surroundings",
    "objective": "Compare visible animal features and identify limits of picture evidence.",
    "teach": "Use adult-selected animal photographs or observe from a safe distance. Do not approach or feed unfamiliar animals. Name visible features and pictured surroundings. A photograph may omit resources the animal uses. Listen respectfully to an optional care example from a willing person; not all families keep pets, and wild animals need space.",
    "activity": "Draw a comparison using one similarity and one difference, naming the source for each detail.",
    "questions": [
      {
        "question": "What is a good way to compare the pictures?",
        "options": [
          "Guess which animal is nicest",
          "Name visible similarities and differences",
          "Make up hidden details"
        ],
        "answer": 1,
        "explanation": "Visible features provide evidence for a comparison; preference and invented details do not."
      },
      {
        "question": "A picture shows no water source. Does that prove the animal needs no water?",
        "options": [
          "Yes",
          "Only for small animals",
          "No, the picture may leave things out"
        ],
        "answer": 2,
        "explanation": "The picture may show only part of the surroundings, so it cannot prove a resource is unnecessary."
      },
      {
        "question": "What should we do around unfamiliar animals?",
        "options": [
          "Keep a safe distance with adult guidance",
          "Feed them to get closer",
          "Touch them for a better look"
        ],
        "answer": 0,
        "explanation": "Observation can happen from pictures or a safe distance without approaching or feeding unfamiliar animals."
      }
    ],
    "question": "What is a good way to compare the pictures?",
    "options": [
      "Guess which animal is nicest",
      "Name visible similarities and differences",
      "Make up hidden details"
    ],
    "answer": 1,
    "explanation": "Visible features provide evidence for a comparison; preference and invented details do not.",
    "minutes": 12,
    "order": 1802,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-27",
    "grade": 1,
    "week": 27,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Learn about a shared tradition",
    "objective": "Listen respectfully to an optional personal account and distinguish its scope from general claims.",
    "teach": "Invite a willing person to share a nonprivate routine or tradition and what it means to them. They may decline; use a fictional classroom routine instead. Ask permission before sharing their example. Do not assume everyone in a family or community follows the same practice. Separate what the speaker says from your own guesses.",
    "activity": "Create a titled page with two details attributed to the speaker or clearly labeled as fictional.",
    "questions": [
      {
        "question": "One person describes a tradition. What does that establish?",
        "options": [
          "Everyone does the same thing",
          "That person\u2019s shared example",
          "No one else may do it"
        ],
        "answer": 1,
        "explanation": "A personal account provides an example, not proof that all people share the practice."
      },
      {
        "question": "Someone does not want to share. What should we do?",
        "options": [
          "Insist on an answer",
          "Guess their private routine",
          "Respect the choice and use another example"
        ],
        "answer": 2,
        "explanation": "Sharing is optional. A fictional classroom example lets the learning continue without pressure."
      },
      {
        "question": "Before presenting another person\u2019s example, what helps?",
        "options": [
          "Check understanding and ask permission",
          "Add private details",
          "Say it describes every family"
        ],
        "answer": 0,
        "explanation": "Checking the account and obtaining permission supports respectful and accurate sharing."
      }
    ],
    "question": "One person describes a tradition. What does that establish?",
    "options": [
      "Everyone does the same thing",
      "That person\u2019s shared example",
      "No one else may do it"
    ],
    "answer": 1,
    "explanation": "A personal account provides an example, not proof that all people share the practice.",
    "minutes": 12,
    "order": 1803,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-28",
    "grade": 0,
    "week": 28,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Make a fair classroom choice",
    "objective": "Explain a simple agreed voting and turn-taking procedure with attention to access needs.",
    "teach": "Use a fictional class choosing between two safe activities. Offer each participant one choice and record each once. Agree on a tie plan before counting, such as taking turns. A larger group does not make an unsafe activity acceptable or justify excluding someone. Consider access needs and adapted roles with a grown-up.",
    "activity": "Draw the two groups and explain the agreed procedure, including what happens in a tie.",
    "questions": [
      {
        "question": "How many times should one fictional vote be counted?",
        "options": [
          "Once",
          "Twice if it is your favorite",
          "As many times as needed to win"
        ],
        "answer": 0,
        "explanation": "Counting each choice once keeps the record faithful to the agreed one-choice procedure."
      },
      {
        "question": "The groups tie. What should happen?",
        "options": [
          "Hide one vote",
          "Use the fair plan agreed beforehand",
          "Always choose the loudest person"
        ],
        "answer": 1,
        "explanation": "An agreed tie plan, such as taking turns, avoids changing the rules to favor one person."
      },
      {
        "question": "Most choose an activity that excludes someone. What should we consider?",
        "options": [
          "Only the biggest number",
          "Ignoring the person",
          "An accessible alternative or adapted role"
        ],
        "answer": 2,
        "explanation": "A fair shared decision considers access and safety as well as the number of choices."
      }
    ],
    "question": "How many times should one fictional vote be counted?",
    "options": [
      "Once",
      "Twice if it is your favorite",
      "As many times as needed to win"
    ],
    "answer": 0,
    "explanation": "Counting each choice once keeps the record faithful to the agreed one-choice procedure.",
    "minutes": 12,
    "order": 1804,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-28",
    "grade": 1,
    "week": 28,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Times, routines and sky views",
    "objective": "Use time labels and sources to compare observations without judging household routines.",
    "teach": "Use timed sky photographs or safe views without looking toward the sun. A clock face alone does not distinguish morning from evening. Compare records at a similar time on different days and describe what is visible, not what must always happen. Optional household examples may differ; no family needs to share private routines.",
    "activity": "Make two timed records and explain why both time context and observation evidence matter.",
    "questions": [
      {
        "question": "Does an analog clock face alone show morning or evening?",
        "options": [
          "Yes, always",
          "Only at twelve",
          "No, a context label is needed"
        ],
        "answer": 2,
        "explanation": "The same clock display can occur in the morning or evening, so context supplies that distinction."
      },
      {
        "question": "Two days show different clouds at the same clock time. What should we record?",
        "options": [
          "The actual difference",
          "The clouds we expected",
          "Only the clearer day"
        ],
        "answer": 0,
        "explanation": "An observation record should preserve actual visible conditions, including differences between days."
      },
      {
        "question": "Two households have different routines. What can we say?",
        "options": [
          "One must be wrong",
          "Routines can differ respectfully",
          "Every household must copy ours"
        ],
        "answer": 1,
        "explanation": "Households may organize time differently. A shared example is not a rule for all families."
      }
    ],
    "question": "Does an analog clock face alone show morning or evening?",
    "options": [
      "Yes, always",
      "Only at twelve",
      "No, a context label is needed"
    ],
    "answer": 2,
    "explanation": "The same clock display can occur in the morning or evening, so context supplies that distinction.",
    "minutes": 12,
    "order": 1805,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-29",
    "grade": 0,
    "week": 29,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Care for a shared place",
    "objective": "Plan and evaluate one safe action that reduces waste or improves a shared space.",
    "teach": "Use a fictional table or safe adult-approved classroom area. Reuse only clean safe materials chosen by a grown-up; do not handle sharp, dirty or unknown waste. Predict one change, try it safely if possible, then record the result. Agree on a rule that keeps materials accessible and gives participants appropriate roles. A small trial does not establish every environmental effect.",
    "activity": "Create a before-and-after mini-book and revise one action based on the actual result or an identified access need.",
    "questions": [
      {
        "question": "Which material should a child reuse in this activity?",
        "options": [
          "Unknown waste",
          "Sharp packaging",
          "Clean paper approved by a grown-up"
        ],
        "answer": 2,
        "explanation": "Use only safe adult-approved materials. Unknown or sharp waste requires an adult decision."
      },
      {
        "question": "A plan did not work as expected. What next?",
        "options": [
          "Record the result and revise the plan",
          "Pretend it worked",
          "Erase every observation"
        ],
        "answer": 0,
        "explanation": "Actual results help improve a plan, even when they differ from the prediction."
      },
      {
        "question": "How can a shared rule include more people?",
        "options": [
          "Require everyone to carry heavy objects",
          "Offer an accessible task or adapted role",
          "Exclude anyone needing help"
        ],
        "answer": 1,
        "explanation": "People can contribute through appropriate roles; fair participation does not require identical actions."
      }
    ],
    "question": "Which material should a child reuse in this activity?",
    "options": [
      "Unknown waste",
      "Sharp packaging",
      "Clean paper approved by a grown-up"
    ],
    "answer": 2,
    "explanation": "Use only safe adult-approved materials. Unknown or sharp waste requires an adult decision.",
    "minutes": 12,
    "order": 1806,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-29",
    "grade": 1,
    "week": 29,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Compare daylight records",
    "objective": "Order dated records and distinguish daylight duration from visible sunshine.",
    "teach": "Use adult-selected reliable records for the same place, showing sunrise/sunset times or daylight durations. A grown-up supplies or calculates durations when needed. Never look at the sun directly. Compare dates and stated durations, and place records on a timeline. Cloudiness affects visible sunshine but is not the length of the sunrise-to-sunset interval. Two records do not establish a whole seasonal pattern.",
    "activity": "Create a dated comparison page with a timeline, one supported statement and a question requiring more records.",
    "questions": [
      {
        "question": "What makes two daylight records easier to compare?",
        "options": [
          "Same place and clearly labeled dates",
          "No dates",
          "Only cloud drawings"
        ],
        "answer": 0,
        "explanation": "A common place and dates identify the observations being compared and avoid mixing different contexts."
      },
      {
        "question": "Does a cloudy view alone tell the daylight duration?",
        "options": [
          "Yes, it must be short",
          "No, use sunrise/sunset or duration records",
          "Only if the clouds are dark"
        ],
        "answer": 1,
        "explanation": "Clouds can hide sunshine without defining the interval between sunrise and sunset."
      },
      {
        "question": "Do two dates prove an entire seasonal pattern?",
        "options": [
          "Always",
          "Only if written neatly",
          "No, more dates and evidence are needed"
        ],
        "answer": 2,
        "explanation": "Two records support a limited comparison. Describing a seasonal pattern requires broader evidence."
      }
    ],
    "question": "What makes two daylight records easier to compare?",
    "options": [
      "Same place and clearly labeled dates",
      "No dates",
      "Only cloud drawings"
    ],
    "answer": 0,
    "explanation": "A common place and dates identify the observations being compared and avoid mixing different contexts.",
    "minutes": 12,
    "order": 1807,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  }
];
if(root.WonderOpeningMonth)for(let grade=0;grade<2;grade++)root.WonderOpeningMonth.units[grade].push(...units[grade]);
root.WonderCurriculum.lessons.push(...inquiry);
for(const l of inquiry)Object.assign(root.WonderK1Year.weeks[l.grade][l.week-1],{inquiryLesson:l.id,status:'starter-activities'});
root.WonderBatch2629Plans={units,inquiry};
})(globalThis);
