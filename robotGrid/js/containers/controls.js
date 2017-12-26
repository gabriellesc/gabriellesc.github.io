import { connect } from 'react-redux';

import Controls from '../components/controls.js';

const getSpeed = state => 5000 - state.duration;

const mapStateToProps = state => ({
    height: state.height,
    width: state.width,
    speed: getSpeed(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
