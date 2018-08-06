import React from 'react'

const KiwiClient = props => {
  return (
    <div className="kiwi card rounded bg-light mt-5">
      <div className="card-header">
        <h5 className="text-center">IRC</h5>
      </div>

      <iframe
        className="kiwi"
        src="https://kiwiirc.com/nextclient/#irc://irc.freenode.net/##novatore"
      />
    </div>
  )
}

export default KiwiClient
