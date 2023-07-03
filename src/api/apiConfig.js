const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e46b3d2bc9d313ede33142593c12242f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;