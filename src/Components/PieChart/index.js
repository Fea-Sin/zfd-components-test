import React, { PureComponent } from 'react';
import { PIE } from 'zfg';
import Box from '../Box';

const data =  [{
  "id": null,
  "hot": null,
  "emotionType": 1,
  "category": null,
  "categoryType": null,
  "source": null,
  "title": null,
  "publishTime": null,
  "newsTags": null,
  "count": 5
}, {
  "id": null,
  "hot": null,
  "emotionType": 2,
  "category": null,
  "categoryType": null,
  "source": null,
  "title": null,
  "publishTime": null,
  "newsTags": null,
  "count": 17
}, {
  "id": null,
  "hot": null,
  "emotionType": 3,
  "category": null,
  "categoryType": null,
  "source": null,
  "title": null,
  "publishTime": null,
  "newsTags": null,
  "count": 41
}];

const dataConfig = {
  // 1. 数据 map 处理
  dictionaies: {
    emotionType: {
      1: '积极',
      2: '中立',
      3: '消极',
    },
  },
  /**
   * 2. 字段重命名
   * 饼形图、环形图，字段有两个 item*count
   * 如果数据字段不匹配，请配置完成
   */ 
  rename: {
    emotionType: 'item',
  },
}
const config = {
  width: 400,
  height: 400,
  forceFit: true,
  color: ['#8798ff', '#ffd481', '#ff90a2'],
  coord: {
    theta: {
      radius: 0.75,
    }
  },
}


export default class App extends PureComponent {

  render() {
    return (
      <div style={{ padding: 30 }}>
        <div>PIE is here</div>
        <Box
          example='基本'
          title='基本饼形图'
        >
          <PIE data={data} dataConfig={dataConfig} config={config} />
        </Box>
      </div>
    )
  }
}
