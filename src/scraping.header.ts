import * as cheerio from 'cheerio';
import { getHeaderStyle, PjreporterConfig } from './config';


export const headerSpec = (config: PjreporterConfig, description: string) => {

  const $ = cheerio.load(`<div>${description}</div>`);

  $('div').attr('style', getHeaderStyle(config.headerFontsize));

  return $('body').html() || '';
};
