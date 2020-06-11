import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Icon,Input } from 'react-native-elements';

export default class QuestionScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image
                source = {
                    require("../assets/question.png")
                }
                style = {{
                    width : 180,
                    height : 150,
                    alignSelf : 'center',
                }}
                />
                <Text>Ask a question(or more)!</Text>
                <TextInput
                placeholder = {'ask away...'}
                placeholderTextColor = {'black'}
                leftIcon={
                    <Icon
                      name = 'question'
                      size={24}
                      color='white'
                    />
                  }
                multiline
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 24,
        backgroundColor : '#C85250'
    }
})

