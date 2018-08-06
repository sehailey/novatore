import React from 'react'

const KiwiClient = props => {
  return (
    <div>
      <iframe
        src="https://kiwiirc.com/client/irc.freenode.net/?nick=Novatore&##novatore"
        style={{border: '20', width: '100%', height: '450px'}}
      />
    </div>
  )
}

export default KiwiClient
