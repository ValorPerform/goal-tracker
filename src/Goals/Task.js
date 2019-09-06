/* TASK CLASS
 * Usage : display individual task properties
 * Parent Depen : onChangeTask, onCompletedTask
 * Funcs : getBtnAttr(34), formatCompleted(43)
 */

import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div className="m-2 d-flex flex-row">
        <input
          className="w-100 trans"
          type="text"
          value={this.props.task.title}
          onChange={e =>
            this.props.onChangeTask(e, this.props.goal, this.props.task)
          }
        />

        <button
          className={this.getBtnAttr()}
          onClick={() =>
            this.props.onCompletedTask(this.props.goal, this.props.task)
          }
        >
          {this.formatCompleted()}
        </button>
      </div>
    );
  }

  /*
   * func :: attributes for completed button
   */
  getBtnAttr() {
    let classes = "btn btn-sm m-2 btn-";
    return (classes +=
      this.props.task.completed === false ? "danger" : "secondary");
  }

  /*
   * func :: text value for task completed button
   */
  formatCompleted() {
    return this.props.task.completed === false ? "+" : "-";
  }
}

export default Task;
