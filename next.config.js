const withImages = require('next-images')
const withVideos = require('next-videos')


module.exports = withImages(withVideos());

// module.exports = {
//   env: {
//     backend: ['funutri-api.manistrausuvo.com'],
//   },
//   images: {
//     domains: ['funutri-api.manistrausuvo.com'],
//   }
// }

