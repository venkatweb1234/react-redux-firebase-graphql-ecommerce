//Higher Order compoent
import useAuth from "../customHooks/useAuth";

const WithAuthHoc = (props) => useAuth(props) && props.children;

export default WithAuthHoc;
