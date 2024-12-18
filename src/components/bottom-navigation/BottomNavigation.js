import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { House, ArrowRightLeft, History } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const navigation = useNavigation();

  const handleTabPress = (routeName) => {
    setActiveTab(routeName);
    navigation.navigate(routeName);
  };

  const renderTab = (routeName, Icon, label) => {
    const isActive = activeTab === routeName;

    return (
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => handleTabPress(routeName)}
      >
        <Icon 
          color={isActive ? '#007bff' : '#666'} 
          size={24} 
        />
        <Text style={[
          styles.tabLabel, 
          { color: isActive ? '#007bff' : '#666' }
        ]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderTab('Home', House, 'Início')}
      {renderTab('Beneficios', ArrowRightLeft, 'Troca')}
      {renderTab('Histórico', History, 'Histórico')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default BottomNavigation;