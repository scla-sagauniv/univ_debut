"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const IssueForm = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const TitleChange = (event) => {
    setTitle(event.target.value);
  };
  const Submit = (event) => {
    event.preventDefault();
    // フォームが送信されたときの処理を追加
    router.push('/playTimer');
  };
  return (
    <div className="issue-form">
      <form onSubmit={Submit}>
        <div className="form-group">
          <input type="text" className="form-control border-2 border-current text-2x1  rounded-l-md px-4 py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="タスク名"   value={title}
          onChange={TitleChange} />
          <button type="submit" className="btn btn-primary bg-cyan-200 border-2 border-current text-2x1 rounded-r-md  px-4 py-2">追加</button> 
        </div>
      </form>
    </div>
  )
}
export default IssueForm
