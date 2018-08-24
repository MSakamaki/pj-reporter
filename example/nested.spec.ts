
import { browser } from 'protractor';

import { makeSpecPDF } from '../dist';

describe('Nested Case', function () {
  afterAll(async () => {
    await makeSpecPDF(this, {
      url: await browser.getCurrentUrl(),
      valid: ['h1[id="what-is-angular"].no-toc'],
      beforeScript: async(page) => {
        await page.waitFor('a[href="docs"].nav-link', { timeout: 10000 });
        const docLink = await page.$('a[href="docs"].nav-link');
        await docLink.click();
        await page.waitFor('h1[id="what-is-angular"].no-toc', { timeout: 10000 });
      },
    });
  });

  beforeEach(function () {
    browser.get('https://angular.io/');
  });

  describe('nested 1', () => {
    it('spec A', () => expect(1).toBe(1));
  });
  describe('nested 2', () => {
    describe('nested 2.2', () => {
      it('spec A', () => expect(1).toBe(1));
    });
  });
  describe('nested 3', () => {
    describe('nested 3.3', () => {
      describe('nested 3.3.3', () => {
        it('spec A', () => expect(1).toBe(1));
        it('spec B', () => expect(1).toBe(1));
      });
    });
  });
});
