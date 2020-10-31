import React from 'react';
import { VscCalendar, VscComment } from 'react-icons/vsc';
import { CardContainer, CardHeader, CardFooter } from './styled';

interface CardProps {
  srcImage: string;
  author: string;
  title: string;
  date: string;
  totalRequests?: string;
  labels: Record<string, any>;
}

const Card: React.FC<CardProps> = ({
  children,
  srcImage,
  author,
  title,
  date,
  totalRequests,
  labels,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <img src={srcImage} alt={author} />
        <h3> {author} </h3>
      </CardHeader>
      <h2>{title}</h2>
      <p>
        <VscCalendar size={20} />
        Date: {date}
      </p>
      <p>
        <VscComment size={20} />
        {totalRequests} Requests Review
      </p>
      {children}
      <CardFooter>{labels}</CardFooter>
    </CardContainer>
  );
};

export default Card;
