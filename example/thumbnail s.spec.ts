import { browser, protractor, $ } from 'protractor';
import { MakeThumbnailPdf } from '../dist';


describe('Thumbnail Case', function () {

  const capture = new MakeThumbnailPdf('Thumbnail/sampleCapture');

  async function view(url: string, selector: string, ignoreSync = false) {
    browser.ignoreSynchronization = ignoreSync;
    const EC = protractor.ExpectedConditions;
    await browser.get(url);
    await browser.wait(EC.presenceOf($(selector)), 10000);
  }

  afterAll(async () => {
    await capture.write();
    browser.ignoreSynchronization = false;
  });

  it('make Thumbnail pdf angular', async () => {
    await view('https://angular.io/', 'a.hero-cta');
    await capture.capture();
  });
  it('make Thumbnail pdf protractor', async () => {
    await view('https://www.protractortest.org/#/', 'a.github-button');
    await capture.capture();
  });
  it('make Thumbnail pdf karma', async () => {
    await view('https://karma-runner.github.io/2.0/index.html', 'a.btn-github', true);
    await capture.capture();
  });
  it('make Thumbnail pdf angular cli', async () => {
    await view('https://cli.angular.io/', 'a.cta-button', true);
    await capture.capture();
  });
  it('make Thumbnail pdf material', async () => {
    await view('https://material.angular.io/', 'div.docs-header-start', true);
    await capture.capture();
  });
  it('make Thumbnail pdf puppeteer', async () => {
    await view('https://developers.google.com/web/tools/puppeteer/', 'img[alt="Puppeteer Logo"]', true);
    await capture.capture();
  });

});
