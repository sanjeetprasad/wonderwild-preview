(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Little words help us read",
    "objective": "Read the common words the, is, to and we in prepared sentences, noticing their spellings.",
    "standard": "RF.K.3c; RF.K.4",
    "prerequisite": "Review consonant sounds and short vowels in map, mat and sit. A grown-up prepares the four common words aloud before asking for independent reading.",
    "words": [
      "the",
      "is",
      "to",
      "we"
    ],
    "parts": [
      "th \u00b7 e",
      "i \u00b7 s",
      "t \u00b7 o",
      "w \u00b7 e"
    ],
    "pattern": "A grown-up says each word naturally and the child repeats it: the, is, to, we. Point to each spelling while connecting it to the spoken word. In is, s represents the z sound. In we, e represents long e. In to, o represents the oo sound. In the, th is voiced and the vowel often sounds like uh in a sentence. Model these words rather than expecting ordinary short-vowel blending to work for all of them. Build the spellings, read them in a mixed order, then find them in the sentences. Do not guess a word only from its position or a picture. Return to any uncertain word together.",
    "connected": {
      "title": "We sit by the mat",
      "sentences": [
        "The map is on the mat.",
        "We go to the mat.",
        "We sit by the map."
      ],
      "newWords": [
        "map",
        "mat",
        "on",
        "sit"
      ],
      "helperWords": [
        "go",
        "by"
      ],
      "note": "Prepare map, mat, on and sit by blending familiar sounds. Model go and by before reading. A capital T or W does not change the word. Ask where the map is, and show the sentence as evidence. A grown-up listens to the word reading; successful tile building alone is not independent reading."
    },
    "checks": [
      [
        "Which practice word has s representing the z sound?",
        [
          "to",
          "is",
          "we"
        ],
        1,
        "In is, the final letter s represents the z sound. Listen to the whole word as a grown-up models it."
      ],
      [
        "Where is the map in the passage?",
        [
          "On the mat",
          "In a bag",
          "On a boat"
        ],
        0,
        "The first sentence says the map is on the mat. Point to those words to check the answer."
      ],
      [
        "Which word completes: We go __ the mat?",
        [
          "is",
          "we",
          "to"
        ],
        2,
        "To completes the sentence about going to the mat. Read the complete sentence again."
      ],
      [
        "What should we do with a word we do not know yet?",
        [
          "Guess from its place",
          "Ask for a model and look at its spelling",
          "Skip every little word"
        ],
        1,
        "Look closely at the spelling and ask for help when needed. Little words carry meaning too."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Check the word, read again",
    "objective": "Use printed spellings to correct a misread word, then reread and check sentence meaning.",
    "standard": "RF.1.3b; RF.1.4c",
    "prerequisite": "Review short a and i and the long-vowel spellings ai and oa in rain and boat. Prepare the passage helper words with a grown-up before independent attempts.",
    "words": [
      "rain",
      "ran",
      "boat",
      "bit"
    ],
    "parts": [
      "r \u00b7 ai \u00b7 n",
      "r \u00b7 a \u00b7 n",
      "b \u00b7 oa \u00b7 t",
      "b \u00b7 i \u00b7 t"
    ],
    "pattern": "Read each practice word while tracking its spellings. Compare rain with ran: ai represents long a, while a in ran represents short a. Compare boat with bit: inspect the middle spelling, not just the first and last letters. During the passage, a grown-up can model accidentally saying ran for rain, then stopping: I see ai, so this word is rain. Blend or use a known spelling pattern, say the corrected word, and reread the whole sentence. Ask whether the sentence makes sense after checking the print. Meaning is a signal to check, not a replacement for looking at letters. If a spelling is unfamiliar, ask for a model. Record self-correction separately from adult prompting.",
    "connected": {
      "title": "A boat in the rain",
      "sentences": [
        "Pip ran to the boat.",
        "Rain fell on the boat.",
        "Pip sat in the boat."
      ],
      "newWords": [
        "Pip",
        "fell",
        "sat"
      ],
      "helperWords": [
        "to",
        "the",
        "on",
        "in"
      ],
      "note": "Prepare Pip as a name and blend fell and sat; explain that double l in fell represents one l sound. Model to and the and review on and in. Read for accuracy first, then reread the sentence naturally. The text does not say whether Pip stayed dry. Do not invent an answer from an imagined picture."
    },
    "checks": [
      [
        "You said ran, but the printed word is rain. What helps you fix it?",
        [
          "Look at ai and reread rain",
          "Keep the first guess",
          "Change the printed word"
        ],
        0,
        "The ai spelling represents long a in rain. Check the letters, correct the word, and reread the sentence."
      ],
      [
        "What fell on the boat?",
        [
          "Snow",
          "A bag",
          "Rain"
        ],
        2,
        "The second sentence says rain fell on the boat. Read that sentence again to check."
      ],
      [
        "After correcting a word, what should you do next?",
        [
          "Stop reading for the day",
          "Reread the sentence and check its meaning",
          "Ignore the rest of the sentence"
        ],
        1,
        "Rereading puts the corrected word back into the sentence so you can check the meaning."
      ],
      [
        "Does the passage tell us that Pip stayed dry?",
        [
          "Yes, it says dry",
          "No, that information is not stated",
          "Yes, every boat has a roof"
        ],
        1,
        "The passage tells where Pip sat but does not say he stayed dry or describe a roof."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-19`,week:19,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1030+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Listen for exact words, pause for spelling checks, and note self-corrections separately from adult prompts. Browser recognition cannot certify pronunciation or fluent reading.':'Model each common word, inspect the spelling, mix the word order, and read the prepared sentences. Record prompted reading separately from independent recognition.'};});
const reviewRows=[
  [
    [
      "Which word completes: __ sit by the map?",
      [
        "To",
        "Is",
        "We"
      ],
      2,
      "We names who sits. Read We sit by the map as a complete sentence."
    ],
    [
      "Does a capital W change we into a different word?",
      [
        "No, it is still we",
        "Yes, it becomes to",
        "Only at the start"
      ],
      0,
      "We and we are the same word. A capital often begins a sentence."
    ],
    [
      "An adult supplies the word to. How should that attempt be noted?",
      [
        "Independent reading",
        "Supported practice",
        "A completed reading level"
      ],
      1,
      "The adult gave help, so this attempt is supported practice. Try again later without the model."
    ]
  ],
  [
    [
      "Which middle spelling distinguishes boat from bit?",
      [
        "The final t",
        "The first b",
        "oa instead of i"
      ],
      2,
      "Boat has oa for long o; bit has i for short i. Checking the middle prevents a first-letter guess."
    ],
    [
      "The sentence sounds odd. What is a good first response?",
      [
        "Check the printed word and its spellings",
        "Invent a different sentence",
        "Use only a picture"
      ],
      0,
      "Meaning can alert you to a mistake. Look back at the letters to decide what the word actually says."
    ],
    [
      "An adult tells you the correct word. Is that an independent self-correction?",
      [
        "Yes, always",
        "No, it was prompted",
        "Only if you read fast"
      ],
      1,
      "An adult supplied the correction. Record the prompt separately from a correction the learner makes independently."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-19`,grade,week:19,subject:'reading',kind:'inquiry',title:grade?'Check and correct review':'Common words review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1040+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][18].readingLesson=l.id;
root.WonderWeekNineteenReading={lessons,reviews};
})(globalThis);
