describe('New Arrivals Component Test', function() {

  let component;

  before(async () => {
    component = await browser.mountVueComponent('/src/components/new-arrivals/NewArrivals.vue', {
      plugins: {
        store: '/src/lib/store.js',
        router: '/src/lib/router.js'
      },

      mocks: {
        '/data/new-arrivals.json': {
          type: 'fetch',
          body: {
            books: [
              {
                "title": "The Memory Police",
                "author": "Yoko Ogawa",
                "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544335119l/37004370.jpg",
                "price": 14.72,
                "currency": "$",
                "category": "Science Fiction > Dystopian",
                "isbn13": 9781101911815,
                "description": "On an unnamed island, objects are disappearing: first hats, then ribbons, birds, roses..."
              }
            ]
          }
        }
      }
    })
  });

  it('tests the component', function(browser) {
    //console.log('>>>>> component', component);

    // const newArrivalsValue = await component.getProperty('newArrivals');
    // console.log('newArrivals', newArrivalsValue)

    expect(component).to.be.visible;
    expect(component).to.have.property('newArrivals');

    expect(component).text.toContain('The Memory Police')

    expect(component.findAll('div.col-md-6')).length(1);

    expect(component.property('newArrivals')).to.be.an('array').with.length(1);
  });

  it('logs the innerHTML property', async function(browser) {
    const innerHTML = await browser.getElementProperty(component, 'innerHTML');
    browser.assert.textContains(component, 'The Memory Police');
  });
});
