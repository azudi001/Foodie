import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import { showToast } from '../../pages/redux/slice/Slice';

 export const useToast =()=> {

  // const dispatch = useDispatch();

  const createToast = ({ msg, status, action })=>{
    // dispatch(
    //   showToast({
    //     action: action,
    //     status: status,
    //     msg: msg,
    //   }),
    // );
  }
   

  return {
    createToast
  }
}

