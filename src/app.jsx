/* APP CLASS
 * Usage : display each component of goal tracker
 * Parent Depen : N/A
 * Sections :
 *    31.   Goal Parent Functions
 *    60.   Task Parent Functions
 *    112.  Goal Form Parent Functions
 *    157.  Render
 */

import React, { Component, Fragment } from "react";
import styles from "./styles/main.scss";

import Header from "./Header/Header.js";
import Goals from "./Goals/Goals.js";
import GoalForm from "./Forms/GoalForm.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      goals: [],
      form: {
        value: "",
        tasks: ""
      }
    };
  }

  /* GOAL PARENT FUNCTIONS */
  /*
   * func :: change goal to completed
   * params :: goal
   */
  handleCompletedTitle = goal => {
    const goals = [...this.state.goals];
    const index = goals.indexOf(goal);
    goals[index] = { ...goal };
    if (goals[index].completed == true) {
      goals[index].completed = false;
    } else {
      goals[index].completed = true;
    }
    this.setState({ goals });
  };

  /*
   * func :: change individual goal title value
   * params :: goal & task
   */
  handleChangeTitle = (e, goal) => {
    const goals = [...this.state.goals];
    const index = goals.indexOf(goal);
    goals[index] = { ...goal };
    goals[index].title = e.target.value;
    this.setState({ goals });
  };

  /* TASK PARENT FUNCTIONS 
  1. handleCompletedTask
  2. allCompleted
  3. handleChangeTask
  */
  /*
   * func :: change individual task to completed
   * params :: goal & task
   */
  handleCompletedTask = (goal, task) => {
    const goals = [...this.state.goals];
    const index = goals.indexOf(goal);
    goals[index] = { ...goal };
    const tindex = goals[index].tasks.indexOf(task);
    goals[index].tasks[tindex] = { ...task };
    if (goals[index].tasks[tindex].completed == true) {
      goals[index].tasks[tindex].completed = false;
    } else {
      goals[index].tasks[tindex].completed = true;
    }
    goals[index].completed = this.allCompleted(goals[index].tasks);
    this.setState({ goals });
  };

  /*
   * func :: check if all tasks are completed
   * params :: task array
   * return :: boolean
   */
  allCompleted(tasks) {
    for (var i = 0; i < tasks.length; i++) {
      if (!tasks[i].completed) {
        return false;
      }
    }
    return true;
  }

  /*
   * func :: change individual task title value
   * params :: event & goal & task
   */
  handleChangeTask = (e, goal, task) => {
    const goals = [...this.state.goals];
    const index = goals.indexOf(goal);
    goals[index] = { ...goal };
    const tindex = goals[index].tasks.indexOf(task);
    goals[index].tasks[tindex] = { ...task };
    goals[index].tasks[tindex].title = e.target.value;
    this.setState({ goals });
  };

  /* GOAL FORM PARENT FUNCTIONS 
  1. handleChangeValue
  2. handleChangeTasks
  3. handleSubmitForm
  */
  /*
   * func :: change state of goal title
   * params :: event
   */
  handleChangeValue = e => {
    this.setState({ value: e.target.value });
  };

  /*
   * func :: change state of goals tasks
   * params :: event
   */
  handleChangeTasks = e => {
    this.setState({ tasks: e.target.value });
  };

  /*
   * func :: submit new goal
   * params :: event
   */
  handleSubmitForm = e => {
    const goals = [...this.state.goals];
    let id = this.state.id + 1;
    let title = this.state.value;
    let tasks = [];
    let i = 0;
    if (this.state.tasks) {
      tasks = this.state.tasks.split(", ");
    }
    tasks = tasks.map(function(val, index) {
      return { id: index, completed: false, title: val };
    });
    if (title !== "" && title !== undefined) {
      goals.push({ id: id, title: title, completed: false, tasks: tasks });
      this.setState({ id, goals });
    } else {
      alert("Please add a goal!");
    }
  };

  render() {
    return (
      <div className="app">
        <Header />

        <GoalForm
          form={this.state.form}
          onChangeValue={this.handleChangeValue}
          onChangeTasks={this.handleChangeTasks}
          onSubmitForm={this.handleSubmitForm}
        />

        <Goals
          key={this.state.goals.id}
          onCompletedTitle={this.handleCompletedTitle}
          onCompletedTask={this.handleCompletedTask}
          onChangeTitle={this.handleChangeTitle}
          onChangeTask={this.handleChangeTask}
          goals={this.state.goals}
        />

        <div className="app-content"></div>
      </div>
    );
  }
}

export default App;
