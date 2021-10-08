import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './FeaturedInfo.css'


function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="faturedMoney"> &#8358; 200,000</span>
                    <span className="faturedMoneyRate"> 
                             -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month.
                </span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="faturedMoney"> &#8358; 250,000</span>
                    <span className="faturedMoneyRate"> 
                             -11.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month.
                </span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="faturedMoney"> &#8358; 200,000</span>
                    <span className="faturedMoneyRate"> 
                             +1.4 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month.
                </span>
            </div>



        </div>
    )
}

export default FeaturedInfo
