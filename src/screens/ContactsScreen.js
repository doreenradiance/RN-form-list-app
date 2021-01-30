import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function ContactsScreen({ route, }) {
    let Screen = route.params
    return (
        <ScrollView>
            <View style={styles.mainDp}>
                <Image source={require('../../assets/dp.jpg')} style={styles.dp} />
                <View style={styles.infoDp}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Doreen Mensah</Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}>796906058567</Text>
                </View>
                <View style={styles.icon}>
                    <FontAwesome name="phone" size={24} color="black" />
                    <MaterialCommunityIcons name="message-processing" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
            </View>

            <View style={styles.mainDp}>
                <Image source={require('../../assets/dp.jpg')} style={styles.dp} />
                <View style={styles.infoDp}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Doreen Mensah</Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}>9675957668</Text>
                </View>
                <View style={styles.icon}>
                    <FontAwesome name="phone" size={24} color="black" />
                    <MaterialCommunityIcons name="message-processing" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
            </View>

            <View style={styles.mainDp}>
                <Image source={require('../../assets/dp.jpg')} style={styles.dp} />
                <View style={styles.infoDp}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Doreen Mensah</Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}>2341123988</Text>
                </View>
                <View style={styles.icon}>
                    <FontAwesome name="phone" size={24} color="black" />
                    <MaterialCommunityIcons name="message-processing" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
            </View>

            <View style={styles.mainDp}>
                <Image source={require('../../assets/dp.jpg')} style={styles.dp} />
                <View style={styles.infoDp}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}> Mensah Doreen</Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}>565746478338</Text>
                </View>
                <View style={styles.icon}>
                    <FontAwesome name="phone" size={24} color="black" />
                    <MaterialCommunityIcons name="message-processing" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
            </View>

            <View style={styles.mainDp}>
                <Image source={require('../../assets/dp.jpg')} style={styles.dp} />
                <View style={styles.infoDp}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Doreen Mensah</Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}>676785765565</Text>
                </View>
                <View style={styles.icon}>
                    <View style={styles.phone}>
                        <FontAwesome name="phone" size={24} color="black" />
                    </View>
                    <View style={styles.message}>
                        <MaterialCommunityIcons name="message-processing" size={24} color="black" />
                    </View>
                    <View style={styles.dots}>
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </View>
                </View>
            </View>

            <View style={styles.mainDp}>
                <Image source={require('../../assets/dp.jpg')} style={styles.dp} />
                <View style={styles.infoDp}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Doreen Mensah</Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}>09778574454</Text>
                </View>
                <View style={styles.icon}>
                    <View style={styles.phone}>
                        <FontAwesome name="phone" size={24} color="black" />
                    </View>
                    <View style={styles.message}>
                        <MaterialCommunityIcons name="message-processing" size={24} color="black" />
                    </View>
                    <View style={styles.dots}>
                        <Entypo name="dots-three-vertical" size={24} color="black" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-around",
        marginTop: 50
    },
    mainDp: {
        flexDirection: "row",
        marginTop: 40,
        marginLeft: 10
    },
    dp: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    infoDp: {
        marginTop: 5,
        marginLeft: 30
    },
    icon: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 15
    },
    phone: {
        marginHorizontal: 10
    },
    message: {
        marginLeft: 10
    },
    dots: {
        marginLeft: 10
    }
})