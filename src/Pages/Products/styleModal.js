import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalBody: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#CF8E62',
    paddingHorizontal: 15,
  },
  cupCoffeContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  cupCoffeActions: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  cupCoffeTitle: {
    color: 'white',
    fontSize: 22,
  },
  cupCoffeActionsPlus: {
    width: 31,
    height: 31,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cupCoffeActionsText: {
    color: 'white',
    fontSize: 22,
    paddingHorizontal: 10,
  },
  plusImage: {
    width: 20,
    resizeMode: 'contain',
  },
  orderActionsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  orderActions: {
    backgroundColor: 'white',
    flexBasis: '45%',
    height: 43,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  orderActionsText: {
    color: '#CF8E62',
    fontSize: 22,
  },
  orderActionsActiveText:{
   color:"#6EB04F"
  },
  inputContainer: {
    height: 52,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 20,
  },
  inputTextContiner: {
    position: 'absolute',
    top: -12,
    left: 15,
    backgroundColor: '#CF8E62',
    zIndex: 99,
    paddingHorizontal: 5,
  },
  inputText: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    fontSize: 15,
    color: 'white',
    paddingHorizontal: 15,
  },
  containerPhoneInput: {
    backgroundColor: 'transparent',
  },
  phoneInputStyle: {
    color: 'white',
  },
  dialCode: {
    color: 'white',
  },
  flag: {
    width: 30,
    height: 40,
    marginRight: 5,
    transform: [{rotateY: '0deg'}, {scaleX: 0.8}, {scaleY: 0.8}],
  },
  confirmButtonContainer:{
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:10
  }
});
