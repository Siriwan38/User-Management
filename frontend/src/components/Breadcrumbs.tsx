import React from 'react';
import { Link, To  } from 'react-router-dom';


const Breadcrumb = ({ paths}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; url: To; }, index: React.Key | null | undefined) => (
          <li key={index} className={`breadcrumb-item ${index === paths.length - 1 ? 'active' : ''}`}>
            {index === paths.length - 1 ? (
              path.name
            ) : (
              <Link to={path.url}>{path.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
