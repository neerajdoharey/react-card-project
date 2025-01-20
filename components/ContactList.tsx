import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
        {
            "uid": 1,
            "name": "John Doe",
            "designation": "Software Engineer",
            "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            "uid": 2,
            "name": "Emily Smith",
            "designation": "Product Manager",
            "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            "uid": 3,
            "name": "Michael Johnson",
            "designation": "UI/UX Designer",
            "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            "uid": 4,
            "name": "Sarah Williams",
            "designation": "Data Scientist",
            "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            "uid": 5,
            "name": "David Brown",
            "designation": "DevOps Engineer",
            "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg"
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({uid, name, designation, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View  style={styles.userContent}>
              <Text  style={styles.userName}>{name}</Text>
              <Text  style={styles.userStatus}>{designation}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  container: { paddingHorizontal:16},
  userCard: { flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom:3, marginTop:3, backgroundColor: '#e3f7b0', padding:10, borderRadius:10},
  userImage: {width: 60, height:60, borderRadius: 60/2, marginRight:14},
  userContent:{},
  userName: {fontSize: 20, fontWeight: 600, paddingBottom:0},
  userStatus: {fontSize: 16}
}) 