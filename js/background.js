/*
 * 2023.11.23
 * 소멘텀 메인에 뜨는 배경
 * 랜덤으로 나오게 한다.
 */

const images = ["sky.jpg", "sky2.jpg", "sky3.jpg", "sky4.jpg", "sky5.jpg"]
const selectedImage = images[Math.floor(Math.random() * images.length)];
console.log(selectedImage);

const container = document.getElementById("main");

// body 요소의 배경 이미지 설정
container.style.backgroundImage = `url('img/${selectedImage}')`;
container.style.backgroundSize = 'cover'; // 배경 이미지 크기 조정 (예시로 cover를 사용했습니다)
container.style.width = '100%'
container.style.height = '100%'

// const bgImage = document.createElement("img");
// bgImage.src = `img/${selectedImage}`;
// console.log(bgImage);
// document.body.appendChild(bgImage);