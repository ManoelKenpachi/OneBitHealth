import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import ResultIMC from "../ResultIMC";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha peso e altura para calcular o IMC");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");

  function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2));
  }

  function validationIMC() {
    console.log(weight, height);
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é: ");
      setTextButton("Calcular Novamente");
      return
    }
    setImc(null);
    setTextButton("Calcular IMC");
    setMessageImc("Preencha peso e altura para calcular o IMC");
    return
  }
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput 
          placeholder="Ex. 1.75" 
          keyboardType="numeric" 
          onChange={setHeight}
          value={height}
        />

        <Text>Peso</Text>
        <TextInput 
          placeholder="Ex. 85.35" 
          keyboardType="numeric"
          onChange={setWeight}
          value={weight}
        />

        <Button 
          title={textButton}
          onPress={() => validationIMC()}
        />

      </View>

      <ResultIMC messageResultIMC={messageImc} resultIMC={imc}/>
    </View>
  );
}