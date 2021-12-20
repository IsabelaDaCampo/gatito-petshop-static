import React from 'react';
import { StatusBar, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

import estilosGlobal, { cores } from '../../estilos';
import estilosiOS from './estilos';

export default function TelaPadrao({ children }) {
  return <><SafeAreaView style={estilosiOS.ajusteTela}>
    <StatusBar backgroundColor={cores.roxo}/>
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={estilosGlobal.preencher}
    >
    {children}
  </KeyboardAvoidingView>
  </SafeAreaView>
  <SafeAreaView style={estilosiOS.ajusteTelaBaixo}></SafeAreaView>
  </>
}