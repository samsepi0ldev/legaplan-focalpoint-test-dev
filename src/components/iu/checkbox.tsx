'use client'

import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import './index.scss'

import { DeleteTask } from "../delete-task";
import { Task, useTask } from "@/app/provider";

interface CheckBoxProps {
  data: Task
}

export function CheckBox({ data }: CheckBoxProps) {
  const { handleCompleteTask } = useTask()
  return (
    <div key={data.id} className="checkbox">
      <Checkbox
        onCheckedChange={() => handleCompleteTask(data.id)}
        className="checkbox-item"
        id={data.id}
        checked={data.completed}
      >
        <CheckboxIndicator>
          <Check size={18} />
        </CheckboxIndicator>
      </Checkbox>
      <label htmlFor={data.id} className="text-inherit">{data.title}</label>
      <DeleteTask id={data.id} />
    </div>
  )
}
