import {
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import React, { useState } from 'react';
import style from "../../style/style";


const Form = () => {
    const ap = 10;
    let hh = "hi";
    const [name, setName] = useState("Aman");
    const [pass, setPass] = useState("");
    const [Email, setEmail] = useState("");
    const [display, setDisplay] = useState(false);
    const [showPassword, setshowPassword] = useState(false);
    const adding = (a) => {
        return a + 1;
    };
    const cleardata = () => {
        setDisplay(false);
        setName("");
        setPass("");
        setEmail("");
    };
    const [inputval, setinputval] = useState("");
    const toggleShowPassword = () => {
        setshowPassword(!showPassword);
    };
    return (

        <View>

            <View>
                <Text style={[style.text, { color: "black", marginVertical: 25 }]}>React Native form</Text>
                <TextInput
                    placeholder='  enter name here'
                    style={[style.textinput, style.marginBottom]}
                    value={name}
                    onChangeText={(text) => { setName(text) }}>
                </TextInput>
                <View style={[style.container]}>
                    <TextInput
                        placeholder='  enter password here'
                        style={[style.textinput, style.marginBottom,{width:'80%'}]}
                        value={pass}
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => { setPass(text) }}>
                    </TextInput>
                    <View style={[style.outbtn, style.marginBottom]}>
                        <TouchableOpacity style={style.button} onPress={toggleShowPassword}>
                            {
                             showPassword?
                            <Text style={style.text}>(‾◡‾)</Text>:<Text style={style.text}>(O-O)</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput
                    placeholder='  enter email here'
                    style={[style.textinput, style.marginBottom,{marginTop:60}]}
                    value={Email}
                    onChangeText={(text) => { setEmail(text) }}>
                </TextInput>
                <View style={[style.marginBottom]}>
                    <Button title='Show data' color={"lightgreen"} onPress={() => { setDisplay(true) }}></Button>
                </View>
                <Button title='Clear data' color={'red'} onPress={() => { cleardata() }}></Button>
                <View>
                    {
                        display ?
                            <View >
                                <Text style={[style.text]}>Name:{name}</Text>
                                <Text style={[style.text]}>Password:{pass}</Text>
                                <Text style={[style.text]}>Email:{Email}</Text>
                            </View>
                            : null
                    }

                </View>
            </View>



            {/* <View style={[style.outbtn, { marginTop: 50 }]}>
                <Text style={[style.text, { color: "black" }]}>Count:{val}</Text>
                <TouchableOpacity style={style.button} onPress={() => { setVal(adding(val)); }}>
                    <Text style={style.text}>+</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}
export default Form;

