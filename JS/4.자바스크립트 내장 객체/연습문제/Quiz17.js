/* Set */

// 시청한 영화 목록 Set 생성
const watchedMovies = new Set(["인셉션", "매트릭스", "인터스텔라"]);

// 보고 싶은 영화 목록 Set 생성
const toWatchMovies = new Set([
  "파이트 클럽",
  "더 울프 오브 월 스트리트",
  "노인을 위한 나라는 없다",
]);

// 시청한 영화 목록 출력
console.log("시청한 영화 목록:");
for (let movie of watchedMovies) {
  console.log(movie);
}
console.log();

// 보고 싶은 영화 목록 출력
console.log("보고 싶은 영화 목록:");
for (let movie of toWatchMovies) {
  console.log(movie);
}
console.log();

// 새로운 영화 시청
// 시청한 영화 목록에 없으면, 시청한 목록에 추가하고, 보고 싶은 목록에서 삭제
const newMovie = "파이트 클럽";

if (!watchedMovies.has(newMovie)) {
  toWatchMovies.delete(newMovie);
  watchedMovies.add(newMovie);
  console.log(
    `${newMovie}을(를) 시청한 영화 목록에 추가하고, 보고 싶은 영화 목록에서 삭제했습니다.`
  );
}
console.log();

// 현재 시청한 영화 목록 출력
console.log("현재 시청한 영화 목록:");
for (let movie of watchedMovies) {
  console.log(movie);
}
console.log();

// 현재 보고 싶은 영화 목록 출력
console.log("현재 보고 싶은 영화 목록:");
for (let movie of toWatchMovies) {
  console.log(movie);
}
