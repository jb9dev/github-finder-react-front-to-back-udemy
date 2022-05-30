import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import Spinner from '../components/layout/Spinner';

class User extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    userData: PropTypes.object,
  }

  componentDidMount() {
    const userLogin = window.location.pathname.split('/')[2];
    this.props.getUser(userLogin);
  }
  render() {
    const {
      userData: {
        name,
        avatar_url,
        location,
        bio,
        blog,
        company,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      },
      loading
    } = this.props;

    if(loading) {
      return <Spinner />
    }

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">Back to search</Link>
        <span>
          Hierable:
          <i
            className={
              `m-1 fas ${hireable
                  ? 'fa-check text-success'
                  : 'fa-times-circle text-danger'
              }`}
          />
        </span>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt={`${name}'s avatar`}
              className="round-img"
              style={{width: '150px'}}
            />
            <h1>{name} </h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a
              href={html_url}
              target="_blank"
              className="btn btn-dark"
            >Visit Github Profile</a>
            <ul className="list">
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <p className="badge badge-primary">Followers: {followers}</p>
          <p className="badge badge-success">Following: {following}</p>
          <p className="badge badge-light">Public Repos: {public_repos}</p>
          <p className="badge badge-dark">Public Gists: {public_gists}</p>
        </div>
      </Fragment>
    )
  }
}

export default User
