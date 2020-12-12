import React from 'react';
import * as Tone from 'tone';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Blog2 = () => {
  const piano = new Tone.Sampler({
    urls: {
      C4: 'C4.mp3',
      'D#4': 'Ds4.mp3',
      'F#4': 'Fs4.mp3',
      A4: 'A4.mp3'
    },
    release: 1,
    baseUrl: 'https://tonejs.github.io/audio/salamander/'
  }).toDestination();
  const playNote = () => {
    piano.triggerAttackRelease('C3', '8n');
  };

  return (
    <div>
      <div className='blog-container' id='blog-container-2'>
        <div className='top'>
          <div className='profile-img'></div>
          <div className='socials'>
            <div className='git-hub'>
              <a href='https://github.com/erictarter' target='_blank'>
                <i className='fab fa-github instagram-icon'></i>
              </a>
            </div>
            <div className='facebook'>
              <a href='https://facebook.com' target='_blank'>
                <i className='fab fa-facebook-square'></i>
              </a>
            </div>
            <div className='insta'>
              <a href='https://www.instagram.com/erictarter/' target='_blank'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='float-flex'>
          <div className='cover'></div>

          <a
            className='project-2-link'
            href='https://affectionate-booth-7c6f42.netlify.app/'
            target='_blank'
          >
            {' '}
            <b>View Project</b>
          </a>
        </div>
        <div className='blog-title'>Piano With Tone JS </div>
        <div className='date'>November 23, 2020</div>
        <div className='short-line'></div>
        <div className='para'>
          Making this Piano Project with Tone JS (Web Audio Framework), was fun
          and pretty simple. This app can teach somone some basics of learning
          the piano. There are options to show and hear every major scale and
          chord. You can click on any note with the mouse to hear it. Also play
          notes and chords on the laptop keyboard. There are options to change
          sound effect and change duration of notes as well.
        </div>
        <div className='para'>
          <span className='lg-text'>
            <b>Structure:</b>
          </span>
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='piano-link-1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Piano Styling
            </Link>
          </span>
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='piano-link-2'
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
            >
              Triggering Piano Sounds
            </Link>
          </span>{' '}
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='piano-link-3'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Options/Sounds
            </Link>
          </span>{' '}
        </div>
        <div className='section-title' id='piano-link-1'>
          Piano Styling
        </div>
        <div className='para'>
          I took a <b>grid</b> style approach in designing the piano. The{' '}
          <b>piano-container</b> <span className='blue'>display</span> is set to{' '}
          <span className='orange'>grid</span>.{' '}
          <span className='blue'>Grid-template-columns</span> is set to{' '}
          <span className='orange'>(1fr, 1.3fr, 1fr, 1.3fr, 1fr)</span>. This
          will span the whole length of the keyboard. Each 1fr taking up three{' '}
          <b>white notes</b> with two <b>black notes</b> inside. Each 1.3fr
          taking up four <b>white notes</b> with three <b>black notes</b>{' '}
          inside. The black frame of the piano is simply a{' '}
          <span className='blue'>border</span>. Left and right set to{' '}
          <span className='orange'>3rem solid black</span>. Top border set to a
          thick <span className='orange'>5rem</span>. Each one of these grid
          items <span className='blue'>display</span> is also set{' '}
          <span className='orange'>grid</span>. The items with 3 white notes{' '}
          <span className='blue'>grid-template-columns</span> is{' '}
          <span className='orange'>repeat(3, 1fr)</span>. The image below
          highlights an item where the{' '}
          <span className='blue'>grid-template-columns</span> is set to{' '}
          <span className='orange'>repeat(4, 1fr)</span> evenly spacing out the{' '}
          <b>white notes</b>.
        </div>
        <div className='full-img-ss-4'></div>
        <div className='para'>
          What about the <b>black notes</b>? The black notes{' '}
          <span className='blue'>position</span> is set to{' '}
          <span className='orange'>absolute</span> and each parent div element
          is <span className='orange'>relative</span>. This makes it so the
          black arent apart of the <b>grid</b>, and placed precisely inside the
          element. There are five classes needed for all the <b>black notes</b>
          (only differ in left position). Here's what one of them looks like.
          <div className='sample-code'>
            <code>{`
            .black-1 {
            `}</code>
            <br />
            <code className='ml-1'>{`
  position: absolute;

            `}</code>
            <br />{' '}
            <code className='ml-1'>{`
  left: 24.5%;

            `}</code>
            <br />{' '}
            <code className='ml-1'>{`
  width: 14%;

            `}</code>
            <br />{' '}
            <code className='ml-1'>{`
  height: 6rem;

            `}</code>
            <br />{' '}
            <code className='ml-1'>{`
  background: black;

            `}</code>
            <br />{' '}
            <code className='ml-1'>{`
  border: 3.5px solid grey;

            `}</code>
            <br />
            <code className='ml-1'>{`
  border-bottom-color: rgb(52, 52, 52);

            `}</code>
            <br />
            <code className='ml-1'>{`
  border-top-color: white;
            `}</code>
            <br />
            <code>{`}`}</code>
          </div>
        </div>
        <div className='section-title' id='piano-link-2'>
          Triggering Piano Sounds
        </div>
        <div className='para'>
          First lets bring in the Tone JS framework. To do this, go into your
          terminal and simply use this command.
        </div>
        <div className='sample-code'>
          <code>{`npm install tone`}</code>
        </div>
        <div className='para'>
          To bring in a sound, create an object and choose the sound. In the
          below expample. We create a <b>sampler</b>{' '}
          <span className='blue'>instance</span> which is a piano sound.
        </div>
        <div className='sample-code'>
          <code>{`const piano = new Tone.Sampler().toDestination();`}</code>
        </div>
        <div className='para'>
          To trigger a sound, use this function called{' '}
          <b>triggerAttackRelease</b>. This takes two arguments. First is the
          note you want to be played. Second is the duration of the note. To
          play <b>middle C</b>(middle note on a piano), This would be called.
          Using the instance example above.
        </div>
        <div className='sample-code'>
          <br />
          <code>{`piano.triggerAttackRelease("C3", "8n");`}</code>
        </div>
        <div className='para'>The button below triggers the above code.</div>
        <button className='piano-sound' onClick={playNote}>
          Play Middle C
        </button>
        <div className='para'>
          In this app, there are four ways to trigger the Tone JS to make sound.{' '}
          <br />
          1. Clicking on notes. <br />
          2. Keydown events. <br />
          3. Selecting a chord. <br />
          4. Selecting a scale.
        </div>
        <div className='para'>
          How do we get sound out of clicking notes? First lets target all the{' '}
          <b>white</b> notes in <b>DOM</b>. I do that by using{' '}
          <span className='blue'>querySelectorAll</span>. This returns a{' '}
          <b>node list. </b>To loop through a <b>node list</b>, I use the{' '}
          <span className='blue'>forEach</span> method. The black notes are
          targeted the same way.
          <div className='sample-code'>
            <code>{`
          const whiteNotes = document.querySelectorAll ('.white');
          `}</code>
            <br />
            <code>{`
          const blackNotes = document.querySelectorAll ('.black');    
          `}</code>
          </div>
          <div className='para'>
            Here is a part of what the piano <b>HTML</b> looks like.
          </div>
          <div className='sample-code'>
            <code>{`
          <div class="c3-e3">
          `}</code>
            <br />
            <code className='ml-1'>{`
 <div class="white" id="c3"></div>
          `}</code>
            <br />{' '}
            <code className='ml-1'>{`
<div class="black-1 black" id="c#3"></div>
          `}</code>
            <br />{' '}
            <code className='ml-1'>{`
<div class="white" id="d3"></div>
          `}</code>
            <br />{' '}
            <code className='ml-1'>{`
<div class="black-2 black" id="d#3"></div>
          `}</code>
            <br />{' '}
            <code className='ml-1'>{`
        <div class="white" id="e3"></div>
          `}</code>
            <br />
            <code>{`
      </div>
          `}</code>
          </div>
        </div>
        <div className='para'>
          Each note in these <b>node lists</b> has a specific <b>ID</b>, which
          is the first argument when the <b>triggerAttckRelease</b> is called.
          The second argument is whatever is selected by the user(
          <b>duration</b> selection in the top right of screen).
        </div>
        <div className='sample-code'>
          <code>{`
        whiteNotes.forEach(wn => {
        `}</code>
          <br />
          <code className='ml-1'>{`
          wn.addEventListener('click', async e => {
          `}</code>
          <br />
          <code className='ml-2'>
            {`let note = e.target.id.toUpperCase();`}
          </code>
          <br />
          <code className='ml-2'>{`await Tone.start();`}</code>
          <br />
          <code className='ml-2'>
            {`sound.triggerAttackRelease (note, duration);`}
          </code>
          <br />
          <code className='ml-1'>{`});`}</code>
          <br />
          <code className>{`});`}</code>
        </div>
        <div className='para'>
          When <b>Tone</b> is triggered by an event listener(click or keydown),{' '}
          <span className='blue'>Tone.start()</span> returns a <b>promise</b>.
          Resulting in audio only when the <b>promise</b> is resolved.
        </div>
        <div className='para'>
          The next goal is to use the computer key board as a music playing
          device. In the <b>window object</b>, each key board character has a
          <b> key code</b>. I put these <b>key codes</b> into an object where
          the <span className='blue'>keys</span> are the <b>key codes</b>. The{' '}
          <span className='orange'>values</span> are set to the <b>ID</b> of a
          specific note. Key down events will call the same{' '}
          <b>triggerAttckRelease</b> function. However the first argument(note
          ID) will be different.
        </div>
        <div className='sample-code'>
          <code>{`
          window.addEventListener ('keydown', async e => {
        `}</code>
          <br />
          <code className='ml-1'>
            {`
            await Tone.start();
            `}
          </code>
          <br />
          <code className='ml-1'>
            {`
            fetch('keyCodes.json')
            `}
          </code>
          <br />
          <code className='ml-2'>
            {`
    .then(response => response.json())
            `}
          </code>
          <br />
          <code className='ml-2'>
            {`
    .then(data => {
            `}
          </code>
          <br />
          <code className='ml-3'>
            {`
sound.triggerAttackRelease (data[e.keyCode], duration);
            `}
          </code>
          <br />
          <code className='ml-1'>
            {`
            });
            `}
          </code>
          <br />
          <code>
            {`
            });
            `}
          </code>
        </div>
        <div className='para'>
          Selecting a major chord, will trigger a chord to play. The notes of
          the chord will also be highlighted on the piano keys. The event that
          is listened for in selecting is <b>change</b>.
          <div className='sample-code'>
            <code>{`
            chordsSelect.addEventListener ('change', async e => {
            `}</code>
            <br />
            <code className='ml-1'>{`
            await Tone.start();
            `}</code>
          </div>
        </div>
        <div className='para'>
          We have a <b>list</b> of <b>objects</b> where the keys are the name of
          the chord(ex. "G"). The values are a list of the notes in the
          chord(ex. ["G", "B", "D"]). Lets loop through these chords to get the
          notes we want. The below code snippet is within the scope as the above
          snippet.
        </div>
        <div className='sample-code'>
          <code className='ml-1'>{`
          let notes = [];
          `}</code>
          <br />
          <code className='ml-1'>{`
  playChords.map(i => {
          `}</code>
          <br />
          <code className='ml-2'>{`
    if (i[e.target.value]) { // FIND CHORD SELECTED
          `}</code>
          <br />
          <code className='ml-3'>{`
      i[e.target.value].map(n => { // GET NOTES IN CHORD
          `}</code>
          <br />
          <code className='ml-4'>{`
        notes.push(n);
          `}</code>
          <br />
          <code className='ml-3'>{`
        });
          `}</code>
          <br />
          <code className='ml-2'>{`
        });
          `}</code>
        </div>
        <div className='para'>
          Now we have the notes. Lets trigger the sound and highlight the notes.
          To spread out the notes, I will use the{' '}
          <span className='blue'>setTimeout</span> method. (Below code snippet
          still within function scope).
        </div>
        <div className='sample-code'>
          <code className='ml-2'>{`
              sound.triggerAttackRelease (notes[0], duration);
            `}</code>
          <br />
          <code className='ml-2'>{`
    document.getElementById (notes[0].id).style.background = 'rgb(255, 214, 138)';
            `}</code>
          <br />
          <br />
          <code className='ml-2'>{`
  setTimeout(() => {
            `}</code>
          <br />
          <code className='ml-3'>{`
sound.triggerAttackRelease (notes[1], duration);
            `}</code>
          <br />{' '}
          <code className='ml-3'>{`
document.getElementById (notes[1].id).style.background = 'rgb(255, 214, 138)';
            `}</code>
          <br />
          <code className='ml-2'>
            {`
              }, 100);
            `}
          </code>
          <br />
          <code className='ml-2'>{`
  setTimeout(() => {
            `}</code>
          <br />
          <code className='ml-3'>{`
sound.triggerAttackRelease (notes[2], duration);
            `}</code>
          <br />{' '}
          <code className='ml-3'>{`
document.getElementById (notes[2].id).style.background = 'rgb(255, 214, 138)';
            `}</code>
          <br />
          <code className='ml-2'>
            {`
              }, 200);
            `}
          </code>
          <br />
          <code>
            {`
            });
            `}
          </code>
        </div>
        <div className='para'>
          There is no need to go over the <b>scale select</b> functionality.
          There are only two differences between the way the scales and chords
          work. There are more notes to trigger (8 instead of 3). The other is
          the <span className='blue'>setTimeout</span> intervals are longer
          between notes (200/1000 of a second instead of 100/1000 second).
        </div>
        <div className='section-title' id='piano-link-3'>
          Options/Sounds
        </div>
        <div className='para'>
          There are four sounds to choose from in this app. Piano is default and
          best sounding, but I added others to change it up. Here are the four
          sounds brought in from the <b>Tone JS</b> library.
        </div>
        <div className='sample-code'>
          <code>{`
          const synth = new Tone.Synth().toDestination();
          `}</code>
          <br />
          <code>{`
const synthA = new Tone.FMSynth().toDestination();
          `}</code>
          <br />
          <code>{`
const synthB = new Tone.AMSynth().toDestination();
          `}</code>
          <br />{' '}
          <code>{`
const piano = new Tone.Sampler().toDestination();
          `}</code>
          <br />
        </div>
        <div className='para'>
          We have a <b>global</b> variable called{' '}
          <span className='blue'>sound</span> that is used whenever a note is
          triggered
        </div>
        <div className='sample-code'>
          <code>{`
          let sound = piano;
          `}</code>
        </div>
        <div className='para'>
          To change the sound effect is very easy. When the sound is selected,
          it is listening for <b>change</b>. This will set the{' '}
          <span className='blue'>sound</span> variable to what is selected. In
          this scenario, I used a <b>switch statement</b>.
        </div>
        <div className='sample-code'>
          <code>{`
          soundSelect.addEventListener ('change', e => {
          `}</code>
          <br />
          <code className='ml-1'>{`
            switch (e.target.value) {
          `}</code>
          <br />
          <code className='ml-2'>{`
              case 'piano':
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                sound = piano;
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                break;
          `}</code>
          <br />
          <code className='ml-2'>{`
              case 'synth':
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                sound = synth;
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                break;
          `}</code>
          <br />{' '}
          <code className='ml-2'>{`
              case 'voilin':
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                sound = synthA;
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                break;
          `}</code>
          <br />{' '}
          <code className='ml-2'>{`
              case 'synth-alt':
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                sound = synthB;
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
                break;
          `}</code>
          <br />
          <code className='ml-2'>{`
    default:
          `}</code>
          <br />{' '}
          <code className='ml-3'>{`
      sound = piano;
          `}</code>
          <br />
          <code className='ml-1'>{`}`}</code>
          <br />
          <code>
            {`
            });
            `}
          </code>
        </div>
        <div className='para'>
          The other option is changing the duration of notes. I included five
          different durations to choose from. default is set to an{' '}
          <b>8th note</b>. We have a <b>global</b> variable called{' '}
          <b>duration</b> that changes when we select a different duration. This
          variable is used as the second argument when{' '}
          <b>triggerAttackRelease()</b> is called.
        </div>
        <div className='sample-code'>
          <code>{`
          let duration = '8n';
          `}</code>
        </div>
        <div className='para'>
          This variable is changed the same way as the <b>sound</b> variable.
        </div>
        <div className='sample-code'>
          <code>{`
          durationSelect.addEventListener ('change', e => {
          `}</code>
          <br />
          <code className='ml-1'>{`
               switch (e.target.value) {
             `}</code>
          <br />
          <code className='ml-2'>{`
              case 'whole':
          `}</code>
          <br />
          <code className='ml-3'>{`
                duration = '1n';
          `}</code>
          <br />
          <code className='ml-3'>{`break;`}</code>
          <br />
          <code className='ml-2'>{`
              case 'half':
          `}</code>
          <br />
          <code className='ml-3'>{`
                duration = '2n';
          `}</code>
          <br />
          <code className='ml-3'>{`break;`}</code>
          <br />{' '}
          <code className='ml-2'>{`
              case 'quarter':          
          `}</code>
          <br />
          <code className='ml-3'>{`
                duration = '4n';
          `}</code>
          <br />
          <code className='ml-3'>{`break;`}</code>
          <br />{' '}
          <code className='ml-2'>{`
              case 'eighth':
          `}</code>
          <br />
          <code className='ml-3'>{`
                duration = '8n';
          `}</code>
          <br />
          <code className='ml-3'>{`break;`}</code>
          <br />{' '}
          <code className='ml-2'>{`
              case '16th':
          `}</code>
          <br />
          <code className='ml-3'>{`
                duration = '16n';
          `}</code>
          <br />
          <code className='ml-3'>{`break;`}</code>
          <br />
          <code className='ml-2'>{`default:`}</code>
          <br />
          <code className='ml-3'>{`
                duration = '8n';
          `}</code>
          <br />
          <code className='ml-1'>}</code>
          <br />
          <code>{`});`}</code>
        </div>
        <div className='section-title'>End</div>
        <div className='para'>
          This was a cool project to make, and also fun play around on the
          keyboard. I might add more features to it later. Another idea would be
          to program a song to play. Could also improve how it looks on mobile.
          Right now the keys are too small to play. Thank you for reading.
        </div>
        <div className='footer'>
          <div>&copy;Eric Tarter 2020</div>
        </div>
      </div>
    </div>
  );
};

// DURATION
// SMOOTH SCROLLING
