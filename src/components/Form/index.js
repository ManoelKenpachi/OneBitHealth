import React from "react";
import {View, Text, TextInput} from "react-native";
import { Button } from "react-native-web";

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.75" keyboardType="numeric"/>

        <Text>Peso</Text>
        <TextInput placeholder="Ex. 85.35" keyboardType="numeric"/>

        <Button title="Calcular IMC"/>
      </View>
    </View>
  );
}