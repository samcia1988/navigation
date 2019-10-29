import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import { connect } from 'dva';

function ThemeAction(props) {
  if (props.name === props.currentTheme) {
    return (
      <span>
        <a>已选主题</a>
      </span>
    );
  }
  return (
    <span>
      <a>选择主题</a>
    </span>
  );
}

@connect(({ themeItems, themeProps }) => ({ themeItems, themeProps }))
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
    });
  }

  componentDidUpdate() {
    this.data = this.props.themeItems.items;
    this.currentTheme = this.props.themeProps.name;
    this.columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'key',
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
        <Table columns={this.columns} dataSource={this.data} />
      </div>
    );
  }
}

export default ThemeTable;
