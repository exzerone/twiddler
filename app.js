$(document).ready(function(){
  // var $body = $('.container');
  //  $body.html('');

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


  //  var $button = $("<button class='button' >WOOO New Tweet</button>");
  //  $button.appendTo($body);
  //  $button.on('click', function(){
  //    generateRandomTweet();
  //   //new tweet, need it to be randomly selected
  //   var tweet = streams.home[Math.floor(Math.random() * streams.home.length)];
  //   // just use the code made in the previous section here, only difference is instead of pulling from streams.home[index], use math.random to randomply pick something from the array.
  //   var $tweet = $('<div class="tweet"></div>');
  //   var $user = $('<p class=user></p>');
  //   var $message = $('<p class=message></p>');
    
  //   $tweet.appendTo('.container');
  //   $user.addClass(tweet.user).attr('data-user', tweet.user).text('@' + tweet.user + tweet.message + ' ' +tweet.created_at).appendTo($tweet);
  //  })

});



  // console.log(streams.users.mracus)
   // var randomize = streams.users.mracus[Math.floor(Math.random() * streams.users.mracus.length)]; 
   // console.log(randomize);
  function newTweet(){
    var tweet = streams.home[Math.floor(Math.random() * streams.home.length)];
    var $tweet = $('<div class = newTweet></div>');
    // var $user = $('<p class = user></p>');
    // $user.addClass(tweet.user).attr('data-user', tweet.user).text('@' + tweet.user + tweet.message + ' ' +tweet.created_at).appendTo($tweet);
    // $tweet.appendTo('.main');
    generateRandomTweet()
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' posted at ' + tweet.created_at );
    $tweet.appendTo(".main");
    
  }

  function mracus(){
    // var index = streams.users.mracus.length - 1
    var randomize = streams.users.mracus[Math.floor(Math.random() * streams.users.mracus.length)]; 
    var $tweet = $('<div class= userTweet></div>');
    // var $user = $('<p class=user></p>');
    // var $message = $('<p class=message></p>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    // $body.html('')
    $tweet.appendTo(".newsfeed");
    // console.log(randomize);
  }
  function sharksforcheap(){
    var randomize = streams.users.sharksforcheap[Math.floor(Math.random() * streams.users.sharksforcheap.length)]; 
    var $tweet = $('<div class= userTweet></div>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    $tweet.appendTo(".newsfeed");
  }
  function douglascalhoun(){
    var randomize = streams.users.douglascalhoun[Math.floor(Math.random() * streams.users.douglascalhoun.length)]; 
    var $tweet = $('<div class= userTweet></div>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    $tweet.appendTo(".newsfeed");
  }
  function shawndrost(){
    var randomize = streams.users.shawndrost[Math.floor(Math.random() * streams.users.shawndrost.length)]; 
    var $tweet = $('<div class= userTweet></div>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    $tweet.appendTo(".newsfeed");
  }