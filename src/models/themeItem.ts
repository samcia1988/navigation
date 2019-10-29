import { getThemeItems } from '@/services/theme';

const ThemeItems = {
  namespace: 'themeItems',
  state: {
    items: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getThemeItems, payload);
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

export default ThemeItems;
