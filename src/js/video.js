import YouTubePlayer from 'youtube-player';

const videos = document.querySelectorAll('.js-video');

videos.forEach((video) => {
  const button = video.querySelector('.js-video__thumbnail');
  const id = video.querySelector('.js-video__player').dataset.youtubeId;
  const start = video.querySelector('.js-video__player').dataset.start;

  const player = YouTubePlayer('video-player-' + id, {
    videoId: id,
    playerVars: {
      rel: 0,
      showinfo: 0,
      start: start || 0,
    },
  });

  player.on('stateChange', (event) => {
    if (event.data == 0) {
      button.classList.remove('hidden');
    }
  });

  button.onclick = () => {
    player.playVideo();
    button.classList.add('hidden');
  };
});
