import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from "../constants/colors";
import IconButton from "../components/iconButton";

import {useSelector, useDispatch} from 'react-redux';
import { addSomeData} from "../store/data";

function UserScreen({ navigation }) {
  const someData = useSelector((state) => state.appdata.someData);
  const dispatch = useDispatch();

  function gotoHomeHandler() {
    const id = someData.length + 1;
    const now = new Date();
    // Storing a multi-value object in state
    dispatch(addSomeData({id: id, dateAdded: now.toLocaleString()}));
    navigation.navigate('Welcome')
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <IconButton icon='home' size={100} color={Colors.tabsMain} onPress={gotoHomeHandler}/>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.textHighlight,
  },
});
