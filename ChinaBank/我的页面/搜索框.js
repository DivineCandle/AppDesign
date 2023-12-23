var functionArray = ["转账", "收付款", "账户管理", "查看流水", "手机号转账", "银行账号转账"];

function showDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = "";
  for (var i = 0; i < functionArray.length; i++) {
    var divOfSearch = document.createElement("div");
    divOfSearch.innerHTML = functionArray[i];
    divOfSearch.addEventListener("click", function () {
      document.getElementById("searchBox").value = this.innerHTML;
      document.getElementById("dropdown").style.display = "none";
    });
    dropdown.appendChild(divOfSearch);
  }
  document.getElementById("dropdown").style.display = "block";
}
function search() {
  var inputOfSearch = document.getElementById("searchBox").value.toUpperCase();
  var dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = "";
  for (var i = 0; i < functionArray.length; i++) {
    if (functionArray[i].toUpperCase().includes(inputOfSearch)) {
      var divOfSearch = document.createElement("div");
      // divOfSearch.style.fontSize = '90px';
      divOfSearch.innerHTML = functionArray[i];
      divOfSearch.addEventListener("click", function () {
        document.getElementById("searchBox").value = this.innerHTML;
        document.getElementById("dropdown").style.display = "none";
      });
      dropdown.appendChild(divOfSearch);
    }
  }
}
window.addEventListener("click", function (event) {
  if (event.target.id !== "searchBox" && event.target.parentNode.id !== "dropdown") {
    document.getElementById("dropdown").style.display = "none";
  }
});