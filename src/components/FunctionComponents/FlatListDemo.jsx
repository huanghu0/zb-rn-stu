import { useEffect, useRef } from "react"
import { StyleSheet, View,FlatList,Text } from "react-native"

export default () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const arrEmpty = []
    const flatRef = useRef(null)
    const renderItem = ({item,index}) => {
        return (
            <Text style={styles.txt}>
                {`List item ${item}`}
            </Text>
        )
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         flatRef.current.scrollToIndex({
    //             index:18,
    //             viewPosition:0.5,
    //             animted:true  
    //         })
    //     }, 2000);
    // },[])

    return (
        <FlatList 
            ref={flatRef}
            style={styles.root}
            data={arr}
            renderItem={renderItem}
            keyExtractor={(_,index) => `item-${index}`}
            contentContainerStyle={ styles.contentContainer} // 内容容器样式
            // showsVerticalScrollIndicator={ false } // 是否展示纵向滚动条
            // showsHorizontalScrollIndicator={ false } // 是否展示横向滚动条  
            // keyboardDismissMode="on-drag" // 滚动列表的时候键盘消失
            // keyboardShouldPersistTaps="handle" // 如果当前界面有软键盘，那么点击 scrollview 后是否收起键盘，取决于本属性的设置    
            // onScroll={(event) => { // 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
            //     console.log('onScroll---------',event.nativeEvent)
            // }}    
            // ListHeaderComponent={
            //     <Text>列表头部</Text>
            // } // 列表头部
            // ListFooterComponent={
            //     <Text>
            //         列表尾部
            //     </Text>
            // } // 列表尾部
            // ListEmptyComponent={
            //     <Text>
            //         暂时无数据
            //     </Text>
            // }
            // ItemSeparatorComponent={
            //     <View style={styles.separator}></View>
            // } // 每一行分隔元素
            // initialNumToRender={15} // 初始渲染个数
            // inverted={false} // 列表反向
            // numColumns={1} // 每一行的列数
            onViewableItemsChanged={(info) => { //在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置viewabilityConfig属性。
                const { viewableItems } = info
                console.log(viewableItems,'viewableItems..............')
            }}
        >

        </FlatList>
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
        color:'black',
        fontSize:24,
        fontWeight:'bold',
        textAlignVertical:'center'
    },
    contentContainer: {
        paddingHorizontal:16,
        paddingTop:20,
        backgroundColor:'#F5F5F5'  
    },
    separator:{
        width:'100%',
        height:1,
        backgroundColor:'#ddd'
    }
})