import React, { useState, useEffect } from "react";
import {StyleSheet, View, FlatList, Animated, Dimensions} from "react-native";
import CarouselItem from "./CarouselItem";

const { width, height } = Dimensions.get("window")

let flatList;

function infiniteScroll(dataList){
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function(){
        scrolled ++ 
        if(scrolled < numberOfData){
            scrollValue = scrollValue + width
        }else{
            scrollValue = 0
            scrolled = 0
        }
        if(flatList){
            this.flatList.scrollToOffset({animated: true, offset: scrollValue})
        }
    }, 3000)
}


const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [ dataList, setDatalList ] = useState(data);

    useEffect(() => {
        setDatalList(data)
        infiniteScroll(dataList)
    });

    if ( data && data.length){
        return(
            <View style={styles.slideView}>
                <FlatList
                    data = {data}
                    ref={(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({ item }) =>  {
                        return <CarouselItem item = {item}/> 
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: {contentOffset: { x: scrollX}}}]
                    )}
                />
                <View style={styles.dotView}>
                    {
                        data.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [ i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate:"clamp"
                            })
                            return(
                                <Animated.View
                                    key = {1}
                                    style = {{opacity, height:10, width:10, background:"#595959", margin:8, borderRadius:5}}
                                />
                            )
                        })
                    }
                </View>
            </View>
        )
    }
    console.log("Please provide images")
    return null
}

export default Carousel;

const styles = StyleSheet.create({
    dotView:{
        flexDirection:"row",
        justifyContent:"center"
    },
    slideView:{
        marginHorizontal:2,
    }
})
