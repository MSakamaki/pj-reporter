import { launch, PDFOptions } from 'puppeteer';
import { join } from 'path';
import { browser } from 'protractor';

import { readConfg } from './config';
import { MakeDir } from './utils';

export class MakeSamnailPdf {

  private capturePngs:string[] = [];

  private config = readConfg();
  
  constructor(private filename:string ) {}

  async capture() {
    this.capturePngs.push( await browser.takeScreenshot() );
  }

  async write() {
    const pb = await launch();

    try {
      const page = await pb.newPage();
  
      await page.goto(this.makeHTML(this.capturePngs));
  
      const filepath = join(
        this.config.output,
        `${this.filename}.pdf`,
      );
  
      const pdfOptions: PDFOptions = {
        width: `2050px`,
        height: `1600px`,
        path: filepath,
        scale: this.config.scale,
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

  private makeHTML (base64strs:string[]) {

    return `data:text/html,<div>${
      base64strs.map(b64 => `<img width="${
        '400px'
      }" style="${
        'border: 1px solid #000;'
      }" src="data:image/png;base64,${
        b64
      }" />`)
    }</div>`;
  }

}
