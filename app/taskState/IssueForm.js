import React from 'react'


const IssueForm = () => {
  return (
    <div className="issue-form">
      <form>
        <div className="form-group">
          <input type="text" className="form-control border-2 border-current text-2x1  rounded-l-md px-4 py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="タスク名" />
          <button type="submit" className="btn btn-primary bg-cyan-200 border-2 border-current text-2x1 rounded-r-md  px-4 py-2">追加</button>
        </div>
      </form>
    </div>
  )
}
export default IssueForm