import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function index() {
  return (
    <LinearGradient start={{ x: 0.0, y: 0.1 }} end={{ x: 0.5, y: 0.6 }} colors={['#340367', '#11071B']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoConatainer}>
          <View>
            <Image source={require("../../Assets/Image/logo.png")} style={styles.logo} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTopText}>What’s your Instagram handle?</Text>
            <Text style={styles.inputGuideText}>EX: @charliedemiloe</Text>
            <View style={styles.input}>
              <TextInput placeholder='@' placeholderTextColor={"#000"} style={styles.inputValue} />
            </View>
          </View>
        </View>
        <View style={styles.nextBtnContainer}>
          <View>
            <TouchableOpacity style={styles.nextBtn}>
              <Text style={styles.nextBtnText}>Next!</Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    marginBottom: 30
  },
  logo: {
    width: 160,
    height: 80
  },
  logoSubText: {
    fontSize: 22,
    fontWeight: "600"
  },
  inputContainer: {
    marginTop: 27,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTopText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  inputGuideText: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: "white",
    opacity: 0.6,
    marginTop: 4,
  },
  input: {
    marginVertical: 14,
    backgroundColor: '#C8C1CF',
    borderRadius: 70,
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputValue: {
    color: "#000",
    fontSize: 20,
  },
  nextBtn: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    marginVertical: 17
  },
  nextBtnText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#000",
    textAlign: 'center'
  },

})