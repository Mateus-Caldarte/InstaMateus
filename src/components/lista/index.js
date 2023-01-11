import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

class Lista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: this.props.data,
    };

    this.MostraLikes = this.MostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.Likeada = this.Likeada.bind(this);
  }

  MostraLikes(likers) {
    let feed = this.state.feed;

    if (likers <= 0) {
      return;
    }
    return (
      <Text style={styles.curtidas}>
        {feed.likers}
        {feed.likers > 1 ? ' curtidas' : ' curtida'}
      </Text>
    );
  }

  like() {
    let feed = this.state.feed;

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1,
        },
      });
    }
  }

  Likeada(likeada) {
    return likeada === true
      ? require('../image/likeada.png')
      : require('../image/like.png');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ViewPerfil}>
          <Image
            style={styles.imgperfil}
            source={{uri: this.state.feed.imgperfil}}
          />
          <Text style={styles.txtNome}>{this.state.feed.nome}</Text>
        </View>

        <Image
          source={{uri: this.state.feed.imgPublicacao}}
          style={styles.imgPublicacao}
        />

        <View style={styles.sends}>
          <TouchableOpacity onPress={this.like}>
            <Image
              style={styles.button}
              source={this.Likeada(this.state.feed.likeada)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.button}
              source={require('../image/send.png')}
            />
          </TouchableOpacity>
        </View>

        {this.MostraLikes(this.state.feed.likers)}

        <View style={styles.viewDescription}>
          <Text style={styles.nomeFeed}>{this.state.feed.nome}</Text>
          <Text style={styles.descricao}>{this.state.feed.descricao}</Text>
        </View>
      </View>
    );
  }
}

export default Lista;
