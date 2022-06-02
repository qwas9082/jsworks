//일정 시간 간격으로 이미지 바꾸기
window.onload = function(){


let picture = ["img/coffee-blue.jpg", "img/coffee-gray.jpg", "img/coffee-pink.jpg"];
let picIdx = 0;

showSlide();

function showSlide(){
    let img = document.getElementById("pic");
    img.src = picture[picIdx];
    picIdx++; //다음 인덱스로 증가
    if(picIdx == picture.length)
        picIdx = 0;

    setTimeout(showSlide, 700);  //콜백 함수
}
}