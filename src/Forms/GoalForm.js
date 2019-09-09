/* GOAL FORM CLASS
 * Usage : input new goals & tasks
 * Parent Depen : onChangeValue, onChangeTasks, onSubmitForm
 * Funcs : N/A
 */

import React, { Component } from "react";
import styles from "./styles.scss";

class GoalForm extends Component {
  render() {
    return (
      <div className="m-2 p-1 d-flex flex-row">
        <input
          className="m-2 w-25 out"
          type="text"
          placeholder="add new goal"
          value={this.props.value}
          onChange={this.props.onChangeValue}
        />
        <input
          className="m-2 w-75 out"
          type="text"
          placeholder="tasks (seperate each with comma)"
          value={this.props.tasks}
          onChange={this.props.onChangeTasks}
        />
        <input
          className="m-2 btn btn-sm btn-secondary"
          type="submit"
          value={"ADD"}
          onClick={this.props.onSubmitForm}
        />
      </div>
    );
  }
}

export default GoalForm;
