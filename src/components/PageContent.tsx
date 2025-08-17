import React from 'react';
import './PageContent.css';

interface PageContentProps {
  children: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => (
  <main className="page-content container">
    {children}
  </main>
);

export default PageContent;
