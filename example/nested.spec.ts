
import { browser, element, by } from 'protractor';

import { GeneratePDF } from '../dist';

describe('Nested Case', function () {
  afterAll(async () => {
    await GeneratePDF(this, {
      url: await browser.getCurrentUrl(),
      valid: ['a.hero-cta'],
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
