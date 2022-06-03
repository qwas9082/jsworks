//선택한 옵션 항목 찾아내기
//select 태그 이름(name)에 폼이름으로 접근
let selectMenu = document.testForm.major;

function displaySelect(){
    //select option 속성의 value로 선택 - archi
    // let selecText = document.getElementById("subj").value;
    // alert(selecText + "가 선택되었습니다.");


    //태그의 text - 건축공학과
    let selecText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(selecText + "가 선택되었습니다.");
}
