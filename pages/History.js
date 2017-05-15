import React, { Component } from 'react';
import { ScrollView,Text,Button, View, SegmentedControlIOS, Image } from 'react-native';
import { List, ListItem,Card, Icon } from 'react-native-elements';

import medicine from '../json/historymedicine.json';


// Make a component
class History extends Component {
  state = { 
    medicine: [],
    calMode: true
   };

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     calMode: new delete_cel_icon()
  //   };
  // }

  // CallGetValue(){
  //       this.state.delete_cel_icon.getValue();
  // }

  // setCalMode = (cal) => {
  //   this.setState({
  //     calMode: cal
  //   })
  // }


  componentWillMount() {
    this.setState({ medicine });
  }

  renderView(mode) {
    const { container, direction, text, seg, icon, calendar } = styles;

    if (mode) {
      return (
        <Image source={require('../assets/historyTable2.jpg')} style={calendar} />
      );
    }

    return (
      <View style={{flex:1}}>
          <View style={[container, direction]}>
              <View style={[direction, icon]}>
                <Text style={text}>全部</Text>
                <Icon name='arrow-drop-down' color='#517fa4' />
              </View>
          </View>
      <ScrollView>          
        <Card title='4/17(一)'titleStyle={{padding:10,marginBottom:0,borderRadius:10,height:44,color:'#517fa4',fontSize:20}} containerStyle={{borderRadius:10,backgroundColor:"#b9d0e3",paddingTop:5 }}>
        <Card title='8:30' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,borderWidth:0,borderRadius:10}}>
          <ListItem
            title={this.state.medicine.name417.time830.m1}
            titleStyle={{fontSize:18 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
           <ListItem
            title={this.state.medicine.name417.time830.m2}
            titleStyle={{fontSize:18 }}
            hideChevron
            leftIcon={{name: 'close',size:25,color:"#d95858"}}
          />
          </Card>
          <Card title='13:00' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,marginTop: 5,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name417.time2030.m1}
            titleStyle={{fontSize:18 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
         
          </Card>
        </Card>

        <Card title='4/16(日)' titleStyle={{padding:10,marginBottom:0,borderRadius:10,height:44,color:'#517fa4',fontSize:20}} containerStyle={{borderRadius:10 ,backgroundColor:"#b9d0e3",paddingTop:5}}>
         <Card title='8:30' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name416.time830.m1}
            titleStyle={{fontSize:18}}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
          <ListItem
            title={this.state.medicine.name416.time830.m2}
            titleStyle={{fontSize:18 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
         
          </Card>
          <Card title='12:50' titleStyle={{fontSize:18 }} containerStyle={{margin: 0,marginTop: 5,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name416.time1230.m1}
            titleStyle={{fontSize:18 }}
            hideChevron
            leftIcon={{name: 'close',size:25,color:"#d95858"}}
          />
          </Card>
          <Card title='20:00'titleStyle={{fontSize:18 }} containerStyle={{margin: 0,marginTop: 5,borderWidth:0,borderRadius:10}} >
          <ListItem
            title={this.state.medicine.name416.time2000.m1}
            titleStyle={{fontSize:18 }}
            hideChevron
            leftIcon={{name: 'check',size:25,color:"#6eb372"}}
          />
          </Card>
        </Card>

      </ScrollView>
    </View>
    );
  }

render() {
  return (
      this.renderView(this.state.calMode)
  );
};
}


const styles = {
    direction:{
      flexDirection:'row'
    },
    container:{
      backgroundColor:'rgba(0,0,0,0)',
      paddingTop:5,
      paddingBottom:5,
    },
    text:{
      fontSize:15,
      paddingLeft:10,
      color:'#517fa4'
    },
    icon:{
      flex:1,
      alignItems:'center'
    },
    calendar:{
      // height:300,
      flex:1,
      width:null
    }
};

export default History;
