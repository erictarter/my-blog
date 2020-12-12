import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Blog1 = () => {
  return (
    <div>
      <div className='long-line'></div>
      <div className='blog-container' id='blog-container-1'>
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
            className='project-1-link'
            href='https://goofy-ritchie-d401d6.netlify.app/'
            target='_blank'
          >
            {' '}
            <b>View Project</b>
          </a>
        </div>
        <div className='blog-title'>Building a Sports Betting App </div>
        <div className='date'>November 21, 2020</div>
        <div className='short-line'></div>
        <div className='para'>
          Creating a sports betting application has been a goal of mine since I
          started programming. I had an idea of how this project would look
          before I started, However many changes were made in the middle of
          coding. Those adjustments were needed as I realized the variety of
          bets there are in sports betting. I learned alot making this project.
          I am happy with it for now.
        </div>
        <div className='para'>
          <span className='lg-text'>
            <b>Structure:</b>
          </span>
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='link-1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Design/Animations
            </Link>
          </span>
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='link-2'
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
            >
              Betting/Events Functionality
            </Link>
          </span>{' '}
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='link-3'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Mid-project Changes
            </Link>
          </span>{' '}
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='link-4'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1250}
            >
              Forms/Local Storage
            </Link>
          </span>{' '}
          <br />
        </div>
        <div className='section-title' id='link-1'>
          Design/Animations
        </div>
        <div className='para'>
          When you load the app, you see a Nav bar, main container, and a sticky
          footer. On the left side of the nav, there is a hamburger menu icon.
          Clicking that triggers the first important animation. Actually two
          animations are happening at the same time when it is clicked. First,
          it shrinks the main-container and pushes it over 50% of the container
          width.
          <br />
          <div className='sample-code'>
            <code>{`
@keyframes shrink {
  0% {
    transform: scale(1);
    width: 100%;
  }
  100% {
    transform: scale(0.5);
    width: 50%;
    margin-left: 50%;
  }
}
`}</code>
          </div>
          In the second part of this, there is side menu container that pops
          out. It displays other sports you can filter through. When the menu
          icon is clicked, this selector gets a class added (through JS event).
          This sets the display property from{' '}
          <span className='orange'>none</span> to{' '}
          <span className='orange'>block</span> and triggers the <b>pop in </b>
          animation. The <b>pop in</b> animation moves the side menu from -50%
          margin-left (completely off the viewport) to 0% margin-left. This
          takes up half of the screen.
          <div className='sample-code'>
            <code>{`
       @keyframes pop-in-anima {
        0% {
          left: -50%;
        }
        100% {
          left: 0;
        }
      }

`}</code>
          </div>
          There are <b>pop out</b> and <b>grow</b> animations that are executed
          when the side menu is exited. <b>pop out</b> and 'grow' do the exact
          opposite as
          <b> pop in</b> and <b>shrink</b>. This brings the page back to the
          original layout. It is triggered by either clicking the x icon or the
          menu icon again.
          <div className='sample-code'>
            <code>{`
@keyframes pop-out-anima {
  0% {
    left: 0;
  }
  100% {
    left: -50%;
  }
}

`}</code>
          </div>{' '}
          <div className='sample-code'>
            <code>{`
@keyframes grow {
  0% {
    transform: scale(0.5);
    margin-left: 50%;

  }
  100% {
    transform: scale(1);
    margin-left: 0%;
  }
}

`}</code>
          </div>
          On smaller viewports (600px or less), these animations are slightly
          altered. The main container get push out completely, and the side menu
          covers the entire width.
        </div>
        <div className='para'>
          Lets move to the main container layout. The main is the parent to each
          event category (football, basketball, ect..). Each event is contained
          in a div with a <span className='blue'>display</span> of
          <span className='orange'> flex</span> and a{' '}
          <span className='blue'>flex-direction </span> of{' '}
          <span className='orange'>column</span>. Within the flex container are
          three more divs with a <span className='blue'>display</span> of{' '}
          <span className='orange'>grid </span>. Each of these three divs{' '}
          <span className='blue'>grid-template-columns</span> are set to{' '}
          <span className='orange'>repeat(4, 1fr)</span>, which evenly spaces
          out four grid items to each take up 1/4 of the column.
          <div className='gr-3'>
            <div className='sample-code'>
              <code>{`
.nfl-game {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border: 1px solid grey;
  padding: 0.5rem;
}

`}</code>
            </div>
            <div className='sample-code'>
              <code>{`

.team-1 {
  padding: 0.4rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.3rem;
}
`}</code>
            </div>
            <div className='img-ss'></div>
          </div>
          All of this game data is brought in by a Fetch Request. By using the
          map(high order array method), we loop through the data. The data is
          formated in JSON as a list of objects. Then that data is added to the
          HTML dynamically. Here's what it looks like in the JS file. With just
          this one function, all of the games are added to the page.
          <div className='sample-code'>
            <code>{`
fetchTeamSportData('nfl', nflContainer);
`}</code>
            <br />
            <br />
            <code>{`
function fetchTeamSportData(sport, cont)
`}</code>
            <br />
            <code className='ml-1 code-sm'>{`
              fetch(./data/{sport}.json)

`}</code>
            <br />
            <code className='ml-2'>{`
    .then(response => response.json())
`}</code>
            <br />
            <code className='ml-2'>{`.then(data =>
        `}</code>
            <br />
            <code className='ml-3'>{`
                  data.map(game => {
        `}</code>
            <br />
            <code className='ml-4'>{`
        if (data !== []) {
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
          cont.innerHTML += 
           `}</code>
            <br />{' '}
            <code className='ml-4'>{`
        <div class='date-time'>
        </div>
           `}</code>
            <br />
            <code className='ml-4'>{`
        {game.date.date} {game.date.time}
           `}</code>
            <br />
            <code className='ml-4'>{`
        </div>
           `}</code>
            <br />
            <code className='ml-4'>{`
        <div class="nfl-game" id=nfl-game>
           `}</code>
            <br />
            <code className='ml-4'>{`
        <div class="pholder">
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="empty"></div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="moneyline-pholder">Money</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="spread-pholder">Spread</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="spread-pholder">Spread</div
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <class="total-pholder">Total</>
        </div>
           `}</code>
            <br />{' '}
            <code className='ml-4'>{`
              </div>
           `}</code>
            <br />{' '}
            <code className='ml-4'>{`
        <div class="team-1">
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="nfl-team-name">{game.away.name}</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="money">{game.away.moneyline}</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="spread">{game.away.spread}</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="total">{game.away.total.slice(5)}</div>
           `}</code>
            <br />{' '}
            <code className='ml-4'>{`
        </div>
           `}</code>
            <br />{' '}
            <code className='ml-4'>{`
        <div class="team-2">
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="nfl-team-name">{game.home.name}</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="money">{game.home.moneyline}</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="spread">{game.home.spread}</div>
           `}</code>
            <br />{' '}
            <code className='ml-5'>{`
        <div class="total">{game.home.total.slice(5)}</div>
           `}</code>
            <br />{' '}
            <code className='ml-4'>{`

      </div>
           `}</code>
            <br />{' '}
            <code className='ml-4'>{`

;
     `}</code>
            <br />{' '}
            <code className='ml-5 code-sm-5'>{`

document.getElementById(no-matches-{sport}).style.display = 'none';
     `}</code>
            <br />{' '}
            <code className='ml-4'>{`
      }
           `}</code>
            <br />
            <code className='ml-3'>{`
    })
           `}</code>
            <br />{' '}
            <code className='ml-2'>{`
  );
           `}</code>
            <br />{' '}
            <code className='ml-1'>{`
}
           `}</code>
            <br />
          </div>
          At the bottom of the screen, there is a sticky footer with a{' '}
          <b>home </b>
          button, a <b>betslip</b> button, and a <b>open bets</b> button. The
          betslip button triggers another keyframes animation. Similar to the
          othe side menu animation, This makes betslip container slide in from
          the right side. The betslip container holds all the bets that are
          selected, but yet to be finalized. The open bets button has the same
          animation as the betslip button. The open bets container holds all the
          bets that are finalized. Both container use a grid layout for the
          games. <span className='blue'>grid-template-columns</span>{' '}
          <span className='orange'>repeat(2, 1fr)</span> for the betslip and{' '}
          <span className='blue'>grid-template-columns</span>{' '}
          <span className='orange'>repeat(4, 1fr)</span> for the open bets
          container.
          <br />
          That's all the detail I'll go into for the CSS/Animations part of this
          project.
        </div>
        <div className='section-title' id='link-2'>
          Betting/Events Functionality
        </div>
        <div className='para'>
          Lets move into some Java Script now. When a bet button is clicked
          (number under <b>money, spread, total</b>), that bet is added to the
          betslip container. Between that and what happens in the betslip
          container, is where most of the functions are.
        </div>
        <div className='para'>
          A couple things happen when a bet button is clicked. Inside the
          function, a <b>local</b> variable is created. I called this variable
          <b> betSelect</b>. <b>betSelect</b> is an object with 10 properties
          that will provide all of the information we need for a single bet. The
          <b> betSelect</b> object gets pushed to a <b>global</b> list called
          <b>betsSelected</b>. Some values of the <b>betSelect</b> object are
          taken and added to the <b>innerHTML</b> of the betslip container. Also
          a number appears at that footer where the betslip button is. This
          number shows how many bets are in the betslip.
          <div className='sample-code'>
            <code>{`let betSelect = {`}</code>
            <br />
            <code className='ml-1'>{`id : betsSelected.length,`}</code>
            <br />
            <code className='ml-1'>{`field : 'away',`}</code>
            <br />
            <code className='ml-1'>{`betType : e.target.classList,`}</code>
            <br />
            <code className='ml-1'>{`parlayOrStraight : typeOfBet,`}</code>
            <br />
            <code className='ml-1'>{`odds : e.target.innerText,`}</code>
            <br />
            <code className='ml-1'>{`selectedTeam : e.target,`}</code>
            <br />
            <code className='ml-1'>{`selectedTeamName : e.target.parentNode. children.innerText,`}</code>
            <br />
            <code className='ml-1'>{`
oponentName : e.target.parentNode. nextSibling.nextSibling. children[0].`}</code>
            <br />
            <code className='ml-1'>{`.innerText,`}</code>
            <br />
            <code className='ml-1'>{`
amount : 0,`}</code>
            <br /> <code className='ml-1'>{`winnings : 0 };`}</code>
          </div>
          <div className='sample-code'>
            <code>{`
betsSelected.push(betSelect);
              `}</code>
            <br />
            <code>{`
matchDetailsContainer.innerHTML +=
`}</code>
            <br />
            <code>{`
<div class="match-details" id={betsSelected.length}>
`}</code>
            <br />
            <code className='ml-1'>{`
<div class="match-details-odds dark">
`}</code>
            <br />
            <code className='ml-2'>{`
            <span class='remove-bet' id='remove-bet'><i class='fas fa-minus' `}</code>
            <br />
            <code className='ml-2'>{`
            id={betsSelected.length -1}></i></span>
            `}</code>
            <br />
            <code className='ml-2'>{`
{betSelect.selectedTeamName} {betSelect.odds}
            `}</code>
            <br></br>
            <code className='ml-2'>{`
<label class='bet-label' for='#single-bet'>amount</label>
            `}</code>
            <br></br>{' '}
            <code className='ml-2'>{`
<input type="number" name='single-bet' id="single-bet" class='single-bet'
            `}</code>
            <br></br>{' '}
            <code className='ml-2'>{`
min='1' max='500' value={betsSelected.value}
            `}</code>
            <br></br>
            <code className='ml-2'>{`
} placeholder=0>

;
`}</code>
            <br />
            <code className='ml-1'>{`
</div>
;
`}</code>
            <br />
            <code className=''>{`
</div>
;
`}</code>
          </div>
          <div className='full-img-ss'></div>
        </div>
        <div className='para'>
          Now that there is a bet or a few in the betslip, lets look in there.
          The first screen on the betslip will ask what kind of bet you want.
          There are two options, straight or parlay. Straight is simply betting
          a specific amount on each game/event. A parlay is betting one amount
          for all the games/events. The payout is higher for parlay but all of
          the bets have to be correct to win. In other words "bet a little, win
          a lot". I will explain exactly how it works in the next part.
        </div>
        <div className='para'>
          In the betslip, there are four things to do here. <br />
          1. Bet amount inputs can be changed. <br />
          2. An individual game can be removed from the betslip. <br />
          3. The whole bets slip can be cleared. <br />
          4. Place the bet.
        </div>
        <div className='para'>
          Remember the betSelect object? Well there is an <b>amount</b> value
          that gets changed to the value of the input. The input change triggers
          two more functions. One updates the{' '}
          <span className='blue'>innerHTML</span> of the bet cost. This is done
          by looping through the <b>betsSelected</b> list, adding all the amount
          values up. Then setting the <span className='blue'>innerText</span> to
          that number. The second function does a similar thing, but updates the
          winnings <span className='blue'>innerText</span> instead. However the
          winnings are calculated by the <b>amount</b> value and the odds of
          each bet.
          <div className='sample-code'>
            <code>{`
            function updateWinnings() {            
            `}</code>
            <br />
            <code className='ml-1'>
              {`
              betsSelected.map(i => {
            `}
            </code>{' '}
            <br />
            <code className='ml-2'>
              {`
                    let line = 100 / parseInt(i.odds.slice(1));
            `}
            </code>{' '}
            <br />
            <code className='ml-2'>
              {`
                    let betFave = parseFloat(line * i.amount).toFixed(2);
            `}
            </code>{' '}
            <br />
            <code className='ml-2'>
              {`
                    let add = parseFloat(betFave) + parseFloat(i.amount);
            `}
            </code>
            <br />
            <code className='ml-2'>
              {`
                    i.winnings = add;
            `}
            </code>{' '}
            <br />
            <code className='ml-1'>
              {`
              });
            `}
            </code>{' '}
            <br />{' '}
            <code>
              {`
            }
            `}
            </code>
          </div>
          <div className='para'>
            Next to each game bet, there is minus "-" icon. Clicking that will
            remove that specific event from the betslip. This is done by using a{' '}
            <b>for each</b> loop through the container. If the id of the{' '}
            <b>child node</b> matches the argument passed in, the element is
            removed.
            <div className='sample-code'>
              <code>{`
              function removeBetNum(r) {
              `}</code>
              <br />
              <code className='ml-1'>{`
                matchDetailsContainer.
              `}</code>
              <br />{' '}
              <code className='ml-1'>{`
                childNodes.forEach(i => {
              `}</code>
              <br />{' '}
              <code className='ml-2'>{`
                  if (i.id === r) {
              `}</code>
              <br />{' '}
              <code className='ml-3'>{`
                    i.remove();
              `}</code>
              <br />{' '}
              <code className='ml-2'>{`
                  }
              `}</code>
              <br />{' '}
              <code className='ml-1'>{`
                });
              `}</code>
              <br />
            </div>
          </div>
          <div className='para'>
            Clearing the betslip is very simple. Clicking the clear bets button
            sets the <b>matchDetailsContainer</b>{' '}
            <span className='blue'>innerHTML</span> to an empty string. Visually
            this clears the betslip. The <b>betsSelected</b> <b>global</b>{' '}
            variable needs to be set back to an empty array. Since{' '}
            <b>betsSelected</b> is a global variable, We can access it within
            the scope of the function called. The amount and winnings needs to
            be set to $0.00. Also the number showing the amount of bets (betslip
            button in the footer), needs to be set to 0 and dissapear.
            <div className='sample-code'>
              <code>{`
              clearBetsBtn.addEventListener
              `}</code>
              <br />
              <code>{`
              ('click', () => {
              `}</code>
              <br />
              <code className='ml-1'>{`
  cancelBet(0);    
             `}</code>
              <br />
              <code>{`
});
              
              `}</code>
              <br />
              <br />
              <code>{`
function cancelBet(time) {              
              `}</code>
              <br />
              <code className='ml-1'>{`
  numOfBets.innerText = 0;              
              `}</code>
              <br />
              <code className='ml-1'>{`
  cashAmount.innerText = $0.00;              
              `}</code>
              <br />
              <code className='ml-1'>{`
  cashWinnings.innerText = $0.00;              
              `}</code>
              <br />
              <code className='ml-1'>{`
  setTimeout(() => {              
              `}</code>
              <br />
              <code className='ml-2'>{` 
    betsSelected = [];
              `}</code>
              <br />{' '}
              <code className='ml-2'>{`
    matchDetailsContainer .innerHtml = '';         
                          `}</code>
              <br />{' '}
              <code className='ml-2'>{`
                          numOfBets.style.display = 'none';            
                                      `}</code>
              <br />
              <code className='ml-1'>{`
  }, time);
                                      
                                      `}</code>
              <br />
              <code>{`
}                                      
                                      `}</code>
            </div>
          </div>
          <div className='para'>
            When the "place bets button" is clicked, several conditional
            statements be met to proceed. This function checks if the user is
            logged in. It checks if the <b>betsSelected.length</b> is greater
            then 0. Also checks the <b>amount</b> of each <b>betSelect</b>{' '}
            object is greater then 0. Lastly it checks if the user has
            sufficient funds to place the wager. All of these conditionals must
            be true to proceed. When it proceeds, the page switches to a
            confirmation screen. Confirming the bet moves the bet information
            into the <b>open bets</b> container. That data gets added to local
            storage. Then the <b>betsSelected</b> list gets set back to empty
            list so the user gets a fresh betslip. If the user clicks cancel,
            the same function that clears the betslip runs.
          </div>
          <div className='section-title' id='link-3'>
            Mid-projects Changes
          </div>
          <div className='para'>
            Had to make changes to the functionality if the user chooses to make
            a parlay bet. I did not realize this until I did some research on
            parlaying. The individual game bets do not need inputs attached to
            them. Instead there should just be one input for all the games in a
            parlay. first step... remove all the game inputs
            <div className='sample-code'>
              <code>{`
function removeInp() {

              `}</code>
              <br />
              <code className='ml-1'>{`
  document.querySelectorAll              
              `}</code>
              <br />
              <code className='ml-1'>{`
  ('.match-details').forEach(i => {              
              `}</code>
              <br />
              <code className='ml-2'>{`
    let getInputs = document.getElementById('single-bet');           
              `}</code>{' '}
              <br />
              <code className='ml-2'>{`
    let label = document.querySelector('label');             
                          `}</code>
              <br />
              <code className='ml-2'>{`
    i.children[0] .removeChild(getInputs);
          
                          `}</code>{' '}
              <br />
              <code className='ml-2'>{`
                          i.children[0] .removeChild(label);
             
                                                `}</code>
              <br />
              <code className='ml'>{`
  });                                                
                                                `}</code>
              <br />
              <code>{`
  }                                               
                                                `}</code>
            </div>
          </div>
          Heres a few expamples in the app of how the math works out in a
          parlay. lets say we bet $10 on three bets against on the <b>spread</b>
          . Each bet for or against the <b>spread</b> is essentially a 50/50
          bet. that gives each of these games a value of 2
          <br />
          <b>bet amount</b> = $10
          <br />
          <b>multiplyer</b> = game1 x game2 x game 3
          <br />
          <b>payout</b> = $80
        </div>
        <div className='full-img-ss-1'></div>
        <div className='para'>
          Betting on the moneyline is a little more complicated. Lets do another
          wager with an amount of $10 on three games on the moneyline.
          <br />
          <b>game1(-120 favorite)</b> = 220{' '}
          <i className='fas fa-divide grey'></i> 120 = 1.83333
          <br />
          <b>game1(-270 favorite)</b> = 370{' '}
          <i className='fas fa-divide grey'></i> 270 = 1.3703
          <br />
          <b>game3(+240 underdog)</b> = 340{' '}
          <i className='fas fa-divide grey'></i> 100 = 3.4
          <br />
          <b>multiplyer</b> = 1.833333 x 1.3703 x 3.4 = 8.5415
          <br />
          <b>payout</b> = amount(10) x multiplyer(8.5415) = $85.42(rounded from
          85.415)
          <br />
          Here's a code snippet showing how the math is done. It checks if the
          type of bet is a <b>moneyline</b> bet. If it isn't the{' '}
          <b>multiplyer</b> gets multiplied by 2.
          <div className='sample-code'>
            <code>{`
            document.getElementById ('parlay-amount') .addEventListener('change', e => {
            `}</code>
            <br />
            <code className='ml-1'>
              {`
              if (e.target.value > 0) {
              `}
            </code>
            <br />
            <code className='ml-2'>
              {`
  parlayAmount = parseInt(e.target.value) .toFixed(2);
              `}
            </code>
            <br />
            <code className='ml-2'>
              {`
      let multiplyer = 0;
              `}
            </code>
            <br />
            <code className='ml-2'>
              {`
betsSelected.map(i => {
              `}
            </code>
            <br />
            <code className='ml-3'>
              {`
i.amount = parseInt(e.target.value);
              `}
            </code>
            <br />
            <code className='ml-3'>
              {`
let parseOdds = parseInt(i.odds.slice(1));
              `}
            </code>
            <br />
            <code className='ml-3'>
              {`
if (i.betType[0] === 'money') {
              `}
            </code>
            <br />
            <code className='ml-4'>
              {`
if (i.odds[0] === '+') {
              `}
            </code>
            <br />
            <code className='ml-5'>
              {`
multiplyer += parseOdds / 100 + 1;
              `}
            </code>
            <br />
            <code className='ml-4'>
              {`
              }
              `}
            </code>
            <br />
            <code className='ml-4'>
              {`
              if (i.odds[0] === '-') {
              `}
            </code>
            <br />
            <code className='ml-5'>
              {`
multiplyer += 100 / parseOdds + 1;
              `}
            </code>
            <br />
            <code className='ml-5'>
              {`
              }
              `}
            </code>
            <br />
            <code className='ml-3'>
              {`
              } else {
              `}
            </code>
            <br />
            <code className='ml-4'>
              {`
multiplyer += 2;
              `}
            </code>
            <br />
            <code className='ml-3'>
              {`
              }
              `}
            </code>
            <br />
            <code className='ml-2'>
              {`
              });
              `}
            </code>
            <br />
            <code className='ml-1'>
              {`
              }
              `}
            </code>
            <br />
            <code>
              {`
              });
              `}
            </code>
            <br />
          </div>
          <div className='para'>
            Here's how this wager would look in the app.
          </div>
          <div className='full-img-ss-2'></div>
        </div>
        <div className='section-title' id='link-4'>
          Forms/Local Storage
        </div>
        <div className='para'>
          The login and sign up form are hidden until you click the login word
          or icon at the top right of the nav. They are a <b>pop up</b> style of
          form. <span className='blue'>Position</span> is set to{' '}
          <span className='orange'>fixed</span>.{' '}
          <span className='blue'>Width</span> is{' '}
          <span className='orange'>50vw</span> and{' '}
          <span className='blue'>margin-left</span> is set to{' '}
          <span className='orange'>25%</span> which centers the form nicely.
          Initially, the <span className='blue'>display</span> is{' '}
          <span className='orange'>none</span> until the form is clicked and set
          to <span className='orange'>block</span>. Also when the form pops up,
          you see the background get darker. This <b>overlay</b> prevents other
          things from being clicked, also lets the form stand out more.
        </div>
        <div className='para'>
          Upon submitting the sign up form, a few things are required to create
          the account. The the username must be a certain length, and the
          password must <b>match</b> a <b>regular expression</b>. When the
          submission is successful, the username and password are saved in local
          storage. Since this app does not have any <b>backend</b>, local
          storage is how the user data is saved. Also the user is given an
          amount of money between $1-$500.
          <div className='sample-code'>
            <code>{`
            const passw = /^(?=.*\d)(?=.*[a-z]) (?=.*[A-Z]).{6,20}$/;
            `}</code>
            <br />
            <br />
            <code>{`
            signupForm.addEventListener ('submit', e => {
            `}</code>
            <br />
            <code className='ml-1'>{`
            e.preventDefault();
            `}</code>
            <br />{' '}
            <code className='ml-1'>{`
            if (
            `}</code>
            <br />{' '}
            <code className='ml-2'>{`
            signUpUsername.length > 5 &&
            `}</code>
            <br />{' '}
            <code className='ml-2'>{`
            signUpUsername.length < 16 &&
            `}</code>
            <br />
            <code className='ml-2'>{`
            signUpPass.match(passw)
            `}</code>
            <br />
            <code className='ml-1'>{`
              ) {
            `}</code>
            <br />
            <code className='ml-2'>{`
            localStorage.setItem ('username', signUpUsername);
            `}</code>
            <br />
            <code className='ml-2'>{`
            localStorage.setItem ('password', signUpPass);
            `}</code>
            <br />
            <code className='ml-2'>{`
            localStorage.setItem ('money', Math.random() * (500 - 1) + 1);
            `}</code>
            <br />{' '}
            <code className='ml-1'>{`
            } else {
            `}</code>
            <br />{' '}
            <code className='ml-2'>{`
            message('invalid username or password');
            `}</code>
            <br /> <code className='ml-1'>{`}`}</code>
            <br />{' '}
            <code>{`
            });
            `}</code>
            <br />
          </div>
        </div>
        <div className='para'>Here's what we see in local storage</div>
        <div className='full-img-ss-3'></div>
        <div className='para'>
          After some time passes or the page refreshes, the user gets logged
          out. To log back in, we compare the login form input to local storage
          items. In the code snippet below, the <b>loginFunc</b> function logs
          in the user. The user information(username and funds) are displayed in
          the right corner of the screen. Importantly, being logged in allows
          the user to place bets.
        </div>
        <div className='sample-code'>
          <code>{`
loginForm.addEventListener ('submit', e => {
            `}</code>
          <br />
          <code className='ml-1'>{`
            e.preventDefault();
            `}</code>
          <br />{' '}
          <code className='ml-1'>{`
if (localStorage.getItem('password') === loginPass && 
            `}</code>
          <br />{' '}
          <code className='ml-1'>{`
localStorage.getItem(username) === loginUsername){
            `}</code>
          <br />{' '}
          <code className='ml-2'>{`
loginFunc(loginUsername);
            `}</code>
          <br />{' '}
          <code className='ml-1'>{`
            } else {
            `}</code>
          <br />{' '}
          <code className='ml-2'>{`
message('username and password do not match');
            `}</code>
          <br /> <code className='ml-1'>{`}`}</code>
          <br />{' '}
          <code>{`
            });
            `}</code>
          <br />
        </div>
        <div className='para'>
          Local storage serves another purpose in this app. I mentioned this
          previously, It stores the <b>open bets </b>. This happens when we
          confirm the wager. We have a new list storing objects called{' '}
          <b>openBetStorage</b>. This takes the same objects as the
          <b> betsSelected</b> list. The difference is that{' '}
          <b>openBetStorage</b> doesn't reset to an empty list. When its added
          to local storage, it must be "stringified". This is because{' '}
          <b>Javascript</b> objects must be converted to <b>JSON </b>
          strings in local storage.
        </div>
        <div className='sample-code'>
          <code>{`localStorage.setItem('open bets', JSON.stringify(openBetStorage));`}</code>
        </div>
        <div className='para'>
          Everytime the app mounts, the program check if the item{' '}
          <b>open bets</b> exists in local storage. If it does, then we have
          that data in the <b>openBetStorage</b> list. Since the{' '}
          <b>open bets</b> item is a <b>JSON</b> string, it gets parsed back to
          a <b>Javascript</b> Object. Here is a code snippet showing that and an
          image of what this <b>JSON</b> looks like.
        </div>
        <div className='sample-code'>
          <code>{`
          if (localStorage.getItem('open bets')) {
          `}</code>
          <br />
          <code className='ml-1'>{`
openBetStorage = JSON.parse (localStorage.getItem('open bets'));
          `}</code>
          <br />{' '}
          <code>{`

          `}</code>
          <code className='ml-1'>{`}`}</code>
        </div>
        <div className='section-title'>End</div>
        <div className='para'>
          This is the end of the project. Thank you for looking. I hope my
          process and explaining made sense and was easy to read.
        </div>
        <div className='footer'>&copy;Eric Tarter 2020</div>
      </div>
    </div>
  );
};

// FIX APP - LOGIN FORM ADD USERNAME MATCH TO CONDITIONAL
