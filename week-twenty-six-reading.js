(function(root){
'use strict';
const rows=[
  {
    "grade": 0,
    "title": "Match the picture and the words",
    "objective": "Describe how an illustration supports a detail in a short story.",
    "standard": "RL.K.7; RF.K.4",
    "prerequisite": "Review short vowels in cat, mat, hat and red. Prepare Sam as a name, the helper words and next before reading; an adult models checking the letters rather than guessing from a picture.",
    "words": [
      "cat",
      "mat",
      "hat",
      "red"
    ],
    "parts": [
      "c \u00b7 a \u00b7 t",
      "m \u00b7 a \u00b7 t",
      "h \u00b7 a \u00b7 t",
      "r \u00b7 e \u00b7 d"
    ],
    "pattern": "Prepare the words with a grown-up and look at the picture. Describe what is visible, then read each sentence by attending to its letters. Point to the pictured detail matching the sentence. The picture shows a green mat, but the words do not state the mat color. Explain whether a detail comes from the words, the picture or both. Pictures help us understand a story; they do not replace reading the printed words.",
    "connected": {
      "title": "Sam and the cat",
      "sentences": [
        "A cat is on a mat.",
        "A red hat is next to the mat.",
        "Sam has a hat."
      ],
      "newWords": [
        "Sam",
        "next"
      ],
      "helperWords": [
        "a",
        "is",
        "on",
        "to",
        "the",
        "has"
      ],
      "note": "Prepare Sam and next, and model a, is, on, to, the and has. Read each sentence before matching it to the picture. The scene shows Sam holding a yellow hat as well as a red hat beside the green mat; the last sentence does not give the held hat color.",
      "picture": "cat-mat"
    },
    "checks": [
      [
        "Which detail is shown in both the first sentence and the picture?",
        [
          "A cat on a mat",
          "A dog in a box",
          "A cat in a tree"
        ],
        0,
        "Both the first sentence and the picture place the cat on the mat."
      ],
      [
        "Where is the red hat?",
        [
          "On the cat",
          "Next to the mat",
          "On Sam"
        ],
        1,
        "The second sentence and picture put the red hat beside the mat, not on Sam or the cat."
      ],
      [
        "Where do we learn that the mat is green?",
        [
          "Only in the words",
          "Nowhere",
          "In the picture"
        ],
        2,
        "The illustration shows a green mat. The sentences name a mat without giving its color."
      ],
      [
        "Should we guess a printed word only from the picture?",
        [
          "Yes, ignore the letters",
          "No, check the letters and read with help",
          "Only if the picture is bright"
        ],
        1,
        "Use the letters and adult support to read. Then check how the picture connects with the words."
      ]
    ]
  },
  {
    "grade": 1,
    "title": "Use headings and a diagram",
    "objective": "Use section headings and a labeled diagram to locate information in a short text.",
    "standard": "RI.1.5; RI.1.6; RF.1.4a",
    "prerequisite": "Prepare roots, stem, leaf and soil with a grown-up. Model the vowel spelling in roots and soil and the change from leaf to leaves before reading the supported information text.",
    "words": [
      "roots",
      "stem",
      "leaf",
      "soil"
    ],
    "parts": [
      "r \u00b7 oo \u00b7 t \u00b7 s",
      "s \u00b7 t \u00b7 e \u00b7 m",
      "l \u00b7 ea \u00b7 f",
      "s \u00b7 oi \u00b7 l"
    ],
    "pattern": "Prepare all words and read the two headings, Roots and Stem. Predict where to find information about roots, then read that section to check. Use the labeled diagram to locate the same plant parts. A heading names the section topic, not a complete answer to every question. Distinguish information stated in sentences from a visible diagram detail. Use the heading to find a section, then use its sentences to answer.",
    "connected": {
      "title": "Parts of a plant",
      "sentences": [
        "Roots grow in soil.",
        "Roots take in water.",
        "A stem holds up leaves."
      ],
      "newWords": [
        "grow",
        "in",
        "take",
        "water",
        "holds",
        "up",
        "leaves"
      ],
      "helperWords": [
        "a"
      ],
      "note": "Prepare grow, take, water, holds, up and leaves; review in and a. Explain leaf/leaves. Read Roots above the first two sentences and Stem above the last. This simple diagram shows one example plant, not every plant form; its labels help locate parts.",
      "picture": "plant-parts",
      "headings": [
        "Roots",
        "",
        "Stem"
      ]
    },
    "checks": [
      [
        "Which heading helps you find how roots get water?",
        [
          "Roots",
          "Stem",
          "The book cover"
        ],
        0,
        "The Roots section says roots take in water. The heading helps locate that information."
      ],
      [
        "What does the Stem section tell us?",
        [
          "All leaves are round",
          "A stem holds up leaves",
          "Roots are yellow"
        ],
        1,
        "Read the sentence under Stem: a stem holds up leaves. The other statements are not supplied."
      ],
      [
        "What does the diagram help you locate?",
        [
          "The time of day",
          "The plant age",
          "Roots and stem"
        ],
        2,
        "The labeled diagram shows the roots and stem, connecting the labels to visible parts."
      ],
      [
        "Does the heading Roots alone tell us everything roots do?",
        [
          "Yes",
          "No, read the section for details",
          "It tells the plant age"
        ],
        1,
        "A heading names a topic. Its section sentences supply details about that topic."
      ]
    ]
  }
];
const lessons=rows.map(({words,parts,pattern,connected,checks,...base})=>{const questions=checks.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{...base,id:`k1-reading-${base.grade}-26`,week:26,subject:'reading',kind:'phonics',wordBuilder:true,minutes:12,order:1390+base.grade,reviewStatus:'educator-review-needed',questions,phonics:{title:base.title,words,parts,pattern,unit:'spelling',connected,question:questions[0].question,contrast:questions[0].options,answer:questions[0].answer},parentPractice:base.grade?'Ask the child to use a heading to locate a detail and point to its matching diagram part. Record adult prompts and later try a new information text.':'Ask the child to point to a detail in both the picture and the words, then name a picture-only detail. Record adult help separately from quiz results.'};});
const reviewRows=[[["Which color detail comes from the words as well as the picture?", ["The red hat beside the mat", "The green mat", "The yellow hat Sam holds"], 0, "The second sentence states red hat. Green mat and yellow held hat are picture details only."], ["Which sentence matches the cat in the picture?", ["A cat is in a box", "A cat is on a mat", "A cat is under a bed"], 1, "The pictured cat sits on the mat, matching the first printed sentence."], ["A picture detail is not in the sentences. What can we say?", ["It must be in every story", "The words are wrong", "The picture gives an extra detail"], 2, "An illustration may add information. Name its source without claiming the words state it."]], [["Where would you look first to find what holds up leaves?", ["The Stem section", "Only the title", "The Roots heading alone"], 0, "The Stem section contains the sentence about holding up leaves; then the diagram helps locate the stem."], ["What is a heading useful for?", ["Replacing all the sentences", "Finding a section about a topic", "Telling every answer"], 1, "A heading points to a section topic. You still need to read the section for its details."], ["Does this text tell the age of the pictured plant?", ["Yes, one year", "Yes, ten years", "No, no age is stated"], 2, "Neither the headings nor the three sentences state its age. A picture alone cannot establish it here."]]];
const reviews=reviewRows.map((items,grade)=>{const questions=items.map(([question,options,answer,explanation])=>({question,options,answer,explanation}));return{id:`k1-reading-review-${grade}-26`,grade,week:26,subject:'reading',kind:'inquiry',title:grade?'Headings and diagrams review':'Picture and words review',objective:lessons[grade].objective,standard:lessons[grade].standard,teach:lessons[grade].phonics.pattern,activity:lessons[grade].parentPractice,questions,...questions[0],minutes:8,order:1400+grade,reviewStatus:'educator-review-needed'};});
root.WonderCurriculum.lessons.push(...lessons,...reviews);
for(const l of lessons)root.WonderK1Year.weeks[l.grade][25].readingLesson=l.id;
function picture(key){const body=key==='cat-mat'?'<ellipse cx="155" cy="170" rx="100" ry="25" fill="#94cda0"/><ellipse cx="150" cy="135" rx="42" ry="30" fill="#e3b483"/><path d="M120 116L120 85L139 100L157 85L167 119Z" fill="#e3b483"/><circle cx="134" cy="112" r="3"/><circle cx="153" cy="112" r="3"/><path d="M190 140Q225 100 213 85" fill="none" stroke="#a76a39" stroke-width="10"/><path d="M265 170H335L324 140H280Z" fill="#e76e64"/><path d="M255 172H345" stroke="#b74545" stroke-width="8"/><circle cx="420" cy="74" r="24" fill="#a7d6b1"/><path d="M396 102H444L454 173H386Z" fill="#a7d6b1"/><path d="M385 133H452L442 111H397Z" fill="#f4ce5c"/><text x="402" y="207">Sam</text>':'<path d="M50 145H490" stroke="#987758" stroke-width="4"/><text x="60" y="175">soil</text><path d="M260 145V45M260 145L225 195M260 145L285 203M260 145L260 211" stroke="#6f9255" stroke-width="7" fill="none"/><path d="M260 80Q200 30 205 73Q225 105 260 90M260 109Q325 59 321 96Q298 124 260 119" fill="#86bf86"/><path d="M330 60H272M330 190H290" stroke="#4f6860"/><text x="340" y="65">stem</text><text x="340" y="195">roots</text>';const label=key==='cat-mat'?'A cat sits on a green mat. A red hat lies beside it. Sam holds a yellow hat.':'A plant diagram with roots below the soil line and a stem holding leaves above it.';return '<figure><svg viewBox="0 0 540 230" style="width:100%;max-width:540px" role="img" aria-label="'+label+'">'+body+'</svg><figcaption>'+label+'</figcaption></figure>';}
root.WonderWeekTwentySixReading={lessons,reviews,picture};
})(globalThis);
