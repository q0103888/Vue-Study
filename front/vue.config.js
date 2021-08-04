module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    },
    outputDir: '../backend/public'
}

// 만약 /api요청이 있으면 backend쪽의 /api로 돌려주는 proxy설정을 추가해줌
// 그리고 frontend를 build했을때 output이 ../backend/pubilc에 위치한다2