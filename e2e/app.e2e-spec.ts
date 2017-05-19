import { CybersipahijunePage } from './app.po';

describe('cybersipahijune App', function() {
  let page: CybersipahijunePage;

  beforeEach(() => {
    page = new CybersipahijunePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
