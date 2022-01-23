describe('Homepage End-to-end Test', () => {

  it('tests the homepage', browser => {
    browser
      .navigateTo('http://localhost:5000')
      .assert.visible('#app .new-arrivals-panel')
      .expect.elements('#app .new-arrivals-panel .col-md-6').count.toEqual(4)
      .end();
  });

});