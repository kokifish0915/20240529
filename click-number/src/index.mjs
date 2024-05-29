import "./styles.css";

for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;

  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);

  var size = Math.floor(Math.random() * 50) + 30; // ボタンのサイズを30〜80pxのランダムな値で設定
  elm.style.width = size + "px";
  elm.style.height = size + "px";

  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // ランダムな色を生成
  elm.style.backgroundColor = randomColor;

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
}
var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};
