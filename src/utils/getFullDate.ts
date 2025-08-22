export function getFullDate(day: number): string {
  const year = 2025;
  const month = 9; // 9월

  // day를 넣어서 Date 객체 생성
  const date = new Date(year, month - 1, day);

  // YYYY-MM-DD 포맷으로 반환
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // 두 자리
  const dd = String(date.getDate()).padStart(2, '0'); // 두 자리

  return `${yyyy}-${mm}-${dd}`;
}
