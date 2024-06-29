import React, { useState } from 'react';
import styled from 'styled-components';

const AdaptiveReview = () => {
  const [reviewTopics, setReviewTopics] = useState([
    'Grammar: Past Tense',
    'Vocabulary: Food and Drinks',
    'Pronunciation: Common Phrases',
  ]);

  return (
    <ReviewContainer>
      <Title>Adaptive Review Sessions</Title>
      <Description>
        Based on your recent performance, we recommend reviewing the following topics:
      </Description>
      <TopicList>
        {reviewTopics.map((topic, index) => (
          <TopicItem key={index}>{topic}</TopicItem>
        ))}
      </TopicList>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const TopicList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TopicItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

export default AdaptiveReview;
