import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal, Image, SafeAreaView } from 'react-native';
import { User, Star, QrCodeIcon } from 'lucide-react-native';
import Header from "../../components/header/header";
import { useNavigation } from '@react-navigation/native';
import images from "../../assets";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "Usuário",
    email: "usuario@email.com",
    points: 1250,
  });

  const [qrCodeModalVisible, setQrCodeModalVisible] = useState(false);

  const handleEditProfile = () => {
    navigation.navigate('EditProfileScreen');
  };

  const toggleQRCodeModal = () => {
    setQrCodeModalVisible(!qrCodeModalVisible);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header testID="header-profile" />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.profileCard} testID="profile-card">
            {/* Perfil do Usuário */}
            <View style={styles.profileHeader} testID="profile-header">
              <View style={styles.avatarContainer}>
                <User size={48} color="#22C55E" />
              </View>
              <View>
                <Text style={styles.profileName} testID="profile-name">{user.name}</Text>
                <Text style={styles.profileEmail} testID="profile-email">{user.email}</Text>
              </View>
            </View>

            {/* Estatísticas Principais */}
            <View style={styles.statsContainer} testID="stats-container">
              <View style={styles.statCard}>
                <Star size={32} color="#F59E0B" />
                <Text style={styles.statValue}>{user.points}</Text>
                <Text style={styles.statLabel}>Pontos</Text>
              </View>
            </View>

            {/* Opções de Perfil */}
            <View style={styles.optionsContainer} testID="options-container">
              <TouchableOpacity 
                style={styles.optionButton}
                onPress={toggleQRCodeModal}
                testID="qr-code-button"
              >
                <QrCodeIcon size={24} color="#22C55E" />
                <Text style={styles.optionButtonText}>QR Code</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.optionButton}
                onPress={handleEditProfile}
                testID="edit-profile-button"
              >
                <User size={24} color="#22C55E" />
                <Text style={styles.optionButtonText}>Editar Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal de QR Code */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={qrCodeModalVisible}
        onRequestClose={toggleQRCodeModal}
        testID="qr-code-modal"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent} testID="modal-content">
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={toggleQRCodeModal}
              testID="close-modal-button"
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
            <Image
              source={images.exampleQRCode}
              style={styles.qrCodeImage}
              resizeMode="contain"
              testID="qr-code-image"
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8F9EF',
    padding: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    backgroundColor: '#DFF0DB',
    borderRadius: 50,
    padding: 10,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22C55E',
  },
  profileEmail: {
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#DFF0DB',
    borderRadius: 10,
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22C55E',
    marginTop: 5,
  },
  statLabel: {
    color: '#666',
    marginTop: 5,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFF0DB',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  optionButtonText: {
    color: '#22C55E',
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  qrCodeImage: {
    width: 250,
    height: 250,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    color: '#22C55E',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;