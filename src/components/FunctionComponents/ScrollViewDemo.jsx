import { useEffect, useRef } from "react"
import { StyleSheet, View,ScrollView,Text } from "react-native"

export default () => {
    const arr = [1,2,3,4,5]
    const scrollViewRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            scrollViewRef.current.scrollTo({ y:500,animated:true }) // 滚动到指定位置
            // scrollViewRef.current.scrollToEnd({animated:true}) // 滚动到底部
        },2000)
    },[])

    return (
        <ScrollView 
            ref={ scrollViewRef }
            style={styles.root}
            contentContainerStyle={styles.contentContainer}
            keyboardDismissMode="on-drag" // 滚动列表的时候键盘消失
            keyboardShouldPersistTaps="handle" // 如果当前界面有软键盘，那么点击 scrollview 后是否收起键盘，取决于本属性的设置
            onMomentumScrollBegin={() => { // 滚动动画开始时调用此函数。
                console.log('onMomentumScrollBegin-------------')
            }}
            onMomentumScrollEnd={() => {
                console.log('onMomentumScrollEnd-------------')
            }}
            onScroll={(event) => { // 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
                console.log('onScroll---------',event.nativeEvent)
            }}
            scrollEventThrottle={16}
            overScrollMode="auto" // 覆盖默认的 overScroll 模式
            scrollEnabled={true} // 是否允许滚动
            contentOffset={{ y:100 }} // 初始滚动的位置
            showsVerticalScrollIndicator={ false } // 是否展示纵向滚动条
            showsHorizontalScrollIndicator={ false } // 是否展示横向滚动条
            stickyHeaderIndices={[0]} // 吸顶元素的索引
            horizontal={ false } // 当此属性为 true 的时候，所有的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为 false。
            pagingEnabled={ true } // 当值为 true 时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上。默认值为 false。
        >
            {
                arr.map((item,index) => {
                    return (
                        <Text 
                            style={styles.txt}  
                            key={`item-${index}`}
                        >
                            {item}
                        </Text>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0'
    },
    txt:{
        width:'100%',
        height:56,
        textAlign:'left',
        color:'#000',
        fontSize:24,
        fontWeight:'bold',
        margin: '10 0',
    },
    contentContainer: {
        paddingVertical: 20
    }
})