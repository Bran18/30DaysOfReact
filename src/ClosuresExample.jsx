const ClouseresExample = () => {

let users = ['Brandon','Carlos','Ann','Will','Carolina'];
let querry = 'B';
let userResult = users.filter(user => user.startsWith(querry));

    return ( 

        <div className="container mt-3">
            <h1>Day one of the #30DaysOfReact created by <a href="https://github.com/brolag"> Alfredo Bonilla </a></h1>
            <hr />
         <div className="alert alert-primary" role="alert"> The result of the Clousure Example is the user: {userResult}</div>
        </div>
       
     );
}
 
export default ClouseresExample;