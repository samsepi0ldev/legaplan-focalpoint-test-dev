'use client'

import React, { FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from "@/components/iu/button";
import { useTask } from '@/app/provider';

import './index.scss'

export function AddTask() {
  const [title, setTitle] = useState('')
  const { createTask } = useTask()

  function handleCreateTask (e: FormEvent) {
    e.preventDefault()

    if (title.trim() !== '') {
      createTask(title)
      setTitle('')
      alert('Tarefa criada com sucesso!')
      return
    }
    alert('O nome da tarefa não pode ser vazio!')
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button type="button">
          Adicionar nova tarefa
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <span className="text-black text-2xl font-medium">Nova tarefa</span>

         <form onSubmit={handleCreateTask} className='space-y-8'>
            <div className="flex flex-col gap-2">
              <label>Título</label>
              <input
                className="p-4 border rounded-lg"
                name="title"
                type="text"
                placeholder="Digite"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="flex items-center gap-4">
              <Dialog.Close className="w-close px-6 py-4 rounded-lg bg-close text-black font-medium">
                Cancelar
              </Dialog.Close>

              <Button>
                Adicionar
              </Button>
            </div>
         </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
