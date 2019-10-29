import request from '@/utils/request';

export interface ThemeQueryParamsType {
  username: string;
}

export async function getTheme(params: ThemeQueryParamsType) {
  return request('/api/getTheme', {
    method: 'POST',
    data: params,
  });
}
