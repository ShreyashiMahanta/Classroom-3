import React,{Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import { AppDrawerNavigator } from './AppDrawerNavigator';

export default class MyHeader extends Component{
    constructor(props){
        super(props);
    }
    BellIconWithBadge = ()=>{
        return(
            <View>
                <Icon
                name = "bell"
                type = "font-awesome"
                color = '#ffffff'
                size = {30}
                />
            </View>
        )
    }
    render(){
        return(
            <Header
             leftComponent={<Icon name='bars' type='font-awesome' color='#FEFCFF'  
            // onPress={() => navigation.toggleDrawer()} 
           
            />}
              centerComponent={{ text: this.props.title, style: { color: '#FEFCFF', fontSize:30,fontWeight:"bold", padding : 5,width : 100} }}
              rightComponent={<this.BellIconWithBadge {...this.props}/>}
              backgroundColor = "#FCB5AC"
              
            />
    
    )
    }
}
