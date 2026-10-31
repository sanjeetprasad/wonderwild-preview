(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Look at every letter",
    "objective": "Distinguish similarly spelled familiar words by checking the changed letter and sound.",
    "standard": "RF.K.3d",
    "prerequisite": "Review short a and i and consonants in sat, sit, pin and pan. Model any uncertain sound before asking the child to compare the printed words.",
    "words": [
      "sat",
      "sit",
      "pin",
      "pan"
    ],
    "parts": [
      "s \u00b7 a \u00b7 t",
      "s \u00b7 i \u00b7 t",
      "p \u00b7 i \u00b7 n",
      "p \u00b7 a \u00b7 n"
    ],
    "pattern": "Place sat and sit beside each other. Point to the matching first and last letters, then the changed middle letter. Say each vowel with a grown-up and blend the whole word. Repeat with pin and pan. Do not guess from the first letter or shape of the word. Mix the cards and read again, checking every letter. Change one middle tile and explain how the word changes. The tile task practises spelling; an adult listens to observe word reading.",
    "connected": {
      "title": "The pan on the mat",
      "sentences": [
        "A pan is on the mat.",
        "Pip sat by the pan.",
        "Pip can sit on the mat."
      ],
      "newWords": [
        "Pip",
        "can",
        "mat"
      ],
      "helperWords": [
        "a",
        "is",
        "on",
        "the",
        "by"
      ],
      "note": "Prepare Pip as a name and blend can and mat. Model a, is, the and by and review on. Explain that sat tells about earlier sitting, while can sit describes a possibility. The last sentence does not say Pip actually moved to the mat."
    },
    "checks": [
      [
        "Which letter changes between sat and sit?",
        [
          "The first letter",
          "The middle letter",
          "The last letter"
        ],
        1,
        "The middle vowel changes from a to i. Check all three letters and blend the whole word."
      ],
      [
        "Which word has short a?",
        [
          "pin",
          "sit",
          "pan"
        ],
        2,
        "Pan has short a. Pin and sit have short i; use a grown-up model when needed."
      ],
      [
        "Where is the pan in the passage?",
        [
          "On the mat",
          "In a bag",
          "On a shelf"
        ],
        0,
        "The first sentence says the pan is on the mat. Reread it to check the detail."
      ],
      [
        "Does the last sentence say Pip actually moved?",
        [
          "Yes, moved is printed",
          "No, it says Pip can sit there",
          "Yes, can always means did"
        ],
        1,
        "Can sit describes a possibility. The sentence does not say Pip moved or sat there already."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Who is there? Where are they?",
    "objective": "Identify characters and the stated setting of a short story using text details.",
    "standard": "RL.1.3; RF.1.4a",
    "prerequisite": "Review sh, short vowels and consonant groups in shed, pond, duck and bench. Model ch and ck as needed, and prepare the passage helper words before reading.",
    "words": [
      "shed",
      "pond",
      "duck",
      "bench"
    ],
    "parts": [
      "sh \u00b7 e \u00b7 d",
      "p \u00b7 o \u00b7 n \u00b7 d",
      "d \u00b7 u \u00b7 ck",
      "b \u00b7 e \u00b7 n \u00b7 ch"
    ],
    "pattern": "Prepare the practice words and their meanings with a grown-up. Read the passage to find who takes part and where events happen. A character is a person or animal taking part in this story; the setting is the place and, when stated, time. Point to words that name Pip and the duck. Find the place detail instead of inventing a town or time of day. Describe one action using a sentence as evidence. A story may leave some setting details unstated, and it is fine to say so.",
    "connected": {
      "title": "Beside the pond",
      "sentences": [
        "Pip sat on a bench by the pond.",
        "A duck swam in the pond.",
        "Pip waved to the duck."
      ],
      "newWords": [
        "Pip",
        "sat",
        "swam",
        "waved"
      ],
      "helperWords": [
        "on",
        "a",
        "by",
        "the",
        "in",
        "to"
      ],
      "note": "Prepare Pip as a name, blend sat and swam, and model waved, connecting wave and its past ending with adult help. Prepare the helper words and explain pond and bench. The passage names no time of day or town. Shed is word practice, not a place named in this story."
    },
    "checks": [
      [
        "Which two characters take part?",
        [
          "A bench and a pond",
          "Pip and a duck",
          "A shed and a tree"
        ],
        1,
        "Pip sits and waves; the duck swims. The bench and pond are parts of the setting."
      ],
      [
        "Where is Pip sitting?",
        [
          "On a bench by the pond",
          "Inside a shed",
          "On a boat"
        ],
        0,
        "The first sentence states the bench and its location by the pond."
      ],
      [
        "What does the duck do?",
        [
          "Waves to Pip",
          "Sits on the bench",
          "Swims in the pond"
        ],
        2,
        "The second sentence says the duck swam in the pond. That is its stated action."
      ],
      [
        "What time of day is it in the story?",
        [
          "Morning",
          "Night",
          "The passage does not say"
        ],
        2,
        "No time of day is stated. Do not add a time just because you imagine a picture."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-22`,week:22,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1190+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Ask who takes part and where events happen, then point to supporting words. Record word reading, text understanding and adult prompts separately.':'Compare the full spellings, model uncertain vowels and listen as the child blends each word. Record adult support separately from independent reading or tile completion.'};});
const reviewRows=[
  [
    [
      "Which letters stay the same in pin and pan?",
      [
        "The first and last letters",
        "Only the middle letter",
        "No letters"
      ],
      0,
      "Both words begin with p and end with n. The middle vowel is the part that changes."
    ],
    [
      "You see sit but say sat. What helps?",
      [
        "Keep the guess",
        "Check the middle i and blend again",
        "Ignore the vowel"
      ],
      1,
      "Look at the printed i, say its familiar short sound and blend all the sounds again."
    ],
    [
      "What should we check before reading a familiar-looking word?",
      [
        "Only its color",
        "Only its first letter",
        "Every letter in order"
      ],
      2,
      "Similar words can differ by just one letter. Check the full spelling instead of guessing."
    ]
  ],
  [
    [
      "Which detail describes the setting?",
      [
        "Pip waved",
        "A bench by the pond",
        "The duck swam"
      ],
      1,
      "A bench by the pond describes where the story takes place. The other choices name actions."
    ],
    [
      "Is the shed part of this story setting?",
      [
        "No, it appears only in word practice",
        "Yes, every practice word appears in the story",
        "Yes, all ponds have sheds"
      ],
      0,
      "Shed is practised as a word but is not in the passage. Use the actual story for setting evidence."
    ],
    [
      "Does the passage say how Pip feels?",
      [
        "Happy is printed",
        "Sad is printed",
        "No feeling is directly stated"
      ],
      2,
      "Waving is an action, but no feeling word is stated. Possible feelings should be identified as ideas, not quoted facts."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-22`,grade,week:22,subject:'reading',kind:'inquiry',title:grade?'Characters and setting review':'Similar spellings review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1200+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][21].readingLesson=l.id;
root.WonderWeekTwentyTwoReading={lessons,reviews};
})(globalThis);
