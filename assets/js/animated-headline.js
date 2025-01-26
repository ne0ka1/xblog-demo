jQuery(document).ready(function ($) {
  //set animation timing
  var animationDelay = 1500,
      lettersDelay = 50;

  initHeadline();

  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($(".box-headline").find("b"));
    //initialise headline animation
    animateHeadline($(".box-headline"));
  }

  function singleLetters($words) {
    $words.each(function () {
      var word = $(this),
        letters = word.text().split(""),
        selected = word.hasClass("is-visible");
      for (i in letters) {
        letters[i] = selected
          ? '<i class="in">' + letters[i] + "</i>"
          : "<i>" + letters[i] + "</i>";
      }
      var newLetters = letters.join("");
      word.html(newLetters).css("opacity", 1);
    });
  }

  function animateHeadline($headline) {
    var duration = animationDelay;
      setTimeout(function () {
        hideWord($headline.find(".is-visible").eq(0));
      }, duration);
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
      var bool =
        $word.children("i").length >= nextWord.children("i").length
          ? true
          : false;
      hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
      showLetter(
        nextWord.find("i").eq(0),
        nextWord,
        bool,
        lettersDelay
      );
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass("in").addClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(function () {
        hideLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else if ($bool) {
      setTimeout(function () {
        hideWord(takeNext($word));
      }, animationDelay);
    }

    if (
      $letter.is(":last-child") &&
      $("html").hasClass("no-csstransitions")
    ) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass("in").removeClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(function () {
        showLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else if (!$bool) {
        setTimeout(function () {
          hideWord($word);
        }, animationDelay);
      }
    }

  function takeNext($word) {
    return !$word.is(":last-child")
      ? $word.next()
      : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return !$word.is(":first-child")
      ? $word.prev()
      : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }
});
