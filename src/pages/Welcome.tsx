import React from 'react';
import BasicPage from '@/components/BasicPage';
import { Table } from 'antd';
import { connect } from 'dva';

@connect(({ config }) => ({ config }))
class Welcome extends BasicPage {
  state = {
    dataSource: [],
  };

  columns = [
    {
      title: '系统',
      dataIndex: 'system',
      key: 'system',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      render: item => <a href={item}>{item}</a>,
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'config/fetch',
    }).then(() => {
      this.props.config.systems.forEach(element => {
        element.key = element.system;
      });
      this.setState({
        dataSource: this.props.config.systems,
      });
    });
  }

  render() {
    return (
      <div>
        <Table dataSource={this.state.dataSource} columns={this.columns} />
      </div>
    );
  }
}

export default Welcome;
