import React from 'react'


const IssueForm = () => {
  return (
    <div className="issue-form">
      <form>
        <div className="form-group">
          <input type="email" className= "" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="タスク名" />
          <button type="submit" className="btn btn-primary border">追加ボタン</button>
        </div>
      </form>
    </div>
  )
}
export default IssueForm