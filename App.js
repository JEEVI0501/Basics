import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import React,{useState} from 'react';
import { NavigationContainer} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {Navigation}

export default function App() {

  const [people,setPeople] = useState([

    {name:'a',id:'1'},
    {name:'aa',id:'2'},
    {name:'aaa',id:'3'},
    {name:'aaaa',id:'4'},
    {name:'aaaaa',id:'5'},
    {name:'aaaaaa',id:'6'},
    {name:'aaaaaaa',id:'7'},

  ]);

  const [name,setName] = useState('jeevi');
  const [person,setPerson] = useState({name:'anu',age:44});
  let x=person.age;
  const clickHandler = () =>{
    if(name == 'jeevi')
    {
      setName('jeevickha');
    }
    else{
      setName('jeevi')
    }
    x=x+1;
    setPerson({name:'anu',age:x});
  }
  const clickChange = (id) =>{
    //console.log(id);
    setPerson((ppl)=>{
        return(
          ppl.filter(person => person.id!=id)
        )
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.inContainer}>
        <Text style={styles.txt}>My name is {name}</Text>
      </View>
      <View style={styles.body}>
        <Text>MOM : {person.name}, age : {person.age}</Text>
        
      </View>
      <View style={styles.button}>
        <Button title='click' onPress={clickHandler}/>
        
      </View>
      <View>
          <Text style={styles.txt}>Enter Name:</Text>
          <TextInput
          keyboardAppearance='light'
          keyboardType='numeric'
           multiline 
            style={styles.input}
            placeholder='e.g. jeevi'
            onChangeText={(val)=>setName(val)}
          />
        </View>
        <View style={styles.listcont}>
            <FlatList
            numColumns={2}
                keyExtractor={(it)=>it.id}
                data={people}
                renderItem = {({item})=>(
                  <TouchableOpacity onPress={() => clickChange(item.id)}>
                    <Text style={styles.text1}>{item.name}</Text>
                  </TouchableOpacity>
                )}
            />
        </View>
 
        {/* <ScrollView>
        <View style={styles.listcont}>
            {people.map((it)=>{
              return (
                <View key={it.key}>
                <Text style={styles.text1}>{it.name}</Text>
                </View>
              )
            })}
        </View>
        </ScrollView> */}
        <NavigationContainer>
            <BottomNav />
        </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  inContainer:{
    margin:20,
    backgroundColor:'pink',
    padding:20,
  },
  txt:{
    fontWeight:'bold',
    color:'blue',
    padding:8,
  },
  body:{
    backgroundColor:'green',
    padding:20,
    margin:20,
    
  },
  button:{
     margin:20,
  },
  input:{
    borderWidth :1,
    margin:10,
    padding:9,
    width:150
  },
  listcont:{
    
    backgroundColor: '#fff',
  },
  text1:{
    backgroundColor:'lavender',
    padding:30,
    margin:20,
    width:150,
    //height:200,
  }
});
