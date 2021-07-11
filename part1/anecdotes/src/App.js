import React, { useState } from 'react'

const Header = props => <h1>{props.title}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const anecdoteDailyTitle = 'Anecdote of the day'
  const anecdoteVotedTitle = 'Anecdote with most votes'

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    let nextSelected
    do {
      nextSelected = Math.floor(Math.random() * anecdotes.length)
    } while (nextSelected === selected)
    setSelected(nextSelected)
  }

  const incrementVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    let indexOfMaxValue = copy.reduce((iMax, x, i, copy) => x > copy[iMax] ? i : iMax, 0)
    setVoted(indexOfMaxValue)
  }

  return (
    <div>
      <Header title={anecdoteDailyTitle} />
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <Button handleClick={incrementVote} text='vote' />
      <Button handleClick={randomAnecdote} text='next anecdote' />
      <Header title={anecdoteVotedTitle} />
      {anecdotes[voted]}
      <br />
      has {points[voted]} votes
      <br />
    </div>
  )
}

export default App