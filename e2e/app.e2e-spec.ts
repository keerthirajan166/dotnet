import { AppPage } from './app.po';

describe('cdl App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have an image in main header', function() {
    page.navigateToRoot();

    expect(page.mainHeaderContainImage()).toBeTruthy('No image in main header');
  });
});
