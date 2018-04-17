import { launch, PDFOptions } from 'puppeteer';
import { join } from 'path';

import { MakeDisplayPdfOptions } from './interface';
import { readConfg } from './config';
import { MakeDir } from './utils';

const config = readConfg();

/**
 * Output pdf of the specified screen resolution.
 * @param options MakeDisplayPdfOptions Parameter
 */
export async function makeDisplayPdf(options: MakeDisplayPdfOptions) {
  const pb = await launch();

  try {
    const page = await pb.newPage();

    await page.goto(options.url, { waitUntil: 'networkidle0' });

    await Promise.all(
      options.valid.map(selector => page.waitFor(selector, { timeout: 10000 })),
    );

    const filepath = join(
      config.output,
      `${options.title}_${options.displayWidth}x${options.displayHeight}.pdf`,
    );

    const pdfOptions: PDFOptions = {
      width: `${options.displayWidth}px`,
      height: `${options.displayHeight}px`,
      path: filepath,
      scale: config.scale,
      printBackground: true,
      displayHeaderFooter: false,
    };

    await MakeDir(filepath);
    await page.emulateMedia('screen');
    await page.pdf(pdfOptions);
  } finally {
    await pb.close();
  }
}
