import React, {useState} from 'react';
import { Platform, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import Gift from './components/Gift'

export default function App() {
  const [gift, setGift] = useState();
  const [gifts, setGiftItems] = useState([])

  const handleAddGift = () => {
    Keyboard.dismiss();
    setGiftItems([...gifts, gift]);
    setGift(null)
  }
  const givenItem = (index) => {
    let itemCopy = [...gifts];
    itemCopy.splice(index, 1);
    setGiftItems(itemCopy)
  }
  
  return (
    <View style={styles.container}>
      {/* Regali da fare */}
        <View style={styles.giftWrap}>
          <Text style={styles.title}>Regali!</Text>

          <View style={styles.gifts}>
            {
              gifts.map((giftItem, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => givenItem(index)}>
                    <Gift text={gift}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "height"} style={styles.WriteGiftWrap}>
          <TextInput style={styles.input} placeholder={'Chiedi un regalo!'} value={gift} onChangeText={text => setGift(text)}/>
          <TouchableOpacity onPress={() => handleAddGift()}>
            <View style={styles.addWrap}>
              <Text style={styles.addGift}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61bb51',
  },
  giftWrap:{
      paddingTop: 80,
      paddingHorizontal: 30
  },
  title: {
    fontSize: 27.5,
    fontWeight: "bold"
  },
  gifts:{
    marginTop: 30
  },
  WriteGiftWrap: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addWrap: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addGift: {

  }
});
