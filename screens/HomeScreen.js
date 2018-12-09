import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    // var arr = [];
    // for(let i = 0 ; i < 2;i++){
    //    fetch('https://pokeapi.co/api/v2/pokemon/'+i+'/') 
    //   .then((response) => arr.push(response))
    //   }

    // this.setState({
    //           isLoading: false,
    //           dataSource: arr,
    //         });
    // };
    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}</Text>
        }
       />
       </View>
    );
  }
}
