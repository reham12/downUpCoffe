import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ScrollView: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  body:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container:{
    width: "100%",
    paddingTop:20,
    paddingBottom:20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor:"#CF8E62",
    paddingHorizontal:15
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
