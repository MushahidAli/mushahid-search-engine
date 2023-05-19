import FileNotFoundImg from '../assets/404.png';
import {Link} from 'react-router-dom'

const FileNotFound = () => {
    return (<>
    <br /><br />
    <h2>. : : 404 - Client Side Error - File Not Found : : .</h2>
    <code>
    The requested URL returned ERR_CODE: 404.<br />Go back to <Link to="/">/HOME</Link>.
    </code>
    <br /><br />
    <img width="50%" height="50%" src={FileNotFoundImg} />
    </>);
}

export default FileNotFound;