export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2dd277d88d1f20b62c06df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pn9hxkp8',
                  apiId: 'f617022a-f047-476b-b1a2-85735e9f7f01'
                },
                {
                  buildHookId: '5f2dd277f9c0111ae8fde80b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pacs63ju',
                  apiId: 'e1813437-b98c-4258-adcf-25d61df5d2ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salymk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pacs63ju.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
