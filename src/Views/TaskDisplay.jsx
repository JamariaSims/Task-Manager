import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useParams } from "react-router";

function TaskDisplay(props) {
  const { tasks } = props;
  let { id } = useParams();

  return (
    <div>
      <p>{tasks[id].name}</p>
      <p>{tasks[id].description}</p>
      <p>{tasks[id].deadline}</p>
      <p>{tasks[id].priority}</p>
      <p>{tasks[id].id}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps)(TaskDisplay);
