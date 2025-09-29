import React from 'react'

export default function Card({icon,title,text}) {
  return (
      <div className="col-md-4 mb-4">
      <div className="card text-center h-100">
        <div className="card-body">
          <i className={`${icon} fa-2x mb-3`}></i>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  )
}
