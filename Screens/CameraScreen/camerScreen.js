import { Camera } from "expo-camera";
import { useRef, useState, useEffect } from "react";
import { Button, ImageBackground, Text, TouchableOpacity, View, StyleSheet, Image, Pressable} from "react-native";
import * as Sharing from 'expo-sharing'; 
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { test } from "../../api";
import CustomButton from "../../Components/customButton/customButton";

const CameraScreen = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null)
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [locationPermission, setLocationPermission] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [lastPhotoURI, setLastPhotoURI] = useState(null);
    const cameraRef = useRef(null);
    const [data, setData] = useState([])
  
    useEffect(() => {
        (async () => {
          const cameraStatus = await Camera.requestCameraPermissionsAsync()
          setHasCameraPermission(cameraStatus.status === 'granted')
  
          const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
          setHasGalleryPermission(galleryStatus.status === 'granted')
  
          const locationStatus = await Location.requestForegroundPermissionsAsync();
          setLocationPermission(locationStatus.status === 'granted')
        })();
    }, [])
    
  
    if (hasCameraPermission=== false) {
      return <Text>No access to Camera</Text>;
    } 
    if (hasGalleryPermission=== false) {
      return <Text>No access to Gallery</Text>;
    } 
  
    let chooseImage = async () => {
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      
      if (pickerResult.cancelled === true) {
        return;
      }
  
      setSelectedImage({ localUri: pickerResult.uri })
   }
  
   let shareImage = async () => {
    if (Platform.OS === 'web') {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
  
    await Sharing.shareAsync(selectedImage.localUri);
   
  }; 

  const uploadImage = () => {
    console.warn('Upload to server')

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.buttonText}>Loading screen</Text>
      </View>
    )
  }
  
   if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
                <TouchableOpacity onPress={shareImage} style={styles.deleteButton}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setSelectedImage(null);}} style={styles.deleteButton}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          
      </View>
    );
  }

  if (lastPhotoURI !== null) {
    return (
      <ImageBackground
        source={{ uri: lastPhotoURI }}
        style={styles.imageBackground}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {setLastPhotoURI(null);}}>
          <Text style={{ fontSize: 15, padding: 10, color: "white" }}>Retake</Text>
        </TouchableOpacity>

        <Pressable style={styles.deleteButton} text={"Sign In"} onPress={uploadImage} >
        <Text style={{ fontSize: 15, padding: 10, color: "white" }}>Submit</Text>
        </Pressable>
          {/* <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {uploadImage}}>

          <Text style={{ fontSize: 15, padding: 10, color: "white" }}>Submit</Text>
        </TouchableOpacity> */}
      </ImageBackground>
    );
  }

  return (
    <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
      <View
        style={styles.camera}>

        <TouchableOpacity
          style={styles.galleryImage}
          onPress={chooseImage}
        >
          <Text style={{ fontSize: 15, padding: 10, color: "white" }}>Gal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageCapture}
          onPress={async () => {
            if (cameraRef.current) {
              let photo = await cameraRef.current.takePictureAsync();
              setLastPhotoURI(photo.uri);}
              }}>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>📸</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    thumbnail: {
      width: 400,
      height: 500,
      resizeMode: "cover"
    },
    imageBackground: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
      justifyContent: "center",
      
    },
    deleteButton: {
      flex: 0.2,
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#666",
      marginBottom: 40,
      marginLeft: 20,
    },
    camera: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
      justifyContent: "center",
    },
    galleryImage: {
      flex: 0.2,
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#666",
      marginBottom: 40,
      marginLeft: 20,
    },
    imageCapture:  {
      flex: 0.2,
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#666",
      marginBottom: 40,
      marginLeft: 20,
    },
    buttonText: {
      fontSize: 22,
      color: '#fff',
    }
  })

  export default CameraScreen;