import {
  Button,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const IndividualBird = () => {
  return (
  <ScrollView style={styles.scroll}>
    <View style={styles.container}>
        
      <Text style={styles.h1}>Bird Name</Text>

      <TouchableOpacity style={styles.card}>
        <View style={styles.card}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.image} />
          <Text style={styles.h2}>Fact Info</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.card}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.image} />
          <Text style={styles.h2}>Fact Info</Text>
          
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.card}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.image} />
          <Text style={styles.h2}>Fact Info</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.card}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.image} />
          <Text style={styles.h2}>Fact Info</Text>
        </View>
      </TouchableOpacity>

      
     
    </View> 
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: 'center',
    //   backgroundColor: '#999',
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  h1: {
    color: "gray",
    fontSize: 40,
    justifyContent: "flex-start",
  },
  h2: {
    color: "#FAE042",
    fontSize: 18,
    marginTop: 8,
  },
  card: {
    width: '90%',
    height: 330,
    backgroundColor: "steelblue",
    margin: 10,
    flex: 1,
    borderColor: "white",
    margin: 10,
    borderRadius: 20,
    
  },
  scroll: {
      width: '100%',
      flex: 1
  },
  image: {
      width: 300,
      height: 200,
      borderRadius: 15,
      alignItems: 'center',
      marginLeft: 5,
  }
});

export default IndividualBird;
