(function(root){
'use strict';
const units=[
  [
    {
      "materials": "Ten groups of large counters or a tens picture, prepared dog-story words, safe paper-test records and drawing materials.",
      "math": [
        "Open Count by tens to one hundred and point to one complete group of ten for each spoken number. Connect ten, twenty and thirty to the accumulated groups.",
        "Continue the tens sequence toward one hundred with all ten groups visible. Explain that each step adds another ten objects rather than one more object.",
        "Match a written multiple of ten to the corresponding groups. Count the groups and state how many tens they represent before naming the total.",
        "Ask a grown-up to omit one number in a tens count and use the model to repair the sequence. Rehearse again without requiring a fast response.",
        "Use Count by tens to one hundred review and count the complete tens sequence aloud. Record where visual or adult support was needed separately from the quiz score."
      ],
      "reading": [
        "Open Read and discuss a new story and prepare dog, log, fog and hop. Identify which words are new to the child before an adult models them.",
        "Read the dog story with the introduced words prepared and ask what happens near the log. Track the words rather than using the title to guess an event.",
        "Reread the part where the dog hears Sam and moves toward Sam. Explain the event using a stated detail, without adding an unstated feeling.",
        "Draw one story event and discuss how it fits the whole selection. Compare an initial idea with the text and revise the drawing if a detail conflicts.",
        "Use Read and discuss a new story review and reread after a break. Record first-attempt reading, subsequent help and understanding separately; preparation affects novelty."
      ],
      "writing": [
        "Draw the original paper investigation setup and label the two samples. Include a map-like view of their positions so someone can understand where the trial happened.",
        "Write or dictate a sentence about the earlier result using the saved record. Explain that a memory may need checking against a dated drawing or adult note.",
        "Add a prediction for a repeat trial and label it as something not yet observed. Keep the prediction separate from the earlier result on the page.",
        "After the adult-guided repeat, add a dated observation and compare it with the earlier record. Report differences honestly rather than adjusting drawings to match.",
        "Present a short account of the two trials and a question still open. Check one familiar word while retaining the child\u2019s explanation and adult contribution labels."
      ],
      "inquiry": [
        "Open Repeat and compare a small investigation with a grown-up using the earlier safe paper test. Review the tray, protected surface and small adult-controlled water amounts.",
        "Use the earlier record to plan similar paper sizes, water amounts and observation intervals. Explain why keeping these conditions similar helps compare the repeat.",
        "Observe the repeat without tasting materials and record visible water spreading or remaining water. Keep water away from electrical items and let the adult handle spills.",
        "Compare the two trial drawings and describe agreement or difference. An informal repeat may vary; do not erase a result simply because it was unexpected.",
        "Use the repeat-investigation checks and choose one condition to record more carefully next time. Distinguish the tested samples from a claim about all paper."
      ]
    },
    {
      "materials": "Large counters and safe paper shapes, prepared sharing text, a fictional room map and dated classroom event cards.",
      "math": [
        "Open Connect numbers and shapes and identify what the problem asks: a quantity, a shape feature or a comparison. Choose counters or a shape model that fits the question.",
        "Count a small collection of shape pieces once each and explain the total. Distinguish the number of pieces from the number of sides on one piece.",
        "Compare two models using shape names and position words. Turning a triangle changes its orientation but not its three straight sides.",
        "Make a small picture using a stated number of safe paper shapes and describe it to a partner. Check the count and shape choices against the instructions.",
        "Use Connect numbers and shapes review and explain an unfamiliar mixed example. Record whether the child selects a suitable model instead of applying one rule to everything."
      ],
      "reading": [
        "Open Share writing and listen and prepare hop, run, sit and big. Read the short first-person note with a grown-up before creating a personal or fictional note.",
        "Choose one sentence to share aloud or through a grown-up reader. The child can point, dictate or use another comfortable communication method.",
        "Listen to a partner share a short note and restate one detail they actually said. Ask a relevant question without taking over their story or guessing private information.",
        "Revise one unclear detail in the child\u2019s note after listener feedback. Keep the original version so the child can explain what became clearer.",
        "Use Share writing and listen review and share the revised note if comfortable. Record authorship, reading help and listening response separately from multiple-choice answers."
      ],
      "writing": [
        "Draw a map of a fictional room or shared space, using simple symbols for two landmarks. Explain that symbols stand for places and need not match actual sizes.",
        "Add a route between the landmarks and dictate directions using position words. Ask a partner to trace the route on the drawing rather than walking an unsafe path.",
        "Choose two dated or sequenced fictional event cards for the same space. Write or dictate which came first and name the clue supporting the order.",
        "Ask a partner to follow the map and event sequence, then revise an unclear arrow or label. Distinguish where an event happened from when it happened.",
        "Present the map with a short before-and-after story supported by the cards. State one detail the cards do not reveal instead of inventing it as a fact."
      ],
      "inquiry": [
        "Open Use a map and clues about the past with a grown-up and fictional room/event cards. Avoid private home layouts or personal identifying details.",
        "Locate two landmarks on the map and describe their relative positions. Use an agreed symbol key so another person can interpret the drawing.",
        "Place two event cards in order using a stated date or explicit before/after clue. Picture appearance alone may not show which event happened first.",
        "Connect an event card to its mapped location and explain the separate where and when clues. Name any missing information rather than guessing a precise date.",
        "Use the map-and-past checks and revise one route or sequence explanation. Observe the child\u2019s source use and spatial language beyond the quiz selection."
      ]
    },
    {
      "materials": "Dated math and reading samples, selected counters or shapes, investigation records and materials for a small portfolio.",
      "math": [
        "Open Share your math strategies and choose a dated example the child actually tried. Keep the original answer, model and recorded adult help rather than creating a perfect replacement.",
        "Ask the child to explain one strategy using counters, a drawing or words. A grown-up may scribe the explanation while marking which ideas came from the child.",
        "Revisit the same concept with a different suitable example after a break. Record whether the child needed a model, worked together or tried independently.",
        "Compare the two attempts and choose one strength and one specific next practice. Do not call the whole year mastered because one familiar problem was solved.",
        "Use Share your math strategies review and save the evidence with a dated next-step note. The portfolio supports discussion and future planning, not a completion certificate."
      ],
      "reading": [
        "Open Choose reading work and a next step and prepare cat, map, sun and help. Read the reflection example and discuss how help can be recorded honestly.",
        "Choose an actual reading or writing sample with its date and task. Mark words prepared beforehand, adult reading help and any parts the child did independently.",
        "Revisit one suitable reading target after a break and note what happened. Use a fresh example when appropriate so practice of one item is not confused with transfer.",
        "Listen to the child name one useful strategy and one thing to practise next. A grown-up may suggest choices without replacing the child\u2019s own observation.",
        "Use Choose reading work and a next step review and save a short dated plan. Record oral reading and meaning separately; browser listening does not score pronunciation accuracy."
      ],
      "writing": [
        "Select one earlier drawing or dictated sentence and keep its date and context. Explain why it was chosen using a concrete detail rather than saying only it is best.",
        "Choose one place to add a clearer label, event or observation. Make a revised version while retaining the original so changes can be compared honestly.",
        "Dictate or write a sentence explaining the revision and any adult help. Keep spelling assistance distinct from the child\u2019s choice of idea or evidence.",
        "Share the two versions with a willing listener and respond to one relevant question. An alternative communication method or grown-up reader is welcome.",
        "Assemble a small portfolio page naming a strength, a question and a next activity. Do not label a single polished sample as proof of complete kindergarten learning."
      ],
      "inquiry": [
        "Open Choose evidence and a next investigation with a grown-up and the saved map, paper-test or shared-space records. Choose actual dated work rather than inventing a successful result.",
        "Identify the question, prediction and observation in one investigation record. Mark missing information as missing instead of adding it as if it had been observed.",
        "Use a setup picture or map to explain where the test happened and the sequence of steps. State which details came from the child and which from adult notes.",
        "Choose a safe next observation or repeat that could answer one remaining question. Explain what should stay similar and what new evidence would be useful.",
        "Use the evidence-and-next-step checks and save the planned revisit with a date. The record supports further learning; it is not a claim that every investigation skill is mastered."
      ]
    }
  ],
  [
    {
      "materials": "Large counters or a twenty-frame, pond information text, earlier safe paper-bridge records and writing tools.",
      "math": [
        "Open Add and subtract within twenty and read each story to identify whether quantities join or leave. Build the starting amount before choosing a strategy.",
        "Solve an addition by counting on or making a familiar group such as ten. Show the chosen strategy with a model and explain how it matches the story.",
        "Solve a subtraction and check by combining the removed and remaining parts. Keep the starting whole clear when the quantities cross ten.",
        "Compare two valid strategies for the same problem within twenty. Explain why both reach the same result without insisting on one method or speed.",
        "Use Add and subtract within twenty review and revisit an unfamiliar example later. Record the operation choice, strategy and adult support separately from completion."
      ],
      "reading": [
        "Open Read a new text for meaning and prepare pond, fish, shade and edge. Identify prior familiarity before adult preparation so a supported reading is not mislabeled independent.",
        "Read the pond information selection and name its main topic. Point to a sentence about plants or shelter that helps explain the topic.",
        "Locate the detail about shade and explain its meaning in this selection. Distinguish a stated fact from an imagined pond detail not provided by the text.",
        "Ask a new question and check whether the selection answers it. Explain when another source is needed instead of assuming the short text contains everything.",
        "Use Read a new text for meaning review and give the topic plus a supporting detail orally. Keep decoding assistance, recall and independent transfer observations separate."
      ],
      "writing": [
        "Choose the original and revised paper-bridge records and label their dates or sequence. Draw a setup map including the fixed gap and test-block position.",
        "Write a sentence naming the design feature changed and the reason for changing it. Connect the reason to an actual earlier trial rather than a hoped-for success.",
        "Add a comparison of the two trial outcomes with enough conditions to interpret it. Include a failed result and note adult construction or recording help.",
        "Ask a partner to follow the evidence from map to design to outcome. Revise a vague pronoun, missing label or overbroad claim that makes the explanation unclear.",
        "Present the revised account and one reasonable next test. State that a classroom model does not establish the safety or durability of a real bridge."
      ],
      "inquiry": [
        "Open Explain an improved model with a grown-up and review the safe paper-bridge records. If a repeat is needed, use low stable supports and the same large light block.",
        "Locate the original goal and actual trial result. Explain how that evidence led to one change, distinguishing the proposed benefit from what was later observed.",
        "Compare the revised test under similar gap and loading conditions. Record whether it helped, did not help or needs another trial before a firm conclusion.",
        "Use a setup map and short trial timeline to show how evidence was collected. An ordered record supports explanation but does not itself prove why a change worked.",
        "Use the improved-model checks and identify one limitation or untested condition. Never stand on a model or use heavy loads to imitate a full-sized bridge."
      ]
    },
    {
      "materials": "Tens-and-ones models, safe paper shapes, portfolio text and dated fictional community-story cards with a simple map.",
      "math": [
        "Open Build a number-and-shape project and read the project requirements before selecting materials. Identify which quantities need tens and ones and which parts need shapes.",
        "Build a two-digit quantity using tens and ones and label what each group represents. Check the total against the project requirement rather than counting bundles as single objects.",
        "Add a geometry feature using safe paper shapes and describe defining sides or corners. Explain why color or orientation alone does not determine a shape name.",
        "Ask a partner to compare the project model with the stated number and shape requirements. Revise a misplaced unit, missing label or mismatched shape with an explanation.",
        "Use Build a number-and-shape project review and save a drawing plus the child\u2019s explanation. Record planning, representation and adult construction help separately."
      ],
      "reading": [
        "Open Build a reading and writing portfolio and prepare green, train, clap and stop. Read Lee\u2019s practice record and distinguish a modeled attempt from a later unmodeled one.",
        "Choose an actual dated reading or writing sample with a grown-up. Label the text or task, preparation given and who helped rather than selecting only the neatest result.",
        "Compare an earlier and later sample without assuming they had equal difficulty. Explain one observable change and one reason the evidence may be limited.",
        "Revisit a suitable task or unfamiliar example after a break and record the support used. A repeated practiced item does not alone establish broad independent mastery.",
        "Use Build a reading and writing portfolio review and choose one next step from the actual evidence. Keep the child\u2019s explanation separate from an adult interpretation."
      ],
      "writing": [
        "Arrange fictional community-story cards by their explicit dates and place their locations on a simple map. Record the source of each where and when detail.",
        "Write a short opening identifying the community problem in the supplied story. Do not add an unsupported motive or turn one character into a whole community stereotype.",
        "Add two sentences explaining the order of actions and the stated outcome. Use the map for location and timeline for sequence, keeping these functions distinct.",
        "Ask a partner to check each sentence against a card, map label or date. Revise an invented detail or unclear transition while preserving the source-supported meaning.",
        "Present the revised community story and one question the sources leave unanswered. Include the cards or labels that support the account rather than claiming complete history."
      ],
      "inquiry": [
        "Open Connect a map, timeline and community story using fictional cards with explicit dates and places. The activity needs no private family or neighborhood information.",
        "Use the map key to locate the story places and the dates to order the events. Explain why being farther left on a map does not mean an event happened earlier.",
        "Identify the stated shared problem, one action and its recorded outcome. Keep a character\u2019s stated reason distinct from a motive you merely imagine.",
        "Compare the account with the supplied evidence and mark a missing perspective or detail. A short fictional source set models inquiry, not a complete account of a real community.",
        "Use the map-timeline-story checks and propose one additional source that could answer a question. Record reasoning about sources separately from fluent oral presentation."
      ]
    },
    {
      "materials": "Dated math and literacy work, models for a selected revisit, investigation map/timeline records and portfolio materials.",
      "math": [
        "Open Present a math strategy portfolio and choose actual dated tasks showing different strategies. Preserve original attempts, corrections and the amount of adult help.",
        "Explain one number strategy and one model or geometry choice from the samples. Point to the work so the explanation can be checked rather than relying only on a score.",
        "Try a suitable unfamiliar example of a selected concept and record the first attempt before coaching. Afterwards discuss a strategy or correction without erasing the initial evidence.",
        "Compare samples while noting different task difficulty and preparation. Name an observed strength and a specific remaining need rather than averaging them into a mastery claim.",
        "Use Present a math strategy portfolio review and write a short revisit plan. Dates, support and actual explanations matter more than speed or the number of completed lessons."
      ],
      "reading": [
        "Open Review evidence and plan next steps and prepare book, look, plan and next. Read Jo\u2019s example of naming a topic but missing a supporting detail after helped reading.",
        "Locate what Jo could do and what still needed practice, citing the example. Explain why needing help or missing one detail does not make the whole attempt useless.",
        "Inspect an actual dated sample and separate decoding, comprehension and writing observations. Include task familiarity and adult prompts before interpreting a result.",
        "Choose a focused next activity, such as rereading to find a detail, and try it after a break. Record what changed without assuming the same result will hold for every new text.",
        "Use Review evidence and plan next steps review and save a dated plan with a later check. A portfolio and quiz provide evidence for planning, not independent curriculum certification."
      ],
      "writing": [
        "Choose one authentic investigation or community-story explanation and keep its sources. Identify a sentence that is well supported and one that needs clarification.",
        "Revise the unclear sentence using a precise noun, date or evidence reference. Preserve the first version and label any adult-provided wording or spelling.",
        "Add a concise limitation or unanswered question where the evidence is incomplete. Clear writing can acknowledge uncertainty instead of making the conclusion sound stronger.",
        "Share the original and revised versions and explain how feedback changed the page. Ask the listener to point to a source supporting one claim.",
        "Create a final portfolio note with a strength, a next writing goal and a planned revisit. Completion of the page does not establish mastery of all Grade 1 standards."
      ],
      "inquiry": [
        "Open Present evidence and improve a next-step plan with a grown-up. Select actual design trials or dated map/timeline work, retaining unsuccessful results and source labels.",
        "Explain the original question, method and outcome using the setup map and sequence record. Name what the evidence supports and what remains untested.",
        "Compare an earlier explanation with a revised one and point to the reason for the change. Distinguish a clearer explanation from new experimental evidence.",
        "Plan one safe follow-up with a concrete question and an observation to collect. An adult checks materials and conditions; no real-structure safety claim follows from a paper model.",
        "Use the evidence-presentation checks and save a dated next-step plan. Educator review and future observations remain necessary beyond this end-of-year practice collection."
      ]
    }
  ]
];
const inquiry=[
  {
    "id": "k1-inquiry-0-34",
    "grade": 0,
    "week": 34,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Repeat and compare a small investigation",
    "objective": "Compare an informal repeat with an earlier observation while preserving actual results.",
    "teach": "Review an earlier safe paper-and-water trial with a grown-up. On a protected tray, use two safe paper samples, a few adult-controlled drops and similar sample sizes and observation intervals. Keep water away from electrical items and let an adult handle spills. Record visible spreading or remaining water without tasting materials. Compare the repeat with the earlier dated record; agreement or difference is evidence, and informal conditions may vary.",
    "activity": "Draw the repeated setup and result, compare it with the earlier record and name one condition to record more carefully.",
    "questions": [
      {
        "question": "What helps compare a repeat with the earlier trial?",
        "options": [
          "Similar samples, amounts and observation intervals",
          "Changing every condition",
          "Keeping no record"
        ],
        "answer": 0,
        "explanation": "Similar conditions help make the comparison interpretable, though an informal trial can still vary."
      },
      {
        "question": "The repeat looks different from the first trial. What should happen?",
        "options": [
          "Erase the new result",
          "Keep both results and discuss the conditions",
          "Pretend they matched"
        ],
        "answer": 1,
        "explanation": "Both observations matter. Differences may suggest a condition to check or another careful repeat."
      },
      {
        "question": "What conclusion is supported by these small trials?",
        "options": [
          "Every paper behaves identically",
          "No more observations are useful",
          "A limited comparison of these samples and conditions"
        ],
        "answer": 2,
        "explanation": "The observations concern the tested samples and conditions rather than every type of paper."
      }
    ],
    "question": "What helps compare a repeat with the earlier trial?",
    "options": [
      "Similar samples, amounts and observation intervals",
      "Changing every condition",
      "Keeping no record"
    ],
    "answer": 0,
    "explanation": "Similar conditions help make the comparison interpretable, though an informal trial can still vary.",
    "minutes": 12,
    "order": 2250,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-34",
    "grade": 1,
    "week": 34,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Explain an improved model",
    "objective": "Connect a model-design revision to recorded evidence and describe its limitations.",
    "teach": "Review the original and revised safe paper-bridge records with a grown-up. Identify the goal, fixed gap, large light test block and changed paper feature. If a retest is needed, use low stable supports over a tray and the same light block; never stand on a model or use heavy loads. Compare actual outcomes, including failures, with a setup map and trial sequence. A brief model test cannot establish real-bridge safety or long-term reliability.",
    "activity": "Create an explanation connecting one revision to its evidence, with a setup map, trial timeline and one untested condition.",
    "questions": [
      {
        "question": "What should explain why the design changed?",
        "options": [
          "Only its new color",
          "A recorded problem or trial result",
          "An invented success"
        ],
        "answer": 1,
        "explanation": "A revision should connect to an actual goal or observed problem, not an invented result."
      },
      {
        "question": "Does a clearer explanation count as a new test result?",
        "options": [
          "Always",
          "Only when written neatly",
          "No, a new trial is different evidence"
        ],
        "answer": 2,
        "explanation": "Improving wording can clarify existing evidence without producing a new experimental observation."
      },
      {
        "question": "What does a successful classroom model test support?",
        "options": [
          "A limited result for that model and trial",
          "Safety of a full-sized bridge",
          "A guarantee it lasts forever"
        ],
        "answer": 0,
        "explanation": "The test concerns a small model and specific conditions; larger structures and durability remain untested."
      }
    ],
    "question": "What should explain why the design changed?",
    "options": [
      "Only its new color",
      "A recorded problem or trial result",
      "An invented success"
    ],
    "answer": 1,
    "explanation": "A revision should connect to an actual goal or observed problem, not an invented result.",
    "minutes": 12,
    "order": 2251,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-35",
    "grade": 0,
    "week": 35,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Use a map and clues about the past",
    "objective": "Use a simple map for location and explicit sequence clues for a fictional earlier event.",
    "teach": "Use a fictional room map: a table is on the left, a shelf on the right and a clear path between them. Draw and label symbols with a grown-up. Event card A says Before cleanup, a block box was on the path. Card B says After cleanup, the box was on the shelf. Use before/after wording to order the cards and the map to locate the box. These are invented classroom records, not private home information. The cards do not state who moved the box or an exact date.",
    "activity": "Draw the route and put the cards in order, explaining one location clue and one time-order clue.",
    "questions": [
      {
        "question": "What does the room map help show?",
        "options": [
          "Where places are",
          "The exact date",
          "Who moved the box"
        ],
        "answer": 0,
        "explanation": "A map represents locations. This map does not provide a date or identify the person moving the box."
      },
      {
        "question": "Which clue orders the two event cards?",
        "options": [
          "The paper color",
          "The words before and after cleanup",
          "Which card is larger"
        ],
        "answer": 1,
        "explanation": "The explicit before/after wording supplies sequence evidence, unlike decoration or card size."
      },
      {
        "question": "Do the cards tell who moved the block box?",
        "options": [
          "Yes, the teacher",
          "Yes, Sam",
          "No, no person is named"
        ],
        "answer": 2,
        "explanation": "The cards describe the box locations and sequence but do not identify who moved it."
      }
    ],
    "question": "What does the room map help show?",
    "options": [
      "Where places are",
      "The exact date",
      "Who moved the box"
    ],
    "answer": 0,
    "explanation": "A map represents locations. This map does not provide a date or identify the person moving the box.",
    "minutes": 12,
    "order": 2252,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-35",
    "grade": 1,
    "week": 35,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Connect a map, timeline and community story",
    "objective": "Combine location and dated-event evidence while identifying unanswered questions.",
    "teach": "Use this fictional classroom source set. Map: a reading shelf is left of a table, with a path between them. Card 1, May 3: the class notices a book basket blocking the path. Card 2, May 4: the class draws a plan placing the basket beside the shelf. Card 3, May 5: in a short trial, the path stays clear. Draw the map and order the dates. The cards model a shared-place story; they do not name every participant, explain every motive or prove future safety.",
    "activity": "Write a short source-supported story with a map and timeline, then name a question requiring another source.",
    "questions": [
      {
        "question": "What orders the three event cards?",
        "options": [
          "Their locations on the map",
          "Their May 3, May 4 and May 5 dates",
          "Their colors"
        ],
        "answer": 1,
        "explanation": "The stated dates give the sequence; location on a map does not determine when an event occurred."
      },
      {
        "question": "What outcome is actually recorded?",
        "options": [
          "The plan works forever",
          "Every classroom has the same problem",
          "The path stayed clear in a short trial"
        ],
        "answer": 2,
        "explanation": "The final card records a short trial result, not a guarantee for every future situation."
      },
      {
        "question": "Which question needs another source?",
        "options": [
          "Who suggested moving the basket?",
          "Was a plan drawn on May 4?",
          "Was the path blocked on May 3?"
        ],
        "answer": 0,
        "explanation": "The cards state the problem and plan dates but do not identify who proposed the idea."
      }
    ],
    "question": "What orders the three event cards?",
    "options": [
      "Their locations on the map",
      "Their May 3, May 4 and May 5 dates",
      "Their colors"
    ],
    "answer": 1,
    "explanation": "The stated dates give the sequence; location on a map does not determine when an event occurred.",
    "minutes": 12,
    "order": 2253,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-0-36",
    "grade": 0,
    "week": 36,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Choose evidence and a next investigation",
    "objective": "Use actual dated work to choose a focused future observation without claiming mastery.",
    "teach": "With a grown-up, choose an actual dated paper-test, map or shared-space record. Identify its question, prediction, observation and recorded adult help; mark missing information as missing. Use a setup drawing and sequence to explain what happened. Choose one safe next question and describe the evidence to collect, such as a comparable repeat with a condition recorded more carefully. Preserve unsuccessful attempts. A polished sample or completed quiz does not establish every investigation skill.",
    "activity": "Save a portfolio page with a dated sample, the child\u2019s explanation, support used and one concrete next observation.",
    "questions": [
      {
        "question": "What belongs in the evidence collection?",
        "options": [
          "Only invented perfect results",
          "Actual dated work with support recorded",
          "Only the neatest page without context"
        ],
        "answer": 1,
        "explanation": "Actual dated work and support information help explain what the child tried and what the record means."
      },
      {
        "question": "An earlier record lacks a result. What should we do?",
        "options": [
          "Invent one",
          "Copy a hoped-for outcome",
          "Mark it missing and plan an observation if useful"
        ],
        "answer": 2,
        "explanation": "Missing evidence should remain identified as missing, rather than being replaced by an invented observation."
      },
      {
        "question": "Which next step is specific enough to try?",
        "options": [
          "Repeat the two-paper test with the same small amounts and record what is seen",
          "Finish all science forever",
          "Get a perfect portfolio"
        ],
        "answer": 0,
        "explanation": "A concrete question, comparable setup and observation to record make a useful follow-up plan."
      }
    ],
    "question": "What belongs in the evidence collection?",
    "options": [
      "Only invented perfect results",
      "Actual dated work with support recorded",
      "Only the neatest page without context"
    ],
    "answer": 1,
    "explanation": "Actual dated work and support information help explain what the child tried and what the record means.",
    "minutes": 12,
    "order": 2254,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  },
  {
    "id": "k1-inquiry-1-36",
    "grade": 1,
    "week": 36,
    "subject": "scienceLab",
    "kind": "inquiry",
    "title": "Present evidence and improve a next-step plan",
    "objective": "Explain what selected records support and plan a focused follow-up using authentic evidence.",
    "teach": "Choose actual dated model trials or map/timeline work with a grown-up. Preserve sources, unsuccessful results and adult help. Explain the question, method and outcome using the setup map and ordered records. Compare an earlier and revised explanation, distinguishing clearer wording from newly collected evidence. Plan one safe follow-up question with an observation to collect and a later date to review it. An end-of-year portfolio supports planning, not independent certification or real-structure safety claims.",
    "activity": "Present a source-linked explanation and save a dated next-step plan naming the question, evidence needed and adult support.",
    "questions": [
      {
        "question": "Why keep unsuccessful trials in the portfolio?",
        "options": [
          "To explain limitations and revisions",
          "To make the work look worse",
          "Because every trial must fail"
        ],
        "answer": 0,
        "explanation": "Unsuccessful results provide evidence about limitations and the reasons a design or explanation changed."
      },
      {
        "question": "What is needed for a useful follow-up plan?",
        "options": [
          "Only a promise to improve",
          "A focused question and evidence to collect",
          "A claim that everything is mastered"
        ],
        "answer": 1,
        "explanation": "A focused question and observable evidence make the next activity concrete and its result discussable."
      },
      {
        "question": "Does finishing this portfolio prove all Grade 1 skills are mastered?",
        "options": [
          "Yes, automatically",
          "Only if there are many pages",
          "No, further observations and review are needed"
        ],
        "answer": 2,
        "explanation": "Selected work supports a limited interpretation. Broader skills need additional evidence and educator review."
      }
    ],
    "question": "Why keep unsuccessful trials in the portfolio?",
    "options": [
      "To explain limitations and revisions",
      "To make the work look worse",
      "Because every trial must fail"
    ],
    "answer": 0,
    "explanation": "Unsuccessful results provide evidence about limitations and the reasons a design or explanation changed.",
    "minutes": 12,
    "order": 2255,
    "standard": null,
    "reviewStatus": "educator-review-needed"
  }
];
if(root.WonderOpeningMonth)for(let grade=0;grade<2;grade++)root.WonderOpeningMonth.units[grade].push(...units[grade]);
root.WonderCurriculum.lessons.push(...inquiry);
for(const l of inquiry)Object.assign(root.WonderK1Year.weeks[l.grade][l.week-1],{inquiryLesson:l.id,status:'starter-activities'});
root.WonderBatch3436Plans={units,inquiry};
})(globalThis);
