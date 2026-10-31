(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Listen to short and long vowels",
    "objective": "Compare short and long a and i in prepared word pairs with adult modeling.",
    "standard": "RF.K.3b",
    "prerequisite": "Review short a in cap and short i in pin. An adult introduces cape and pine and models their long vowels; independent mastery of final-e spellings is not assumed.",
    "words": [
      "cap",
      "cape",
      "pin",
      "pine"
    ],
    "parts": [
      "c \u00b7 a \u00b7 p",
      "c \u00b7 a \u00b7 p \u00b7 e",
      "p \u00b7 i \u00b7 n",
      "p \u00b7 i \u00b7 n \u00b7 e"
    ],
    "pattern": "Say cap and cape after a grown-up. Listen to the middle vowel: cape has long a, which sounds like the letter name A. Repeat with pin and pine: pine has long i, like the letter name I. Look at all the letters. In these pairs, final e is not a separate spoken sound; it helps mark the earlier vowel as long. These tiles show spelling pieces, not one tile per speech sound. This pattern does not apply to every word ending in e. Begin with listening and adult models before asking the child to read the longer spellings independently.",
    "connected": {
      "title": "A cap by the pine",
      "sentences": [
        "Pip has a cap.",
        "The cap is by a pine.",
        "Pip has a cape."
      ],
      "newWords": [
        "Pip",
        "has"
      ],
      "helperWords": [
        "a",
        "the",
        "is",
        "by"
      ],
      "note": "Prepare Pip as a name, model has and is with final z, and model a, the and by. Explain pine as a kind of tree and cape as clothing worn over the shoulders. Read the prepared sentences together. Do not pronounce the final e separately or claim that spelling tiles assess oral vowel production."
    },
    "checks": [
      [
        "Which prepared word has long a?",
        [
          "cap",
          "cape",
          "pin"
        ],
        1,
        "Cape has long a, like the letter name A. Listen to a grown-up model cap and cape."
      ],
      [
        "Which word has short i?",
        [
          "pine",
          "cape",
          "pin"
        ],
        2,
        "Pin has short i; pine has long i. Compare the modeled words before choosing."
      ],
      [
        "Where is the cap in the passage?",
        [
          "By a pine",
          "In a box",
          "On a boat"
        ],
        0,
        "The second sentence says the cap is by a pine. By means near or beside here."
      ],
      [
        "Do we say a separate e sound at the end of cape here?",
        [
          "Yes, always",
          "No",
          "Only when reading fast"
        ],
        1,
        "The final e is not a separate spoken sound in cape. The spelling helps mark long a."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Ask a question, find a detail",
    "objective": "Ask and answer who, what and where questions using details in a prepared passage.",
    "standard": "RL.1.1; RF.1.4a",
    "prerequisite": "Review sh and short vowels in shop and shut and the consonant groups in flag and step. Prepare every new and helper word before reading the passage independently.",
    "words": [
      "shop",
      "shut",
      "flag",
      "step"
    ],
    "parts": [
      "sh \u00b7 o \u00b7 p",
      "sh \u00b7 u \u00b7 t",
      "f \u00b7 l \u00b7 a \u00b7 g",
      "s \u00b7 t \u00b7 e \u00b7 p"
    ],
    "pattern": "Prepare the word list, blending all the sounds without dropping a consonant. Read the passage to understand what happens. Ask a who question about a person, a what question about an object or event, and a where question about a place. Reread the sentence that helps answer. Point to the detail before explaining it in your own words. Some questions cannot be answered from this passage; say what is not stated instead of inventing a reason. With a grown-up, create one new question and check whether the words provide an answer.",
    "connected": {
      "title": "The flag at the shop",
      "sentences": [
        "Pip put a flag by the shop.",
        "The shop was shut.",
        "Pip sat on a step."
      ],
      "newWords": [
        "Pip",
        "put",
        "sat"
      ],
      "helperWords": [
        "a",
        "by",
        "the",
        "was",
        "on"
      ],
      "note": "Prepare Pip as a name, blend sat and model put and was. Model a, by and the and review on. Explain shut as closed and step as a stair or raised place to stand. The passage does not say why the shop was shut or who owns it. Adult question modeling is support and should be recorded separately."
    },
    "checks": [
      [
        "Who put the flag by the shop?",
        [
          "A shop owner",
          "A cat",
          "Pip"
        ],
        2,
        "The first sentence names Pip as the person who put the flag by the shop."
      ],
      [
        "Where did Pip sit?",
        [
          "On a step",
          "Inside the shop",
          "On the flag"
        ],
        0,
        "The last sentence says Pip sat on a step. Read that sentence to check the place."
      ],
      [
        "Which question can the passage answer?",
        [
          "Why was the shop shut?",
          "What did Pip put by the shop?",
          "Who owns the shop?"
        ],
        1,
        "The first sentence names a flag. The reason for closing and the owner are not stated."
      ],
      [
        "Why was the shop shut?",
        [
          "It was raining",
          "The owner was asleep",
          "The passage does not tell us"
        ],
        2,
        "The passage says the shop was shut but gives no reason. Keep possible guesses separate from text details."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-21`,week:21,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1140+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Model a who or where question, ask the child to create another, and locate evidence together. Record questioning, word accuracy and adult prompts separately.':'Model short and long vowel pairs orally before showing print. Record listening, word reading and adult support separately; tiles are spelling practice, not a pronunciation assessment.'};});
const reviewRows=[
  [
    [
      "Which pair helps compare short and long i?",
      [
        "cap and cape",
        "pin and pine",
        "cap and pin"
      ],
      1,
      "Pin and pine contrast short i and long i. Use a natural adult model to hear the difference."
    ],
    [
      "Does every word ending in e follow the cape pattern?",
      [
        "Yes, every word",
        "Only long words",
        "No, words need their own spelling checks"
      ],
      2,
      "Cape shows one useful pattern, but not every final-e word follows it. Ask for a model for unfamiliar words."
    ],
    [
      "Does the passage say Pip wears the cape?",
      [
        "No, it says Pip has it",
        "Yes, it says wears",
        "Yes, all capes are worn"
      ],
      0,
      "Having a cape does not state that it is being worn. Check the exact words in the sentence."
    ]
  ],
  [
    [
      "What does a who question usually ask about?",
      [
        "A place",
        "A person or character",
        "A time"
      ],
      1,
      "Who asks about a person or character. In this passage, Pip is the named character."
    ],
    [
      "Which words answer where the flag was put?",
      [
        "by the shop",
        "was shut",
        "Pip sat"
      ],
      0,
      "By the shop names the place where Pip put the flag. Read the complete first sentence to check."
    ],
    [
      "You ask who owns the shop. What is a careful answer?",
      [
        "Pip must own it",
        "The flag owns it",
        "The passage does not name the owner"
      ],
      2,
      "The owner is not identified in the passage. A good question may need another source to answer it."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-21`,grade,week:21,subject:'reading',kind:'inquiry',title:grade?'Questions and evidence review':'Vowel listening review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1150+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][20].readingLesson=l.id;
root.WonderWeekTwentyOneReading={lessons,reviews};
})(globalThis);
