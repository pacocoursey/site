const text = document.querySelector('#text');

const github = document.querySelector('#github');
const twitter = document.querySelector('#twitter');
const email = document.querySelector('#email');

const githubString = 'pacocoursey';
const twitterString = 'pacocoursey';
const emailString = 'paco@paco.im';

let githubFlag = false;
let twitterFlag = false;
let emailFlag = false;

const speed = 30;
let i = 0;
let timeout;

const type = (el, str) => {
  if (i < str.length) {
    el.innerText += str.charAt(i);
    i += 1;
    timeout = setTimeout(() => {
      type(el, str);
    }, speed);
  }
};

const link = (path, blank = true) => {
  const a = document.createElement('a');
  if (blank) { a.target = '_blank'; }
  a.href = path;

  return a;
};

const reset = (str) => {
  i = 0;
  githubFlag = false;
  twitterFlag = false;
  emailFlag = false;
  clearTimeout(timeout);
  text.innerHTML = str;
  text.classList.remove('link');
};

github.addEventListener('mouseenter', () => {
  if (githubFlag) {
    return;
  }

  reset('');

  // Create link and append it
  const l = link('https://github.com/pacocoursey');
  text.innerText = '/';
  text.appendChild(l);

  // Animate the type
  type(l, githubString);

  githubFlag = true;
});

twitter.addEventListener('mouseenter', () => {
  if (twitterFlag) {
    return;
  }

  reset('');

  // Create link and append it
  const l = link('https://twitter.com/pacocoursey');
  text.innerText = '@';
  text.appendChild(l);

  // Animate the type
  type(l, twitterString);

  twitterFlag = true;
});

email.addEventListener('mouseenter', () => {
  if (emailFlag) {
    return;
  }

  reset('');

  // Create link and append it
  const l = link('mailto:paco@paco.im', false);
  text.appendChild(l);

  // Animate the type
  type(l, emailString);

  emailFlag = true;
});

document.querySelector('.right').addEventListener('mouseleave', () => {
  reset('Paco Coursey');
});
