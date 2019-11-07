import React from 'react';

import TableBasic from './TableBasic';
import styles from './index.less';
import BasicPage from '@/components/BasicPage';

class ThemePage extends BasicPage {
  render() {
    // Nothing new
    return (
      <div className={styles.main}>
        <TableBasic />
      </div>
    );
  }
}

export default ThemePage;
