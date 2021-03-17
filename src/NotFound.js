import {Link} from 'react-router-dom';
const NotFound = () => {
    return (  
         <div className="not-found">
             <h2>Sorry</h2>
             <p>The page cannot be found</p>
             <Link to = "/"> Go back to home page ...</Link>
         </div>   
    );
}
 
export default NotFound;
    