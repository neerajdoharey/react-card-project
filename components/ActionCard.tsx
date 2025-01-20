import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function opemWebsite(websiteLink: string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>What's new in ruby</Text>
        </View>
        <Image source={{ 
          uri: 'https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg'
          }}
          style={styles.cardImage} 
        />
        <View style={styles.bodyContainer} >
          <Text numberOfLines={3}>
            Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. 
          </Text>
        </View>
        <View style={styles.footerContainer} >
          <TouchableOpacity onPress={() => opemWebsite('https://en.wikipedia.org/wiki/Ruby_(programming_language)')}>
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => opemWebsite('https://github.com/neerajdoharey')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  heading: { fontSize: 16, fontWeight: '600'},
  elevatedCard: {backgroundColor: '#ededed', elevation: 3, 
    shadowOffset:{
      width: 1,
      height: 1
    },
    shadowColor: "#333",
    shadowOpacity: 0.4
  },
  card: {width: 370, height: 370, borderRadius: 6, marginVertical:12, marginHorizontal: 16},
  headingContainer: { height:40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  cardImage: { height: 190 },
  bodyContainer: { padding:10},
  footerContainer: { padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent:'space-evenly'},
  socialLinks: {fontSize: 16, color:'red', backgroundColor: '#fff', padding: 10, borderRadius:5,shadowColor: "#333",shadowOpacity: 0.3}
})