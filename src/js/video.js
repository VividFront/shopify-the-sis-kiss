// import Vlitejs from 'vlitejs';
// import VlitejsYoutube from 'vlitejs/dist/providers/youtube';
// import 'vlitejs/dist/vlite.css';

// Vlitejs.registerProvider('youtube', VlitejsYoutube);

// const videos = document.querySelectorAll('.js-video');

// if (videos) {
//   videos.forEach(video => {
//     const options = {autoHide: true, autoHideDelay: 750};

//     if (video.dataset.posterUrl) {
//       options.poster = video.dataset.posterUrl;
//     }

//     if (video.dataset && video.dataset.youtubeId) {
//       const youtubeId = video.dataset.youtubeId;
//       new Vlitejs('#youtube-' + youtubeId, { options, provider: 'youtube' });
//     } else {
//       new Vlitejs(video, { options, provider: 'html5' });
//     }
//   });
// }
