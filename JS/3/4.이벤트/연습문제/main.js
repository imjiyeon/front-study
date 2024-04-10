
$(function () {
    $("button").click(function () {

        const textContent = this.textContent;
        let result = 0;
        const num1 = $("#num1").val();
        const num2 = $("#num2").val();
        const result_span = $(".result");

        $('button').each(function(index, item){
            $(this).removeClass('select_button');
        });

        $(this).addClass("select_button"); // 클래스 추가

        switch (textContent) {
            case '+':
                result = Number(num1) + Number(num2); //문자열을 숫자로 변환하기
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        result_span.text(result);

    });
});