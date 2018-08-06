import axios from 'axios'

// ACTION TYPES
const GOT_ALL_TASKS = 'GOT_ALL_TASKS'
const CREATED_TASK = 'CREATE_TASK'
const TOGGLE_TASK = 'TOGGLE_TASK'
const initialTasks = []

// ACTION CREATORS
export const gotAllTasks = tasks => ({
  type: GOT_ALL_TASKS,
  tasks,
})

export const createdTask = task => ({
  type: CREATED_TASK,
  task,
})

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  id,
})

// THUNK CREATORS

export const getAllTasks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/tasks')
    dispatch(gotAllTasks(data))
  } catch (err) {
    console.error(err)
  }
}

export const createTask = task => async dispatch => {
  try {
    const {data} = await axios.post('/api/tasks', task)
    dispatch(createdTask(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const taskReducer = (tasks = initialTasks, action) => {
  switch (action.type) {
    case GOT_ALL_TASKS: {
      return action.tasks
    }
    case CREATED_TASK: {
      return [...tasks, action.task]
    }

    case TOGGLE_TASK: {
      const newTask = tasks.find(tsk => tsk.id === action.id)
      newTask.complete = !newTask.complete
      console.log(newTask)
      return tasks.filter(tsk => tsk.id !== action.id).concat(newTask)
    }

    default: {
      return tasks
    }
  }
}

export default taskReducer
