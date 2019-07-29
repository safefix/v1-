import React, {Component} from "react";
import "./style.css"

class SubmitBid extends Component {
    // state = {
    //     // fields on input form
    //     projectName: "",
    //     residenceNumber: "",
    //     residenceStreet: "",
    //     residenceAddr2: "",
    //     residenceCity: "",
    //     residenceState: "",
    //     residenceZip: "",
    //     repairCategory: "",
    //     repairDetail: "",
    //     repairTimeline: "",
    //     otherComments: ""
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     // update values to what user provided
    //     this.setState({
    //         projectName: "",
    //         residenceNumber: "",
    //         residenceStreet: "",
    //         residenceAddr2: "",
    //         residenceCity: "",
    //         residenceState: "",
    //         residenceZip: "",
    //         repairCategory: "",
    //         repairDetail: "",
    //         repairTimeline: "",
    //         otherComments: ""
    //     })
    // }

    render () {
        return (
            <div>
            
            <form className="submit-bid-form text-left secondary-background">
                <h4 className="text-center" id="submit-bid-form-title">Contractor Form</h4>
                
                <div className="form-row">
                  <div className="form-group col-md-6 form-first-name">
                    <label for="input-first-name">First Name</label>
                    <input type="text" class="form-control" id="bidder-first-name"/>
                  </div>

                  <div className="form-group col-md-6">
                    <label for="input-last-name">Last Name</label>
                    <input type="text" class="form-control" id="bidder-last-name"/>
                  </div>

                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <ion-icon name="phone-portrait"></ion-icon>
                    <label for="phone-number">Phone Number</label>
                    <input type="tel" className="form-control" id="bidder-phone-number"/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <ion-icon name="mail"></ion-icon>
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="bidder-email"/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="company-name">Company Name</label>
                    <input type="text" class="form-control" id="bidder-company-name"/>
                  </div>
                </div>

                <div className="form-row">

                  <div className="form-group col-md-9">
                    <ion-icon name="cash"></ion-icon>
                    <label for="proposed-price">Proposed Price</label>
                    <input type="text" class="form-control" id="bidder-proposed-price"/>
                  </div>

                  <div className="form-group col-md-3 text-center">
                  <ion-icon name="attach"></ion-icon>
                  <label for="attach-images text-center">Attach Important Files</label>
                  

                    <div class="wrapper">
                      <div class="file-upload">
                        <input type="file" />
                        <ion-icon name="cloud-upload" id="upload-icon"></ion-icon>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <ion-icon name="calendar"></ion-icon>
                    <label for="project-timeframe">Project timeframe</label>
                    <input type="text" class="form-control" id="bidder-timeframe"/>
                  </div>
                </div>

                <div className="form-group">
                  <ion-icon name="clipboard"></ion-icon>
                  <label for="project-notes">Project Notes</label>
                  <textarea class="form-control" id="bidder-project-notes" rows="3"></textarea>
                </div>
            
                <div className="col text-center">
                  <input className="btn btn-block" type="submit" value="Submit" id="submit-form"/>
                </div>

    
            </form>

            </div>
        )
    }

}

export default SubmitBid;