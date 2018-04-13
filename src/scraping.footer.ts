import * as cheerio from 'cheerio';
import { PjreporterConfig, getFooterStyle, getListStyle } from './config';

export const childSpec = (spec: any) => spec.description;

export const childSwite = (swite: any) => {
  const $ = cheerio.load(`<span>${swite.description}</span><ul></ul>`);

  swite.children
    .map(childText)
    .forEach((spec: string) => {
      $('ul').append(`<li>${spec}</li>`);
    });

  return $('body').html();
}

export const childText = (child: any) => child.children ? childSwite(child) : childSpec(child)

export const makeFotterHtml = (children: any[]) => {

  const $ = cheerio.load('<div class="root"></div>');

  $('div').append('<ul class="fast-root"></ul>');

  children
    .map(childText)
    .forEach((spec: string) => {
      $('.fast-root').append(`<li>${spec}</li>`);
    });

  return $('body').html() || '';
}

export const styleTag = () => {
  const $ = cheerio.load('<style></style>');
  $('style').append(getListStyle());
  return $('head').html() || '';
}

export const fotterSpecs = (config: PjreporterConfig, children: any[]) => {

  const $ = cheerio.load(makeFotterHtml(children));

  $('.root').attr('style', getFooterStyle(config.footerFontsize));
  $('body').prepend(styleTag());

  return $('body').html() || '';
}



