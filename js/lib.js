/*MÃ JAVASCRIPT*/

const product = [
{
    id: "1",
    name: "Quạt mini",
    price:250.000 ,
    description:"Quạt mini cầm tay N68 Pin Trâu di động có thể sạc gió mạnh.100 tốc độ turbo phản lực màn hình hiển thị pin",
    image:"../assets/images/quat.jpg",
    link:"chi-tiet.html"

},
{
    id: "2",
    name: "Robot Hút Bụi Lau Nhà",
    price:730.000 ,
    description:"Robot Hút Bụi Lau Nhà 3in1 Cao Cấp - Phiên Bản Nâng Cấp Thông Minh        _____________",
    image:"../assets/images/robothutbui.jpg",
    link:"chi-tiet.html"
},
{
    id: "3",
    name: "Tai nghe ngủ",
    price:550.000 ,
    description:"Tai nghe ngủ X55 Tai nghe làm việc mini không dây TWS Tai nghe với Microphone   ______________",
    image:"../assets/images/tainghe.jpg",
    link:"chi-tiet.html"
},
{
    id: "4",
    name: "Loa Bluetooth",
    price:580.000 ,
    description:"Loa Bluetoothkhông dây, Công suất khủng Âm thanh hay bass, Chông nước         _______________",
    image:"../assets/images/loabluetooh.jpg",
    link:"chi-tiet.html"
},
    
];
function createTtem(obj)
{  
             //  iết đúng id "product-list" (có chữ t)
            const listProducts = document.getElementById("product-list"); 

            // Tạo 1 container có class = "item"
            const item = document.createElement("div"); 
            item.setAttribute("class", "item col card "); 

            //Tạo container chứa hình ảnh (khung div) có class="image"
            const containerImage = document.createElement("div");
            containerImage.setAttribute("class", "image text-center mb-3");

            // Tạo thẻ img riêng biệt
            const img = document.createElement("img");
            img.setAttribute("src", obj.image);
            img.setAttribute("alt", obj.name);
            img.setAttribute("style", "width:100%; max-width:150px; border-radius: 85px;");


            // Đưa thẻ ảnh vào khung chứa ảnh
            containerImage.appendChild(img);

            // Tạo container chứa thông tin sản phẩm có class = "info"
            const containerInfo = document.createElement("div"); 
            containerInfo.setAttribute("class", "info text-center card pt-4 pb-3");  

            // Tạo <p> chứa tên sản phẩm
            const nameProduct = document.createElement("p");
            nameProduct.setAttribute("class", "fw-bold text-success mb-1");
            nameProduct.innerHTML = obj.name;
            
            // Tạo <p> chứa giá sản phẩm
            const price = document.createElement("p");
            price.innerHTML = obj.price + ".000 đồng" ;


            // Tạo <p> chứa mô tả sản phẩm
            const description = document.createElement("p");
            description.innerHTML = obj.description;


            // Tạo liên kết <a>
            const linkProduct = document.createElement("a");
            linkProduct.innerHTML = "Xem chi tiết";
            linkProduct.setAttribute("href", `chi-tiet.html?masp=${obj.id}`);
            linkProduct.setAttribute("class","btn btn-primary text-white");

            // Gán 4 thành phần con vào khung chứa info
            containerInfo.appendChild(nameProduct);
            containerInfo.appendChild(price);
            containerInfo.appendChild(description);
            containerInfo.appendChild(linkProduct);

            // Thêm khung chứa image và khung chứa info vào item chính
            item.appendChild(containerImage);
            item.appendChild(containerInfo);
            

            // Thêm item hoàn chỉnh vào list product ngoài giao diện
            listProducts.appendChild(item);
            
}

function loadAllProducts(objArray)
{
    let i;
    for(i=0; i<objArray.length; i++)
    {
        createTtem(objArray[i]);
    }
}