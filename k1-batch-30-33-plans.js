(function(root){
'use strict';
const units=[
  [
    {
      "materials": "Large counters, prepared hen-story words, two clean paper scraps, drawing tools and a fictional classroom picture.",
      "math": [
        "Open Take away within ten and build the starting group with large counters. Move away the leaving part and count only the counters that remain.",
        "Connect a taking-away story to its subtraction equation. Point to the starting total, the part removed and the remaining group before saying the answer.",
        "Try a story in which zero counters leave, then one in which every counter leaves. Explain the different meanings of subtracting zero and ending with zero.",
        "Check a subtraction by returning the removed counters to the group. Explain how putting the parts back together recovers the original total.",
        "Use Take away within ten review and tell a new story for an unfamiliar model. Record story meaning and counting support separately from a correct numeral."
      ],
      "reading": [
        "Open Read a short connected story and prepare hen, pen, run and sun. Model unfamiliar helper words before reading the connected sentences with a grown-up.",
        "Read the hen story from beginning to end, tracking each printed word. Notice when the hen leaves the pen and when it returns without adding an unstated event.",
        "Reread one sentence smoothly after an adult model, keeping all of its words. A smooth second reading is practice, not proof of independent first-time reading.",
        "Use a simple drawing to tell the hen story in order, then check the text. Return to any sentence needed to correct a missing or mixed-up event.",
        "Use Read a short connected story review and read again after a break. Record accurate words, meaning and the amount of adult support as separate observations."
      ],
      "writing": [
        "Draw two possible uses for a clean paper scrap and dictate a label for each. Describe an actual safe use rather than claiming every material can be reused.",
        "Choose one paper idea and write or dictate a short plan with first and next. Explain which action the child can do and which requires a grown-up.",
        "After trying the safe paper idea, draw the result and add an observation sentence. Keep the original prediction visible even if the result was different.",
        "Ask a partner which instruction was hard to follow and revise it with a clearer word or drawing. Keep adult-written letters separate from child-generated ideas.",
        "Present a small reuse page showing the plan and result. Name one improvement and one question that the trial does not answer about other materials."
      ],
      "inquiry": [
        "Open Try a safe reuse idea with a grown-up and choose only clean adult-approved paper. Leave dirty, sharp or unknown waste for an adult to handle.",
        "Compare two possible uses for the same clean paper scrap, such as a drawing card or a label. Choose a use that meets a real purpose in the fictional classroom.",
        "Try the chosen use and record whether it serves the stated purpose. A useful drawing card does not prove that all waste can be reused in the same way.",
        "Discuss how a shared reuse tray can stay easy to reach and clearly labeled. Offer an adapted role so someone can contribute without carrying materials.",
        "Use the reuse-idea checks and revise one step using the trial result. Record what was observed, what was predicted and what still needs an adult decision."
      ]
    },
    {
      "materials": "Large counters within five, cup-and-bag text, fictional cleanup role cards and paper for labels or drawings.",
      "math": [
        "Open Explain facts within five and show a small addition with counters. Say how you know the total, allowing counting, known parts or another explained strategy.",
        "Build a subtraction within five and explain what remains after taking away. Check by putting the removed part back, connecting addition and subtraction.",
        "Show two different ways to make the same small total and describe the parts. A quick response is welcome but speed is not used to judge understanding.",
        "Revisit one fact that needed a model and try a fresh arrangement of its counters. Record whether the child can explain it rather than timing the response.",
        "Use Explain facts within five review and choose one fact for later practice. Record strategy, accuracy and adult help without treating this visit as a fluency certificate."
      ],
      "reading": [
        "Open Explain with a text detail and prepare cup, bag, red and mat. Read the supported text before asking where the cup is and what evidence supports the answer.",
        "Point to the sentence locating the cup beside the bag and say the detail aloud. Explain how the sentence supports the answer instead of saying only I know.",
        "Ask another question about a stated item and find the relevant words. If the text does not supply a detail, say so rather than filling it in from imagination.",
        "Draw the stated arrangement and check each part against the text. Change a drawing detail when it conflicts with the sentence instead of changing the story.",
        "Use Explain with a text detail review and give one answer with its supporting words. Record pointing, oral explanation and adult reading help separately."
      ],
      "writing": [
        "Draw three possible cleanup roles in a fictional shared area and label their purposes. Include a useful role that does not require lifting or walking.",
        "Write or dictate a rule for taking turns at a preferred role. Explain how the rule can be understood before roles are assigned rather than changed to favor a friend.",
        "Add a sentence about how a partner could ask for help or an adapted task. Keep the example fictional so no child needs to disclose a private need.",
        "Share the role plan and listen for one concern about fairness or access. Revise a label or rule to address that specific concern with adult support.",
        "Present the revised plan and explain why equal respect does not always mean identical tasks. Choose a familiar word to check against a prepared model."
      ],
      "inquiry": [
        "Open Share cleanup roles fairly using a fictional classroom example. A grown-up checks that all proposed jobs involve safe materials and appropriate actions.",
        "Match role cards to the work needing to be done and identify an overlooked job. Count small groups if helpful, but do not assign worth to people by job counts.",
        "Try a turn-taking rule with pretend characters and test what happens when two want the same role. Use the agreed process instead of the loudest voice.",
        "Consider a character who needs a seated role or another adaptation. Explain how a useful alternative can include the character without requiring private explanations.",
        "Use the fair-role checks and revise one rule from the pretend trial. Observe respectful explanation and flexibility separately from the child\u2019s arithmetic answers."
      ]
    },
    {
      "materials": "A ten-frame with large counters, lost-cap story, two pretend shared-space plans and mini-book materials.",
      "math": [
        "Open Find a missing part of ten and build a whole of ten counters. Show one part and determine the hidden or unfilled part while keeping the total fixed.",
        "Use a ten-frame to explain the missing part without changing the number of spaces. Count empty spaces or use a known combination, then check the whole.",
        "Try cases with a shown part of zero and a shown part of ten. Explain why the missing parts are ten and zero respectively rather than treating them as invalid cases.",
        "Make two complementary parts of ten and swap which is visible. Describe the relationship while distinguishing the part being asked for from the whole.",
        "Use Find a missing part of ten review and explain an unfamiliar arrangement. Record model use, whole-part language and adult support rather than speed."
      ],
      "reading": [
        "Open Retell the key events and prepare cap, bag, desk and lost. Read the lost-cap story with a grown-up and identify its main events before drawing them.",
        "Locate where the lost cap is found and what happens to it afterward. Point to the relevant sentences so the retelling keeps the stated order.",
        "Make three event pictures and tell the story using first, next and last. Leave out an imagined ending unless clearly labeled as a separate new idea.",
        "Retell after a short break, then reread to check a missing event or mixed-up location. An adult may prompt without supplying the whole retelling.",
        "Use Retell the key events review and give a short oral retelling without choices. Record event selection, order and prompting separately from the quiz result."
      ],
      "writing": [
        "Create a two-page mini-book showing an original and revised shared-space plan. Label the original idea before explaining what changed and why.",
        "Write or dictate a sentence describing the first pretend trial. Use what actually happened in the model rather than replacing a difficulty with the hoped-for outcome.",
        "Add a sentence connecting the revision to one piece of evidence or partner feedback. Identify an adult-provided spelling without replacing the child\u2019s explanation.",
        "Ask a partner to retell the plan sequence from the mini-book. Revise a missing step or unclear pronoun when the reader cannot follow the order.",
        "Present the completed mini-book and name one remaining limitation. Select one page to save for a later comparison with the child\u2019s new work."
      ],
      "inquiry": [
        "Open Improve a shared-space plan using two fictional drawings or a safe model. Agree on a purpose such as keeping a path clear and materials reachable.",
        "Try the first arrangement with pretend characters and record a specific difficulty. Avoid involving real personal information or unsafe obstacles.",
        "Change one feature of the arrangement and try the same simple task again. Keep other parts similar so the comparison focuses on the chosen change.",
        "Compare the two trial records and explain whether the change helped the stated purpose. A successful model does not prove the plan fits every real place.",
        "Use the plan-improvement checks and propose a further question. Record the child\u2019s evidence-based revision separately from the adult\u2019s safety decisions."
      ]
    },
    {
      "materials": "Number path to one hundred, prepared decoding words, two adult-approved paper samples, a small water tray and drawing tools.",
      "math": [
        "Open Count on to one hundred and start at a given number on the number path. Say each next number once instead of restarting from one whenever possible.",
        "Practise crossing a decade boundary such as twenty-nine to thirty using the path. Point to the next position and connect the spoken number to its written form.",
        "Begin at another point and count a short stretch, including a stretch ending at one hundred. A short correct sequence is practice toward the broader counting goal.",
        "Let a grown-up make an intentional counting skip and explain how to check it with the path. Rehearse the corrected sequence without turning it into a speed contest.",
        "Use Count on to one hundred review and record starting points that need support. Plan later oral counting across a longer stretch; a few items do not show the entire skill."
      ],
      "reading": [
        "Open Review familiar decoding patterns and prepare cat, cut, ship and shop. Model short-vowel contrasts and sh while blending each complete printed word.",
        "Compare cat with cut and identify the middle vowel change. Read both again while keeping the shared beginning and ending sounds audible.",
        "Compare ship with shop and keep the sh spelling group together. Distinguish the vowel change from a change in the number of printed letters.",
        "Try reading a prepared sentence without an immediate adult model, then reread for meaning. Record first-attempt support separately from later practice.",
        "Use Review familiar decoding patterns review and select a pattern for another brief visit. Adult oral observation is needed; browser word recognition is not pronunciation scoring."
      ],
      "writing": [
        "Draw a simple map of the safe paper-test setup, labeling where each sample and the tray will go. Explain that this map represents positions rather than actual sizes.",
        "Dictate a prediction about the two paper samples before the test. Label it prediction so it is not confused with the observed result added later.",
        "After the adult-guided trial, draw what happened and add a sentence using observed details. Preserve the first prediction even if it did not match the result.",
        "Arrange setup, test and result drawings in order and add simple time-order words. Explain how these records are clues about what happened earlier in the activity.",
        "Present the investigation mini-book with a setup map, prediction and observation. Name one part to try again rather than claiming one trial proves every paper behaves alike."
      ],
      "inquiry": [
        "Open Plan a small paper investigation with a grown-up. Use two safe paper samples, a tray and a few adult-controlled drops of water; protect surfaces and avoid electrical items.",
        "Ask which paper seems to take up the water under the trial conditions. Predict first and plan similar-sized samples with the same small amount of water.",
        "Observe each sample for a similar interval after the drops are added. Describe visible spreading or remaining water without tasting materials or claiming precise absorption measurements.",
        "Compare the drawings and explain how keeping conditions similar helps. A single informal trial may need repeating and cannot represent all types of paper.",
        "Use the investigation-planning checks and propose one sensible repeat. Record safe setup, prediction and actual observation as different parts of the investigation."
      ]
    }
  ],
  [
    {
      "materials": "Large category cards, prepared dialogue text, adult-selected daylight records for one place and drawing/writing materials.",
      "math": [
        "Open Compare category counts and read the category labels before comparing. Identify the two groups named in the question rather than always choosing the largest group.",
        "Use one-to-one matching to find how many more one category has than another. Connect unmatched items to the difference instead of adding both totals.",
        "Compare equal counts and explain why the difference is zero. Rearrange the same objects and check that changing spacing does not change the category totals.",
        "Make a record including an empty category and compare it with a nonempty one. State both category names and the relevant counts in a complete explanation.",
        "Use Compare category counts review and explain a new comparison from your own cards. Record reading the data and choosing the operation as distinct skills."
      ],
      "reading": [
        "Open Read dialogue with expression and prepare ship, shop, chat and chin. Read the Sam and Kit conversation with a grown-up, identifying each speaker first.",
        "Locate the question and response in the dialogue. Discuss how punctuation and meaning guide the reading without deciding that only one voice or accent is correct.",
        "Take turns reading the two speakers after adult modeling. Keep the printed words while experimenting with a comfortable question-and-answer expression.",
        "Read one exchange again and explain who said each line. Use the surrounding words to check meaning rather than judging understanding only from a lively voice.",
        "Use Read dialogue with expression review and perform a short rereading if comfortable. Record word accuracy, speaker tracking and adult-observed expression separately."
      ],
      "writing": [
        "Make a page for three dated daylight records from one adult-selected source. Label the place broadly, dates and supplied durations without adding a private address.",
        "Write one sentence comparing two recorded daylight durations. Refer to the actual numbers and dates rather than guessing from a drawing of clouds.",
        "Add a heading that tells what the page is about and put the records in date order. Keep any future observation plan clearly separate from existing evidence.",
        "Ask a partner to trace your comparison back to the source. Correct a copied number or missing date before making the page look more decorative.",
        "Present the revised data page and one limit of the comparison. Explain that three selected records do not describe every place or every day of a season."
      ],
      "inquiry": [
        "Open Organize dated daylight evidence with a grown-up. Use reliable adult-selected duration records for the same place; no direct observation of the sun is needed.",
        "Locate each record\u2019s date and duration, then put three records in time order. If a source supplies clock times only, a grown-up calculates the duration.",
        "Compare two durations and identify exactly which date had more daylight in the supplied records. Do not replace evidence with what you expected from the season name.",
        "Check whether any information is missing or copied incorrectly. A record without a date or place may need clarification before joining the comparison.",
        "Use the dated-evidence checks and plan what additional dates would help. State that selected records support a limited comparison rather than a universal pattern."
      ]
    },
    {
      "materials": "Large counters, nest-repair text, adult-selected sunrise/sunset and duration records, dated cards and writing tools.",
      "math": [
        "Open Find the change in a story and model the starting and ending amounts. Identify that the unknown is what changed, not automatically the final total.",
        "For an adding-on story, count from the starting group to the ending total. Record the added part and check by combining it with the start.",
        "For a taking-away story, build the start and remove objects until the given ending remains. Count the removed part and check the original story.",
        "Compare two stories with the same start and end but different wording. Ask what is unknown before selecting a calculation or writing a number sentence.",
        "Use Find the change in a story review and explain a new model aloud. Record unknown identification, counting strategy and adult prompts separately."
      ],
      "reading": [
        "Open Support an answer with evidence and prepare nest, twig, wind and rest. Read the nest-repair selection with introduced and helper words prepared first.",
        "Answer a question about the fallen twig and point to the words supporting it. Keep an answer tied to what the selection says rather than a general belief about birds.",
        "Distinguish a stated repair action from an inferred feeling or cause. Explain when an idea is a possibility and when the text explicitly supplies it.",
        "Ask a partner to check an answer by rereading the cited sentence. Revise an unsupported detail instead of insisting that a plausible guess must be in the text.",
        "Use Support an answer with evidence review and give a short oral answer plus evidence. Record reading help separately from choosing and explaining support."
      ],
      "writing": [
        "Draw a daylight record card with its date, place and adult-supplied duration. Label a sunrise or sunset clock time separately from the length of daylight.",
        "Write an explanation of the difference between when an event occurs and how long an interval lasts. Use the adult-prepared record rather than calculating beyond current skills.",
        "Place two cards on a dated timeline and write a comparison grounded in their durations. Say which source supplied the numbers and keep cloud observations separate.",
        "Ask a partner whether a label could be confused with a duration or clock time. Revise the wording so a reader can distinguish the two kinds of information.",
        "Present the clarified record and one question it does not answer. Check a sentence ending and familiar spelling without treating neatness as proof of scientific accuracy."
      ],
      "inquiry": [
        "Open Clock times and daylight duration with a grown-up and inspect a trusted record. Never look directly at the sun to check the listed times.",
        "Identify the sunrise and sunset times as when events occur. Identify the supplied or adult-calculated daylight duration as how long the interval lasts.",
        "Compare two dated durations from the same place and state the result narrowly. A later sunrise alone does not determine the full interval without sunset information.",
        "Discuss a cloudy-day picture beside the record. Explain that cloud cover and visible sunshine are different information from the sunrise-to-sunset duration.",
        "Use the clock-time and duration checks and label a new adult-prepared card. Record source interpretation and time vocabulary separately from independent arithmetic."
      ]
    },
    {
      "materials": "Large counters, plant narrative text, several adult-selected dated daylight records and paper for a revised explanation.",
      "math": [
        "Open Compare and combine groups and decide whether the story asks for a total or a difference. Point to the quantities and say what each represents.",
        "Build a put-together story with two groups and count the combined whole. Explain why joining parts answers this question instead of finding an extra amount.",
        "Build a comparison story by matching two groups one to one. Count the unmatched part and explain how it differs from the total of both groups.",
        "Use the same two quantities for a total question and a difference question. Compare the resulting models so operation choice follows the question meaning.",
        "Use Compare and combine groups review and invent a matching story for a new model. Record operation reasoning and evidence of understanding beyond the final number."
      ],
      "reading": [
        "Open Revise an unclear sentence and prepare pot, soil, seed and wet. Read the short plant narrative and identify which use of it could confuse a reader.",
        "Try replacing the unclear pronoun with the pot, then reread the sentence. Explain how the change clarifies the same event without inventing a new action.",
        "Compare the original and revised versions side by side. Point to what became clearer and check that the original sequence and meaning were preserved.",
        "Ask a partner to explain what the revised sentence refers to. If it remains unclear, use a more precise noun with adult spelling help identified.",
        "Use Revise an unclear sentence review and revise one dictated sentence of your own. Record the child\u2019s wording choice separately from typing or handwriting assistance."
      ],
      "writing": [
        "Write a cautious statement comparing the adult-selected daylight records. Include the place and dates so the claim clearly matches the evidence being used.",
        "Add a sentence identifying a pattern visible in the selected records, if one is supported. Use these records rather than a claim about every day or every location.",
        "Identify an unclear it, they or time word in the explanation and revise it. Make the source or date explicit without adding evidence the record does not contain.",
        "Ask a partner to find a record supporting each comparison sentence. Remove or qualify a claim that goes beyond the displayed dates.",
        "Present the revised explanation with a question for more observations. Check one familiar spelling while preserving uncertainty where evidence is limited."
      ],
      "inquiry": [
        "Open Check a daylight claim with a grown-up using multiple reliable records for one place. Sources should include dates and comparable duration information.",
        "Order the records and inspect whether the proposed comparison matches their numbers. Keep an unexpected result in the record rather than hiding it.",
        "Compare a narrow statement about the selected dates with an overbroad statement about all places. Explain why the wider claim needs much more evidence.",
        "Discuss how extra records from other times could test a tentative pattern. Do not claim that a few dates establish the cause of seasonal changes.",
        "Use the daylight-claim checks and write one supported statement plus one limitation. Record reasoning from evidence separately from the ability to read large numbers."
      ]
    },
    {
      "materials": "Large counters within ten, regular-word text, safe paper bridge materials, a large light test block and drawing tools.",
      "math": [
        "Open Explain facts within ten and model an addition using known parts. Explain counting on, making a familiar group or another strategy without a timer.",
        "Use a subtraction within ten and check with the related addition. Point to the whole and parts so a remembered answer stays connected to meaning.",
        "Compare two strategies for the same fact and discuss which is helpful to the child. Different valid methods need not produce the same explanation.",
        "Revisit a fact that needed support with a new object arrangement. Record accuracy and strategy choice; quickness alone does not establish secure fact knowledge.",
        "Use Explain facts within ten review and choose a small set for spaced practice. Keep fluency as an ongoing goal requiring varied observation beyond this lesson."
      ],
      "reading": [
        "Open Try new regular words and prepare boat, float, flag and box. Review the vowel team and initial consonant groups before trying the supported text.",
        "Blend each word from its printed parts, retaining the l in float and flag. Ask for an adult model when needed rather than guessing from a topic picture.",
        "Read the box-boat selection for meaning and identify a detail that the text actually states. Keep decoding support separate from answering a comprehension question.",
        "With a grown-up, try a different suitable regular word whose pattern has been taught. Record whether it was genuinely new or already practiced before describing transfer.",
        "Use Try new regular words review and reread the text after a break. Mark prepared-word success separately from the independent attempt at an unfamiliar word."
      ],
      "writing": [
        "Draw a map of the paper-bridge test with its supports, gap and test position. Label enough information for another person to understand the layout safely.",
        "Write a sentence predicting how the first bridge model will work and another recording the actual trial. Keep predictions and observations visibly separate.",
        "Add a sentence explaining one design revision and the evidence behind it. Identify the changed feature without claiming every possible influence was controlled perfectly.",
        "Arrange original design, test, revision and retest records as a short timeline. Connect this sequence to a fictional community improving a small shared crossing.",
        "Present the revised investigation explanation with a map and timeline. State that the paper model is a classroom investigation, not evidence that a real bridge is safe."
      ],
      "inquiry": [
        "Open Improve a paper bridge model with a grown-up. Use stable low supports, safe paper and one large light test block over a tray; never stand on a model or use heavy loads.",
        "Agree on a simple goal such as supporting the same light block across a fixed small gap. Record the first paper design and test it with adult supervision.",
        "Change one feature such as a fold while keeping the gap and test block the same. Retest and record the result even if the revision does not improve performance.",
        "Compare the trial records and explain what they support about this model. A short test cannot show long-term reliability or the safety of a full-sized bridge.",
        "Use the model-improvement checks and propose a careful next trial. Record design reasoning, evidence and limitations separately from the adult\u2019s construction help."
      ]
    }
  ]
];
const inquiry=[
  {
    "id": "k1-inquiry-0-30",
    "grade": 0,
    "week": 30,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Try a safe reuse idea",
    "objective": "Compare possible uses for clean paper and evaluate one small trial.",
    "teach": "With a grown-up, choose a clean safe paper scrap and a purpose such as making a label or drawing card. Leave sharp, dirty or unknown waste to an adult. Predict whether the idea will meet the purpose, try it and record what actually happens. Discuss an accessible shared reuse tray. One successful use does not show that every material can be reused in the same way.",
    "activity": "Draw the proposed use and trial result, then revise one instruction or label from the evidence.",
    "questions": [
      {
        "question": "What should be chosen for the trial?",
        "options": [
          "Clean paper approved by an adult",
          "Unknown waste",
          "Sharp packaging"
        ],
        "answer": 0,
        "explanation": "Use only clean safe materials selected by a grown-up; this activity is not a general waste-handling task."
      },
      {
        "question": "A trial result differs from the prediction. What should be recorded?",
        "options": [
          "Only the prediction",
          "The actual result",
          "A result that sounds better"
        ],
        "answer": 1,
        "explanation": "The actual outcome provides evidence for improving the idea, including when the prediction was wrong."
      },
      {
        "question": "One paper scrap makes a useful label. What does that show?",
        "options": [
          "All materials can become labels",
          "All waste is solved",
          "This paper worked for this purpose in the trial"
        ],
        "answer": 2,
        "explanation": "A small trial supports a limited conclusion about the tested material and purpose, not every kind of waste."
      }
    ],
    "question": "What should be chosen for the trial?",
    "options": [
      "Clean paper approved by an adult",
      "Unknown waste",
      "Sharp packaging"
    ],
    "answer": 0,
    "explanation": "Use only clean safe materials selected by a grown-up; this activity is not a general waste-handling task.",
    "minutes": 12,
    "order": 1900,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-30",
    "grade": 1,
    "week": 30,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Organize dated daylight evidence",
    "objective": "Order and compare dated daylight records from a common place.",
    "teach": "Use reliable adult-selected records with dates, the same place and daylight durations. If only sunrise and sunset clock times are supplied, a grown-up calculates the interval. Never look at the sun directly. Put the records in date order, compare stated durations and check copied labels. Three records support a limited comparison and do not establish the pattern for every day or place.",
    "activity": "Create a dated record page with one supported comparison and a question needing additional evidence.",
    "questions": [
      {
        "question": "Which information helps compare daylight records?",
        "options": [
          "Favorite colors",
          "A common place, dates and durations",
          "Only cloud pictures"
        ],
        "answer": 1,
        "explanation": "Place, dates and comparable durations identify the evidence being compared and reduce context confusion."
      },
      {
        "question": "A record lacks a date. What should we do?",
        "options": [
          "Invent one",
          "Ignore all dates",
          "Seek clarification before using it in date order"
        ],
        "answer": 2,
        "explanation": "A missing date limits a timeline comparison. Clarify it rather than inventing information."
      },
      {
        "question": "What do three selected records support?",
        "options": [
          "A comparison of those records",
          "Every place on Earth",
          "Every day of every season"
        ],
        "answer": 0,
        "explanation": "Selected records can support a specific comparison, but broader claims need more evidence."
      }
    ],
    "question": "Which information helps compare daylight records?",
    "options": [
      "Favorite colors",
      "A common place, dates and durations",
      "Only cloud pictures"
    ],
    "answer": 1,
    "explanation": "Place, dates and comparable durations identify the evidence being compared and reduce context confusion.",
    "minutes": 12,
    "order": 1901,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-31",
    "grade": 0,
    "week": 31,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Share cleanup roles fairly",
    "objective": "Explain turn-taking and accessible roles in a fictional shared task.",
    "teach": "Use fictional characters and safe cleanup role cards with a grown-up. Match jobs to work that needs doing and agree on a turn-taking process before assigning a popular role. Include useful adapted or seated roles; equal respect does not require identical actions. Do not ask children to disclose private needs. Test the rule in a pretend situation and revise it when a concern becomes clear.",
    "activity": "Draw the role plan and explain one way it supports fair participation and safe access.",
    "questions": [
      {
        "question": "Two characters want the same role. What helps?",
        "options": [
          "Use an agreed turn-taking rule",
          "Always pick the loudest",
          "Change rules for a favorite"
        ],
        "answer": 0,
        "explanation": "An agreed process makes the decision predictable and avoids favoring a character after seeing the choices."
      },
      {
        "question": "A character cannot carry materials. What can the plan offer?",
        "options": [
          "No role",
          "A useful adapted task",
          "Only heavy jobs"
        ],
        "answer": 1,
        "explanation": "A useful adapted role can support participation without requiring everyone to carry or move in the same way."
      },
      {
        "question": "Must a child share private information to discuss fairness?",
        "options": [
          "Yes, always",
          "Only when asked twice",
          "No, use fictional examples"
        ],
        "answer": 2,
        "explanation": "Fictional examples allow discussion of access and fair rules without requesting private disclosures."
      }
    ],
    "question": "Two characters want the same role. What helps?",
    "options": [
      "Use an agreed turn-taking rule",
      "Always pick the loudest",
      "Change rules for a favorite"
    ],
    "answer": 0,
    "explanation": "An agreed process makes the decision predictable and avoids favoring a character after seeing the choices.",
    "minutes": 12,
    "order": 1902,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-31",
    "grade": 1,
    "week": 31,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Clock times and daylight duration",
    "objective": "Distinguish when an event occurs from how long a daylight interval lasts.",
    "teach": "Inspect adult-selected reliable sunrise/sunset and duration records. A clock time says when an event occurs; duration says how long the interval lasts. A grown-up supplies calculations outside current skills. Never look directly at the sun. Compare dated durations from one place; a later sunrise alone does not give the entire interval without sunset information. Cloud cover and visible sunshine are separate observations.",
    "activity": "Label a dated card with clock times and a supplied duration, then explain the distinction orally.",
    "questions": [
      {
        "question": "What does a sunrise clock time describe?",
        "options": [
          "How long daylight lasts",
          "When sunrise occurs",
          "The number of clouds"
        ],
        "answer": 1,
        "explanation": "A clock time locates an event in the day; it is not itself the length of the daylight interval."
      },
      {
        "question": "What is needed to know the sunrise-to-sunset interval?",
        "options": [
          "Only cloud color",
          "Only a sunrise time",
          "Both event times or a reliable supplied duration"
        ],
        "answer": 2,
        "explanation": "The interval depends on both endpoints, or can be taken from a reliable duration record."
      },
      {
        "question": "Does a cloudy picture alone tell the length of daylight?",
        "options": [
          "No",
          "Yes, always short",
          "Yes, always long"
        ],
        "answer": 0,
        "explanation": "Clouds affect visible sunshine but do not by themselves state the sunrise-to-sunset duration."
      }
    ],
    "question": "What does a sunrise clock time describe?",
    "options": [
      "How long daylight lasts",
      "When sunrise occurs",
      "The number of clouds"
    ],
    "answer": 1,
    "explanation": "A clock time locates an event in the day; it is not itself the length of the daylight interval.",
    "minutes": 12,
    "order": 1903,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-32",
    "grade": 0,
    "week": 32,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Improve a shared-space plan",
    "objective": "Revise a fictional arrangement using a stated purpose and trial evidence.",
    "teach": "Use drawings or a safe model of a fictional shared space. Agree on a purpose such as keeping a route clear and materials reachable. Try the original arrangement with pretend characters and record a specific difficulty. Change one feature and repeat a similar task. Compare the evidence, including unsuccessful changes. A model result does not prove the plan fits every real place or access need.",
    "activity": "Make a before-and-after mini-book connecting one revision to an observed problem.",
    "questions": [
      {
        "question": "What should guide the first trial?",
        "options": [
          "A clear purpose",
          "Only decoration",
          "A secret goal"
        ],
        "answer": 0,
        "explanation": "A stated purpose lets people judge whether the arrangement helps the intended task."
      },
      {
        "question": "Why change one feature for the second trial?",
        "options": [
          "To guarantee success",
          "To focus the comparison",
          "To hide the first result"
        ],
        "answer": 1,
        "explanation": "Keeping other features similar helps focus attention on the chosen change rather than many changes at once."
      },
      {
        "question": "The revision still blocks the pretend route. What next?",
        "options": [
          "Claim it worked",
          "Delete the evidence",
          "Record the difficulty and revise again"
        ],
        "answer": 2,
        "explanation": "An unsuccessful revision is evidence for another improvement, not a result to conceal."
      }
    ],
    "question": "What should guide the first trial?",
    "options": [
      "A clear purpose",
      "Only decoration",
      "A secret goal"
    ],
    "answer": 0,
    "explanation": "A stated purpose lets people judge whether the arrangement helps the intended task.",
    "minutes": 12,
    "order": 1904,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-32",
    "grade": 1,
    "week": 32,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Check a daylight claim",
    "objective": "Judge whether a claim stays within dated evidence and state its limits.",
    "teach": "Use several reliable adult-selected daylight records for one place. Order them, inspect comparable durations and keep unexpected results. Compare a narrow statement about these dates with a broad claim about all places. Additional dates are needed to test a tentative pattern; a few records do not establish the cause of seasonal changes. No direct sun observation is required or appropriate.",
    "activity": "Write one supported comparison and one limitation, citing the dates or records used.",
    "questions": [
      {
        "question": "A record differs from the expected pattern. What should happen?",
        "options": [
          "Hide it",
          "Keep it and check the evidence",
          "Change its number"
        ],
        "answer": 1,
        "explanation": "Unexpected evidence should be preserved and checked rather than altered to match an expectation."
      },
      {
        "question": "Which claim fits a small set of records best?",
        "options": [
          "Every place is the same",
          "This proves all seasons",
          "These selected dates show this comparison"
        ],
        "answer": 2,
        "explanation": "A statement limited to the supplied dates matches the evidence more closely than a universal claim."
      },
      {
        "question": "What helps test a tentative pattern further?",
        "options": [
          "More comparable dated records",
          "Only a favorite picture",
          "Removing difficult dates"
        ],
        "answer": 0,
        "explanation": "Additional comparable evidence can test a tentative pattern and reveal its limits."
      }
    ],
    "question": "A record differs from the expected pattern. What should happen?",
    "options": [
      "Hide it",
      "Keep it and check the evidence",
      "Change its number"
    ],
    "answer": 1,
    "explanation": "Unexpected evidence should be preserved and checked rather than altered to match an expectation.",
    "minutes": 12,
    "order": 1905,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-33",
    "grade": 0,
    "week": 33,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Plan a small paper investigation",
    "objective": "Separate a prediction from an observation in a safe comparison with similar conditions.",
    "teach": "With a grown-up, compare two safe paper samples on a tray using a few adult-controlled drops of water. Keep away from electrical items and protect surfaces. Use similar sample sizes, water amounts and observation intervals. Predict before the test and describe visible spreading or remaining water afterward. Do not taste materials or claim precise measurements from an informal view. Repeating can help check a first impression.",
    "activity": "Draw a setup map and put prediction, test and result records in sequence, with one proposed repeat.",
    "questions": [
      {
        "question": "When should the prediction be recorded?",
        "options": [
          "Before the test",
          "Only after seeing the result",
          "Never"
        ],
        "answer": 0,
        "explanation": "A prediction is an idea about what may happen, recorded before the result is observed."
      },
      {
        "question": "What helps compare the two paper samples?",
        "options": [
          "Different amounts without a record",
          "Similar water amounts and observation intervals",
          "Changing everything at once"
        ],
        "answer": 1,
        "explanation": "Similar conditions help focus the comparison on the samples rather than unrelated differences in the trial."
      },
      {
        "question": "Does one informal trial prove how every paper behaves?",
        "options": [
          "Yes",
          "Only if the drawing is neat",
          "No, its conclusion is limited"
        ],
        "answer": 2,
        "explanation": "A small informal trial concerns the tested samples and conditions; other papers and repeated trials may differ."
      }
    ],
    "question": "When should the prediction be recorded?",
    "options": [
      "Before the test",
      "Only after seeing the result",
      "Never"
    ],
    "answer": 0,
    "explanation": "A prediction is an idea about what may happen, recorded before the result is observed.",
    "minutes": 12,
    "order": 1906,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-33",
    "grade": 1,
    "week": 33,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Improve a paper bridge model",
    "objective": "Explain a design revision using comparable model trials and stated limitations.",
    "teach": "Use safe paper, stable low supports over a tray and one large light test block with a grown-up. Never stand on a model or use heavy loads. Agree on a fixed gap and purpose, test the original model, then change one feature such as a fold. Keep the gap and block the same for the retest. Record failures as well as successes. A brief paper-model test cannot establish long-term reliability or real-bridge safety.",
    "activity": "Create a setup map and design-test-revision timeline, explaining one supported improvement and one limitation.",
    "questions": [
      {
        "question": "What should stay the same when comparing one fold change?",
        "options": [
          "Nothing",
          "The gap and test block",
          "Only the paper color"
        ],
        "answer": 1,
        "explanation": "Keeping the gap and block alike helps compare the fold change under similar loading conditions."
      },
      {
        "question": "A folded model fails the test. What should be recorded?",
        "options": [
          "Only the hoped-for success",
          "Nothing",
          "The actual failure and conditions"
        ],
        "answer": 2,
        "explanation": "A failed trial is useful evidence for revising the model and describing its limitations."
      },
      {
        "question": "What does a successful paper-model test establish?",
        "options": [
          "Only a result for that model and trial",
          "That a real bridge is safe",
          "That it will last forever"
        ],
        "answer": 0,
        "explanation": "A classroom model result is limited; it does not certify a full-sized structure or long-term performance."
      }
    ],
    "question": "What should stay the same when comparing one fold change?",
    "options": [
      "Nothing",
      "The gap and test block",
      "Only the paper color"
    ],
    "answer": 1,
    "explanation": "Keeping the gap and block alike helps compare the fold change under similar loading conditions.",
    "minutes": 12,
    "order": 1907,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  }
];
if(root.WonderOpeningMonth)for(let grade=0;grade<2;grade++)root.WonderOpeningMonth.units[grade].push(...units[grade]);
root.WonderCurriculum.lessons.push(...inquiry);
for(const l of inquiry)Object.assign(root.WonderK1Year.weeks[l.grade][l.week-1],{inquiryLesson:l.id,status:'starter-activities'});
root.WonderBatch3033Plans={units,inquiry};
})(globalThis);
