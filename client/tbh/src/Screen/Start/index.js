import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function index() {
    return (
        <LinearGradient start={{ x: 0.0, y: 0.1 }} end={{ x: 0.5, y: 1.0 }} colors={['#340367', '#11071B']} style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoConatainer}>
                    <View>
                        <Image source={require("../../Assets/Image/logo.png")} style={styles.logo} />
                    </View>
                    <View>
                        <Text style={styles.logoSubText}>CHAT. SAFE.</Text>
                        <Text style={styles.logoSubText}>ANONYMOUSLY.</Text>
                    </View>
                </View>
                <View style={styles.startBtnContainer}>
                    <View>
                        <TouchableOpacity style={styles.startBtn}>
                            <Text style={styles.startBtnText}>Start Now!</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.startBtnBottomText}> by clicking done you are agreeing </Text>
                        <Text style={styles.startBtnBottomText}>  to the <Text style={{ fontWeight: "600", color: "white", opacity: 1 }}>terms of use</Text> and acknowledging </Text>
                        <Text style={styles.startBtnBottomText}>  the <Text style={{ fontWeight: "600", color: "white", opacity: 1 }}>privacy policy</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 45,
    },
    logoConatainer: {
        marginTop: "90%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 170,
        height: 80
    },
    logoSubText: {
        fontSize: 17,
        fontWeight: "800",
        textAlign: 'center',
        color: 'white'
    },
    startBtnContainer: {
        marginTop: 180,
    },
    startBtn: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
        marginVertical: 25,
    },
    startBtnText: {
        fontSize: 17,
        fontWeight: "800",
        color: "#000",
        textAlign: 'center'
    },
    startBtnBottomText: {
        fontSize: 12,
        fontWeight: "400",
        textAlign: 'center',
        marginHorizontal: 10,
        color: "white",
        lineHeight: 16,
    },

})