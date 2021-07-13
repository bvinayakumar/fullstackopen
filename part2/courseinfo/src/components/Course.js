const Header = ({ name }) => {
  return <h2>{name}</h2>
}

const Total = ({ course }) => {
  const sum = course.parts.reduce(
    (accumulator, b) => accumulator + b.exercises,
    0
  )
  return <b>total of {sum} exercises</b>
}

const Part = props => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
