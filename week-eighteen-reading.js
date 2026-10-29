(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Hear it, stretch it, blend it",
    "objective": "Blend and segment three-sound spoken words, then connect the sounds with familiar spellings.",
    "standard": "RF.K.2d; RF.K.3a; RF.K.3b",
    "prerequisite": "Review the consonants and short vowels in map, ten, sit and cup. Start with spoken words and counters before showing print; an adult models the sounds without extra added vowels.",
    "words": [
      "map",
      "ten",
      "sit",
      "cup"
    ],
    "parts": [
      "m · a · p",
      "t · e · n",
      "s · i · t",
      "c · u · p"
    ],
    "pattern": "First hide the print. A grown-up says map naturally, then models its three speech sounds while moving one large counter for each sound. Blend those sounds back into map. Repeat with ten, sit and cup. Then show the letters and connect the sounds with their spellings. These particular words have three sounds; not every word has one sound per letter. Keep consonants crisp without adding an extra uh. Tiles practise spelling; adult listening is needed to observe the oral task.",
    "connected": {
      "title": "A cup by the map",
      "sentences": [
        "A cup is on a mat.",
        "Pip has a map.",
        "Pip can sit by the mat."
      ],
      "newWords": [
        "on",
        "mat",
        "Pip",
        "has",
        "can"
      ],
      "helperWords": [
        "a",
        "is",
        "by",
        "the"
      ],
      "note": "Review on, mat and can and introduce Pip as a name. Model has and is with final z, and prepare a, by and the. Explain by as beside or near. Read each sentence after preparing its words. The passage says Pip has a map, but does not say the cup is on the map."
    },
    "checks": [
      [
        "How many speech sounds are in map as modeled here?",
        [
          "Three",
          "One",
          "Five"
        ],
        0,
        "Map has three speech sounds. Move one counter per sound, then blend them into the whole word."
      ],
      [
        "What should we do after separating a word into sounds?",
        [
          "Forget the word",
          "Blend the sounds back into the word",
          "Add an extra vowel after every consonant"
        ],
        1,
        "Blending reconnects the sounds into the complete word. Avoid adding extra sounds that are not in the word."
      ],
      [
        "Where is the cup in the passage?",
        [
          "On the map",
          "In a bag",
          "On a mat"
        ],
        2,
        "The first sentence places the cup on a mat. Having a map does not place the cup on it."
      ],
      [
        "Does building the tiles alone prove oral sound segmentation?",
        [
          "No; a grown-up also needs to hear the oral task",
          "Yes, it proves all reading skills",
          "Only if the tiles are colorful"
        ],
        0,
        "Tile building is spelling practice. Oral segmentation must be observed separately and can require adult support."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Read it again, make it clear",
    "objective": "Reread a prepared passage accurately, using punctuation and meaning to guide natural expression.",
    "standard": "RF.1.4a; RF.1.4b; RF.1.4c",
    "prerequisite": "Review ai and oa in wait, rain, coat and boat, and the helper words in the passage. Work out unfamiliar words before expecting a natural expressive rereading.",
    "words": [
      "wait",
      "rain",
      "coat",
      "boat"
    ],
    "parts": [
      "w · ai · t",
      "r · ai · n",
      "c · oa · t",
      "b · oa · t"
    ],
    "pattern": "Prepare the words first, pointing to every spelling and blending when needed. In these words, ai represents long a and oa represents long o. Then read the passage once for meaning and again in natural phrases. A period ends a statement; a question mark signals a question; an exclamation mark can signal emphasis. Expression should fit meaning, not require shouting or one prescribed pitch. If a word does not match the print, look back at its spellings, correct it and reread the sentence. There is no speed race or automated fluency score.",
    "connected": {
      "title": "Wait for the boat",
      "sentences": [
        "\"Wait!\" said Pip.",
        "\"Can you see the boat?\"",
        "The boat is on the sand."
      ],
      "newWords": [
        "Pip",
        "can",
        "see",
        "on",
        "sand"
      ],
      "helperWords": [
        "said",
        "you",
        "the",
        "is"
      ],
      "note": "Introduce Pip as a name, review can/on/sand keeping both final consonants in sand, and model see with ee. Revisit said, you, the and is before reading. Quotation marks enclose spoken words. First identify what happens, then reread with natural pauses; the sentence with a question mark is a question. The boat is on sand; the passage does not say it is moving or who owns it."
    },
    "checks": [
      [
        "Which sentence is a question?",
        [
          "The boat is on the sand.",
          "Can you see the boat?",
          "Wait!"
        ],
        1,
        "The question asks whether someone can see the boat. Its question mark helps guide how it is read."
      ],
      [
        "What should come before trying a smoother rereading?",
        [
          "Reading faster than everyone",
          "Ignoring unfamiliar words",
          "Working out the words and understanding the passage"
        ],
        2,
        "Accuracy and meaning support a useful rereading. Speed alone does not show understanding."
      ],
      [
        "Where is the boat according to the passage?",
        [
          "On the sand",
          "Moving across the sea",
          "Under a bridge"
        ],
        0,
        "The last sentence places the boat on sand. Movement and a bridge are not stated."
      ],
      [
        "If boat was read as boot, what is a useful next step?",
        [
          "Keep the guess because it starts with b",
          "Check oa, correct the word and reread",
          "Skip every word with oa"
        ],
        1,
        "Return to the complete spelling. In boat, oa represents long o; reread after correcting the word."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-18`,week:18,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1010+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Prepare every word, read for meaning, then reread in natural phrases. Note accuracy, adult support and expression separately; this app does not score fluency or pronunciation.':'Begin with oral blending and segmentation using large counters before showing letters. Model uncertain sounds and record oral performance separately from tile building.'};});
const reviewRows=[
  [
    [
      "What should the counters represent in the oral task?",
      [
        "The color of the word",
        "One speech sound each",
        "Every mark on the page"
      ],
      1,
      "In this oral activity, move one counter for each speech sound you hear, not for colors or punctuation."
    ],
    [
      "Blend the modeled sounds s, short i and t. Which word results?",
      [
        "sit",
        "ten",
        "cup"
      ],
      0,
      "Those three sounds blend into sit. Say the complete word naturally after the separate sounds."
    ],
    [
      "If an adult supplies a sound during the attempt, how should it be recorded?",
      [
        "Independent mastery",
        "A diagnosis",
        "Supported practice"
      ],
      2,
      "An adult supplied help. Record support honestly and offer another opportunity later."
    ]
  ],
  [
    [
      "Must an exclamation mark always be read by shouting?",
      [
        "Yes",
        "No; emphasis should fit meaning",
        "Only at the end of a book"
      ],
      1,
      "Expression can show emphasis without shouting. Comfortable natural speech and meaning guide the reading."
    ],
    [
      "What can a second reading help with?",
      [
        "Phrasing and understanding after checking words",
        "Proving a reading level automatically",
        "Avoiding the printed words"
      ],
      0,
      "A prepared rereading can improve phrasing and meaning. It does not by itself certify a reading level."
    ],
    [
      "Does the passage name the boat’s owner?",
      [
        "Pip owns it",
        "You own it",
        "The owner is not stated"
      ],
      2,
      "The passage names a boat and its location, but does not identify its owner."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-18`,grade,week:18,subject:'reading',kind:'inquiry',title:grade?'Reread with meaning review':'Sound steps review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1020+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][17].readingLesson=l.id;
root.WonderWeekEighteenReading={lessons,reviews};
})(globalThis);
