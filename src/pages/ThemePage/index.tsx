import { connect } from 'dva';
import React, { Component } from 'react';

import TableBasic from './TableBasic';
import styles from './index.less';

@connect(({ themeProps }) => ({ themeProps }))
class ThemePage extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch({
      type: 'themeProps/fetch',
      payload: {
        username: 'ranger',
      },
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <TableBasic />
      </div>
    );
  }
}

export default ThemePage;
