import {Alert} from "react-native";

export function alertPopUp({ title, message, onConfirm}) {
    console.log('Confirm Delete called.');

    Alert.alert(title, message, [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {text: 'OK', onPress: () => onConfirm()},
    ]);
}

