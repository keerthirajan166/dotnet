const PROXY_CONFIG = [
  {
    context: [
      '/datasource/entity/service'
    ],
    target: 'https://octopi-datasource-data-entity-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/datasource/entity/service': '/datasource/data-entities'}
  },
  {
    context: [
      '/datasource'
    ],
    target: 'https://octopi-datasource-data-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/datasource': '/datasource/data'}
  },
  {
    context: [
      '/filters/service'
    ],
    target: 'https://octopi-filters-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/filters/service': '/service'}
  },
  {
    context: [
      '/dictionary/service'
    ],
    target: 'https://octopi-dict-retrieval-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/dictionary/service': '/service'}
  },
  {
    context: [
      '/notifications/notification'
    ],
    target: 'https://octopi-notifications-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/notifications/notification': '/notification'}
  },
  {
    context: [
      '/i18n/service'
    ],
    target: 'https://octopi-i18n-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/i18n/service': '/service'}
  },
  {
    context: [
      '/current-users/service'
    ],
    target: 'https://octopi-current-user-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/current-users/service': '/service'}
  },
  {
    context: [
      '/grid-settings/grid/settings'
    ],
    target: 'https://octopi-grid-settings-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/grid-settings/grid/settings': '/grid/settings'}
  },
  {
    context: [
      '/export-import'
    ],
    target: 'https://octopi-export-import-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/export-import': '/'}
  },
  {
    context: [
      '/publish/service'
    ],
    target: 'https://octopi-publish-develop.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/publish/service': '/service/pipeline'}
  },
  {
    context: [
      '/user-information/service'
    ],
    target: 'https://octopi-user-info-dev.ase2np.pgcloud.com',
    secure: true,
    changeOrigin: true,
    pathRewrite: {'^/user-information/service': '/service'}
  }
];

module.exports = PROXY_CONFIG;
