let itemList = [
    {
        "id": "item1",
        "name": "Phở Thìn Lò Đúc",
        "image": "https://vcdn-dulich.vnecdn.net/2019/03/11/PhoThin-Tokyo500px-7237-1552270255.jpg",
        "price": 30000,
        "address": "Số 2 Lò Đúc, Phạm Đình Hồ, Hai Bà Trưng, Hà Nội",
        "phoneNumber": "0338943359",
        "review": "#"
    },
    {
        "id": "item2",
        "name": "Phở Thìn Lò Đúc",
        "image": "https://vcdn-dulich.vnecdn.net/2019/03/11/PhoThin-Tokyo500px-7237-1552270255.jpg",
        "price": 30000,
        "address": "Số 2 Lò Đúc, Phạm Đình Hồ, Hai Bà Trưng, Hà Nội",
        "phoneNumber": "0338943359",
        "review": "#"
    },
    {
        "id": "item3",
        "name": "Phở Thìn Lò Đúc",
        "image": "https://vcdn-dulich.vnecdn.net/2019/03/11/PhoThin-Tokyo500px-7237-1552270255.jpg",
        "price": 30000,
        "address": "Số 2 Lò Đúc, Phạm Đình Hồ, Hai Bà Trưng, Hà Nội",
        "phoneNumber": "0338943359",
        "review": "#"
    }
]

function displayMenu() {
    let s = ''
    for (let index = 0; index < itemList.length; index++) {
        const m = itemList[index];
        s += `<tr>
                <td>${index + 1}</td>
                <td>${m.name}</td>
                <td>
                    <button onclick="details('${m.id}')">Chi tiết</button>
                </td>
            </tr>
                `
    }
    document.getElementById("itemList").innerHTML = s;
}
displayMenu();

function details(id) {
    // để lS lưu lại id của món được chọn
    localStorage.setItem("itemSelected", id);
    window.location.href = "chi-tiet-mon.html";
}

function cartQuantity(id){
    // lưu số lượng của ITEM ĐÃ CHỌN
    localStorage.setItem("itemAdded", id);
    document.getElementById("Quantity").innerHTML += 
}

// load data vào lS (lS chỉ nhận kiểu dữ liệu string)
localStorage.setItem("itemList", JSON.stringify(itemList));