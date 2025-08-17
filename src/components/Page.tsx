import React from 'react';
import './Page.css';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => (
  <div className="page full-width">
    {children}
  </div>
);

export default Page;
