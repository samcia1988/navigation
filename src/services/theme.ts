import request from '@/utils/request';

export async function getTheme() {
  return request('/api/getTheme', {
    method: 'POST',
  });
}

export async function getThemeItems() {
  return request('/api/getThemeItems', {
    method: 'POST',
  });
}

export async function changeTheme(name: string) {
  return request('/api/changeTheme', {
    method: 'POST',
    data: {
      name,
    },
  });
}
