import React from 'react';
import { GetStaticProps } from 'next';
import PortfolioItemList from '../components/PortfolioItemList';
import { portfolioItems, PortfolioItem } from '@/app/data'; // Adjust the import path as needed

interface PortfolioPageProps {
  items: PortfolioItem[];
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ items }) => {
  return (
    <div className='-ml-2' >
      <PortfolioItemList items={items} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  // In a real-world scenario, you might fetch this data from an API
  return {
    props: {
      items: portfolioItems,
    },
  };
};

export default PortfolioPage;