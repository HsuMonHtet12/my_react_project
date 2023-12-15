import {Link} from "react-router-dom";
function Error()
{
    return(
        <div>
            <h1>404</h1>
            <h1>Page Not Found</h1>
            <Link to="/">Back to Home</Link>
        </div>
    )
}
export default Error;