import React from 'react';
import { StyleSheet, SafeAreaView , Text, View , Image , Platform  , StatusBar, ScrollView} from 'react-native';

// import component
import Cards from './components/Cards';
 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{height:'100%'}}>

     
      <View style={styles.headerContent}>
         <Image style={styles.avatar} source={require('./assets/avatar.jpg')} />
         <View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.name}>Gerlin</Text>
          </View>
      </View>

      <Text style={styles.subtitle}>Continue learning</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

    

      <Cards
       image={require('./assets/background2.jpg')}
       title="Styled components"
       subtitle="react native"
       caption="5 of 12 sections"
       logo={require('./assets/logo-react.png')} 
      />
      <Cards
       image={require('./assets/background2.jpg')}
       title="Styled components"
       subtitle="react native"
       caption="5 of 12 sections"
       logo={require('./assets/logo-react.png')} 
      />
      <Cards
       image={require('./assets/background2.jpg')}
       title="Styled components"
       subtitle="react native"
       caption="5 of 12 sections"
       logo={require('./assets/logo-react.png')} 
      />
        </ScrollView>
       </ScrollView> 
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f0f3f5',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    paddingLeft:15

  },
  title:{
    fontSize:16,
    fontWeight:'500',
    color:'#b8bece'
  },
  name:{
    fontSize:20,
    color:'#3c4560',
    fontWeight:'bold'
  },
  headerContent:{
    width:'100%',
    flexDirection:'row'
  },
  avatar:{
    width:50,
    height:50,
    borderRadius:50,
    marginRight:15
  },
  subtitle:{
    marginTop:45,

    textTransform:"uppercase",
    letterSpacing:1,
    color:'#b8bece'
  }

});
