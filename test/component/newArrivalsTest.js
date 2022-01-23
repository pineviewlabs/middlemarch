describe('New Arrivals Component Test', function() {

  let component;

  before(async () => {

  });

  it('tests the component', async function(browser) {
    //console.log('>>>>> component', component);

    // const newArrivalsValue = await component.getProperty('newArrivals');
    // console.log('newArrivals', newArrivalsValue)

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

    expect.element(component).to.be.present;

    expect(component).to.have.property('newArrivals');

    // expect(component).text.toContain('The Memory Police')

    //expect(component.findAll('div.col-md-6')).length(1);

    expect(component.property('newArrivals')).to.be.an('array').with.length(1);
    expect.elements('div.col-md-6').count.toEqual(1)
    //browser.expect(component).to.be.an('array');

    // expect(component.property('newArrivals'))
    //   //.property('newArrivals')
    //   .to.be.an('array')
    //   .with.length.greaterThan(3)
    //   .to.deep.equal([]);

    //expect().to.be.an('array')

    //console.log(element)
    //expect(element).to.be.visible;
    //expect.elements(element.findElements(''))

    //const innerHtml = await browser.getElementProperty(element, 'innerHTML');
    //console.log('TEXT', innerHtml)

    //browser.pause()
  });

  it('logs the innerHTML property', async function(browser) {
    const innerHTML = await browser.getElementProperty(component, 'innerHTML');
    console.log('innerHTML is:', innerHTML);

    browser.assert.containsText(component, 'The Memory Police');
  });
});
