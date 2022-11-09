function viewInitialize() {
  var elem = document.getElementsByClassName("header-wobg")[0];
  var img = document.createElement("img");
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf298deNax8UtY0nRDwXXrxChaJevw37Kq6Q&usqp=CAU";
  
  var node = document.createElement("div");
  node.append(img);
  node.style.backgroundColor = "black";
  node.style.textAlign = "center";
  elem.insertAdjacentElement("afterend", node);
}
