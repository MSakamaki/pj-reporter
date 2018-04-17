import { readFileSync } from 'fs';
import { isExistsFile } from './utils';

export const defaultConfig: PjreporterConfig = {
  output: 'pdf',
  scale: 1,
  headerHeight: 60,
  headerFontsize: 18,
  footerHeight: 500,
  footerFontsize: 12,
  display: {
    width: 1048,
    height: 680,
  },
};

const confFile = './pjreporter.config.json';

export const readConfg = (): PjreporterConfig => ({
  ...defaultConfig,
  ...(isExistsFile(confFile)
    ? (JSON.parse(readFileSync(confFile).toString('utf-8')) as PjreporterConfig)
    : {}),
});

export interface PjreporterConfig {
  output: string;
  headerHeight: number;
  headerFontsize: number;
  footerHeight: number;
  footerFontsize: number;
  scale: number;
  display: {
    width: number;
    height: number;
  };
}

export const getHeaderStyle = (fontsize: number) => `
margin-left: 25px;
font-size: ${fontsize}px;
height: 100%;
width:100%;
`;

export const getFooterStyle = (fontsize: number) => `
font-size: ${fontsize}px;
font-weight: bold;
height: calc(100% - 10px);
width:100%;
`;

export const getListStyle = () => `
ul, ol {
  padding: 0;
  position: relative;
}

ul li, ol li {
  color: #2d8fdd;
  border-left: solid 6px #2d8fdd;
  background: #f1f8ff;
  margin-bottom: 1px;
 	line-height: 1;
  padding: 0.5em;
  list-style-type: none!important;
}
`;
