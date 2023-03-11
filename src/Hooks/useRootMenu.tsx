import React, { useReducer } from 'react';


const reducer = (state:any, action:any) => {
  switch (action.type) {
      case 'home':
        return {...state, home: true, reports: false, users: false, chat: false, chamados: false, support: false, sla: false}
      case 'users':
        return {...state, home: false, reports: false, users: true, chat: false, chamados: false, support: false, sla: false}
      case 'chat':
        return {...state, home: false, reports: false, users: false, chat: true, chamados: false, support: false, sla: false}
      case 'chamados':
        return {...state, home: false, reports: false, users: false, chat: false, chamados: true, support: false, sla: false}
      case 'reports':
        return {...state, home: false, reports: true, users: false, chat: false, chamados: false, support: true, sla: false}
      case 'sla':
        return {...state, home: false, reports: false, users: false, chat: false, chamados: false, support: false, sla: true}
      case 'support':
        return {...state, home: false, reports: false, users: false, chat: false, chamados: false, support: true, sla: false}
  }
}

const useRootMenu = () => {

  const [state, dispatch] = useReducer(reducer, {
      home: true,
      users: false,
      chat: false,
      chamados: false,
      support: false,
      sla: false,
      reports: false
  })

  return { state, dispatch };
}

export default useRootMenu;