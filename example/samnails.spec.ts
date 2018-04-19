import { browser, protractor, $ } from 'protractor';
import { MakeSamnailPdf } from '../dist';


describe('Samnail Case', function () {

  const capture = new MakeSamnailPdf('samnail/sampleCapture');

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

  it('make samnail pdf angular', async () => {
    await view('https://angular.io/', 'a.hero-cta');
    await capture.capture();
  });
  it('make samnail pdf protractor', async () => {
    await view('https://www.protractortest.org/#/', 'a.github-button');
    await capture.capture();
  });
  it('make samnail pdf karma', async () => {
    await view('https://karma-runner.github.io/2.0/index.html', 'a.btn-github', true);
    await capture.capture();
  });
  it('make samnail pdf angular cli', async () => {
    await view('https://cli.angular.io/', 'a.cta-button', true);
    await capture.capture();
  });
  it('make samnail pdf material', async () => {
    await view('https://material.angular.io/', 'div.docs-header-start', true);
    await capture.capture();
  });
  it('make samnail pdf puppeteer', async () => {
    await view('https://developers.google.com/web/tools/puppeteer/', 'img[alt="Puppeteer Logo"]', true);
    await capture.capture();
  });

});
