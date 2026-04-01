let score = 0;
let gameActive = false;

function addScore(n) {
  score += n;

  if (score < 0) score = 0;
  let stars = "";

  for (let i = 0; i < score; i++) {
    stars += '<i class="fa-solid fa-star star-icon"></i>';
  }

  $("#stars").html(stars);
}

function showMessage(text, type) {
  $("#message-box").stop(true, true)
    .removeClass("success error info")
    .addClass(type).text(text).fadeIn(400);

  setTimeout(function () {
    $("#message-box").fadeOut(600);
  }, 2500);
}

function endGame() {
  if (!gameActive) return;
  gameActive = false;
  stopTimer();

  $("#game-board").fadeOut(400, function () { $(this).empty(); });
  $("<div id='game-over'>Game Over!</div>").insertAfter("#game-board").hide().fadeIn(600);
}

$(function () {
  $("#start-btn").on("click", function () {
    score = 0;
    gameActive = true;
    addScore(0);
    $("#game-over").remove();
    $("#score-section").show();
    $("#timer-section").show();

    let allCards = arrShuffle(
      questions.map(function (q) { return { type: "quiz", data: q }; })
        .concat(assets.map(function (a) { return { type: "asset", data: a }; }))
    );

    let $board = $("#game-board").empty().show();

    allCards.forEach(function (item) {
      let card = new Card(item.data);

      let $tile = $("<div>").addClass("tile");


      let $front = $("<div>").addClass("card-front");
      let $back = $("<div>").addClass("card-back");
      $tile.append($front).append($back);
      card.element = $tile;

      $tile.on("click", function (e) {
        if ($(e.target).closest(".card-back").length) return;
        
        if (!gameActive || card.isDone) {
          if (card.isDone) showMessage("Already processed!", "info");
          return;
        }
        $tile.addClass("flipped");
        card.show($back);

        if (!card.isQuiz) {
          card.isDone = true;

          if (card.data.value === "fa-gem") {
            showMessage(card.data.descriptin, "success");
            addScore(1);
          } else if (card.data.value === "fa-paw") {
            showMessage(card.data.descriptin, "error");
            addScore(-1);
          } else if (card.data.value === "fa-xmark") {
            showMessage(card.data.descriptin, "error");
            setTimeout(endGame, 1500);
          }
          $tile.addClass("done");
          
          $tile.find(".card-front").html("<span class='done-text'>DONE</span>");
        }
      });

      $board.append($tile);
    });

    let duration = 35;
    startTimer(duration, function (t) {
      $("#timer-text").text(t + " secs");
    }, endGame);
  });
});
