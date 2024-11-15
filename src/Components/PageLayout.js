import React from 'react';

const PageLayout = ({ background, children }) => {
  const pageStyle = {
    background: background || 'white', // Если фон не передан, будет белый
    minHeight: '100vh',  // Для того, чтобы фон покрывал всю высоту страницы
    padding: '20px', // Немного отступов
  };

  return (
    <div style={pageStyle}>
      {children}
    </div>
  );
};

export default PageLayout;