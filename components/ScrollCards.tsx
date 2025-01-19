import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCards() {
  return (
    <View>
      <Text style={styles.headingText}>Scroll Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>More..</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>🤗</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  container: {flex: 1, flexDirection: 'row', padding: 8},
  card: {width: 100, height: 100, borderRadius: 4, margin: 8, flex: 1, justifyContent: 'center', alignItems: 'center'},
  elevated: {backgroundColor: '#CAD5E2', elevation: 4}

})