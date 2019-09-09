/* GOAL CLASS
 * Usage : display individual goal properties
 * Parent Depen : onCompletedTitle, onChangeTitle
 * Funcs : getBtnAttr(48), formatCompleted(57)
 */

import React, { Component } from "react";
import Task from "./Task.js";
import styles from "./styles.scss";

class Goal extends Component {
  render() {
    const { onCompletedTask, onChangeTask } = this.props;
    return (
      <div className="m-2 p-1 d-flex flex-column main">
        <div className="d-flex flex-row">
          <div className="flex-grow-1">
            <input
              className="m-2 w-100 trans text-uppercase h5"
              type="text"
              value={this.props.goal.title}
              onChange={e => this.props.onChangeTitle(e, this.props.goal)}
            />
          </div>
          <button
            className={this.getBtnAttr()}
            onClick={() => this.props.onCompletedTitle(this.props.goal)}
          >
            {this.formatCompleted()}
          </button>
        </div>

        <div className="mt-2 d-flex flex-column">
          {this.props.goal.tasks.map(task => (
            <Task
              key={task.id}
              onCompletedTask={onCompletedTask}
              onChangeTask={onChangeTask}
              task={task}
              goal={this.props.goal}
            />
          ))}
        </div>
      </div>
    );
  }

  /*
   * func :: attributes for completed button
   */
  getBtnAttr() {
    let classes = "btn btn-sm m-2 btn-";
    return (classes +=
      this.props.goal.completed === false ? "danger" : "secondary");
  }

  /*
   * func :: text value for goal completed button
   */
  formatCompleted() {
    const { completed } = this.props.goal;
    return completed === false ? "INCOMPLETE" : "COMPLETE";
  }
}

export default Goal;
