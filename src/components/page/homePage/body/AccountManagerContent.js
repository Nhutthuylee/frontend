import React from 'react';
import '../../../../styles/AccountManagerContent.css';

export default () => {
  return (
    <>
      <div className="account_space">
        <div className="create_account row">
          <div className="col-md-3">
            <div className="pl-3 form-group select_group">
              <label htmlFor="selStatus">Status</label>
              <select className="form-control slb_status" id="selStatus">
                <option value="1">Applying</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group select_group">
              <select className="form-control slb_search">
                <option>Free search</option>
              </select>
              <input className="textbox_" type="textbox"></input>
            </div>
          </div>
          <div className="col-md-5">
            <div className="select_group">
              <button className="btn_search">Search</button>
            </div>

          </div>
          <div className="col-md-12 new_account">
            <button className="btn_new">Creact new account</button>
          </div>
          <div className="col-md-6">
            <label className="check">Excludes delivery and dates in the past
        <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-7">
              <p>0 star 0-10 items</p>
              </div>
              <div className="col-md-5">
              <nav className="pagi" aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="facebook.com" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="facebook.com">1</a></li>
                <li className="page-item">
                  <a className="page-link" href="facebook.com" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
              </div>
            </div>
            
          </div>
        </div>

      </div>
      <div className="list_acc">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Company name</th>
              <th scope="col">account name</th>
              <th scope="col">mail address</th>
              <th scope="col">status</th>
              <th>APPROVALDATE</th>
              <th scope="col"> Num of advertisers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">123</th>
              <td>DAC VietNam/DHBK</td>
              <td>dactectvn_hung</td>
              <td>hung.lb@dactech.vn</td>
              <td>Applying</td>
              <td>2020-08-01</td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">1235</th>
              <td>DAC VietNam/DHBK</td>
              <td>dactectvn_nhat</td>
              <td>nhat@dactech.vn</td>
              <td>Applying</td>
              <td>2020-08-01</td>
              <td>Unregistered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}