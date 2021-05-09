import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerSocailMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#C9E3E7',
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageFacebook: {
    width: 15,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  imageInstagram: {
    width: 20,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  imageTwitter: {
    width: 20,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
});
