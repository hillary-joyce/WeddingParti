import React from "react"

const WeddingTasks = props => (
  <div className="wedding-tasks">
    <h3>Tasks</h3>
    {props.children}
  </div>
)

export default WeddingTasks;
