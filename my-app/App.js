import { useState } from 'react';
import { StyleSheet,  View,  SafeAreaView, TextInput, Button, Text } from 'react-native';
import { Separator } from './components/separator';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>
      <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          placeholder="write here.."
          value={inputValue}
        />
        
        <Separator/>
        <Text style={styles.text}>
          <Text style={styles.field}>Written:</Text>
          <Text style={styles.value}> {inputValue}</Text> 
          
          </Text>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    borderColor:'mediumorchid',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  text : {
    marginLeft: 10, 
    marginRight: 10,
    marginBottom: 10,
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  field : {
    fontWeight: 'bold',
    letterSpacing: 3
  },
  value : {
    fontStyle: 'italic'
  }
});
