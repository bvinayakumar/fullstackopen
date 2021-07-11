import React, { useState } from 'react'

const Header = props => <h1>{props.title}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const statsTitle = 'statistics'
  if (good + neutral + bad === 0) {
    return (
      <div>
        <Header title={statsTitle} />
        No feedback given
      </div>
    )
  }

  const avgScore = () => (good - bad) / (good + neutral + bad)
  const posPercent = () => (100 * good) / (good + neutral + bad) + ' %'

  return (
    <div>
      <Header title={statsTitle} />
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={good + neutral + bad} />
          <Statistic text='average' value={avgScore([good, neutral, bad])} />
          <Statistic text='positive' value={posPercent([good, neutral, bad])} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const feedbackTitle = 'give feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header title={feedbackTitle} />
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
