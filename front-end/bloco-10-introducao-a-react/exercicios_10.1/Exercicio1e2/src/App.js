const commitments = ['Trabalhar', 'Estudar', 'Almoço', 'Jantar'];

// const Task = ({ value }) => { props
//   return (
//     <li>{value}</li>
//   );
// }


function App() {
  const task = (value) => {
    return (
      <li key = {value}>{value}</li>
    );
  }
  return <div>
    <div>
      {commitments.map((element) => task(element))}
    </div>
    {/* {task('Acordar')} */}
 {/* (<Task value={'Acordar'} />) */}
  </div>
}

export default App;
