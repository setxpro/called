import { useReducer } from 'react';


const reducer = (state:any, action:any) => {
  switch (action.type) {
      case 'theme':
        return {...state, theme: true, password: false, users: false, avatar: false}
      case 'users':
        return {...state, theme: false, password: false, users: true, avatar: false}
      case 'password':
        return {...state, theme: false, password: true, users: false, avatar: false}
      case 'avatar':
        return {...state, theme: false, password: false, users: false, avatar: true}
  }
}

const useRootPageSettings = () => {

  const [state, dispatch] = useReducer(reducer, {
      theme: true,
      users: false,
      password: false,
      avatar: false,
  })

  return { state, dispatch };
}

export default useRootPageSettings;