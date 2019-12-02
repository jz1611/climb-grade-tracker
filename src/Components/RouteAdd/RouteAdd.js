import React from 'react';

import './RouteAdd.css';

function RouteAdd(props) {
    return <form className="route-add"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        props.postRoute();
    }}>
      <div>
        <h1>Nickname:</h1><input name="nickname" type ="text" required="required" onChange={(e) =>
          props.changeHandler(e.target.name, e.target.value)} value={ props.nickname } />
      </div>
      <div>
        <h1>Difficulty:</h1><input name="difficulty" type="text" required="required" onChange={(e) =>
          props.changeHandler(e.target.name, e.target.value)} value={ props.difficulty } />
      </div>
      <div>
        <h1>Attempts:</h1><input name="attempts" type="number" required="required" onChange={(e) =>
          props.changeHandler(e.target.name, e.target.value)} value={ props.attempts } />
      </div>
      <div>
        <h1>Completions:</h1><input name="completes" type="number" required="required" onChange={(e) =>
          props.changeHandler(e.target.name, e.target.value)} value={ props.completes } />
      </div>
      <div>
        <h1>Record:</h1><input name="record" type="text" required="required" onChange={(e) =>
          props.changeHandler(e.target.name, e.target.value)} value={ props.record } />
      </div>
      <button>Add Route</button>
    </form>
}

export default RouteAdd;