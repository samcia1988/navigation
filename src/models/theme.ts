import { getTheme } from '@/services/theme';

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
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

export default ThemeProps;