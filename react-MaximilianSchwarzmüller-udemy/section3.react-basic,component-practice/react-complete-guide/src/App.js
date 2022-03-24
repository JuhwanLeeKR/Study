import Expenses from './components/Expenses';

function App() {
  // ✔️ javascript 방식 = 명령형 접근법
  // const para = document.createElement('p')
  // para.textContext = 'This is also visible';
  // document.getElementById('root').append(para);

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses />
      {/* <p>This is also visible!</p>  //react방식 */}
    </div>
  );
}

export default App;
