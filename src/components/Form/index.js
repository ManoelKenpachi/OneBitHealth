import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageImc, setMessageImc] = useState("Preencha peso e altura para calcular o IMC");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");

  function imcCalculator() {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h === 0) {
      setMessageImc("Preencha peso e altura corretamente");
      return;
    }

    setImc((w / (h * h)).toFixed(2));
  }

  function validationIMC() {
    if (weight && height) {
      console.log("weight:", weight);
      console.log("height:", height);
      imcCalculator();
      setMessageImc("Seu IMC é: ");
      setTextButton("Calcular Novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular IMC");
    setMessageImc("Preencha peso e altura para calcular o IMC");
  }

  return (
    <View style={styles.Form}>
      <View>
        <Text>Altura</Text>
        <TextInput 
          placeholder="Ex. 1.75" 
          keyboardType="numeric" 
          onChangeText={(text) => setHeight(text.replace(",", "."))} // Aceita ponto como separador decimal
          value={height}
        />

        <Text>Peso</Text>
        <TextInput 
          placeholder="Ex. 85.35" 
          keyboardType="numeric"
          onChangeText={(text) => setWeight(text.replace(",", "."))} // Substitui vírgula por ponto
          value={weight}
        />

        <Button 
          title={textButton}
          onPress={validationIMC}
        />
      </View>

      <ResultIMC messageResultIMC={messageImc} resultIMC={imc}/>
    </View>
  );
}
