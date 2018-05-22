import React, {Component} from 'react';

import { connect } from 'react-redux';

import {Avatar, Icon,Button} from 'antd';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.toggleFullScreen = this.toggleFullScreen.bind(this);
        this.state  = {
            fullScreen:false
        }
    }
    toggleFullScreen(e){
        if(this.state.fullScreen){
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }

        }else{
            let docElm = document.documentElement;//W3C
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }//FireFox
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }//Chrome等
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }//IE11
            else if (e.msRequestFullscreen) {
                e.msRequestFullscreen();
            }
        }
        this.setState({
            fullScreen:!this.state.fullScreen
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className='userInfo'>
                <Icon type={this.state.fullScreen?'shrink':'arrows-alt'} style={{fontSize: 16, color: '#000', cursor: 'pointer'}}
                      onClick={this.toggleFullScreen}/>
                {this.props.userInfo.login?(<Avatar style={{backgroundColor: 'rgb(245, 183, 151)', margin: '0 10px'}}
                                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>):(<Avatar icon="user" style={{margin: '0 10px'}}/>)}
                {this.props.userInfo.login?(<Button onClick={this.props.signOut} size='small'>退出</Button>):(<Button onClick={this.props.signIn} size='small'>登陆</Button>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        signIn() {
            dispatch({
                type: 'SIGN_IN'
            });
        },
        signOut () {
            dispatch({
                type: 'SIGN_OUT'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)