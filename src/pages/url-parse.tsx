import UrlParse from '@/tools/UrlParse';
import PageWrap from '@/components/PageWrap';

export default PageWrap({
  children: UrlParse,
  title: 'URL 解析',
  description: '解析 url ',
});
