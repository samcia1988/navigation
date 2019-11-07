import { Component } from 'react';
import { connect } from 'dva';

@connect(({ themeProps }) => ({ themeProps }))
class BasicPage extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch({
      type: 'themeProps/fectch',
      payload: {
        username: 'ranger',
      },
    });
  }
}

export default BasicPage;
