import { View,Text } from "react-native-web";
import React from "react";




const Custompropex1 = () =>{
  return (
    <View>
      <ChildProps name ="Robin" status="Sofwtware Developer" ></ChildProps>
    </View>
  )
}

export default Custompropex1;

const ChildProps = (props) =>{
  return <View>
    <Text style ={{fontSize: 20}} >{props.name}</Text>
    <Text style ={{fontSize: 20}} >{props.status}</Text>
  </View>;
}