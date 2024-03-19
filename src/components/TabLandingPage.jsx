import { useState } from "react";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";

const Styles = {
  container:{
    display: 'flex',
    alignItems: 'flex-end'
  },
  default: {
    backgroundColor: '#80DCF9',
    color: '#4AB6C5',
    width: '50%',
    padding: '7px 0',
    fontSize: '28px',
    borderRadius: '14px 14px 0 0',
    border: 'none',
    cursor: 'pointer',
    fontWeight:'bold'
  },
  active: {
    backgroundColor: '#4AB6C5',
    color: '#fff',
    padding: '15px 0',
  }
};

function TabLandingPage() {
  const [tabNames, setTabNames] = useState([
    { key: 1, name: "Masuk", isActive: true },
    { key: 2, name: "Daftar", isActive: false }
  ]);

  const handleTabClick = (key) => {
    const updatedTabs = tabNames.map(tab => ({
      ...tab,
      isActive: tab.key === key ? true : false
    }));
    setTabNames(updatedTabs);
  };

  const getTabStyle = (isActive) => {
    return isActive ? { ...Styles.default, ...Styles.active } : Styles.default;
  };

  return (
    <div >
    <div style={Styles.container}>
      {tabNames.map(tab => (
        <button
          key={tab.key}
          onClick={() => handleTabClick(tab.key)}
          style={getTabStyle(tab.isActive)}
        >
          {tab.name}
        </button>
      ))}
      </div>
      {
        tabNames[0].isActive ? <FormSignIn/> : <FormSignUp/>
      }
      
    
    </div>
  );
}

export default TabLandingPage;
