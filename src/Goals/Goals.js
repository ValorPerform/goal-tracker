/* GOALS CLASS
 * Usage : display each goal listed
 * Parent Depen : N/A
 * Funcs : N/A
 */

import React, { Component } from "react";
import Goal from "./Goal.js";
import styles from "./styles.scss";

class Goals extends Component {
  render() {
    const {
      goals,
      onCompletedTitle,
      onChangeTitle,
      onCompletedTask,
      onChangeTask
    } = this.props;

    return (
      <div className="m-2 p-1 d-flex flex-column">
        {goals.map(goal => (
          <Goal
            key={goal.id}
            onCompletedTitle={onCompletedTitle}
            onChangeTitle={onChangeTitle}
            onCompletedTask={onCompletedTask}
            onChangeTask={onChangeTask}
            goal={goal}
          />
        ))}
      </div>
    );
  }
}

export default Goals;
