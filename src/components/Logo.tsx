import { Image, StyleSheet } from 'react-native';

const logoImage = require('../assets/logo.png');

export default function Logo() {
  return (
    <Image
      source={logoImage}
      style={styles.logo}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
    width: 100,
    height: 100,
  },
});
