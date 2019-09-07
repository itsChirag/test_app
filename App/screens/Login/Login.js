import React, {Fragment, Component} from "react";
import { View, Text, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';
import style from "./style";
import { connect } from 'react-redux';
const Login = class extends Component{
    static propTypes = {
        loginData:PropTypes.object,
        email:PropTypes.string,
        password:PropTypes.string,
    };
    constructor(props){
        super(props);
        console.log("@@@Login screen",this.props.loginData);
        this.state={
            email:this.props.loginData.email,
            password:this.props.loginData.password
        }
    } 
    render = () =>{
        
        return(
            <Fragment>
                <View style={style.loginContainer}>
                    <Text style={style.loginText}>After Login</Text>
                </View>
                <View style={style.mainContents}>
                    <TouchableHighlight style={style.btnStyle} onPress={()=>{
                        console.log("Login:",this.props);
                        this.props.navigation.navigate('Home');
                    }}>
                        <Text style={style.btnTxt} >Go back</Text>

                    </TouchableHighlight>
                    <View>
                        <View><Text>Email:</Text></View>
                        <View><Text>{this.state.email}</Text></View>
                    </View>
                    <View>
                        <View><Text>password:</Text></View>
                        <View><Text>{this.state.password}</Text></View>
                    </View>
                    
                </View>
            </Fragment>
        )
        
    }
}
/* 
    This is main functionality to communicate with global state
    get object which is needed with connect function

*/
const mapStateToProps = (state)=>{
    console.log("@mapStateToProps",state);
    loginData = state.login;

    const newProps={
        loginData
    }
    return newProps;
}
export default connect(mapStateToProps)(Login);
