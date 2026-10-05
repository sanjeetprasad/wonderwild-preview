(function(root){
'use strict';
// Original oral-language practice; whole-word narration is not phoneme assessment.
const words={cat:'🐈',hat:'🎩',sun:'☀️',dog:'🐕',log:'🪵',fish:'🐟',boat:'⛵',goat:'🐐',moon:'🌙',spoon:'🥄',star:'⭐',car:'🚗',tree:'🌳',bee:'🐝',cake:'🎂',snake:'🐍',mouse:'🐁',house:'🏠',sock:'🧦',map:'🗺️',milk:'🥛',ball:'⚽',bus:'🚌',cup:'☕',shell:'🐚',shoe:'👟',cheese:'🧀',chair:'🪑',frog:'🐸',flag:'🚩',duck:'🦆',door:'🚪',apple:'🍎',banana:'🍌',elephant:'🐘',butterfly:'🦋',rabbit:'🐇',pumpkin:'🎃',watermelon:'🍉'};
const modes={rhyme:'Rhyme pond',beats:'Clap the beats',start:'Starting sounds'};
// tuple: spoken target, options, correct option index, coaching explanation
const sets={
 rhyme:[
  ['cat',['hat','sun','dog'],0,'Cat and hat rhyme. Their endings sound the same.'],
  ['dog',['fish','log','sun'],1,'Dog and log rhyme. Listen to the ending of each word.'],
  ['boat',['cat','moon','goat'],2,'Boat and goat rhyme, even though they begin differently.'],
  ['moon',['spoon','hat','fish'],0,'Moon and spoon share the same ending sound.'],
  ['star',['bee','car','hat'],1,'Star and car rhyme. Listen to the whole ending.'],
  ['tree',['dog','bee','sun'],1,'Tree and bee rhyme. The beginning sounds differ.'],
  ['cake',['snake','fish','moon'],0,'Cake and snake share the same ending sounds.'],
  ['mouse',['car','log','house'],2,'Mouse and house rhyme. Say both words together.']
 ],
 beats:[
  ['sun',['1','2','3'],0,'Sun has one syllable: sun. Say it and clap once.'],
  ['apple',['1','2','3'],1,'Apple has two syllables: ap-ple. Clap twice.'],
  ['banana',['1','2','3'],2,'Banana has three syllables: ba-na-na. Clap three times.'],
  ['rabbit',['1','2','3'],1,'Rabbit has two syllables: rab-bit. Each syllable has a vowel sound.'],
  ['pumpkin',['1','2','3','4'],1,'Pumpkin has two syllables: pump-kin.'],
  ['elephant',['1','2','3','4'],2,'Elephant has three syllables: el-e-phant.'],
  ['butterfly',['1','2','3','4'],2,'Butterfly has three syllables: but-ter-fly.'],
  ['watermelon',['1','2','3','4'],3,'Watermelon has four syllables: wa-ter-mel-on.']
 ],
 start:[
  ['sun',['sock','map','fish'],0,'Sun and sock start with the same sound, written s. A grown-up can model it without adding an uh sound.'],
  ['map',['sun','milk','cat'],1,'Map and milk begin with the sound written m. Ask your grown-up to hum that starting sound.'],
  ['ball',['fish','sun','bus'],2,'Ball and bus begin with the sound written b. A grown-up can model the short sound.'],
  ['fish',['cat','sun','frog'],2,'Fish and frog start with the sound written f. Frog has another consonant sound after f.'],
  ['shell',['shoe','cat','ball'],0,'Shell and shoe start with the same sound. The letters sh work together for this sound.'],
  ['cheese',['sun','chair','fish'],1,'Cheese and chair start with the sound written ch. Ask your grown-up to model it.'],
  ['frog',['sun','flag','dog'],1,'Frog and flag begin with the same first sound, written f. Their second sounds differ.'],
  ['duck',['fish','ball','door'],2,'Duck and door start with the sound written d. A grown-up can model it briefly.']
 ]};
function questions(grade,mode){return (sets[mode]||[]).slice(grade===0?0:4,grade===0?4:8);}
function create(grade,mode='rhyme'){return{grade:grade===0?0:1,mode:modes[mode]?mode:'rhyme',index:0,attempts:0,assisted:false,solved:false,done:false,results:[],message:'Listen, say the words together, then choose.'};}
function hint(s){if(s.done||s.solved)return false;s.assisted=true;s.message=questions(s.grade,s.mode)[s.index][3];return true;}
function answer(s,index){if(s.done||s.solved||!Number.isInteger(index))return false;const q=questions(s.grade,s.mode)[s.index];if(index<0||index>=q[1].length)return false;s.attempts++;if(index!==q[2]){hint(s);s.message='Let’s try again. '+s.message;return false;}s.solved=true;s.results.push({firstTry:s.attempts===1&&!s.assisted,attempts:s.attempts});s.message='You found it! '+q[3];return true;}
function next(s){if(!s.solved||s.done)return false;if(s.index===3){s.done=true;return true;}s.index++;s.attempts=0;s.assisted=false;s.solved=false;s.message='Listen, say the words together, then choose.';return true;}
function prompt(s,word){return s.mode==='rhyme'?`Which word rhymes with ${word}?`:s.mode==='beats'?`Say ${word}. How many syllables, or word beats, can you clap?`:`Which word starts with the same first sound as ${word}?`;}
function content(s){const tabs='<div class="sound-tabs" role="group" aria-label="Choose a sound game">'+Object.entries(modes).map(([key,title])=>`<button type="button" class="secondary" data-sound-mode="${key}" aria-pressed="${s.mode===key}">${title}</button>`).join('')+'</div>';
 if(s.done)return tabs+`<h3 tabindex="-1" id="sound-focus">You explored four sound puzzles!</h3><p>${s.results.filter(r=>r.firstTry).length} of 4 correct on the first try without a hint this visit. Hints and retries help us learn.</p><p>With a grown-up, find another word to try away from the screen.</p><button type="button" class="primary" data-sound-action="restart">Play again</button><p>Practice only · results are not saved or used as a reading-level score.</p>`;
 const q=questions(s.grade,s.mode)[s.index],ask=prompt(s,q[0]);return tabs+`<p>PUZZLE ${s.index+1} OF 4</p><h3 tabindex="-1" id="sound-focus">${ask}</h3><div class="sound-target"><span aria-hidden="true">${words[q[0]]}</span><strong>${q[0]}</strong><button type="button" class="secondary" data-read-word="${ask}">Hear the question</button><button type="button" class="secondary" data-read-word="${q[0]}">Hear ${q[0]}</button></div><div class="sound-options">${q[1].map((word,i)=>`<div class="sound-option"><button type="button" class="secondary sound-choice" data-sound-answer="${i}" ${s.solved?'disabled':''}><span aria-hidden="true">${words[word]||'👏'.repeat(Number(word))}</span><strong>${word}</strong></button><button type="button" class="secondary" data-read-word="${word}">Hear ${word}</button></div>`).join('')}</div><p role="status" class="number-feedback">${s.message}</p><button type="button" class="secondary" data-read-word="${s.message}">Hear Pip’s help</button><button type="button" class="secondary" data-sound-action="hint" ${s.solved?'disabled':''}>Help me</button>${s.solved?'<button type="button" class="primary" data-sound-action="next">'+(s.index===3?'Finish game':'Next puzzle →')+'</button>':''}`;
}
let active;
function render(grade){active=create(grade);return '<section class="panel sound-playground"><h2>Sound Playground</h2><p>Play together before reading words. Hear the pictures, rhyme, clap, and notice beginning sounds.</p><p class="coverage-note">Grown-up supported · word narration is optional. Model individual sounds yourself. No microphone scoring or pronunciation assessment. Switching games starts a fresh practice round.</p><div id="sound-playground">'+content(active)+'</div></section>';}
if(root.document)document.addEventListener('click',e=>{const b=e.target.closest('button'),slot=b?.closest('#sound-playground');if(!slot||!active)return;let changed=false;if(b.dataset.soundMode){active=create(active.grade,b.dataset.soundMode);changed=true;}else if(b.dataset.soundAnswer!==undefined){answer(active,Number(b.dataset.soundAnswer));changed=true;}else if(b.dataset.soundAction==='hint')changed=hint(active);else if(b.dataset.soundAction==='next')changed=next(active);else if(b.dataset.soundAction==='restart'){active=create(active.grade,active.mode);changed=true;}if(changed){slot.innerHTML=content(active);slot.querySelector(active.solved?'[data-sound-action="next"]':'#sound-focus')?.focus();}});
root.WonderSoundPlayground={create,questions,hint,answer,next,render,content};
})(globalThis);
