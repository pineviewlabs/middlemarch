describe('Basic Component Test', () => {

  it('tests the component', async (browser) => {
    const component = await browser.mountVueComponent('/src/components/new-arrivals/NewArrivals.vue', {
      plugins: {
        store: '/src/lib/store.js',
        router: '/src/lib/router.js'
      }
    });

    expect(component).to.be.present;
  });
});
