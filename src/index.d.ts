declare module 'jsonlint-mod';
declare module 'react-color/*';
declare module 'Base64';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
