import { Page } from 'puppeteer';

export enum CaptureMode {
  Pdf = 'pdf',
  Jpg = 'jpg',
}

export interface BaseSpecPdfOptions {
  /** page to url */
  url: string;
  /**
   * Selector to wait until the screen appears
   **/
  valid: string[];
  /** pfd and file name
   * If omitted, the top-level description text will be applied
   */
  title?: string;
  /**
   * The script before capture acquisition is executed before valid.
   */
  beforeScript?: (page: Page) => Promise<void>;
}

export interface MakeSpecPdfOptions extends BaseSpecPdfOptions {
  /**
   * header conents Height
   * default 60px
   */
  headerHeight?: string;
  /**
   * footer conents Height
   * default 500px
   */
  footerHeight?: string;
}

export interface MakeDisplayPdfOptions extends BaseSpecPdfOptions {
  /** pfd and file name */
  title: string;
  /**
   * conents Height
   */
  displayHeight: number;
  /**
   * conents Width
   */
  displayWidth: number;
  /**
   * Capture Mode (default Pdf)
   */
  mode?: CaptureMode;
}

export interface JasmineSuite {
  children: any[];
  result: {
    description: string;
  };
}
