var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

let SightWordLists = {};
/*let currentList = {};
let tempList = [];
let lastOnly = false;

SightWordLists.A = ['the', 'I', 'to', 'a', 'is', 'my', 'go', 'me', 'like', 'on', 'in', 'so', 'we', 'it', 'and', 'up', 'at', 'see', 'he', 'do', 'you', 'and', 'can', 'no', 'am'];
SightWordLists.B = ['went', 'are', 'this', 'look', 'for', 'get', 'come', 'got', 'play', 'was', 'had', 'they', 'will', 'too', 'all', 'be', 'as', 'ball', 'by', 'day', 'did', 'has', 'her', 'him', 'fun'];
SightWordLists.C = ['eat', 'if', 'jump', 'man', 'or', 'not', 'mom', 'out', 'now', 'of', 'put', 'ran', 'sat', 'read', 'run', 'she', 'sit', 'then', 'his', 'say', 'us', 'yes', 'saw', 'girl', 'how'];
SightWordLists.D = ["when", "your", "about", "from", "than", "away", "them", "came", "big", "been", "after", "who", "back", "I'm", "because", "very", "could", "have", "make", "any", "into", "there", "were", "mother", "just"];
SightWordLists.E = ['little', 'two', 'going', 'here', 'but', 'that', 'said', 'ever', "don't", 'our', 'what', 'with', 'three', 'their', 'where', 'want', 'today', 'home', 'down', 'under', 'much', 'love', 'know', 'take', 'let'];
SightWordLists.F = ['things', 'school', 'walk', 'always', 'great', 'find', 'until', 'last', 'high', 'easy', 'next', 'pretty', 'more', 'idea', 'soon', 'often', 'such', 'best', 'think', 'family', 'never', 'house', 'wait', 'same', 'ask'];
SightWordLists.G = ['again', 'each', 'begin', 'goes', 'together', 'does', 'friend', 'enough', 'should', "you're", 'through', 'ready', 'might', 'suddenly', 'special', 'beautiful', "couldn't", 'either', 'thought', "they're", 'while', 'themselves', 'without', 'probably', 'yourself'];
SightWordLists.H = ['near', 'everything', "wouldn't", 'need', 'kind', 'different', 'myself', 'everyone', 'few', 'being', 'really', 'understand', 'question', 'against', 'old', 'happen', 'several', 'someone', 'slowly', 'follow', 'better', 'since', 'answer', 'plan', 'wanted'];



// Append List Buttons to document
for(var key in SightWordLists) {
  if(!currentList.name) {
    currentList.name = key;
    currentList.list = SightWordLists[key];
  }
  document.getElementById('buttonGroup').innerHTML += '<button class="list-btn" id="'+ key +'">List '+ key +'</button>';
}

var setCurrentList = function(list, listType) {
  if (document.getElementById('only-list').checked) {
    document.getElementById('currentList').innerHTML = "Only " + list.name;
  } else {
    document.getElementById('currentList').innerHTML = "Up to " + list.name;
  }
  document.getElementById('newWord').innerHTML = '';
  document.getElementById('total-words').innerHTML = currentList.list.length;
}

var listBtnClickHandler = function(e) {
  var id = this.id;

  tempList = [];

  if (document.getElementById('only-list').checked) {
    for(var key in SightWordLists) {
      if(id == key) {
        currentList.name = key;
        currentList.list = SightWordLists[key];
        setCurrentList(currentList, "only");
      }
    }
  } else {
    currentList.list = [];

    for (var key in SightWordLists) {

      currentList.list.push.apply(currentList.list, SightWordLists[key]);

      if (id == key) {
        currentList.name = key;
        setCurrentList(currentList, "up to");
        break;
      }
    }
  }

  lastOnly = true;
  getNewWord();
  lastOnly = false;

  document.body.classList.remove('open');
}

var getNewWord = function() {
  if (!tempList.length) {
    tempList = currentList.list.slice(0);
  }

  console.log(lastOnly);
  if (lastOnly) {
    //Math.floor(Math.random() * (max - min + 1)) + min
    var i = Math.floor(Math.random() * (tempList.length - (tempList.length - 25))) + (tempList.length - 25);
  } else {
    var i = Math.floor(Math.random() * tempList.length);
  }

  console.log(i);

  document.getElementById('newWord').innerHTML = tempList[i];
  document.getElementById('words-left').innerHTML = tempList.length;

  tempList.splice(i, 1);
}

window.onload = function() {
  var listBtns = document.querySelectorAll('.list-btn');

  // attach click event listener to list selector buttons
  for (var i = 0; i < listBtns.length; i++) {
    listBtns[i].onclick = listBtnClickHandler;
  }

  // attach click event listener to get new word button
  document.getElementById('getNewWord').onclick = getNewWord;
  document.getElementById('newWord').onclick = getNewWord;

  document.querySelector('.menu').addEventListener('click', function(e){
    document.body.classList.toggle('open');
  });

  // set initial list values
  setCurrentList(currentList);
  getNewWord(false);
}
