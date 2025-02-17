import React, { useContext } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NewsContext } from '../API/Context';
import { categories, sources } from '../API/api';
import Carousel from 'react-native-anchor-carousel';
import Search from '../components/Search';

const DiscoverScreen = () => {

    const { setCategory, setSource} = useContext(NewsContext);

    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);


    return (
        <View style={styles.discover}>
            <Search />

            {/* categories*/}
            <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
            <Carousel
                layout={'default'}
                data={categories}
                style={styles.carousel}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                    style={styles.category}
                    onPress={() => setCategory(item.name)}
                    >
                        <Image source={{ uri: item.pic }} style={styles.categoryImage} />
                        <Text style={{ ...styles.name, color: "white" }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                containerWidth={windowWidth}

                onSnapToItem = {index => setActiveIndex(index)}
                separatorWidth={0}
                itemWidth={windowWidth*0.5}
                inActiveSacle={0.8}
                activeSlideAligment={"start"}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}

            />
             <Text style={{ ...styles.subtitle, color: "white"}}>Sources</Text>
                  <View style={styles.sources}>
                    {sources.map((s) => (
                      <TouchableOpacity
                        onPress={() => setSource(s.id)}
                        key={s.id}
                        style={styles.sourceContainer}>
                        <Image source={{ uri: s.pic }} style={styles.sourceImage} />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              );
            };


const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
    categoryImage: {
        height: "80%",
        width: "100%",
        resizeMode: "contain",
    },
    name: {
        fontSize: 14,
        textTransform: "capitalize",
    },
    sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
    }, 
    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 15,
    },
    sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d"
    },
    carousel: {
        height: "20%",
    }
});



export default DiscoverScreen;