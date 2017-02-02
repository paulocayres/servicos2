import { 01ServicePage } from './app.po';

describe('-01-service App', function() {
  let page: 01ServicePage;

  beforeEach(() => {
    page = new 01ServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
