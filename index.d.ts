declare module 'jsonlint-mod';
declare module 'react-color';
declare module 'react-color/*';
declare module 'Base64';
declare module 'react-copy-to-clipboard';
declare module 'qrcode-reader';

declare module '*.md';
declare module '*.txt';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  // @ts-ignore
  export default content;
}
