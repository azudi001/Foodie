import AsyncStorage from '@react-native-async-storage/async-storage';

export default RemovetoStorage = async (name, data) => {
  let prevCart, storageArray = [];
  try {
    prevCart = await AsyncStorage.getItem(name);
    storageArray = JSON.parse(prevCart);
  } catch (e) {
    console.log(e);
  }

  
  try {
    storageArray = storageArray.filter((item)=> item.idMeal != data.idMeal);
    console.log(storageArray.length)
    await AsyncStorage.setItem(name, JSON.stringify(storageArray));
  } catch (e) {
    console.log(e);
  }
};
