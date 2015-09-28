allBots = function(fn) {
  for (var k in bots)
    fn(bots[k])
}

allBots(function(bot){
  bot.getPlaylists(function(err, playlists){
    !err&&playlists[0] & bot.grab( playlists[0].id, function(){
      console.log("[grab]", bot.credentials.email)
    })
  })
})
