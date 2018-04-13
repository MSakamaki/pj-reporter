import {
  childSpec,
  childSwite,
  makeFotterHtml,
  fotterSpecs,
  styleTag,
} from './scraping.footer';
import { headerSpec } from './scraping.header';
import { defaultConfig, getFooterStyle, getHeaderStyle, getListStyle } from './config';



describe('scraping header testing', () => {
  it(
    'headerSpec',
    () => {
      const text = headerSpec(defaultConfig, 'title text');
      const style = getHeaderStyle(18);
      expect(text).toBe(`<div style="${style}">title text</div>`);
    });
});

describe('scraping footer testing', () => {
  const childRoot = {
    description: 'description text',
  };
  const childA = {
    description: 'nexted A',
    children: [{
      description: 'description nest A1',
    }, {
      description: 'description nest A2',
    }]
  };
  const childB = {
    description: 'nexted B',
    children: [{
      description: 'description nest B1',
    }, {
      description: 'description nest B2',
    }]
  };

  it(
    'childSwite',
    () => {
      const text = childSpec(childA);
      expect(text).toBe('nexted A');
    });

  it(
    'childSwite',
    () => {
      const text = childSwite(childA);
      expect(text).toBe('<span>nexted A</span><ul><li>description nest A1</li><li>description nest A2</li></ul>');
    });
// 

  it(
    'makeFotterHtml',
    () => {
      const text = makeFotterHtml([
        childRoot, childA, childB
      ]);
      expect(text).toBe('<div class="root"><ul class="fast-root"><li>description text</li><li><span>nexted A</span><ul><li>description nest A1</li><li>description nest A2</li></ul></li><li><span>nexted B</span><ul><li>description nest B1</li><li>description nest B2</li></ul></li></ul></div>');
    });

    it(
      'styleTag',
      () => {
        const text = styleTag();
        expect(text).toBe(`<style>${getListStyle()}</style>`);
      });
  

    it(
    'fotterSpecs',
    () => {
      const text = fotterSpecs(defaultConfig, []);
      const style = getFooterStyle(12);
      expect(text).toBe(`<style>${getListStyle()}</style><div class="root" style="${style}"><ul class="fast-root"></ul></div>`);
    });


});