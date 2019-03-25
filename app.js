$(document).ready(function(){

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class=mainTweet></div>');
    // var $user = $('<p class=user></p>');
    // var $message = $('<p class=message></p>');
    // var $dateTime = $('<span class=dateTime></span>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' posted at ' + tweet.created_at );
    $tweet.appendTo(".main");
    index -= 1;
  }

  // $(".users").on('click', function(){
  //   filter()
  // });


});

  function newTweet(){
   
    var tweet = streams.home[Math.floor(Math.random() * streams.home.length)];
    var $tweet = $('<div class = newTweet></div>');
    generateRandomTweet()
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' posted at ' + tweet.created_at );
    $tweet.appendTo(".main");
    
  }

  function mracus(){
    generateRandomTweet()
    var $main = $('.main');
    $main.html('');
    var index = streams.users.mracus.length-1;
    while ( index >= 0){
      var randomize = streams.users.mracus[Math.floor(Math.random() * streams.users.mracus.length)]; 
      var $tweet = $('<div class= userTweet></div>');
      $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
      $tweet.appendTo(".newsfeed");
      index -= 1
    }
  }
  function sharksforcheap(){
    generateRandomTweet()
    var $main = $('.main');
    $main.html('');
    var index = streams.users.sharksforcheap.length-1;
    while ( index >= 0){
      var randomize = streams.users.sharksforcheap[Math.floor(Math.random() * streams.users.sharksforcheap.length)]; 
      var $tweet = $('<div class= userTweet></div>');
      $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
      $tweet.appendTo(".newsfeed");
      index -= 1
    }
  }
  function douglascalhoun(){
    generateRandomTweet()
    var $main = $('.main');
    $main.html('');
    var index = streams.users.douglascalhoun.length-1;
    while ( index >= 0){
      var randomize = streams.users.douglascalhoun[Math.floor(Math.random() * streams.users.douglascalhoun.length)]; 
      var $tweet = $('<div class= userTweet></div>');
      $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
      $tweet.appendTo(".newsfeed");
      index -=1
    }
  }
  function shawndrost(){
    generateRandomTweet()
    var $main = $('.main');
    $main.html('');
    var index = streams.users.mracus.length-1;
    while ( index >= 0){
      var randomize = streams.users.shawndrost[Math.floor(Math.random() * streams.users.shawndrost.length)]; 
      var $tweet = $('<div class= userTweet></div>');
      $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
      $tweet.appendTo(".newsfeed");  
      index -=1
    }
  }

 
