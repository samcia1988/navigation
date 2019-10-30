import React, { Component } from 'react';
import { Table, Tag, Button } from 'antd';
import { connect } from 'dva';
import ThemeVary from '@/pages/ThemeVary';

@connect(({ themeItems, themeProps, settings }) => ({ themeItems, themeProps, settings }))
class ThemeTable extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'themeItems/fetch',
      payload: {},
    });
    dispatch({
      type: 'themeProps/fetch',
      payload: {},
    }).then(resp => {
      console.log(resp);
      dispatch({
        type: 'settings/changeSetting',
        payload: ThemeVary[resp.name],
      });
    });
  }

  componentDidUpdate() {
    const changeTheme = (name: string) => {
      const { dispatch } = this.props;
      dispatch({
        type: 'themeProps/change',
        payload: {
          name,
        },
      }).then(() => {
        dispatch({
          type: 'settings/changeSetting',
          payload: ThemeVary[name],
        });
        this.forceUpdate();
      });
    };
    const ThemeAction = props => {
      if (props.name === props.currentTheme) {
        return (
          <span>
            <Button type="primary" disabled>
              已选主题
            </Button>
          </span>
        );
      }
      return (
        <span>
          <Button type="primary" onClick={() => changeTheme(props.name)}>
            选择主题
          </Button>
        </span>
      );
    };

    this.data = this.props.themeItems.items;
    this.currentTheme = this.props.themeProps.name;
    this.columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
      },
      {
        title: '主题名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: record => <ThemeAction name={record.name} currentTheme={this.currentTheme} />,
      },
    ];
  }

  render() {
    return (
      <div id="components-table-demo-basic">
        <Table columns={this.columns} dataSource={this.data} rowKey="id" />
      </div>
    );
  }
}

export default ThemeTable;
