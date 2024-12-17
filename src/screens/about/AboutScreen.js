import React from "react";
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";
import Header from "../../components/header/header";

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <Header testID="header-about" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sectionContainer} testID="mission-section">
          <Text style={styles.sectionTitle} testID="mission-title">Nossa Missão</Text>
          <Text style={styles.sectionText} testID="mission-text">
            O EcoSrev é uma plataforma inovadora dedicada à reciclagem responsável 
            de resíduos eletrônicos, transformando consciência ambiental em ação 
            concreta e recompensas tangíveis.
          </Text>
        </View>

        <View style={styles.sectionContainer} testID="origin-section">
          <Text style={styles.sectionTitle} testID="origin-title">Origem do Projeto</Text>
          <Text style={styles.sectionText} testID="origin-text">
            Desenvolvido como projeto integrador pelos estudantes da{' '}
            <Text 
              style={{ fontWeight: 'bold' }} 
              onPress={() => Linking.openURL('https://fatecvotorantim.cps.sp.gov.br/')}
              testID="fatec-link"
            >
              Fatec Votorantim
            </Text>
            , o EcoSrev nasceu do desejo de criar uma solução tecnológica para os 
            desafios ambientais relacionados ao descarte de eletrônicos.
          </Text>
        </View>

        <View style={styles.sectionContainer} testID="how-it-works-section">
          <Text style={styles.sectionTitle} testID="how-it-works-title">Como Funciona</Text>
          <View style={styles.stepContainer} testID="step-1">
            <Text style={styles.stepTitle}>1. Descarte Consciente</Text>
            <Text style={styles.stepText}>
              Entregue seus resíduos eletrônicos nos pontos de coleta.
            </Text>
          </View>
          <View style={styles.stepContainer} testID="step-2">
            <Text style={styles.stepTitle}>2. Ganhe Pontos</Text>
            <Text style={styles.stepText}>
              Cada item descartado gera pontos que podem ser trocados por recompensas.
            </Text>
          </View>
          <View style={styles.stepContainer} testID="step-3">
            <Text style={styles.stepTitle}>3. Impacto Ambiental</Text>
            <Text style={styles.stepText}>
              Contribua para a redução de resíduos eletrônicos e preservação do meio ambiente.
            </Text>
          </View>
        </View>

        <Text style={styles.footerText} testID="footer-text">
          © 2024 EcoSrev - Reciclagem Inteligente
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20, 
    paddingBottom: 40,
  },
  sectionContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: 10,
  },
  sectionText: {
    color: "#7f8c8d",
    lineHeight: 22,
  },
  stepContainer: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#2ecc71",
  },
  stepTitle: {
    fontWeight: "bold",
    color: "#2c3e50",
    fontSize: 16,
  },
  stepText: {
    color: "#7f8c8d",
  },
  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#7f8c8d",
    fontSize: 12,
  },
});

export default AboutScreen;