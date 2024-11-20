import React from 'react';

const PageLayout = ({ background, children }) => {
  const pageStyle = {
    background: background || 'rgb(8, 0, 43)', // Если фон не передан, будет белый
    minHeight: '100vh',  // Для того, чтобы фон покрывал всю высоту страницы
  };

  return (
    <div style={pageStyle}>
      {children}
    </div>
  );
};

export default PageLayout;