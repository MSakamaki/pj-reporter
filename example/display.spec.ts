
import { browser, element, by } from 'protractor';

import { makeDisplayPdf } from '../dist';

describe('Display Case', function () {
  it('make display pdf', async () => {
    await makeDisplayPdf({
      title: 'display iPhone',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 667,
      displayWidth: 375,
    });

    await makeDisplayPdf({
      title: 'display iPhone landscape',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 375,
      displayWidth: 667,
    });

    await makeDisplayPdf({
      title: 'display iPad',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 1024,
      displayWidth: 768,
    });

    await makeDisplayPdf({
      title: 'display iPad landscape',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 768,
      displayWidth: 1024,
    });
  });

});
