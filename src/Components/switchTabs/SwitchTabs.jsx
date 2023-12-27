import React, { useState } from 'react'
import './style.scss'

const SwitchTabs = ({data, onTabChange}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
           setSelectedTab(index);
        }, 300);
        onTabChange(tab, index);
    }
  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {
          data.map((tab, index) => (
            <div key={tab} className={`tabItem ${selectedTab === index ? "active" : ""}`} onClick={() => activeTab(tab, index)}>
              {tab}
            </div>
          ))
        }
        <div className="movingBg" style={{left}}></div>
      </div>
    </div>
  )
}

export default SwitchTabs