import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.date.toLocaleString('ko-KR', { month: 'long' });
  const day = props.date.toLocaleString('ko-KR', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${[props.amount]}</div>
      </div>
    </div>
    // HTML처럼 보이기는 하지만 리액트가 만든 특별한 JSX 구문이다.
  );
}
// 하나의 return명령어당(하나의 JSX 코드당) 하나의 루트 요소만 가져올 수 있다.
// ✔️ 가장 간단한 방법
// 1. 하나의 <div></div>로 감싸준다.

export default ExpenseItem; // 해당 js 파일을 사용하려면 export 해주어야 한다
