import AsyncStorage from '@react-native-async-storage/async-storage';

export default AddtoStorage = async (name, data) => {
  let prevCart,
    storageArray = [];
  try {
    prevCart = await AsyncStorage.getItem(name);
    storageArray = JSON.parse(prevCart);
  } catch (e) {
    console.log(e);
  }

  
  try {
    let getStorage = storageArray ? storageArray : [];
    let storageArrayCheck = (storageArray || []).filter(
      item => item.idMeal == data.idMeal,
    );
    if (storageArrayCheck.length === 0) {
      storageArray = [...getStorage, {...data}];
      await AsyncStorage.setItem(name, JSON.stringify(storageArray));
    }
  } catch (e) {
    console.log(e);
  }
};
