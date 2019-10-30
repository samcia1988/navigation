import { getTheme, changeTheme } from '@/services/theme';
import { message } from 'antd';

const ThemeProps = {
  namespace: 'themeProps',
  state: {
    name: 'Default',
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getTheme, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      return response;
    },
    *change({ payload }, { call, put }) {
      const response = yield call(changeTheme, payload);
      if (response.changed === true) {
        response.name = payload.name;
        yield put({
          type: 'save',
          payload: response,
        });
        message.info('主题切换成功!');
      } else {
        message.error('主题切换失败');
      }
    },
  },
  reducers: {
    save(state, action) {
      state.name = action.payload.name;
      return { ...state, ...action.payload };
    },
  },
};

export default ThemeProps;
