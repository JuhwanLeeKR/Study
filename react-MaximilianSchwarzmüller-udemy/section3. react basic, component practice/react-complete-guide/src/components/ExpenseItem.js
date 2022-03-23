function ExpenseItem() {
  return (
    <div>
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}
// 하나의 return명령어당(하나의 JSX 코드당) 하나의 루트 요소만 가져올 수 있다.
// ✔️ 가장 간단한 방법
// 1. 하나의 <div></div>로 감싸준다.

export default ExpenseItem; // 해당 js 파일을 사용하려면 export 해주어야 한다
