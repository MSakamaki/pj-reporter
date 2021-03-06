import { makeDisplayPdf, CaptureMode } from '../dist';

describe('Display Case Jpg', function () {
  it('make display pdf', async () => {
    await makeDisplayPdf({
      title: 'display/iPhone',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 667,
      displayWidth: 375,
    });

    await makeDisplayPdf({
      mode: CaptureMode.Jpg,
      title: 'display/iPhone landscape',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 375,
      displayWidth: 667,
    });

    await makeDisplayPdf({
      mode: CaptureMode.Jpg,
      title: 'display/iPad',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 1024,
      displayWidth: 768,
    });

    await makeDisplayPdf({
      mode: CaptureMode.Jpg,
      title: 'display/iPad landscape',
      url: 'https://angular.io/',
      valid: ['a.hero-cta'],
      displayHeight: 768,
      displayWidth: 1024,
    });

    await makeDisplayPdf({
      mode: CaptureMode.Jpg,
      title: 'display/Desktop Docment Page',
      url: 'https://angular.io/',
      valid: ['h1[id="what-is-angular"].no-toc'],
      beforeScript: async(page) => {
        await page.waitFor('a[href="docs"].nav-link', { timeout: 10000 });
        const docLink = await page.$('a[href="docs"].nav-link');
        await docLink.click();
        await page.waitFor('h1[id="what-is-angular"].no-toc', { timeout: 10000 });
      },
      displayHeight: 980,
      displayWidth: 1480,
    });
  });

});
