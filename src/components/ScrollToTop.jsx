import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
class ScrollToTop extends Component {
componentDidUpdate(prevProps) {
if (this.props.location !== prevProps.location) {
window.scrollTo(0, 0)
}
}
render() {
return this.props.children
}
}
// eslint-disable-next-line react-refresh/only-export-components
export default withRouter(ScrollToTop);