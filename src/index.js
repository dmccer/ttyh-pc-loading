import 'ttyh-less-lib/component/icon.less';
import './index.less';

import React from 'react';
import cx from 'classnames';
import TTimers from 'ttyh-timers';

@TTimers
export default class Loading extends React.Component {
  render() {
    let { on, msg } = this.props;
    let loadingClassNames = cx('loading', on ? 'on' : '');

    return on ? (
      <div className={loadingClassNames}>
        <div className="mask"></div>
        <div className="loading-panel">
          <p className="loading-text">
            <i className="icon icon-loading"></i>
            <span>{msg}</span>
          </p>
        </div>
      </div>
    ) : null;
  }
}
