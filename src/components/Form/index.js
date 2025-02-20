import React, {useState} from "react";
import {View, Text, TextInput, Button, TouchableOpacity} from "react-native";
import styles from "./style";
import ResultIMC from "./ResultIMC";

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
    <View style={styles.formContext}>
      <View style={styles.form}>

        <Text style={styles.formLabel} >Altura</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex. 1.75" 
          keyboardType="numeric" 
          onChangeText={(text) => setHeight(text.replace(",", "."))} // Aceita ponto como separador decimal
          value={height}
        />

        <Text style={styles.formLabel} >Peso</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex. 85.35" 
          keyboardType="numeric"
          onChangeText={(text) => setWeight(text.replace(",", "."))} // Substitui vírgula por ponto
          value={weight}
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            validationIMC();
          }}
        > 
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>

      </View>

      <ResultIMC messageResultIMC={messageImc} resultIMC={imc}/>
    </View>
  );
}
