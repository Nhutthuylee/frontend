import React from 'react';

class table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    accountTable(accData){
        var data = accData.map((n) =>{
            return <>
            <tr>
        <th scope="row">{n.id}</th>
              <td>{n.companyName}</td>
              <td>{n.accountName}</td>
              <td>{n.mailaddress}</td>
              <td>{n.status}</td>
              <td>{n.APPROVALDATE}</td>
              <td>
                <button className="btn_edit">Edit <i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button className="btn_delete">Delete <i className="fa fa-times" aria-hidden="true"></i></button>
              </td>
            </tr>
            </>
        })
        return data;

    }
    campaigTable (campaignData) {
        console.log("######### trong hàm cpTb")
        console.log(campaignData)
        var data = campaignData.map((n)=>{
            return <> 
                <tbody>
                    <tr>
                    <th>{n.campaignName}</th>
                    </tr>
                    <tr>
                    
                        <td>
                            <div>
                                <p>{n.lineItemId}</p>
                                <p>{n.lineItemName}</p>
                            </div>
                        </td>
                        <td>
                            <div className="round1">
                                <input type="checkbox" id= {n.lineItemId} />
                                <label htmlFor= {n.lineItemId} />
                            </div>
                        </td>
                        <td>{n.overallBudget}</td>
                        <td>{n.curentlyUsedAAmount}</td>
                        <td>{n.curentlyUsageRate}</td>
                        <td>{n.startDate}</td>
                        <td>{n.endDate}</td>
                        <td><i className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                    </tr>
                    
                </tbody>
            
            </>
            }
            )
            
            return data;
    }

    lineItemTable(lineItemData){
        console.log("????????")
        console.log(lineItemData)
        var data = lineItemData.map((n)=>{
            return <>
            <tr>
                                <td>
                                    <div className="round1">
                                        <input type="checkbox" id={n.untreated}/>
                                        <label htmlFor={n.untreated} />
                                    </div>
                                </td>
                                <td>{n.lineItemId}</td>
                                <td>
                                    <p>{n.campaignName}</p>
                                    <p>{n.LineItemName}</p>
                                </td>
                                <td>
                                    <div className="round1">
                                        <input type="checkbox" id={n.id}/>
                                        <label htmlFor={n.id} />
                                    </div>
                                </td>
                                <td>{n.overallBudget}</td>
                                <td>{n.startDate}</td>
                                <td>{n.endDate}</td>
                                <td>{n.registeredDate}</td>
                                <td><i className="fa fa-external-link" aria-hidden="true"></i></td>
                            </tr>
            </>
        })
        return data
    }
    
    render() { 

        var dta=this.props.col
        if(dta==="7"){
            return this.accountTable(this.props.dt)
        }else if(dta ==="8"){
            return this.campaigTable(this.props.dt)
        }else if(dta==="9"){
            return this.lineItemTable(this.props.dt)
        }
        console.log(this.props.col)
        
    }
}
 
export default table;