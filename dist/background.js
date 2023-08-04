(() => {
  const url = 'https://cdn.metapals.pet/assets/animations/bunny-90eb3a88-74a6-49a5-93a5-7245b4d274cd/v5/bunny_spine.json?v=10';
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'fetch') {
      fetch(url).then((response) => response.text()).then((text) => {
        sendResponse({
          data: text,
        });
      });
    }
    return true;
  });
})();