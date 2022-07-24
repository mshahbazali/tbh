import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { femaleSvg, maleSvg } from '../../Assets/Svg';
export default function Index({ navigation }) {
  const [maleSelect, setMaleSelect] = useState(false);
  const [femaleSelect, setFemaleSelect] = useState(false);
  return (
    <LinearGradient start={{ x: 0.0, y: 0.1 }} end={{ x: 0.5, y: 0.6 }} colors={['#340367', '#11071B']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoConatainer}>
          <View>
            <Image source={require("../../Assets/Image/logo.png")} style={styles.logo} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTopText}>What’s your Gender?</Text>
            <View style={styles.genderSelectorContainer}>
              <TouchableOpacity style={styles.maleSelector} onPress={() => {
                setMaleSelect(!maleSelect)
                setFemaleSelect(false)
              }}>
                <SvgXml width="130" height="200" xml={maleSvg} style={{ opacity: maleSelect == false ? 0.7 : 1 }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.femaleSelector} onPress={() => {
                setFemaleSelect(!femaleSelect)
                setMaleSelect(false)
              }}>
                <SvgXml width="130" height="200" xml={femaleSvg} style={{ opacity: femaleSelect == false ? 0.7 : 1 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.nextBtnContainer}>
          <View>
            <TouchableOpacity style={styles.nextBtn} onPress={()=> navigation.navigate("Upload")}>
              <Text style={styles.nextBtnText}>Done!</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTopText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  genderSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -17
  },
  maleSelector: {
    marginRight: 20
  },
  femaleSelector: {
    marginleft: 20
  },
  nextBtn: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    marginTop: -29
  },
  nextBtnText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#000",
    textAlign: 'center'
  },

})