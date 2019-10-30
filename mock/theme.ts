export default {
  'POST /api/getTheme': {
    name: '绯红主题',
  },
  'POST /api/getThemeItems': {
    items: [
      {
        id: 1,
        name: '默认主题',
        tags: ['默认', '蓝色调', '官方'],
      },
      {
        id: 2,
        name: '绯红主题',
        tags: ['自制', '红色调'],
      },
    ],
  },
  'POST /api/changeTheme': {
    changed: true,
  },
};
