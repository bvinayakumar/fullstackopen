import Language from './Language'

const Languages = ({ languages }) => (
  <div>
    <h2>languages</h2>
    <ul>
      {languages.map(language => (
        <Language key={language.name} language={language} />
      ))}
    </ul>
  </div>
)

export default Languages
