'use client'

import { useTask } from '@/app/provider';
import * as Dialog from '@radix-ui/react-dialog';
import { Trash } from 'lucide-react';

import './index.scss'

interface DeleteTaskProps {
  id: string
}

export function DeleteTask({ id }: DeleteTaskProps) {
  const { removeTask } = useTask()

  function handleDeleteTask () {
    removeTask(id)
    alert(`Tarefa: ${id} excluída!`)
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="ml-auto" type='button'>
          <Trash size={24} color='#B0BBD1' />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <span className="text-black text-2xl font-medium">Deletar tarefa</span>

          <p className="description">Tem certeza que você deseja deletar essa tarefa?</p>
          <div className="dialog-content__container-buttons">
            <Dialog.Close className="dialog-content__close-button">
              Cancelar
            </Dialog.Close>

            <button onClick={handleDeleteTask} className="dialog-content__delete-button">
              Deletar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
