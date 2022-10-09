import './index.css'

const LanguageFilteredItem = props => {
  const {each, languageClicked, activeId} = props
  const {language, id} = each

  const onClickLanguage = () => {
    languageClicked(id)
  }

  let active = ''

  if (activeId === id) {
    active = 'active'
  }

  return (
    <li onClick={onClickLanguage}>
      <button type="button" className={`item ${active}`}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilteredItem
