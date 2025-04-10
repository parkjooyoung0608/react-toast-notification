// Unique ID 생성 함수
export default function generateUEID() {
  const firstNum = (Math.random() * 46656) | 0;
  const secondNum = (Math.random() * 46656) | 0;
  const first = ("000" + firstNum.toString(36)).slice(-3);
  const second = ("000" + secondNum.toString(36)).slice(-3);
  return first + second;
}
