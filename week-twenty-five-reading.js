(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Put a story in order",
    "objective": "Retell three stated story events in order with adult support.",
    "standard": "RL.K.2; RF.K.4",
    "prerequisite": "Review short vowels in pot, mud, pat and sun. Prepare Pip as a name and all passage words before reading; a grown-up models first, next and last.",
    "words": [
      "pot",
      "mud",
      "pat",
      "sun"
    ],
    "parts": [
      "p \u00b7 o \u00b7 t",
      "m \u00b7 u \u00b7 d",
      "p \u00b7 a \u00b7 t",
      "s \u00b7 u \u00b7 n"
    ],
    "pattern": "Prepare the words with a grown-up. Read the whole story once. Reread and act out each event with empty hands: fill, pat, set down. Say first, next and last while pointing to the matching sentence. Ask what happened before the pot was set in the sun. Draw three pictures and use them to retell without looking at the answer choices. Record adult prompts separately. The tiles are spelling pieces; recognizing a quiz answer does not demonstrate an independent oral retelling.",
    "connected": {
      "title": "Pip makes a mud pot",
      "sentences": [
        "First, Pip fills a pot with mud.",
        "Next, Pip pats the mud.",
        "Last, Pip sets the pot in the sun."
      ],
      "newWords": [
        "Pip",
        "first",
        "fills",
        "with",
        "next",
        "pats",
        "last",
        "sets",
        "in"
      ],
      "helperWords": [
        "a",
        "the"
      ],
      "note": "Prepare every word before reading. Model fills, pats and sets as action words ending in s; connect pats to pat. Explain the ordering words first, next and last, and model with. Mime the events rather than handling mud. The story ends with setting down the pot; it does not say that the mud dried."
    },
    "checks": [
      [
        "What does Pip do first?",
        [
          "Fills a pot with mud",
          "Sets the pot in the sun",
          "Pats the mud"
        ],
        0,
        "The first sentence says Pip fills a pot with mud. This happens before patting."
      ],
      [
        "What happens after filling and before setting down the pot?",
        [
          "The mud dries",
          "Pip pats the mud",
          "Pip empties the pot"
        ],
        1,
        "The middle sentence tells us Pip pats the mud. It comes between the other two events."
      ],
      [
        "Which event is last in this story?",
        [
          "Pip fills the pot",
          "Pip pats the mud",
          "Pip sets the pot in the sun"
        ],
        2,
        "The last sentence ends the story with Pip setting the pot in the sun."
      ],
      [
        "Does the story say that the mud dried?",
        [
          "Yes, in the first sentence",
          "No, it ends before that is stated",
          "Yes, in the middle sentence"
        ],
        1,
        "Being in the sun does not tell us the result here. The text does not state that the mud dried."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Find the topic and its details",
    "objective": "Name the main topic of a short information text and identify details supporting it.",
    "standard": "RI.1.2; RF.1.4a",
    "prerequisite": "Review short vowels in nest and soft and the spelling chunks in twig and twigs. Prepare birds, build, grass and eggs with an adult before reading the text.",
    "words": [
      "nest",
      "twig",
      "soft",
      "eggs"
    ],
    "parts": [
      "n \u00b7 e \u00b7 s \u00b7 t",
      "t \u00b7 w \u00b7 i \u00b7 g",
      "s \u00b7 o \u00b7 f \u00b7 t",
      "e \u00b7 gg \u00b7 s"
    ],
    "pattern": "Prepare the words with a grown-up, then read the information text. Ask what all three sentences teach us about. Name the main topic: bird nests. Point to two details about what nests can be made from and what they can hold. A detail gives one piece of information; the topic covers the whole selection. Explain that some does not mean all: birds build different kinds of nests. Practice saying the topic and details aloud without answer choices. Correct choices alone do not establish independent reading or a complete summary.",
    "connected": {
      "title": "Bird nests",
      "sentences": [
        "Some birds build nests with twigs.",
        "Some nests have soft grass inside.",
        "A nest can hold eggs."
      ],
      "newWords": [
        "some",
        "birds",
        "build",
        "nests",
        "with",
        "twigs",
        "grass",
        "inside",
        "hold"
      ],
      "helperWords": [
        "have",
        "a",
        "can"
      ],
      "note": "Model birds, build, grass, inside and hold. Connect nests to nest and twigs to twig; prepare some, with, have, a and can. In eggs, gg is one spelling chunk and final s sounds like z. Nests vary; these sentences do not describe every nest. Observe pictures or nests from a distance, without touching nests or eggs."
    },
    "checks": [
      [
        "What is the main topic of all three sentences?",
        [
          "Bird nests",
          "Only the color of grass",
          "How to cook eggs"
        ],
        0,
        "All three sentences give information about bird nests, including materials and contents."
      ],
      [
        "Which detail tells us a nest material in the text?",
        [
          "All nests are round",
          "Some birds build nests with twigs",
          "Every nest is on the ground"
        ],
        1,
        "Twigs are a nest material named in the first sentence. The text does not say all nests are alike."
      ],
      [
        "What can a nest hold according to the text?",
        [
          "A cooking pot",
          "Only grass",
          "Eggs"
        ],
        2,
        "The last sentence states that a nest can hold eggs. This is one detail about the topic."
      ],
      [
        "Does the text say every nest has grass?",
        [
          "Yes, every nest",
          "No, it says some nests",
          "Only nests by a lake"
        ],
        1,
        "Some nests have grass. Some is not the same as every, and no lake is mentioned."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-25`,week:25,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1340+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Ask the child to name the topic and recall two supporting details aloud. Separate adult prompts from independent responses; later repeat with a new information text.':'Invite a three-picture retelling using first, next and last. Record events, order and adult support separately from quiz results.'};});
const reviewRows=[
  [
    [
      "Which order matches Pip\u2019s story?",
      [
        "Fill, pat, set in the sun",
        "Pat, set in the sun, fill",
        "Set in the sun, fill, pat"
      ],
      0,
      "Reread the three sentences: first fill, next pat, and last set the pot in the sun."
    ],
    [
      "What happens just before Pip sets the pot in the sun?",
      [
        "Pip paints it",
        "Pip pats the mud",
        "Pip finds eggs"
      ],
      1,
      "The sentence before the last event says Pip pats the mud. Use the text to check."
    ],
    [
      "Which retelling stays with the story?",
      [
        "Pip makes a pot, then flies away",
        "Pip dries and paints the mud",
        "Pip fills the pot, pats the mud, then sets it in the sun"
      ],
      2,
      "This retelling includes the three stated events in order without adding a new ending."
    ]
  ],
  [
    [
      "Which pair of details supports the topic bird nests?",
      [
        "Some use twigs; a nest can hold eggs",
        "Grass is green; pots hold mud",
        "Birds swim; eggs are cooked"
      ],
      0,
      "The text supplies twigs as a material and eggs as possible contents of a nest."
    ],
    [
      "Is soft grass the whole topic or one detail here?",
      [
        "The whole topic",
        "One detail about some nests",
        "A story character"
      ],
      1,
      "Soft grass is one piece of information. Bird nests is the topic connecting all three sentences."
    ],
    [
      "Which sentence could add another detail about the same topic?",
      [
        "Pip pats mud",
        "A cup holds water",
        "Some birds build nests in trees"
      ],
      2,
      "A sentence about where some birds build nests fits the topic. This is a possible new detail, not a fact stated in the original selection."
    ]
  ]
];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-25`,grade,week:25,subject:'reading',kind:'inquiry',title:grade?'Topic and details review':'Story order review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1350+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][24].readingLesson=l.id;
root.WonderWeekTwentyFiveReading={lessons,reviews};
})(globalThis);
