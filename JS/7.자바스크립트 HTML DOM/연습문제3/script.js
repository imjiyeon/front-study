//상품의 수량은 타입체크 또는 정규표현식으로 확인
function validateQuantity(field) {
    var regex = /^[0-9]*$/; // 숫자만 허용
    if (regex.test(field.value) == false) {
        field.style.borderColor = "red";
    } else {
        field.style.borderColor = "";
    }
}

function validatePrice(field) {
    var regex = /^[0-9]*$/;
    if (!regex.test(field.value)) {
        field.style.borderColor = "red";
    } else {
        field.style.borderColor = "";
    }
}

//"장바구니 추가" 버튼을 누르면 폼이 유효한지 검사하고
//유효하면 장바구니에 추가하고, 유효하지 않을 경우 경고 메시지를 표시
function validateAndAddItem() {
    var itemName = document.getElementById("itemName");
    var itemQuantity = document.getElementById("itemQuantity");
    var itemPrice = document.getElementById("itemPrice");
    var isValid = true;
    var errorMessage = "";

    // 상품 이름이 비어 있는지 확인
    if (itemName.value.trim() === "") {
        isValid = false;
        errorMessage += "상품 이름을 입력해주세요.\n";
    }

    // 수량이 비어 있거나 유효하지 않은지 확인
    if (itemQuantity.value.trim() === "" || isNaN(itemQuantity.value) || parseInt(itemQuantity.value) <= 0) {
        isValid = false;
        errorMessage += "유효한 수량을 입력해주세요.\n";
    }

    // 가격이 비어 있거나 유효하지 않은지 확인
    if (itemPrice.value.trim() === "" || isNaN(itemPrice.value) || parseFloat(itemPrice.value) <= 0) {
        isValid = false;
        errorMessage += "유효한 가격을 입력해주세요.\n";
    }

    // 유효성 체크에 실패했으면 함수 종료
    if (!isValid) {
        alert(errorMessage);
        return; 
    }

    // 상품의 이름, 수량, 가격을 전달하여 장바구니에 추가
    addItemToCart(itemName.value.trim(), parseInt(itemQuantity.value), parseFloat(itemPrice.value));
}

// 상품의 이름, 수량, 가격
function addItemToCart(name, quantity, price) {
    // ul 가져오기
    var cartList = document.getElementById("cartList");
    // 속성 선택자를 사용하여 상품이 있는지 확인 li[data-name="바나나"] 
    var existingItem = document.querySelector(`li[data-name="${name}"]`);

    if (existingItem) {
        // 이미 장바구니에 있는 경우 수량과 가격을 업데이트
        var existingQuantity = existingItem.querySelector(".itemQuantity");
        var existingPrice = existingItem.querySelector(".itemPrice");

        var newQuantity = parseInt(existingQuantity.textContent) + quantity;
        var newPrice = (parseFloat(existingPrice.textContent) + (quantity * price)).toFixed(2);

        existingQuantity.textContent = newQuantity;
        existingPrice.textContent = newPrice;
    } else {
        // 새로운 항목 추가
        // 완전한 엘리먼트 형태의 문자열 만들기
        // 중간중간 콘솔창에서 확인할 것
        var newItem = `<li data-name = "${name}"> ${name} - <span class="itemQuantity">
        ${quantity}</span>개 <span class="itemPrice">${(quantity * price).toFixed(2)}</span>원 <button onclick="removeItem(this)">제거</button>
        </li>`;

        cartList.insertAdjacentHTML("beforeend", newItem);
    }

    updateTotal();
}

function removeItem(button) {
    var listItem = button.parentElement;
    listItem.remove();
    updateTotal();
}

function updateTotal() {
    var cartList = document.getElementById("cartList");
    var totalQuantity = 0;
    var totalPrice = 0.0;

    // 전체 수량 계산
    cartList.querySelectorAll(".itemQuantity").forEach(function(quantitySpan) {
        totalQuantity += parseInt(quantitySpan.textContent);
    });

    // 전체 가격 계산
    cartList.querySelectorAll(".itemPrice").forEach(function(priceSpan) {
        totalPrice += parseFloat(priceSpan.textContent);
    });

    document.getElementById("totalQuantity").textContent = totalQuantity;
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}
