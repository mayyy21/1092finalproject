let player;
let currentPlay = 0;
//youtube api ready

//youtube 文件
//https://developers.google.com/youtube/iframe_api_reference
//https://developers.google.com/youtube/player_parameters#Parameters
function onYouTubeIframeAPIReady(){//名稱自己設 配合API
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        //event.preventDefault();
        //console.log(currentPlay);
        playerVars:{
            autoplay:0, //是否自動撥放
            controls:0, //是否顯示控制項
            start:playTime[currentPlay][0],//開始秒數
            end:playTime[currentPlay][1],//結束秒數
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}
//event.preventDefault();
//console.log(event);
function onPlayerReady(event){
    //event.preventDefault();
    //console.log(event);
    $("#playButton").on("click",function(){
        
        $("h2").text(player.getVideoData().title);//拿到影片標題
        player.playVideo();//播放影片
        //event.preventDefault();
        //console.log(event);
    });
}
function  onPlayerStateChange(event){
    //event.preventDefault();
    //console.log(event);
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){//換歌
            currentPlay++;
            player.loadVideoById({
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestedQuality:"large"
            });
        }else{
            currentPlay=0;
            player.cueVideoById({//載入，不播放
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestedQuality:"large"
            });
        }
    }
    $("h2").text(player.getVideoData().title);
        
}