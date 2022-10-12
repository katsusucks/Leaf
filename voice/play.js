module.exports = {
  name: "play",
  $if: "v4", //enabling pseudo $if
  code: `
    $let[msg;$playTrack[youtube;$message]]

    $if[$hasPlayer==false]
       
      
$onlyif[($voiceId[$clientId]!=)&&($voiceId[$clientId]==$voiceId);you are not in the same voice channel]
    
    $onlyif[$voiceId!=;join a voice channel before using play cmd]
    `,
}