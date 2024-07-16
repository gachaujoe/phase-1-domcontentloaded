// Your code goes here
// index.js
document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.querySelector('p');
    paragraph.textContent = "This is really cool!";
  });
//   require('./helpers.js');
const { expect } = require('chai');

describe("index.js", () => {
  it('should change the text on the page when DOM content has loaded', function() {
    // Initial text before DOMContentLoaded
    expect(document.querySelector('p').textContent).to.equal("JavaScript is so cool. It lets me add text to my page programmatically.");

    // Simulate the DOMContentLoaded event
    const event = document.createEvent('Event');
    event.initEvent('DOMContentLoaded', true, true);
    window.document.dispatchEvent(event);

    // Text after DOMContentLoaded
    expect(document.querySelector('p').textContent).to.equal("This is really cool!");
  });
});
