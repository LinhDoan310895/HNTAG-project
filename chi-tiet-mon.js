// lấy lại danh sách món từ lS + chuyển string về array
let itemList = JSON.parse(localStorage.getItem("itemList"));

// lấy lại id của món mà user đã chọn
let itemSelected_ID = localStorage.getItem("itemSelected");

// tìm món mà người dùng đã chọn
let itemSelected;
for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    if (item.id === itemSelected_ID) {
        itemSelected = item;
        break;
    }
}

let name = `<h1>${itemSelected.name}</h1>`;
let image = `<img src="${itemSelected.image}"/>`;
let price = `<h3>Giá: ${itemSelected.price} VND</h3>`;
let address = `<h3>Địa chỉ: ${itemSelected.address}</h3>`;
let phoneNumber = `<h3>SĐT: ${itemSelected.phoneNumber}</h3>`;

document.getElementById("details").innerHTML += image;
document.getElementById("details").innerHTML += name;
document.getElementById("details").innerHTML += price;
document.getElementById("details").innerHTML += address;
document.getElementById("details").innerHTML += phoneNumber;