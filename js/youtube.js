 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8',
     host: 'https://www.youtube.com',
     playerVars : {
       autoplay : true, // 자동 재생 유무
       loop : true, // 박본 재생 유무
       playlist: 'An6LvWQuj_8' , // loop (반복재생) 사용시 반복 재생할 유튜브 영상 ID 목록을 지정해야한다.
     },
     events : {
       onReady : function(event){
        event.target.mute(); // 음소거
       }
     } 
   });
}