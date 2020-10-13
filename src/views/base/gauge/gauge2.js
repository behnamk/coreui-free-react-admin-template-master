import React, {Component} from 'react'
import Gauge from 'react-canvas-gauge';

class MyGauge extends Component {
  render() {
    return (<Gauge
        minValue={-15}
        maxValue={20}
        value={-4}
        size={250}
        enableColorful={true}
        theme={'dark'}
        enableAnimation={true}
    />);
  }
}

export default MyGauge;
