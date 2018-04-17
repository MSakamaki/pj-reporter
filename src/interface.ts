export interface GeneratePdfOptions {
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

export interface JasmineSuite {
  children: any[];
  result: {
    description: string;
  };
}
