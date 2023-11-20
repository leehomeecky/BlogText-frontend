import React from "react";
import { useMatch } from "react-router-dom";

const generatePage = (page) => {
  const element = React.lazy(() => import(`./pages/${page}`));
  try {
    return React.createElement(element);
  } catch (err) {
    console.warn(err);
    return <div>404 - Not Found</div>;
  }
};

const PageRenderer = () => {
  const match = useMatch();
  if (!match) {
    return <div>404 - Not Found</div>;
  }
  const {
    params: { page },
  } = match;
  return generatePage(page);
};

export default PageRenderer;
