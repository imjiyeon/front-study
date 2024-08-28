
function validateQuantity(field) {
    var regex = /^[0-9]*$/; // 숫자만 허용
    if (!regex.test(field.value) || field.value.trim() === "") {
        field.style.borderColor = "red";
    } else {
        field.style.borderColor = "";
    }
}

function validatePrice(field) {
    var regex = /^[0-9]*(\.[0-9]{1,2})?$/; // 숫자와 소수점 2자리까지 허용
    if (!regex.test(field.value) || field.value.trim() === "") {
        field.style.borderColor = "red";
    } else {
        field.style.borderColor = "";
    }
}

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

    addItemToCart(itemName.value.trim(), parseInt(itemQuantity.value), parseFloat(itemPrice.value));
}

function addItemToCart(name, quantity, price) {
    var cartList = document.getElementById("cartList");
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
        var listItem = document.createElement("li");
        listItem.setAttribute("data-name", name);
        listItem.innerHTML = `${name} - <span class="itemQuantity">${quantity}</span>개 
                              <span class="itemPrice">${(quantity * price).toFixed(2)}</span>원
                              <button onclick="removeItem(this)">제거</button>`;
        cartList.appendChild(listItem);
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

    cartList.querySelectorAll(".itemQuantity").forEach(function(quantitySpan) {
        totalQuantity += parseInt(quantitySpan.textContent);
    });

    cartList.querySelectorAll(".itemPrice").forEach(function(priceSpan) {
        totalPrice += parseFloat(priceSpan.textContent);
    });

    document.getElementById("totalQuantity").textContent = totalQuantity;
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}
