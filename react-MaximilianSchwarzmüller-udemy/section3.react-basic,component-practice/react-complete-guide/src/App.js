import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // ✔️ javascript 방식 = 명령형 접근법
  // const para = document.createElement('p')
  // para.textContext = 'This is also visible';
  // document.getElementById('root').append(para);

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
      {/* <p>This is also visible!</p>  //react방식 */}
    </div>
  );
}

export default App;
