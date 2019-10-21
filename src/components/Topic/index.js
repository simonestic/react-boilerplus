import React from 'react';
import { withRouter, Link, Route } from "react-router-dom";

import Resource from '../Resource/index';

const index = (props) => {

  const topic = props.topics.find(({ id }) => id === props.match.params.topicId)

  console.log('inside Topic -- props.match--> ', props.match);

  return (
    <div>
      <h2 style={{color:"orange",fontSize:22}}>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>        
        {
          topic.resources.map(el=>{
            return (              
              <li key={el.id}>                
                <Link to={`${props.match.url}/${el.id}`}>
                  {el.name}
                </Link>
              </li>
            )
          })
        }
      </ul>

      <hr />

      <Route path={`${props.match.path}/:subId`}>
        <Resource topics={props.topics}/>
      </Route>

    </div>
  );
};

export default withRouter(index);