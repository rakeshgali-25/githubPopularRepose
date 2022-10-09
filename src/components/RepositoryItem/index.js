import './index.css'
import {Component} from 'react'

class RepositoryItem extends Component {
  render() {
    const {each} = this.props
    const {avatarUrl, name, forksCount, starsCount, issuesCount} = each
    return (
      <li className="item-card">
        <div>
          <img src={avatarUrl} alt={name} className="logo" />
        </div>

        <h1 className="name">{name}</h1>
        <div className="line">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
              className="small-icon"
            />
          </div>

          <p>{starsCount}</p>
          <p>stars</p>
        </div>
        <div className="line">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="small-icon"
          />

          <p>{forksCount}</p>
          <p>forks</p>
        </div>
        <div className="line">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="small-icon"
          />

          <p>{issuesCount}</p>
          <p>open issues</p>
        </div>
      </li>
    )
  }
}

export default RepositoryItem
