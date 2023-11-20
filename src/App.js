import {Component} from 'react'

import ContextLanguage from './context/ContextLanguage'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <ContextLanguage.Provider
        value={{
          activeLanguage,
          changeLanguage: this.changeLanguage,
        }}
      >
        <Header />
        <LandingSection activeLanguage={activeLanguage} />
        <FeaturesSection activeLanguage={activeLanguage} />
      </ContextLanguage.Provider>
    )
  }
}

export default App
