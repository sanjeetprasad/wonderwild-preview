(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Tell what happened first",
    "objective": "Retell three stated events in order with prompting and support.",
    "standard": "RL.K.2; RF.K.4",
    "prerequisite": "Review short vowels and consonants in bag, red, mat and ran. Prepare all passage helper words and meanings with a grown-up before supported reading.",
    "words": [
      "bag",
      "red",
      "mat",
      "ran"
    ],
    "parts": [
      "b \u00b7 a \u00b7 g",
      "r \u00b7 e \u00b7 d",
      "m \u00b7 a \u00b7 t",
      "r \u00b7 a \u00b7 n"
    ],
    "pattern": "Prepare the four words, then read the short passage with a grown-up. Use three blank cards to draw what happened first, next and last. Point back to the sentences to check the order. Tell the events in your own words; you do not need to memorize every word. Keep an event separate from a description such as red. If you forget, reread or ask for a model and record that help. Retelling orally is observed by an adult, not proved by arranging spelling tiles.",
    "connected": {
      "title": "The red bag",
      "sentences": [
        "Pip ran to the red bag.",
        "Pip put the bag on a mat.",
        "Pip sat by the bag."
      ],
      "newWords": [
        "Pip",
        "put",
        "sat"
      ],
      "helperWords": [
        "to",
        "the",
        "on",
        "a",
        "by"
      ],
      "note": "Prepare Pip as a name, model put, blend sat and model the helper words. Explain first, next and last using the sentence order. Red describes the bag; running, putting and sitting are events. The text does not say what is inside the bag."
    },
    "checks": [
      [
        "What happens first?",
        [
          "Pip runs to the bag",
          "Pip sits by the bag",
          "Pip puts the bag on the mat"
        ],
        0,
        "The first sentence says Pip ran to the red bag. Check the passage before retelling."
      ],
      [
        "What happens after Pip runs to the bag?",
        [
          "Pip sleeps",
          "Pip puts the bag on a mat",
          "The bag flies away"
        ],
        1,
        "The second sentence says Pip put the bag on a mat. That event comes next."
      ],
      [
        "Which event is last?",
        [
          "Pip runs",
          "Pip opens the bag",
          "Pip sits by the bag"
        ],
        2,
        "The last sentence says Pip sat by the bag. Opening it is not stated."
      ],
      [
        "Does a retelling need the exact same words?",
        [
          "Yes, every word",
          "No, keep the events and order accurate",
          "No, invent any ending"
        ],
        1,
        "You can use your own words while keeping the stated events and their order accurate."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Retell the important events",
    "objective": "Retell the main events of a short story in order using accurate details.",
    "standard": "RL.1.2; RF.1.4a",
    "prerequisite": "Review short vowels, sh and consonant groups in spill, cloth, shelf and clean. Model ea in clean and prepare the passage words before independent reading.",
    "words": [
      "spill",
      "cloth",
      "shelf",
      "clean"
    ],
    "parts": [
      "s \u00b7 p \u00b7 i \u00b7 ll",
      "c \u00b7 l \u00b7 o \u00b7 th",
      "sh \u00b7 e \u00b7 l \u00b7 f",
      "c \u00b7 l \u00b7 ea \u00b7 n"
    ],
    "pattern": "Prepare the word list with a grown-up, including the long e spelling ea in clean. Read to find the problem, the action and the result. Retell these events using first, next and finally, keeping their order and stated details. Explain how the action addresses the problem without claiming more than the text says. Compare a full retelling with a single detail: both may be true, but one detail does not tell the whole sequence. Reread to check an uncertain event, and distinguish a possible lesson from an explicit statement.",
    "connected": {
      "title": "A spill on the shelf",
      "sentences": [
        "Pip spilled water on a shelf.",
        "Pip wiped the shelf with a cloth.",
        "The shelf was clean."
      ],
      "newWords": [
        "Pip",
        "spilled",
        "water",
        "wiped",
        "with"
      ],
      "helperWords": [
        "on",
        "a",
        "the",
        "was"
      ],
      "note": "Prepare Pip as a name; model water, spilled and wiped, linking the past endings to spill and wipe with adult help. Model with, the, a and was and review on. Discuss a spill as a problem and wiping as the response. The text says clean, not completely dry or safe to touch. Use the passage for reading, not as instructions to clean real spills without an adult."
    },
    "checks": [
      [
        "What problem begins the story?",
        [
          "A lost book",
          "Water spilled on a shelf",
          "A broken window"
        ],
        1,
        "The first sentence says Pip spilled water on a shelf. That is the stated problem."
      ],
      [
        "What action follows?",
        [
          "Pip wipes the shelf with a cloth",
          "Pip paints the shelf",
          "Pip leaves the room"
        ],
        0,
        "The second sentence describes wiping with a cloth. The other actions are not stated."
      ],
      [
        "Which retelling preserves the order?",
        [
          "Clean, wipe, spill",
          "Wipe, spill, clean",
          "Spill, wipe, clean"
        ],
        2,
        "The passage begins with a spill, then wiping, and ends with the shelf being clean."
      ],
      [
        "Does the passage say the shelf is completely dry?",
        [
          "Yes, dry is printed",
          "Yes, clean always means dry",
          "No, it only says clean"
        ],
        2,
        "Clean and dry are different details. The passage does not state that the shelf is completely dry."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-23`,week:23,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1240+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Listen for the problem, response and result in order. Ask for a supporting detail and record adult prompts separately from independent retelling.':'Use three drawings and reread as needed, then listen to a retelling in the child’s own words. Record order, details and adult support separately from spelling practice.'};});
const reviewRows=[
  [
    [
      "Which word describes the bag rather than naming an event?",
      [
        "red",
        "ran",
        "sat"
      ],
      0,
      "Red describes what the bag looks like. Ran and sat tell actions in the passage."
    ],
    [
      "What can help when the event order is uncertain?",
      [
        "Make up a new order",
        "Reread and match each drawing to a sentence",
        "Skip the middle event"
      ],
      1,
      "Checking the sentences helps keep the retelling connected to the text and its order."
    ],
    [
      "What is inside the bag?",
      [
        "A book for sure",
        "A cat for sure",
        "The passage does not tell us"
      ],
      2,
      "The passage names the bag but does not describe its contents. Do not invent them as a text detail."
    ]
  ],
  [
    [
      "Which retelling includes the problem, action and result?",
      [
        "There was a cloth",
        "Pip spilled water, wiped the shelf, and the shelf was clean",
        "The shelf was a shelf"
      ],
      1,
      "This retelling includes the three central events in the order given, rather than only one detail."
    ],
    [
      "Which detail tells how Pip wiped?",
      [
        "With a cloth",
        "With a book",
        "With a flag"
      ],
      0,
      "The passage states that Pip used a cloth. Include accurate details when they help explain an event."
    ],
    [
      "Could we discuss taking responsibility as a possible lesson?",
      [
        "No story can suggest a lesson",
        "Yes, the exact phrase is printed",
        "Yes, as an idea supported by the cleanup, not a direct quote"
      ],
      2,
      "Taking responsibility is a possible interpretation of cleaning the spill. Explain the evidence rather than claiming the phrase appears in the passage."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-23`,grade,week:23,subject:'reading',kind:'inquiry',title:grade?'Important events review':'First next last review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1250+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][22].readingLesson=l.id;
root.WonderWeekTwentyThreeReading={lessons,reviews};
})(globalThis);
