import React from "react";
import { ZegoMemberList } from '@zegocloud/zego-uikit-rn';
import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from "react-native"

export default function ZegoCallMemberList(props) {
    const {
        showMicroPhoneState,
        showCameraState,
        itemBuilder,
        onCloseCallMemberList
    } = props;
    
    return (<View style={styles.container}>
        <View style={styles.header}>
            <TouchableWithoutFeedback
                onPress={onCloseCallMemberList}>
                <Image
                    style={styles.downArrowIcon}
                    source={require('./resources/white_button_back.png')}
                />
            </TouchableWithoutFeedback>
            <Text style={styles.title}>Member</Text>
        </View>
        <View style={styles.divide}></View>
        <View style={styles.memberListCon}>
            <ZegoMemberList 
                showMicroPhoneState={showMicroPhoneState}
                showCameraState={showCameraState}
                itemBuilder={itemBuilder}
            />
        </View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'rgba(34,34,34,0.8)',
        width: '100%',
        maxHeight: '80%',
        // height: '80%',
        zIndex: 4,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        paddingBottom: 35,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
    },
    downArrowIcon: {
        marginLeft: 16,
        width: 45,
        height: 45,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    divide: {
        width: '100%',
        height: 1,
        backgroundColor: '#FFFFFF',
        opacity: 0.15,
    },
    memberListCon: {
        flex: 1,
    },
});
