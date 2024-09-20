'use client'

import { Header } from "@/components/header";
import { AddTask } from "@/components/add-task";
import { useTask } from "@/app/provider";
import { CheckBox } from "@/components/iu/checkbox";

import './index.scss'

export default function Home() {
  const { tasks } = useTask()
  return (
    <div className="wrapper">
      <Header />

      <div className="header">
        <div className="task-container">
          <div className="task-box">
            <span className="task-title">Suas tarefas de hoje</span>

            <div className="task-list">
              {tasks.filter(task => !task.completed).map((task) => (
                <CheckBox
                  key={task.id}
                  data={task}
                />
              ))}
              {!tasks.filter(task => !task.completed).length && (
                <span className="no-tasks">Sem tarefas, considere criar uma.</span>
              )}
            </div>

            {!!tasks.filter(task => task.completed).length && (
              <div className="completed-tasks">
                <span className="completed-title">Tarefas finalizadas</span>

                <div className="completed-list ">
                  {tasks.filter(task => task.completed).map((task) => (
                    <CheckBox
                      key={task.id}
                      data={task}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <AddTask />
        </div>
      </div>
    </div>
  );
}
