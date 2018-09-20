const elements = {
  github: {
    el: document.querySelector('#github'),
    link: 'https://github.com/pacocoursey',
    string: 'pacocoursey',
    active: false,
    pre: '/',
  },
  twitter: {
    el: document.querySelector('#twitter'),
    link: 'https://twitter.com/pacocoursey',
    string: 'pacocoursey',
    active: false,
    pre: '@',
  },
  email: {
    el: document.querySelector('#email'),
    link: 'mailto:paco@paco.im',
    string: 'paco@paco.im',
    active: false,
    blank: false,
    pre: '',
  },
};

const text = document.querySelector('#text');
const div = document.querySelector('.title');
const animation = 200;
let timeout;

function link(path, blank = true) {
  const a = document.createElement('a');
  if (blank) { a.target = '_blank'; }
  a.href = path;

  return a;
}

function changeActive(o) {
  Object.values(elements).forEach((obj) => {
    obj.el.classList.remove('active');
    obj.active = false;
  });

  if (o) {
    o.el.classList.add('active');
    o.active = true;
  }
}

const cb = (obj) => {
  // If already active, do not repeat animation
  if (obj.active) {
    return;
  }

  clearTimeout(timeout);

  // Remove activeClass from all, re-add to current
  changeActive(obj);

  // Slide the text element out
  text.classList.add('slide');

  // Execute this after element finished sliding
  timeout = setTimeout(() => {
    const l = link(obj.link, obj.blank);
    text.innerText = obj.pre;
    text.appendChild(l);
    l.innerText = obj.string;

    // Revert position element back to normal
    text.classList.remove('slide');
  }, animation);
};


// Register event listeners for each button
Object.values(elements).forEach((obj) => {
  obj.el.addEventListener('mouseenter', () => {
    cb(obj);
  });
});

// Register event listener for resetting div
div.addEventListener('mouseleave', () => {
  if (!elements.github.active
      && !elements.twitter.active
      && !elements.email.active) {
    return;
  }

  clearTimeout(timeout);

  changeActive();
  text.classList.add('slide');

  setTimeout(() => {
    text.innerText = 'Paco Coursey';
    text.classList.remove('slide');
  }, animation);
});
