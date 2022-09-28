import React from 'react'


const ErrorPage = () => {

  return (
    <div className="home__error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            {/* <i>{error.statusText || error.message}</i> */}
        </p>
    </div>
  )
}

export default ErrorPage