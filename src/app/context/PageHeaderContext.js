import React from "react";

const PageHeaderContext = React.createContext({
    title: "Popular Series",
    setTitle: () => {}
});

export default PageHeaderContext;
