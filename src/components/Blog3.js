import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Blog3 = () => {
  const centerClick = e => {
    const container = document.getElementById('flex-container');
    console.log(e.target.innerText);
    if (e.target.innerText === 'Center Items') {
      container.classList.add('center');
      e.target.innerText = 'Undo';
    } else {
      container.classList.remove('center');
      e.target.innerText = 'Center Items';
    }
  };

  return (
    <div>
      <div className='blog-container' id='blog-container-3'>
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
            className='project-3-link'
            href='https://erictarter.com/'
            target='_blank'
          >
            {' '}
            <b>erictarter.com</b>
          </a>
        </div>
        <div className='blog-title'>Some Simple Tips & Tools </div>
        <div className='date'>November 27, 2020</div>
        <div className='short-line'></div>
        <div className='para'>
          {/* Here are a few tips when using Grid and Flex. Also briefly some
          suggestions on things I've learned to avoid (mostly) when writing CSS. */}
        </div>
        <div className='para'>
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='tip-link-1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Smooth Scrolling React
            </Link>
          </span>
          <br />
          <span className='blog-link'>
            <Link
              activeClass='active'
              to='tip-link-2'
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              CSS Tips
            </Link>
          </span>{' '}
          <br />
        </div>
        <div className='section-title' id='tip-link-1'>
          Smooth Scrolling React
        </div>
        <div className='para'>
          Smooth scrolling is not essential but a nice feature to have on pages
          with <b>internal links</b>. This web page uses smooth scrolling. A
          common method to incorporate smooth scrolling involves using
          <b> Jquery</b>. That way works fine but is more work. It involves
          importing the <b>Jquery</b> plug in. Setting the <b>Jquery</b> class.
          Writing functions in <b>Javascript</b> for that class. Then putting
          those classes into the <b>HTML</b> links. It's fine, but{' '}
          <b>react-scroll</b> is very simple.
        </div>
        <div className='para'>
          First install <b>react-scroll</b>. Go in your terminal and run this
          command.
        </div>
        <div className='sample-code'>{`
        npm i -S react-scroll
        `}</div>
        <div className='para'>
          Next import the <b>react-scroll</b> package. Put the following code at
          the top of the <b>react</b> JS file.{' '}
        </div>
        <div className='sample-code'>{`
        import { Link, animateScroll as scroll } from 'react-scroll';
        `}</div>
        <div className='para'>
          Instead of using an{' '}
          <span>
            <i className='fas fa-chevron-left'></i>
          </span>{' '}
          a{' '}
          <span>
            <i className='fas fa-chevron-right'></i>
          </span>{' '}
          tag, use a <b>react</b> <b>Link</b>{' '}
          <span className='blue'>Component</span>.
        </div>
        <div className='sample-code'>
          <code>{`<Link`}</code>
          <br />
          <code className='ml-1'>{`
          activeClass='active'
          `}</code>
          <br />
          <code className='ml-1'>
            {`
          to='link-1'
          `}
          </code>
          <br />
          <code className='ml-1'>{`spy={true}`}</code>
          <br />
          <code className='ml-1'>{`smooth={true}`}</code>
          <br />
          <code className='ml-1'>{`offset={-70}`}</code>
          <br />
          <code className='ml-1'>{`duration={500}`}</code>
          <br />
          <code>{`>`}</code>
          <br />
          <code>{`This is the link`}</code>
          <br />
          <code>{`</Link>`}</code>
        </div>
        <div className='para'>
          Set the <span className='blue'>to</span> <b>property</b> to the{' '}
          <b>ID</b> of the element you want to link to. Thats all it takes to
          implement smooth scrolling in react.
        </div>
        <div className='section-title' id='tip-link-2'>
          CSS Tips
        </div>
        <div className='para'>1. Centering Items</div>
        <div className='para'>
          Something as simple as centering an item can be frusterating. I know a
          few easy ways to do it. Here is how to do it if the parent element{' '}
          <span className='blue'>display</span> <b>property</b> is set to{' '}
          <span className='orange'>grid</span>
        </div>
        <div className='para'>
          In <b>CSS</b> grid, centering grid items can be done in one line.
        </div>
        <div className='sample-code'>{`place-items: center;`}</div>
        <div className='para'>
          Here is an example of how it works. I made a 3D cube. The cubes parent
          element is contained with the salmon colored border. The parent
          element <b>class</b> is called <span className='orange'>.square</span>
          . The cube element <b>class</b> is called{' '}
          <span className='orange'>.cube</span>. Below will display the{' '}
          <b>CSS</b>, then the cube before{' '}
          <span className='blue'>place-items</span> property is set.
        </div>
        <div className='sample-code'>
          <code>{`.square {`}</code>
          <br />
          <code className='ml-1'>{`width: 30rem;`}</code>
          <br />
          <code className='ml-1'>{`height: 30rem;`}</code>
          <br /> <code className='ml-1'>{`border: 1px solid salmon;`}</code>
          <br />
          <code className='ml-1'>{`display: grid;`}</code>
          <br />
          <code>{`}`}</code>
          <br />
          <code>{`.cube {`}</code>
          <br />
          <code className='ml-1'>{`width: 20rem;`}</code>
          <br />
          <code className='ml-1'>{`height: 20rem;`}</code>
          <br /> <code className='ml-1'>{`color: #FFF`}</code>
          <br />
          <code>{`}`}</code>
        </div>
        <div className='full-img-ss-5'></div>
        <div className='para'>
          Now lets add the <span className='blue'>place-items</span>{' '}
          <b>property</b> to center the cube.
        </div>
        <div className='sample-code'>
          <code>{`.square {`}</code>
          <br />
          <code className='ml-1'>{`width: 30rem;`}</code>
          <br />
          <code className='ml-1'>{`height: 30rem;`}</code>
          <br /> <code className='ml-1'>{`border: 1px solid salmon;`}</code>
          <br />
          <code className='ml-1'>{`display: grid;`}</code>
          <br />
          <code className='ml-1'>{`place-items: center; <====`}</code>
          <br />
          <code>{`}`}</code>
        </div>
        <div className='full-img-ss-6'></div>
        <div className='para'>
          Lets look at <b>flex</b>. By default,{' '}
          <span className='blue'>flex-direction</span> <b>property</b> is set to{' '}
          <span className='orange'>row</span>. To center flex items in row takes
          setting two <b>properties</b>.{' '}
          <span className='blue'>align-items</span> and{' '}
          <span className='blue'>justify-content</span> both set to{' '}
          <span className='orange'>center</span>.{' '}
          <span className='blue'>Align-items</span> centers the items
          vertically. <span className='blue'>Justify-content</span> centers the
          items horizontally. Below is a <b>flex container</b> with 3 circles(
          <b>flex-items</b>) in it. Clicking the button below will add the two
          properties to the container.
        </div>
        <button
          className='center-items-btn'
          id='center-items'
          onClick={centerClick}
        >
          Center Items
        </button>
        <div className='flex-1' id='flex-container'>
          <div className='flex-item'></div>
          <div className='flex-item'></div>
          <div className='flex-item'></div>
        </div>
        <div className='para'>
          If the <span className='blue'>flex-direction</span> property is set to
          <span className='orange'> column</span>, the centering properties are
          different. To center horizontally, set{' '}
          <span className='blue'>justify-items</span> to{' '}
          <span className='orange'>center</span>. To center vertically, set{' '}
          <span className='blue'>align-content</span> to{' '}
          <span className='orange'>center</span>. It is very confusing because
          those four properties are named similarly.
        </div>
        <div className='section-title'>End</div>
        <div className='footer'>&copy;Eric Tarter 2020</div>
      </div>
    </div>
  );
};

// ADD MORE TIPS
