
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','3d3'),
  exact: true,
},
{
  path: '/blog/2020/04/14/blog-plugin',
  component: ComponentCreator('/blog/2020/04/14/blog-plugin','ff6'),
  exact: true,
},
{
  path: '/blog/2020/04/14/large-blog-post',
  component: ComponentCreator('/blog/2020/04/14/large-blog-post','275'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','d7c'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','6d9'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','9d0'),
  exact: true,
},
{
  path: '/blog/tags/blog',
  component: ComponentCreator('/blog/tags/blog','071'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','5cd'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','88e'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','677'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','747'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','ef9'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','512'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','87d'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','fd3'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','e02'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','398'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
