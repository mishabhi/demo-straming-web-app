import React, { Fragment, useState } from 'react';
import Navigator from './route/Navigator';
import AppHeader from './components/header/AppHeader';
import AppFooter from './components/footer/AppFooter';
import PageHeaderContext from './context/PageHeaderContext';
import ItemsListHeader from './components/common/items-list-header/ItemsListHeader';

function App() {
  const [title, setTitle] = useState("Popular Titles")
  const contextValue = {title, setTitle}

  return (    
      <PageHeaderContext.Provider value={contextValue}>
        <Fragment>
          <AppHeader />
          <ItemsListHeader headerTitle={title} />         
            <Navigator />         
          <AppFooter />
        </Fragment>
      </PageHeaderContext.Provider>    
  );
}

export default App;
