import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'

const Cards = ({image,title,subtitle,caption, logo}) => {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Image style={styles.cardImage} source={image} />
        <Text style={styles.title}>{title}</Text>
      </View>

       <View style={styles.body}>
             <Image style={styles.logo} source={logo} />
               <View>
                 <Text>{subtitle}</Text>
                 <Text style={styles.caption}>{caption}</Text>
               </View>

        </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 280,
    borderRadius: 20,
    backgroundColor:'white',
     marginTop: 15,
     marginRight:15
  },
  card: {
    width: "100%",
    height: 200,
    backgroundColor: '#ccc',
    borderTopLeftRadius:14,
    borderTopRightRadius:14,
    overflow:'hidden'
  
  },
  cardImage: {
    width: '100%',
    height: '100%'
  },
  title:{
    position:'absolute',
    top:20,
    fontSize:20,
    color:'#fff',
    marginLeft:10,
    width:170,
    lineHeight:30,
    fontWeight:'bold'

  },
  body:{
    flexDirection:'row',
    marginTop:10,
    marginLeft:15
  },
  logo:{
    width:44,
    height:44,
    marginRight:10
  },
  caption:{
    color:'#b8bece'
  }
})



export default Cards;


