import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    logout: () => dispatch(logout())
  };
};

const mapStateToProps = ({session, entities}) => {
  // debugger
  return {
    currentUser: entities.users[session.id]
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
