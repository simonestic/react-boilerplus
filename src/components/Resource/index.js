import React from 'react';
import { withRouter } from 'react-router-dom';

const index = (props) => {
  const topic = props.topics.find(el=> el.id === props.match.params.topicId )
  .resources.find(el => el.id === props.match.params.subId);
  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More Info ...</a>
    </div>
  );
};

export default withRouter(index);