//Higher Order compoent
import useAuth from '../customHooks/useAuth';
import { withRouter } from 'react-router-dom';


const WithAuthHoc =props => useAuth(props) && props.children;

export default withRouter(WithAuthHoc);