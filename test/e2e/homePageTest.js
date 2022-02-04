describe('Homepage End-to-end Test', () => {

  it('tests if homepage is loaded', browser => {
    browser
      .navigateTo('http://localhost:3000')
      .assert.visible('#app .new-arrivals-panel')
      .expect.elements('#app .new-arrivals-panel .col-md-6').count.toEqual(4)
  });

  it('adds 2 volumes of "Rhinoceros and Other Plays" to cart', browser => {
    browser
      .click('.new-arrivals-panel .col-md-6:nth-child(2) button.add-to-cart')
      .click('.new-arrivals-panel .col-md-6:nth-child(2) button.add-to-cart')
      .assert.textEquals('.shopping-cart .badge', '2');
  });

  after(browser => browser.end());
});