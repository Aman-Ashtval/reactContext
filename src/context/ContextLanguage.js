import React from 'react'

const ContextLanguage = React.createContext({
  activeLanguage: 'HI',
  changeLanguage: () => {},
})

export default ContextLanguage
