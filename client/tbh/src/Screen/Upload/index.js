import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { instagram, upload } from '../../Assets/Svg';
export default function Index() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContatiner}>
                    <View>
                        <Ionicons name="md-help-circle-outline" size={35} color="#000" />
                    </View>
                    <View>
                        <Text style={styles.screenTilte}>Upload</Text>
                    </View>
                    <View>
                        <FontAwesome name="user-circle" size={30} color="#000" />
                    </View>
                </View>
                <View style={styles.messageContainer}>
                    <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.2, y: 0.6 }} colors={['#340367', '#11071B']} style={styles.messageBox}>
                        <View>
                            <TouchableOpacity style={styles.instagramBox}>
                                <SvgXml width="25" height="25" xml={instagram} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.messageText}>send me anonymous messages!</Text>
                        </View>
                        <TouchableOpacity style={styles.editIcon}>
                            <MaterialCommunityIcons name="pencil" size={12} color="#000" />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={styles.linkContainer}>
                    <View style={styles.linkConatinerFirst}>
                        <View style={styles.countCircle}>
                            <Text style={styles.countText}>1</Text>
                        </View>
                        <View>
                            <Text style={styles.copyText}>Copy your Link</Text>
                            <Text style={styles.linkText}>TBHAPP.COM/RAZH1N2</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.copyLinkBtn}>
                                <Text style={styles.copyBtnText}>copy link</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.linkConatinerFirst}>
                        <View style={styles.countCircle}>
                            <Text style={styles.countText}>2</Text>
                        </View>
                        <View>
                            <Text style={styles.shareLinkText}>Share your link on Instagram Story</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.shareBtn}>
                        <SvgXml width="25" height="25" xml={upload} />
                        <Text style={styles.shareBtnText}>Share!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerContatiner: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 5,
        paddingHorizontal: 28,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 2
    },
    screenTilte: {
        fontSize: 24,
        color: "#000", fontWeight: '800'
    },
    messageContainer: {
        marginTop: "35%",
        paddingHorizontal: 35,
    },
    messageBox: {
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 25
    },
    instagramBox: {
        backgroundColor: "#D9D9D9",
        padding: 14,
        borderRadius: 80,
        marginRight: 14
    },
    messageText: {
        fontSize: 20,
        color: "#fff", fontWeight: '600'
    },
    editIcon: {
        position: 'absolute',
        padding: 4,
        right: 10,
        top: 8,
        backgroundColor: "white",
        borderRadius: 90
    },
    linkContainer: {
        marginTop: 50,
        paddingHorizontal: 35,

    },
    linkConatinerFirst: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginVertical: 10
    },
    countCircle: {
        backgroundColor: '#34036740',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 90,
        marginRight: 10
    },
    countText: {
        color: '#340367',
        fontSize: 25, fontWeight: '800'
    },
    copyText: {
        color: '#000',
        fontSize: 17, fontWeight: '800'
    },
    copyLinkBtn: {
        borderColor: '#340367',
        borderRadius: 40,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 27
    },
    copyBtnText: {
        color: '#340367',
        fontSize: 13, fontWeight: '500'
    },
    linkText: {
        color: '#0000008c',
        fontSize: 12, fontWeight: '500'
    },
    shareLinkText: {
        color: '#000',
        fontSize: 15, fontWeight: '800'
    },
    shareBtn: {
        backgroundColor: '#340367',
        marginHorizontal: 45,
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 10
    },
    shareBtnText: {
        color: '#fff',
        fontSize: 25, fontWeight: '800',
        marginHorizontal: 8
    },
})