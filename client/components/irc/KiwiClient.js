import React from 'react'

const KiwiClient = props => {
  return (
    <div>
      <iframe
        className="kiwi"
        src="https://kiwiirc.com/client/irc.freenode.net/?nick=notnuII&##Novatore"
        style={{border: '20', width: '1000px', height: '450px'}}
      />
    </div>
  )
}

export default KiwiClient
