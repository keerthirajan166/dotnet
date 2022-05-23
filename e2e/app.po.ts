import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToRoot() {
    browser.get('/');
  }

  mainHeaderContainImage() {
    return element(by.css('cdl-root h1'))
      .element(by.css('img'))
      .isPresent();
  }
}
