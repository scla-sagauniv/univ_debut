"use client"
import React from 'react'
import Header from '../../components/Header'
import {DndContext} from '@dnd-kit/core';

const TaskState = () => {
  return (
    <main className="">
      <Header />
      <div className="container">
        <h1 className='issue-title'>ISSUEリスト</h1>
        <div className="issue-container">
          <div className="issue-item">
            <p>未着手</p>
          </div>
          <div className="issue-item">
            <p>着手中</p>
          </div>
          <div className="issue-item">
            <p>完了</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default TaskState