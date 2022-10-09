import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    languageId: languageFiltersData[0].id,
    activeId: languageFiltersData[0].id,
    itemsList: [],
    success: true,
    isLoading: true,
  }

  componentDidMount() {
    this.getTheData()
  }

  getTheList = data => {
    const updatedData = data.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))

    return updatedData
  }

  languageClicked = id => {
    this.setState(
      {languageId: id, isLoading: true, itemsList: [], activeId: id},
      this.getTheData,
    )
  }

  getTheData = async () => {
    const {languageId} = this.state
    const response = await fetch(
      ` https://apis.ccbp.in/popular-repos?language=${languageId}`,
    )
    const data = await response.json()
    if (response.ok === true) {
      const dataList = this.getTheList(data.popular_repos)

      this.setState({itemsList: dataList, isLoading: false})
    } else {
      console.log('failed')
      this.setState({success: false})
    }
  }

  render() {
    const {languageId, itemsList, success, isLoading, activeId} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              each={each}
              key={each.id}
              languageId={languageId}
              languageClicked={this.languageClicked}
              activeId={activeId}
            />
          ))}
        </ul>
        {isLoading && (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}

        {success ? (
          <ul className="items-list">
            {itemsList.map(each => (
              <RepositoryItem each={each} key={each.id} />
            ))}
          </ul>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1 className="heading">Something went Wrong</h1>
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
