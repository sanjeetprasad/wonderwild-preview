(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Change the start, keep the ending",
    "objective": "Blend a spoken onset and rime, then connect those parts with familiar printed words.",
    "standard": "RF.K.2c; RF.K.3a",
    "prerequisite": "Review the sounds for c, m, s, p and w and familiar short a and i. Begin with adult-led oral blending before showing the printed chunks.",
    "words": [
      "cat",
      "mat",
      "sat",
      "pin",
      "win"
    ],
    "parts": [
      "c · at",
      "m · at",
      "s · at",
      "p · in",
      "w · in"
    ],
    "pattern": "A grown-up says c then at, without adding an extra vowel to c. Join the parts to say cat. Repeat with m and at, then s and at. The onset is the part before the vowel; the rime is the vowel and what follows. These tiles are larger spoken chunks, not one sound each. Cat and mat rhyme but mean different things. Track every spelling when reading; a familiar ending does not tell you the beginning.",
    "connected": {
      "title": "A cat on a mat",
      "sentences": [
        "A cat sat on a mat.",
        "The mat is red.",
        "Pip can sit by the cat."
      ],
      "newWords": [
        "on",
        "red",
        "Pip",
        "can",
        "sit"
      ],
      "helperWords": [
        "a",
        "the",
        "is",
        "by"
      ],
      "note": "Review on, red, can and sit and introduce Pip as a name. Model a, the, is and by; by has long i. Explain sat as sitting earlier. Read each sentence after preparing its words. The mat is red; the cat’s color is not stated."
    },
    "checks": [
      [
        "What word do m and at make together?",
        [
          "mat",
          "cat",
          "pin"
        ],
        0,
        "Blend m with at to say mat. The beginning changes the whole word."
      ],
      [
        "Which pair has the same spoken ending at?",
        [
          "cat and pin",
          "cat and mat",
          "pin and sat"
        ],
        1,
        "Cat and mat both end with at. Their different beginnings make different words."
      ],
      [
        "In the passage, what is red?",
        [
          "The cat",
          "Pip",
          "The mat"
        ],
        2,
        "The second sentence says the mat is red. The passage does not give the cat’s color."
      ],
      [
        "What do the two tiles p and in show?",
        [
          "Two spoken chunks in pin",
          "Exactly two letters",
          "Two separate words to leave apart"
        ],
        0,
        "Join p and in to say pin. The in chunk contains more than one speech sound."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Look closely at helper words",
    "objective": "Read selected common irregular words by attending to their spellings and using them in sentences.",
    "standard": "RF.1.3g",
    "prerequisite": "Read familiar short-vowel words and identify common consonant spellings. An adult must model the selected helper words before the child builds or reads them.",
    "words": [
      "said",
      "was",
      "you",
      "they"
    ],
    "parts": [
      "s · ai · d",
      "w · a · s",
      "y · ou",
      "th · ey"
    ],
    "pattern": "An adult models each word naturally, then points to its spellings. In said, s and d are familiar while ai represents short e in this word. Model was in the adult’s accent: its vowel and final s differ from a simple short-a blend. In you, y begins the word and ou represents the long oo sound. In they, th is voiced and ey represents long a. These are selected word-specific patterns, not rules for every word with those spellings. Build, read, cover and try again, then check the complete word instead of guessing from its shape.",
    "connected": {
      "title": "Pip and the cup",
      "sentences": [
        "The cup was on a mat.",
        "Pip said, \"You can lift it.\"",
        "They can lift the cup."
      ],
      "newWords": [
        "cup",
        "on",
        "mat",
        "Pip",
        "can",
        "lift",
        "it"
      ],
      "helperWords": [
        "the",
        "a"
      ],
      "note": "Review the listed short-vowel words, keeping both final consonants in lift. Introduce Pip as a name and model the and a. Revisit said, was, you and they before reading. Explain the quotation marks as Pip’s spoken words. They refers to people or characters, but this short passage does not name everyone in that group. Do not invent a precise group size."
    },
    "checks": [
      [
        "Which spelling represents the short-e sound in said?",
        [
          "s",
          "ai",
          "d"
        ],
        1,
        "In said, ai represents short e. This is a word-specific spelling to learn, not the usual sound of ai in rain."
      ],
      [
        "Which word matches the taught spelling th + ey?",
        [
          "they",
          "you",
          "said"
        ],
        0,
        "The spellings th and ey combine to make they. An adult models voiced th and long a."
      ],
      [
        "Where was the cup in the first sentence?",
        [
          "Under a bed",
          "In a box",
          "On a mat"
        ],
        2,
        "The first sentence states that the cup was on a mat. Find that detail in the print."
      ],
      [
        "Exactly how many characters does they name here?",
        [
          "Exactly two",
          "The passage does not specify",
          "Exactly four"
        ],
        1,
        "They names a group here, but the text does not give an exact number or name all its members."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-17`,week:17,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:960+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:base.grade?'spelling':'onset-rime',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Model each helper word, point to familiar and unexpected spellings, and revisit it in a sentence. Record models as support; word recognition is not pronunciation scoring.':'Begin orally with onset and rime, then show the print and blend. Compare cat and mat for both sound and meaning. Record needed models separately from independent reading.'};});
const reviewRows=[
  [
    [
      "Change c in cat to s and keep at. What word results?",
      [
        "sat",
        "mat",
        "pin"
      ],
      0,
      "Keeping at and replacing the beginning with s makes sat. Blend the complete word."
    ],
    [
      "Do rhyming words always have the same meaning?",
      [
        "Yes",
        "No; cat and mat rhyme but mean different things",
        "Only if they are short"
      ],
      1,
      "Rhyming concerns sounds, not matching meanings. A cat and a mat are different things."
    ],
    [
      "A child needs an adult to blend w and in. How should the attempt be recorded?",
      [
        "As independent mastery",
        "As a hearing diagnosis",
        "As supported practice"
      ],
      2,
      "An adult model is useful support. Record it honestly and revisit the word on another occasion."
    ]
  ],
  [
    [
      "Which pair of spellings builds you?",
      [
        "y + ou",
        "th + ey",
        "s + ai + d"
      ],
      0,
      "The taught spellings y and ou make you. Read the whole word after building it."
    ],
    [
      "Does ai always sound like it does in said?",
      [
        "Yes, always",
        "No; compare said with rain using adult models",
        "Only in large print"
      ],
      1,
      "Said has a word-specific pronunciation. Rain uses a different vowel sound; letter size does not change it."
    ],
    [
      "What helps check a helper word you are unsure of?",
      [
        "Guess from its first letter",
        "Ignore the print",
        "Look at every spelling and compare with a taught adult model"
      ],
      2,
      "Attend to the full spelling and the modeled word. Sentence meaning helps understanding but does not replace reading the print."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-17`,grade,week:17,subject:'reading',kind:'inquiry',title:grade?'Helper-word detective review':'Beginning and ending review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:970+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][16].readingLesson=l.id;
root.WonderWeekSeventeenReading={lessons,reviews};
})(globalThis);
