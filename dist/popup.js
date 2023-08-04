const css = `
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2147483615;
`

const root = document.createElement('div');
const appRoot = document.createElement('app');
const shadowRoot = root.attachShadow({ mode: 'open' });

const button = document.createElement('button');
const button2 = document.createElement('button');

document.body.appendChild(root);

appRoot.style.cssText = css;
shadowRoot.appendChild(appRoot);

button.innerText = 'Button 1';
button2.innerText = 'Button 2';

appRoot.appendChild(button);
appRoot.appendChild(button2);
const url = 'https://cdn.metapals.pet/assets/animations/bunny-90eb3a88-74a6-49a5-93a5-7245b4d274cd/v5/bunny_spine.json?v=10';

const getFromSendMessageCallback = () => {
  chrome.runtime.sendMessage({ message: 'fetch' }).then(res => {
    console.log(Date.now(), {
      data: res.data,
    })
    res = null;
  });
}

const getFromFetch = () => {
  fetch(url).then((response) => response.text()).then((text) => {
    console.log(Date.now(), {
      data: text,
    })
  });
}

button.addEventListener('click', () => {
  getFromSendMessageCallback();
});

button2.addEventListener('click', () => {
  getFromFetch();
});
