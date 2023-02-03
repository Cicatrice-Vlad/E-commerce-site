
var cardArr = [0, 1, 2, 3, 4, 5,];

function displayBlock() {
  var blockHTML = "";
  var currentDiv = cardArr[i];

  for (var i = 0; i < cardArr.length; i++) {
    blockHTML += `<div class="card mb-4 ml-auto">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>`;
  }

  $("#cards-div").html(blockHTML);
}

displayBlock();