'use client'

import React, { createContext, useContext, useEffect, useState } from "react"

export type Task = {
  id: string
  title: string
  completed: boolean
}

interface TaskContextProps {
  tasks: Task[]
  createTask: (title: string) => void
  handleCompleteTask: (id: string) => void
  removeTask: (id: string) => void
}


const TaskContext = createContext({} as TaskContextProps)

interface TaskProviderProps {
  children?: React.ReactNode
}

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

export function TaskProvider ({ children }: TaskProviderProps) {
  const [tasks, setTask] = useState<Task[]>([])
  const [initialStateApp, setInitialStateApp] = useState(true)

  function createTask (title: string) {
    setTask([...tasks, { title, id: uuidv4(), completed: false }])
  }

  function handleCompleteTask (id: string) {
    setTask(tasks.map(task => {
      if (task.id === id) {
        task.completed = true
      }
      return task
    }))
  }

  function removeTask (id: string) {
    setTask(tasks.filter(task => task.id !== id))
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data !== null) {
      setTask(JSON.parse(data))
      setInitialStateApp(false)
    }
  }, [])

  useEffect(() => {
    if (initialStateApp === false) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [initialStateApp, tasks])

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      handleCompleteTask,
      removeTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask () {
  return useContext(TaskContext)
}
