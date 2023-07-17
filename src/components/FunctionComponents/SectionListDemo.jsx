import { useEffect, useRef, useState } from "react"
import { StyleSheet, View,Text, SectionList,RefreshControl } from "react-native"

export default () => {
    const DATA = [
        {
          title: "Main dishes",
          data: ["Pizza", "Burger", "Risotto"]
        },
        {
          title: "Sides",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
          title: "Drinks",
          data: ["Water", "Coke", "Beer"]
        },
        {
          title: "Desserts",
          data: ["Cheese Cake", "Ice Cream"]
        }
      ];
      const sectionref = useRef(null)
      const [refreshing,setRefreshing] = useState(false)
    // useEffect(() => {
    //     setTimeout(() => {
    //         sectionref.current.scrollToLocation({
    //             sectionIndex:1,
    //             itemIndex:2,
    //             viewPosition:0,
    //             animted:true  
    //         })
    //     }, 2000);
    // },[])
    return (
        <View
            style={ styles.root }
        >
            <SectionList  
                ref={sectionref} 
                sections={DATA}
                renderItem={({item,index}) => {
                    return <Text style={styles.txt} title={item.title}>
                        { item }
                    </Text>
                }}
                keyExtractor={(item,index) => `${item}-${index}`}
                renderSectionHeader={({ section: { title } }) => ( // 每一组的头部
                    <Text style={styles.header}>{title}</Text>
                )}  
                stickySectionHeadersEnabled={true} // 分组吸顶  
                refreshControl = {
                    <RefreshControl
                        onRefresh={() => {
                            console.log('onRefresh............')
                            setRefreshing(true);
                            setTimeout(() => {
                                setRefreshing(false);
                            },1000)
                        }}
                        refreshing={refreshing}
                    >

                    </RefreshControl>
                }
                onEndReached={() => {
                    console.log('onEndReached.......')
                }}
                onEndReachedThreshold={0.2}
            >
            </SectionList>
        </View>

    )
}

const styles = StyleSheet.create({
    root:{
        // flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F0'
    },
    header:{
        width:'100%',
        height:56,
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        textAlignVertical:'center',
        color:'#333'
    },
    txt:{
        width:'100%',
        height:56,
        color:'black',
        fontSize:12,
        fontWeight:'bold',
        textAlignVertical:'center',
        color:'#333'
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