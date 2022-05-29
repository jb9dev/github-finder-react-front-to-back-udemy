import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ({ user }) => {
  const { avatar_url, login, html_url } = user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={`${login} avatar`}
        className="round-img"
        style={{ width: '60px'}}
      />
      <p>{login}</p>
      <a href={html_url} className="btn btn-dark btn-sm my-1" >More</a>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem