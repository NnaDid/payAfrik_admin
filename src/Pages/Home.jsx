import React from 'react'
import Chart from '../components/Chart/Chart'
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../DummyData'
import WidgetSm from '../components/WidgetSm/WidgetSm'
import WidgetLg from '../components/WidgetLg/WidgetLg'



function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data ={userData} title="User Analytics" grid  dataKey="Active User" /> 
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg /> 
            </div>
        </div>
    )
}

export default Home
