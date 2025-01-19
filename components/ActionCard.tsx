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
          <Text style={styles.headingText}></Text>
        </View>
        <Image source={{ 
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/121px-Ruby_logo.svg.png'
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
            <Text>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  elevatedCard: {},
  card: {},
  headingContainer: {},
  cardImage: { height: 100 },
  bodyContainer: {},
  footerContainer: {}
})