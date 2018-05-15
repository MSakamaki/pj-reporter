
import { browser } from 'protractor';

import { makeSpecPDF } from '../dist';

describe('Nested Case 2', function () {
  afterAll(async () => {
    await makeSpecPDF(this, {
      url: 'about:blank',
      valid: [],
    });
  });

  describe('nested tow', () => {

    describe('childA', () => {
      describe('(up)', () => {
        it('spec 1', () => expect(1).toEqual(1));
        it('spec 2', () => expect(1).toEqual(1));
        describe('swite 2.x', () => {
          it('spec 2.1', () => expect(1).toEqual(1));
          it('spec 2.2', () => expect(1).toEqual(1));

        });
      });
      describe('(down)', () => {
        it('a1.', () => expect(1).toEqual(1));
        it('a2.', () => expect(1).toEqual(1));
        it('a3.', () => expect(1).toEqual(1));
      });
    });
  });
});
