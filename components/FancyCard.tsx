import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Place</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{ 
          uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/9a/30/d6/agra.jpg?w=900&h=500&s=1'
          }}
          style={styles.cardImage} 
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahel</Text>
          <Text style={styles.cardLabel}>Agra</Text>
          <Text style={styles.cardDesc}>The Taj Mahal is absolutely breathtaking. The intricate marble work and stunning architecture are truly worth seeing. We visited at sunrise, which made the experience even more magical with the soft morning light.</Text>
          <Text style={styles.cardFooter}>12 min Away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  card: { width: 370, height: 360, borderRadius: 6, marginHorizontal: 16, marginVertical: 12},
  cardElevated: { backgroundColor: '#ededed', elevation: 3, 
    shadowOffset:{
      width: 1,
      height: 1
    }
  },
  cardImage: { height: 180, marginBottom: 8, borderTopLeftRadius: 6, borderTopRightRadius: 6},
  cardBody: { 
    flex:1,
    flexGrow:1,
    paddingHorizontal: 12

  },
  cardTitle: { color: '#000000', fontSize: 22, fontWeight: 'bold', marginBottom: 4},
  cardLabel: { color: '#000000', fontSize: 14, marginBottom: 6},
  cardDesc: { color: '#242b2e', fontSize: 12, marginBottom: 12, flexShrink: 1, marginTop:6},
  cardFooter: { color: '#000000'}
})