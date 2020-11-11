import React from 'react';
import { VscCalendar, VscComment } from 'react-icons/vsc';
import { CardContainer, CardHeader, CardFooter, TagNumber } from './styled';

interface CardProps {
  srcImage: string;
  author: string;
  title: string;
  date: string;
  totalRequests?: string;
  labels: Record<string, any>;
  prNumber: number;
}

const Card: React.FC<CardProps> = ({
  children,
  srcImage,
  author,
  title,
  date,
  totalRequests,
  prNumber,
  labels,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <img src={srcImage} alt={author} />
        <h3> {author} </h3>
      </CardHeader>
      <TagNumber>#{prNumber}</TagNumber>
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
