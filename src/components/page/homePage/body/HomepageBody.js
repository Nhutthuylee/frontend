import React from 'react';
import Sidebar from './HomepageSidebar';
import Content from './HomepageContent';
import AccountTab from './AccountManagerContent';
import CampaignTab from './CampaignListContent';
import LineItemTab from './LineItemListContent'
import '../../../../styles/HomepageBody.css'



export default () => {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10"style={{paddingLeft:"0px"}}>
                    <div className="ads">
                    </div>
                    <div className="tab-content">
                    <div className="tab-pane fade show tab_dashboard active" id="dashboardtab" aria-labelledby="dashboard_tab">
                        
                        <Content></Content>
                    </div>
                    <div className="tab-pane fade tab_account" id="accounttab" aria-labelledby="account_tab">
                    
                        <AccountTab></AccountTab>
                    </div>
                    <div className="tab-pane fade tab_campaign" id="campaign" aria-labelledby="campaign_tab">
                    <div className="adSpace">
                        </div>
                        <CampaignTab></CampaignTab>
                    </div>
                    <div className="tab-pane fade tab_lineitem" id="line_item" aria-labelledby="lineitem_tab">
                    
                        <LineItemTab></LineItemTab>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}