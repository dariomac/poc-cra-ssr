import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const Page = ({ todos }) => {
  /**
   * You can't useEffect server side because is a no-op
   * https://github.com/gatsbyjs/gatsby/issues/13947#issuecomment-491214724
   */

  return (
    <div>
      <h1>THIS IS A PAGE! ({ todos.length } todos in the state)</h1>
      <p>{ todos[todos.length-1].text }</p>
      <Link to="/">Home</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    todos: state.todos
  });
}

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
