import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ViewPerfil: {
    flexDirection: 'row',
    paddingBottom: 10,
    marginLeft: 5,
  },
  imgperfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  txtNome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 10,
  },
  imgPublicacao: {
    height: 400,
    width: '100%',
  },
  sends: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    height: 30,
    width: 30,
    marginRight: 7,
    marginLeft: 5,
  },
  nomeFeed: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewDescription: {
    flexDirection: 'row',
  },
  descricao: {
    marginLeft: 8,
    fontSize: 15,
  },
  curtidas: {
    marginLeft: 8,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default styles;
