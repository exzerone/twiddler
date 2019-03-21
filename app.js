$(document).ready(function(){
  var $body = $('.container');
   $body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class=tweet></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' posted at ' + tweet.created_at );
    $tweet.appendTo(".container");
    index -= 1;
  }


   var $button = $("<button class='button' >WOOO New Tweet</button>");
   $button.appendTo($body);
   $button.on('click', function(){
     generateRandomTweet();
    //new tweet, need it to be randomly selected
    var tweet = streams.home[Math.floor(Math.random() * streams.home.length)];
    // just use the code made in the previous section here, only difference is instead of pulling from streams.home[index], use math.random to randomply pick something from the array.
    var $tweet = $('<div class="tweet"></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    
    $tweet.appendTo('.main');
    $user.addClass(tweet.user).attr('data-user', tweet.user).text('@' + tweet.user + tweet.message + ' ' +tweet.created_at).appendTo($tweet);
   })

});



  // console.log(streams.users.mracus)
   // var randomize = streams.users.mracus[Math.floor(Math.random() * streams.users.mracus.length)]; 
   // console.log(randomize);
  
  function mracus(){
    var index = streams.users.mracus.length - 1
    var randomize = streams.users.mracus[Math.floor(Math.random() * streams.users.mracus.length)]; 
    var $tweet = $('<div class=tweet></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    $tweet.appendTo(".container");
    console.log(randomize);
  }
  function sharksforcheap(){
    var index = streams.users.sharksforcheap.length - 1
    var randomize = streams.users.sharksforcheap[Math.floor(Math.random() * streams.users.sharksforcheap.length)]; 
    var $tweet = $('<div class=tweet></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    $tweet.appendTo("body");
    console.log(randomize);
  }
  function douglascalhoun(){
    var index = streams.users.douglascalhoun.length - 1
    var randomize = streams.users.douglascalhoun[Math.floor(Math.random() * streams.users.douglascalhoun.length)]; 
    var $tweet = $('<div class=tweet></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    $tweet.appendTo("body");
    console.log(randomize);
  }
  function shawndrost(){
    var index = streams.users.shawndrost.length - 1
    var randomize = streams.users.shawndrost[Math.floor(Math.random() * streams.users.shawndrost.length)]; 
    var $tweet = $('<div class=tweet></div>');
    var $user = $('<p class=user></p>');
    var $message = $('<p class=message></p>');
    $tweet.text('@' + randomize.user + ': ' + randomize.message + ' posted at ' + randomize.created_at );
    $tweet.appendTo("body");
    console.log(randomize);
  }