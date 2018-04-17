import { launch, PDFOptions } from 'puppeteer';
import { join } from 'path';

import { JasmineSuite, MakeSpecPdfOptions } from './interface';
import { fotterSpecs } from './scraping.footer';
import { headerSpec } from './scraping.header';
import { readConfg } from './config';
import { MakeDir } from './utils';

const config = readConfg();

/**
 * Output test spec and first page to the footer.
 * @param suite Jasmine.suite
 * @param options MakeSpecPdfOptions
 */
export async function makeSpecPDF(
  suite: JasmineSuite,
  options: MakeSpecPdfOptions,
) {
  // setting default options
  options.headerHeight = options.headerHeight || `${config.headerHeight}px`;
  options.footerHeight = options.footerHeight || `${config.footerHeight}px`;
  options.title = options.title || suite.result.description;

  const pb = await launch();

  try {
    const page = await pb.newPage();

    await page.goto(options.url, { waitUntil: 'networkidle0' });

    await Promise.all(
      options.valid.map(selector => page.waitFor(selector, { timeout: 10000 })),
    );

    const filepath = join(config.output, `${options.title}.pdf`);
    const pdfOptions: PDFOptions = {
      width: `${config.display.width}px`,
      height: `${config.display.height +
        config.headerHeight +
        config.footerHeight}px`,
      path: filepath,
      scale: config.scale,
      printBackground: true,
      pageRanges: '1',
      margin: {
        top: `${config.headerHeight}px`,
        bottom: `${config.footerHeight}px`,
      },
      displayHeaderFooter: true,
      headerTemplate: headerSpec(config, suite.result.description),
      footerTemplate: fotterSpecs(config, suite.children),
    };

    await MakeDir(filepath);
    await page.emulateMedia('screen');
    await page.pdf(pdfOptions);
  } finally {
    await pb.close();
  }
}
