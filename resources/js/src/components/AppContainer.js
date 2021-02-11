import React from 'react';

const AppContainer = ({title, children}) => {
  return (
    <div className="AppContainer__container">
      <div className="container">
        <div className="card">
          <div className="card-header">
            {/* to get title */}
            {title}
          </div>
          <div className="card-body">
          <h5 className="card-title">CRUD Operation</h5>
            {/* to get children components */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;