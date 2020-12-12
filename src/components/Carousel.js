import React from 'react';

export const Carousel = () => {
  // STATE FOR WHICH ARTICLE IS SHOWN
  let numState = 1;

  //   EVENT FUNCTION WHEN RIGHT ARROW IS CLICKED
  const next = () => {
    numState++;
    if (numState > document.getElementById('dots').childNodes.length) {
      numState = 1;
    }
    updateBlog(numState);
    changePhoto(numState);
  };

  //   EVENT FUNCTION WHEN LEFT ARROW IS CLICKED
  const previous = () => {
    numState--;
    if (numState === 0) {
      numState = document.getElementById('dots').childNodes.length;
    }
    updateBlog(numState);
    changePhoto(numState);
  };

  //   UPDATE BLOG AND PHOTO HTML/CSS

  function updateBlog(blog) {
    document.querySelectorAll('.bh').forEach(i => {
      if (parseInt(i.id[i.id.length - 1]) === blog) {
        i.style.display = 'block';
      } else {
        i.style.display = 'none';
      }
    });
    document.querySelectorAll('.dot').forEach(i => {
      if (parseInt(i.id[i.id.length - 1]) === blog) {
        i.style.color = '#FFF';
      } else {
        i.style.color = '#333';
      }
    });

    document.querySelectorAll('.blog-container').forEach(i => {
      if (parseInt(i.id[i.id.length - 1]) === blog) {
        i.style.display = 'block';
      } else {
        i.style.display = 'none';
      }
    });
  }

  function changePhoto(photo) {
    document.querySelectorAll('.car-img').forEach(i => {
      if (parseInt(i.id[i.id.length - 1]) === photo) {
        i.style.display = 'block';
      } else {
        i.style.display = 'none';
      }
    });
    document.getElementById('carousel-container').classList.add('flash');
    setTimeout(() => {
      document.getElementById('carousel-container').classList.remove('flash');
    }, 100);
  }

  const md1 = () => {
    document.getElementById('next-art').classList.add('grey-down');
  };
  const mu1 = () => {
    document.getElementById('next-art').classList.remove('grey-down');
  };

  const md2 = () => {
    document.getElementById('previous-article').classList.add('grey-down');
  };
  const mu2 = () => {
    document.getElementById('previous-article').classList.remove('grey-down');
  };

  return (
    <div>
      <div className='carousel-container' id='carousel-container'>
        <div className='dots' id='dots'>
          <div className='dot dot-1 active' id='dot-1'>
            <i className='far fa-dot-circle'></i>
          </div>
          <div className='dot dot-2' id='dot-2'>
            <i className='far fa-dot-circle'></i>
          </div>
          <div className='dot dot-3' id='dot-3'>
            <i className='far fa-dot-circle'></i>
          </div>
        </div>
        <div
          className='next-article'
          id='next-art'
          onClick={next}
          onMouseDown={md1}
          onMouseUp={mu1}
          onMouseLeave={mu1}
        >
          <i className='fas fa-chevron-right'></i>
        </div>
        <div
          className='previous-article'
          id='previous-article'
          onClick={previous}
          onMouseDown={md2}
          onMouseUp={mu2}
          onMouseLeave={mu2}
        >
          <i className='fas fa-chevron-left'></i>
        </div>
        <div className='read'>Read</div>
        <div className='down-arrow-animation'>
          <i className='fas fa-long-arrow-alt-down'></i>
        </div>
        <div className='blogs' id='blogs'>
          <div className='bh blog-heading-1' id='blog-heading-1'>
            {' '}
            Front End Sports Betting
          </div>
          <div className='bh blog-heading-2' id='blog-heading-2'>
            {' '}
            Piano App with Tone JS
          </div>
          <div className='bh blog-heading-3' id='blog-heading-3'>
            {' '}
            Some Simple Tips & Tools
          </div>
        </div>
        <div className='image-cover'></div>
        <div className='car-img img-1' id='img-1'></div>
        <div className='car-img img-2' id='img-2'></div>
        <div className='car-img img-3' id='img-3'></div>
      </div>
    </div>
  );
};

// IF LAST IMAGE DISABLE ARROW AND READ ELSE SHOW;
