import {View, Text, Button} from "react-native"
import States from "./States";
import style from "../../style/style";

function coloredword(){
  <Text style={{fontSize:40}} color={'red'}>How are you!!</Text>
}

function hi(val){
  console.warn(val);
}



const cname  = "AAAA";
let emp  = 21;
var prod  = "xux";
const CompanyData = (props)=>{
    return(
    <View style={[style.textbox]}>    
      <Text style={[style.text,{color:"white"}]}>{props.name}</Text>
      <Text style={[style.text,{color:"white"}]}>{props.id}</Text>
    </View>
    
    );
}

export default CompanyData;