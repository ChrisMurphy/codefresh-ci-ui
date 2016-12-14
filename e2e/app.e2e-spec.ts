import { CodefreshCiUiPage } from './app.po';

describe('codefresh-ci-ui App', function() {
  let page: CodefreshCiUiPage;

  beforeEach(() => {
    page = new CodefreshCiUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
