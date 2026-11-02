(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Ask about a useful object",
    "objective": "Ask and answer questions about details in a short supported information text.",
    "standard": "RI.K.1; RF.K.4",
    "prerequisite": "Review short vowels and consonants in box, lid, cup and gap. Model x as the two sounds k and s in box, and prepare the passage helper words with an adult.",
    "words": [
      "box",
      "lid",
      "cup",
      "gap"
    ],
    "parts": [
      "b \u00b7 o \u00b7 x",
      "l \u00b7 i \u00b7 d",
      "c \u00b7 u \u00b7 p",
      "g \u00b7 a \u00b7 p"
    ],
    "pattern": "Prepare the words with a grown-up and look at a safe empty box. Read the information text to learn what boxes and lids can do. Ask what a box can hold and what can cover it. Point to the sentence supporting each answer. Make one new question together and check whether the text answers it. The text says can, not that every box holds a cup. Tiles represent spelling pieces; x in box represents two speech sounds. Use adult listening for oral sound work.",
    "connected": {
      "title": "About boxes",
      "sentences": [
        "A box can hold a cup.",
        "A lid can cover a box.",
        "Some boxes have no lid."
      ],
      "newWords": [
        "hold",
        "cover",
        "boxes"
      ],
      "helperWords": [
        "a",
        "can",
        "some",
        "have",
        "no"
      ],
      "note": "Blend can and model hold, cover and boxes before reading. Prepare some, have, no and a with adult support. Explain that this text gives information about objects rather than events involving a named character. Use only safe empty boxes; do not climb inside or use containers with hazardous contents."
    },
    "checks": [
      [
        "What can a box hold according to the text?",
        [
          "A cup",
          "Only water",
          "Nothing"
        ],
        0,
        "The first sentence says a box can hold a cup. It does not say every box holds one."
      ],
      [
        "What can cover a box?",
        [
          "A gap",
          "A lid",
          "A character"
        ],
        1,
        "The second sentence says a lid can cover a box. Point to the sentence to check."
      ],
      [
        "Does every box have a lid according to the text?",
        [
          "Yes, always",
          "Only red boxes",
          "No, some boxes have no lid"
        ],
        2,
        "The last sentence says some boxes have no lid. Avoid turning some into all."
      ],
      [
        "Does the text tell us the color of a box?",
        [
          "Yes, red",
          "No, no color is stated",
          "Yes, blue"
        ],
        1,
        "The text gives uses and lid information, but no color. That question needs other evidence."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Compare two tiny stories",
    "objective": "Compare a shared event pattern and different details in two prepared short stories.",
    "standard": "RL.1.9; RF.1.4a",
    "prerequisite": "Review short vowels in hat and bag and supported final-e spellings in gate and lake. Prepare all additional words before reading the two tiny stories.",
    "words": [
      "hat",
      "bag",
      "gate",
      "lake"
    ],
    "parts": [
      "h \u00b7 a \u00b7 t",
      "b \u00b7 a \u00b7 g",
      "g \u00b7 a \u00b7 t \u00b7 e",
      "l \u00b7 a \u00b7 k \u00b7 e"
    ],
    "pattern": "Read the first two sentences as two separate tiny stories, not one continuing story. Prepare all unfamiliar words with a grown-up. In each, identify the character, what was lost and where it was found. Compare what is alike: both characters lose something and find it. Then explain a difference using the correct story\u2019s detail. Keep a comparison tied to the words instead of assuming the characters met or felt the same way. The third sentence summarizes a shared pattern; it is not another event in either story.",
    "connected": {
      "title": "Two lost-and-found stories",
      "sentences": [
        "Pip lost a hat, then found it by a gate.",
        "Sam lost a bag, then found it by a lake.",
        "Each lost thing was found."
      ],
      "newWords": [
        "Pip",
        "Sam",
        "lost",
        "found",
        "then",
        "it",
        "each",
        "thing"
      ],
      "helperWords": [
        "a",
        "by",
        "was"
      ],
      "note": "Prepare Pip and Sam as names. Model lost, found, then, it, each, thing and was before reading; review a and by. The first sentence is Pip\u2019s complete tiny story and the second is Sam\u2019s. The third summarizes their shared result. No meeting, time or feeling is stated. This short comparison needs later transfer to richer stories."
    },
    "checks": [
      [
        "What happens in both stories?",
        [
          "A character loses and finds something",
          "Both characters swim",
          "Both characters meet at a gate"
        ],
        0,
        "Pip and Sam each lose an item and find it. Swimming or meeting is not stated."
      ],
      [
        "What is different?",
        [
          "Both lose an item",
          "Pip loses a hat; Sam loses a bag",
          "Neither finds anything"
        ],
        1,
        "The lost items differ: a hat in Pip\u2019s story and a bag in Sam\u2019s story."
      ],
      [
        "Where is Sam\u2019s bag found?",
        [
          "By a gate",
          "Inside a box",
          "By a lake"
        ],
        2,
        "Sam\u2019s sentence places the bag by a lake. The gate belongs to Pip\u2019s story."
      ],
      [
        "Do the stories say Pip and Sam meet?",
        [
          "Yes, at the gate",
          "Yes, at the lake",
          "No, a meeting is not stated"
        ],
        2,
        "These are separate tiny stories. Their shared pattern does not establish a meeting."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-24`,week:24,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1290+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Read the two tiny stories separately, then ask for one similarity and one difference with evidence from each. Record adult help separately.':'Prepare the words, ask a detail question and invite a new question from the child. Point to evidence together and record oral questioning separately from quiz choices.'};});
const reviewRows=[
  [
    [
      "Which question does the information text answer?",
      [
        "What can cover a box?",
        "Who made the box?",
        "What color is the cup?"
      ],
      0,
      "The text says a lid can cover a box. It does not name a maker or a color."
    ],
    [
      "A child asks a new question. What can we do first?",
      [
        "Invent an answer",
        "Check whether the text gives a detail",
        "Ignore the question"
      ],
      1,
      "Look for a supporting sentence first. Some useful questions require another source or observation."
    ],
    [
      "Does can hold a cup mean every box already has a cup inside?",
      [
        "Yes, always",
        "Only at night",
        "No, it describes a possibility"
      ],
      2,
      "Can hold describes what is possible. It does not report the contents of every box."
    ]
  ],
  [
    [
      "Which comparison uses both stories accurately?",
      [
        "Both items are by a gate",
        "Pip finds a hat by a gate; Sam finds a bag by a lake",
        "Sam finds Pip\u2019s hat"
      ],
      1,
      "Each detail is linked to the correct character and place in the two separate sentences."
    ],
    [
      "Which shared result is stated?",
      [
        "Each lost thing was found",
        "Both characters were happy",
        "Both went home"
      ],
      0,
      "The final sentence states the shared result. Feelings and going home are not supplied."
    ],
    [
      "Why reread both stories when comparing?",
      [
        "To choose a favorite color",
        "To make them the same story",
        "To check similarities and keep different details with the right story"
      ],
      2,
      "A careful comparison uses evidence from both texts without mixing their separate details."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-24`,grade,week:24,subject:'reading',kind:'inquiry',title:grade?'Two stories review':'Information questions review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1300+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][23].readingLesson=l.id;
root.WonderWeekTwentyFourReading={lessons,reviews};
})(globalThis);
