import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {

  constructor() {
    super();
    this.state = {front:'depan',data:'Chess World',display:'',textColor: 'white',isClick:false,index:0,assets:['chess-world.jpg','7019373941_2ee61f567d_o.jpg','']};
    this.spaceSkymap = [
      '../static_assets/debug_right.png',
      '../static_assets/debug_left.png',
      '../static_assets/debug_top.png',
      '../static_assets/debug_bottom.png',
      '../static_assets/debug_back.png',
      '../static_assets/debug_front.png' ];

  }

  changeBackGround(state){
    let { index, assets } = state
    let length_array=assets.length-1

    if (index===0) {
      this.setState({data:'Equirectangular'})
    }else if (index===1) {
      this.setState({data:'Cube/Skyboxes'})
    }else{
      this.setState({data:'Chess World'})
    }

    if(length_array===index)
      this.setState({index:0,display:''})
    else{
      this.setState({index:this.state.index+1,display:'none'})

    }
  }

  render() {

    let { index, assets,data } = this.state


    return (
      <View>

      {(index!==2) ? (<Pano source={asset(assets[index])}/>) : (<Pano source={ {uri: this.spaceSkymap} }/>)}

      <VrButton onClick={() => this.changeBackGround(this.state)}>
        <Text
        onEnter={() => this.setState({textColor:'black',front:data})}
        onExit={() => this.setState({textColor:'white',front:'depan'})}
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -7]}],
            color: this.state.textColor,
          }}>
          {this.state.front}
        </Text>
        </VrButton>

        <Text
        onEnter={() => this.setState({textColor:'yellow'})}
        onExit={() => this.setState({textColor:'white'})}
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, 7]},{rotateY:180},{rotateX:0}],
            color: this.state.textColor,
            display:this.state.display
          }}>
          Belakang
        </Text>
        <Text
        onEnter={() => this.setState({textColor:'blue'})}
        onExit={() => this.setState({textColor:'white'})}
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [-7, 2, 0]},{rotateY:90}],
            color: this.state.textColor,
            display:this.state.display
          }}>
          Kiri
        </Text>
        <Text
        onEnter={() => this.setState({textColor:'green'})}
        onExit={() => this.setState({textColor:'white'})}
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [7, 3, 0]},{rotateY:-90}],
            color: this.state.textColor,
            display:this.state.display
          }}>
          Kanan
        </Text>

        <Text
        onEnter={() => this.setState({textColor:'purple'})}
        onExit={() => this.setState({textColor:'white'})}
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 10, 0]},{rotateY:0},{rotateX:90}],
            color: this.state.textColor,
            display:this.state.display
          }}>
          Atas
        </Text>

        <Text
        onEnter={() => this.setState({textColor:'red'})}
        onExit={() => this.setState({textColor:'white'})}
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, -1, 0]},{rotateY:0},{rotateX:-90}],
            color: this.state.textColor,
            display:this.state.display
          }}>
          Bawah
        </Text>

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
