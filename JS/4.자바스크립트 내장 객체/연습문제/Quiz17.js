/* Set */

// 시청한 영화 목록 Set 생성
const watchedMovies = new Set();
watchedMovies.add("인셉션");
watchedMovies.add("매트릭스");
watchedMovies.add("인터스텔라");

// 보고 싶은 영화 목록 Set 생성
// 생성자에 배열을 넣으면 데이터를 한번에 추가할 수 있음 
// new Set([배열]);
const toWatchMovies = new Set(["파이트 클럽","더 울프 오브 월 스트리트","노인을 위한 나라는 없다"]);

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

// 새로운 영화를 시청한다
// 시청한 영화 목록에 없으면, 시청한 목록에 추가하고, 보고 싶은 목록에서 삭제
const newMovie = "파이트 클럽";

if (!watchedMovies.has(newMovie)) {
  watchedMovies.add(newMovie);
  toWatchMovies.delete(newMovie);
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
