module.exports = {
    configureWebpack:{
        resolve:{
            // 脚手架已经默认配置好后缀  extensions:[],
            alias:{
                'assets':('@/assets'),
                'common':('@/common'),
                'views':('@/views'),
                'components':('@/components'),
                'network':('@/network')
            }
        }
    }

}
