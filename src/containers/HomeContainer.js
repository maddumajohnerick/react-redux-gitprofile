import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import * as gitProfActions from '../actions/gitProfActions';

function mapStateToProps(state, ownProps) {
  return {
    username: ownProps.params.username,
    gitProf: state.gitProf,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gitProfActions: bindActionCreators(gitProfActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
