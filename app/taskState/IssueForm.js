import React from 'react'


const IssueForm = () => {
  return (
    <div className="issue-form">
      <form>
        <div className="form-group">
          <input type="text" className="form-control border-2 text-2xl  rounded-l-md " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="タスク名" />
          <button type="submit" className="btn btn-primary bg-cyan-500 border-2 text-2xl rounded-r-md ">追加</button>
        </div>
      </form>
    </div>
  )
}
export default IssueForm