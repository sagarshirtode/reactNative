import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,SectionList, Text, View ,Button, Image,Alert,TextInput,ScrollView  } from 'react-native';
import { FlatList } from 'react-native-web';


const logo = {
  uri:'https://reactnative.dev/img/tiny_logo.png',
  width:56,
  height:65
};

export default function App() {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Image source={logo} />
    <View style={styles.container}>
      <Text>IRON MAN</Text>
      <Image 
      style={{borderRadius:15,height:200,width:200}}
      source={require("./assets/sagar-shirtode.png")}></Image>
      <Image
      style={{borderRadius:15,height:200,width:200}}
      source={{uri:'https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'}}
      ></Image>
      <Button
        title="Say hi!"
        onPress={() => Alert.alert('Hi sagar!')}
      />
      <TextInput 
        style={{height:40}}
        placeholder="User Name"
        onChangeText={newText => setText(newText)}
        defaultValue={text} />
        <Text style={{padding:10,borderRadius:10, fontSize:42,backgroundColor:'red', color:'#33FF86'}}>
          {text}
        </Text>
        
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
