let classification = prompt("아동, 청소년, 성인 중 선택입력", "");
switch(classification){
    case "아동":
        classification += "=입장료 무료";
        break;
    case "청소년":
        classification += "=입장료 2000원";
        break;
    case "성인":
        classification += "=입장료 5000원";
        break;
    default:
        classification = "입력 값을 다시 확인해주세요";
}
document.write(classification)