import React from 'react';
import {Link} from 'react-router-dom';
import '../../../../styles/HomepageSidebar.css';

export default () => {
  return (
    <>
      <div className="sidebar1">
        <div >
          <li data-toggle="collapse" data-target="#logout" className="collapsed active avatar_logo_li">
            <div className="logo">
              <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/s960x960/51484196_945936938937491_5185190600575549440_o.jpg?_nc_cat=102&_nc_sid=7aed08
            &_nc_ohc=yjbY0vYg-swAX-pgowZ&_nc_ht=scontent.fdad1-1.fna&_nc_tp=7&oh=1e228de3e2f975c49c8ecccf1b40c2c4&oe=5F3D5AB5" className="img-responsive center-block avatar" alt="Logo" />
            </div>
          </li>
          <div className="sub-menu collapse" id="logout">
            <div className="active avatar_logo_li">
              <Link className="signout_link" to="/">Sign out</Link>
            </div>
          </div>
        </div>

        <br/>
        
        <div className="left-navigation">
          <ul className="nav flex-column list">

          <hr></hr>
          
          <li data-toggle="collapse" data-target="#dashboard" className="nav-item collapsed">
              <a id="#dashboard_tab" data-toggle="tab" href="#dashboardtab" aria-selected="true" role="tab">Dash Board</a>
          </li>
            <ul className="sub-menu collapse" id="dashboard">
              <li>New New 1</li>
              <li>New New 2</li>
              <li>New New 3</li>
            </ul>
            <hr></hr>

            <li data-toggle="collapse" data-target="#account" className="nav-item" >
             <a  id="#account_tab" data-toggle="tab" href="#accounttab" aria-selected="false" role="tab">Account</a>
          </li>
            <ul className="sub-menu collapse" id="account">
              <li>New New 1</li>
              <li>New New 2</li>
              <li>New New 3</li>
            </ul>
            <hr></hr>

            <li className="nav-item">
            <a  id="#campaign_tab" data-toggle="tab" href="#campaign" aria-selected="false" role="tab">Campaign</a>
            </li>
            <hr></hr>

            <li className="nav-item">
            <a  id="#lineitem_tab" data-toggle="tab" href="#line_item" aria-selected="false" role="tab">Line Item</a>
            </li>
            <hr></hr>
            
          </ul>

        </div>


      </div>
    </>
  )
}
