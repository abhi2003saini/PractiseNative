import { View, Text, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const TestApi = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      console.log('GET:', json);
      setData(json);
    } catch (error) {
      console.error('GET Error:', error);
    }
  };
  const postData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Product',
          price: 99.99,
          description: 'Created via POST method',
          category: 'electronics',
        }),
      });
      const json = await response.json();
      console.log('POST:', json);
    } catch (error) {
      console.error('POST Error:', error);
    }
  };

  const putData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Updated Product Title (PUT)',
          price: 199.99,
          description: 'Replaced product with PUT',
          category: 'men clothing',
        }),
      });
      const json = await response.json();
      console.log('PUT:', json);
    } catch (error) {
      console.error('PUT Error:', error);
    }
  };

  const patchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: 149.99, 
        }),
      });
      const json = await response.json();
      console.log('PATCH:', json);
    } catch (error) {
      console.error('PATCH Error:', error);
    }
  };

  const deleteData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1', {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json();
      console.log('DELETE:', json);
    } catch (error) {
      console.error('DELETE Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Button title="GET - Fetch Products" onPress={fetchData} />
      <View style={{ marginTop: 10 }}>
        <Button title="POST - Add Product" onPress={postData} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="PUT - Replace Product" onPress={putData} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="PATCH - Update Product Price" onPress={patchData} />
      </View>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <Button title="DELETE - Remove Product" onPress={deleteData} />
      </View>

      {data.map((item) => (
        <View key={item.id} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <Text>Price: ${item.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TestApi;


// const postdata  = async () =>{
//   const response = await fetch('...'{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//       name:'abhishek',
//       profile:'react-native'
//     })
//   })
//   const json = await response.json();
//   console.log('POST',json)
// }
