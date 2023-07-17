import { useEffect, useRef } from "react"
import { StyleSheet, View,Image } from "react-native"
import ImageDemo from '../../assets/images/imagedemo.jpeg' 
import Setting from '../../assets/images/setting.png'

export default () => {

    const imageUrl = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57934ceba0e74baba412aa1375f033ec~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?'

    // useEffect(() => {
        // Image.getSize(imageUrl,(width,height) => {
        //     console.log(width,height,'getSize success.............')
        // },(error) => {
        //     console.log(error,'getSize error.............')
        // })
        // Image.prefetch(imageUrl).then(data => {
        //     console.log(data,'prefetch.............')
        // }).catch(e => {
        //     console.log(e,'catch...............')
        // })
    // },[])

    return (
        <View style={styles.root}>
            <Image 
            
                style={styles.img} 
                source={Setting} // 图片资源 可以是一个本地静态资源 或者 网络地址
                blurRadius={12} // 模糊半径
                defaultSource={ImageDemo} // 图片加载失败的时候默认的加载图片
                fadeDuration={200} // 渐入的动画持续时间。
                onLoad={() => { // 加载成功完成时调用此回调函数。
                    console.log('onLoad...')
                }}
                onError={() => { // 当加载错误的时候调用此回调函数
                    console.log('onError....')
                }}
                onLoadStart={() => { // 加载开始时调用。
                    console.log('onLoadStart...')
                }}
                onLoadEnd={() => { // 加载结束后，不论成功还是失败，调用此回调函数。
                    console.log('onLoadEnd...')
                }}
            >
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        // backgroundColor:'#F0F0F0'
    },
    img:{
        width:48,
        height:48,
        // backgroundColor:'#a0a0a0',
        resizeMode:'cover', // 缩放模式
        tintColor:'blue'
    }
})