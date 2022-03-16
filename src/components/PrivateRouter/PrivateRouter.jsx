import React from 'react';
import { Redirect, Route} from 'react-router-dom'

const PrivateRouter = ({children, ...rest}) => {

    const userStorage = JSON.parse(localStorage.getItem("Usuario"))

    // if(!!userStorage){
    //     return(
    //         <Redirect to={redirectTo}/>
    //     )
    // }else{
    //     return(
    //         <Redirect to={"/unauthenticated"} />
    //     )
    // }
    return (
        <Route
          {...rest}
          render={
            ({ location }) => (
                !!userStorage
                ? (
                  children
                ) : (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: { from: location }
                    }}
                  />
                ))
          }
        />
      );
}

export default PrivateRouter;