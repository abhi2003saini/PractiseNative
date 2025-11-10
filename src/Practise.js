// import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const Practise = () => {
//     const [sec,setSec] = useState(0)
//     const [data ,setData] = useState()
//     const [refresh,setRefresh] = useState()

//  useEffect(() =>{
//     const sub = sec.addEventListner('change',state =>{
//         console.log('anadkadna',sub)
//     })
//     return() => sub.remove()
//  },[]) 
//  const images = [{
//     id:1,
//     imagePath:require('....')
//  }]

//  const renderItem = () =>{
//     <View>
//         <Image source={images} alt='addmnk'/>
//     </View>
//  }
//  const handleRefresh = () =>{
//    setRefresh={true}
//    setTimeout(()=>{
//     setData(...data,newData)
//     setRefresh={false}
//    },2000)
//  }

//  export const ThemeContext = useContext();
//   return (
//     <View>
//       <Text>Practise</Text>
//       <TextInput value={count} onChangeText={handleCount}/>
//       <Text>{sec}</Text>
//       <TouchableOpacity>
//         <Text>Read More</Text>
//       </TouchableOpacity>
//       <FlatList
//       data={data}
//       renderItem={renderItem}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       pagingEnabled
//       scrollEnabled
//       contentContainerStyle={{paddingTop:10}}
//       keyExtractor={(item,index) => index==item}
//       onRefresh={handleRefresh}
//       />
//     </View>
//   )
// }

// export default Practise


import { View, Text } from 'react-native'
import React, { createContext } from 'react'

const Practise = () => {
    const [dark,setDark] = useState();
    const ThemeContext = createContext();

  return (

   <ThemeContext.Provider value={dark}>
    
   </ThemeContext.Provider>
  )
}

export default Practise