import React, {Fragment} from 'react';
import { Text, View, TouchableHighlight } from "react-native";
import PropTypes from 'prop-types';
import style from './style';
import { TextInput } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { submitLogin } from '../../Store/Actions/login';

//import { TouchableHighlight } from 'react-native-gesture-handler';
const Home = class extends React.Component {
    static propTypes = {
        loginData:PropTypes.object,
        email:PropTypes.string,
        password:PropTypes.string,
    };
    constructor(props){
        super(props);
        console.log("@@@Home screen",this.props.loginData);
        this.state={
            email: '',
            password:''
        }
    } 
    render = () =>{
        return (
            <Fragment>
                <View style={style.homeContainer}>
                    <Text style={style.homeText}>Home</Text>
                </View>
                <View style={style.mainContents}>
                    <TextInput 
                        onChangeText={(val)=>{
                            console.log("change email:",val);
                            this.setState({
                                email:val
                            })
                        }}
                        style={{backgroundColor:"white",fontSize:22,padding:10}} 
                        placeholder={"Email"}
                    />
                    <TextInput 
                        onChangeText={(val)=>{
                            console.log("change password:",val);
                            this.setState({
                                password:val
                            })
                        }}
                        style={{backgroundColor:"white",fontSize:22,padding:10}} 
                        placeholder={"password"}
                    />
                    <TouchableHighlight style={style.btnStyle} onPress={()=>{
                        this.props.dispatch(submitLogin(this.state.email,this.state.password));
                        this.props.navigation.navigate('Login');
                    }}>
                        <Text style={style.btnTxt}>Login</Text>
                    </TouchableHighlight>
                </View>
            </Fragment>
        );
    }
    
};
const mapStateToProps = (state)=>{
    console.log("@mapStateToProps",state);
    loginData = state.login;

    const newProps={
        loginData
    }
    return newProps;
}
export default connect(mapStateToProps)(Home);
