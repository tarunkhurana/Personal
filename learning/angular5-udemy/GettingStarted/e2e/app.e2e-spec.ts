import { Tuorial1Page } from './app.po';

describe('tuorial1 App', function() {
  let page: Tuorial1Page;

  beforeEach(() => {
    page = new Tuorial1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
