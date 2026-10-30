(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Read again, find the meaning",
    "objective": "Reread a prepared passage and answer questions using its words rather than a remembered guess.",
    "standard": "RF.K.4; RL.K.1",
    "prerequisite": "Review short vowels and consonants in cat, mat, nap and sat. Prepare the helper words with an adult before reading the sentences, and explain nap as a short sleep.",
    "words": [
      "cat",
      "mat",
      "nap",
      "sat"
    ],
    "parts": [
      "c \u00b7 a \u00b7 t",
      "m \u00b7 a \u00b7 t",
      "n \u00b7 a \u00b7 p",
      "s \u00b7 a \u00b7 t"
    ],
    "pattern": "Blend each familiar word while following all its letters. An adult prepares the helper words before the passage. Read once to find out what happens. When asked where the cat sat, return to the sentence and point to the words on the mat. Reread the whole sentence so the answer fits its meaning. Compare sat with nap without dropping the final consonant. If a word is uncertain, ask for a model and try the sentence again. Rereading is for understanding and accurate words, not a race or a memory test.",
    "connected": {
      "title": "A nap on the mat",
      "sentences": [
        "The cat sat on the mat.",
        "The cat had a nap.",
        "Pip sat by the mat."
      ],
      "newWords": [
        "had",
        "Pip"
      ],
      "helperWords": [
        "the",
        "on",
        "a",
        "by"
      ],
      "note": "Blend had and prepare Pip as a name. Model the, a and by, and review on. Explain by as beside or near. Point to the exact sentence before answering where the cat sat. The passage does not say that Pip had a nap. Adult modeling is support, not independent reading."
    },
    "checks": [
      [
        "Where did the cat sit?",
        [
          "On the mat",
          "In a box",
          "On a boat"
        ],
        0,
        "The first sentence says the cat sat on the mat. Reread those words to check."
      ],
      [
        "Who had a nap?",
        [
          "Pip",
          "The cat",
          "Both Pip and the cat"
        ],
        1,
        "The second sentence names the cat. It does not say Pip had a nap."
      ],
      [
        "What can help when you forget a detail?",
        [
          "Guess without looking",
          "Skip the sentence",
          "Reread the sentence and look for the words"
        ],
        2,
        "Return to the text and reread. The printed words can help you check a detail."
      ],
      [
        "Where was Pip sitting?",
        [
          "In the rain",
          "By the mat",
          "On the cat"
        ],
        1,
        "The last sentence says Pip sat by the mat. By means beside or near in this sentence."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Tell the story with details",
    "objective": "Retell a short prepared story in order and support an answer with a stated detail.",
    "standard": "RL.1.1; RL.1.2; RF.1.4a",
    "prerequisite": "Review short vowels in lost and soft and the spelling groups oo in book and sh in shelf. Model any unfamiliar consonant groups and helper words before the passage.",
    "words": [
      "lost",
      "book",
      "shelf",
      "soft"
    ],
    "parts": [
      "l \u00b7 o \u00b7 s \u00b7 t",
      "b \u00b7 oo \u00b7 k",
      "sh \u00b7 e \u00b7 l \u00b7 f",
      "s \u00b7 o \u00b7 f \u00b7 t"
    ],
    "pattern": "Prepare each word with a grown-up, noticing every consonant and spelling group. In book, oo has the sound heard in foot, not the sound in moon; use a natural adult model. Read the passage to find the problem, what Pip does and what happens at the end. Reread a sentence before giving a detail. Use first, next and finally to retell the events in your own words. Keep the stated events separate from ideas you imagine. A short story may leave feelings or reasons unstated; explain uncertainty rather than inventing a detail. Ask for help with unfamiliar spellings and record that support.",
    "connected": {
      "title": "The missing book",
      "sentences": [
        "Pip lost a book.",
        "Pip found the book on a shelf.",
        "Pip read the book on a soft mat."
      ],
      "newWords": [
        "Pip",
        "found",
        "read",
        "mat"
      ],
      "helperWords": [
        "a",
        "the",
        "on"
      ],
      "note": "Prepare Pip as a name, blend mat and model found and past-tense read (said like red). Explain shelf using a real safe example. Prepare a, the and on. The passage states where the book was found and where Pip later read, but does not state who put it on the shelf or how Pip felt."
    },
    "checks": [
      [
        "What problem starts the story?",
        [
          "The shelf broke",
          "Pip lost a book",
          "The mat was wet"
        ],
        1,
        "The first sentence says Pip lost a book. That is the problem at the start."
      ],
      [
        "Where did Pip find the book?",
        [
          "On a shelf",
          "Under the mat",
          "Inside a boat"
        ],
        0,
        "The second sentence places the book on a shelf when Pip found it."
      ],
      [
        "Which event happens last?",
        [
          "Pip loses the book",
          "Pip finds the book",
          "Pip reads the book on a soft mat"
        ],
        2,
        "Reading on the mat is the event in the last sentence, after the book is found."
      ],
      [
        "Does the story say who put the book on the shelf?",
        [
          "Yes, Pip did",
          "Yes, a friend did",
          "No, it does not tell us"
        ],
        2,
        "The story says where Pip found the book, but does not identify who put it there."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-20`,week:20,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1090+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Prepare unfamiliar spellings, listen to a retelling, and ask which sentence supports one detail. Note adult support, word accuracy and understanding separately.':'Prepare the words, reread each sentence and ask who or where questions. Point to the text together and record adult help separately from independent reading.'};});
const reviewRows=[
  [
    [
      "Which words tell where the cat sat?",
      [
        "on the mat",
        "had a nap",
        "Pip sat"
      ],
      0,
      "On the mat names the place in the first sentence. Read the complete sentence to check."
    ],
    [
      "Does the text say Pip slept?",
      [
        "Yes, everyone slept",
        "No, it only says the cat had a nap",
        "Yes, Pip is a cat"
      ],
      1,
      "Pip sat by the mat, but the text does not say Pip slept. Keep the two characters distinct."
    ],
    [
      "Why read the sentence again?",
      [
        "To finish fastest",
        "To avoid looking at words",
        "To check the words and understand the detail"
      ],
      2,
      "A second reading helps you check what the sentence actually says, with support when needed."
    ]
  ],
  [
    [
      "Which retelling follows the text?",
      [
        "Read, lose, find",
        "Lose, find, read",
        "Find, read, lose"
      ],
      1,
      "First Pip loses the book, next finds it, and finally reads it on the mat."
    ],
    [
      "Which detail supports saying Pip found the book?",
      [
        "The sentence says Pip found it on a shelf",
        "Books always return themselves",
        "Pip must like shelves"
      ],
      0,
      "The second sentence gives direct evidence. The other ideas are not stated in this story."
    ],
    [
      "Can we say the passage tells us Pip felt happy?",
      [
        "Yes, all stories say happy",
        "Yes, soft means happy",
        "No; that feeling is not stated"
      ],
      2,
      "Happiness might be an idea you infer, but the passage does not state how Pip felt."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-20`,grade,week:20,subject:'reading',kind:'inquiry',title:grade?'Story details review':'Reread for meaning review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1100+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][19].readingLesson=l.id;
root.WonderWeekTwentyReading={lessons,reviews};
})(globalThis);
