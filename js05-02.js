       // 사용자 데이터 입력 부분
       function inputScore() {
        for (var i = 0; i < 5; i++){ // 현재 배열크기가 없으니까 여기서는 5개 받는다고 i < 5 써줘야됨
            var tmp = prompt("점수를 입력해주세요");
            tmp = Number(tmp);
            scores.push(tmp);

            //이렇게 써도 됨
            // scores[i] = prompt("점수를 입력해주세요");
            // scores[i] = Number(scores[i]);
        }
    }

    // 점수 총합 계산
    function totalScore() {
        for (var i = 0; i < scores.length; i++) {
            total = total + scores[i];
        }
    }

    // 점수 평균 계산
    function avgScore() {
        avg = total / scores.length;
    }


    // 결과 출력
    function printScore() {
        console.log("입력된 점수의 총합은 " + total + "점이고, \n점수의 평균은 " + avg + "점 입니다.");
    }