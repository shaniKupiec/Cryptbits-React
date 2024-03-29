import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {
  return (
    <Link to={`/contact/${contact._id}`} className="contact-preview">
      <img src={`https://robohash.org/set_set5/${contact._id}.png`} alt="" className="contact-preview__img" />
      <div className="contact-preview__info">
        <span>{contact.name}</span>
        <span className='phone'>{contact.phone}</span>
      </div>
    </Link>
  )
}
