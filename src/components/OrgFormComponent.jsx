import React, { Component } from 'react';
import '../App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            orgId: '',
            orgName: '',
            orgLogo: '',
            slideImages: []
        }
        this._handleProfilePicChange = this._handleProfilePicChange.bind(this);
        //  this._onChangeName = this._onChangeName.bind(this);
        this._handleSlidePicChange = this._handleSlidePicChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSlidePicChange(e) {
        e.preventDefault();
        var tempArr = [];
        for (var i = 0; i < e.target.files.length; i++) {
            console.log(e.target.files[i].name);
            tempArr.push({ 'name': e.target.files[i].name });
        }
        this.setState({ slideImages: tempArr });
        console.log(this.state);
    }

    _handleProfilePicChange(e) {
        e.preventDefault();
        this.setState({ orgLogo: e.target.files[0].name })
    }

    /*
      _onChangeName(e) {
        e.preventDefault();
         this.setState({name:e.target.value});
      }
    */
    _handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

        //var obj = {"ApplicationSpecificData":this.state}
        var datetime = (new Date()).getTime();
        var documentObj = {
            "DocumentHeader": {
                "DocumentType": "OrganizationInfo",
                "Author": "Shrey/Gautham",
                "OrganizationId": this.state.orgId,
                "Datetime": datetime,
                "DocumentId": "20021",
                "version": "1",
                "tags": " "
            },
            "DocumentBody": {
                "ApplicationSpecificData": {
                    "organizationName": {
                        "1": this.state.orgName
                    },
                    "organizationLogo": this.state.orgLogo,
                    "slideImages": this.state.slideImages
                }
            }
        }
        console.log(documentObj);
    }

    render() {
        return (
            <div className="App">
                <form>
                    OrganizationId : <input type="text" value={this.state.orgId} onChange={(e) => this.setState({ orgId: e.target.value })} /><br />
                    organizationName: <input type="text" value={this.state.orgName} onChange={(e) => this.setState({ orgName: e.target.value })} /><br />
                    organizationLogo: <input type="file" accept="image" onChange={this._handleProfilePicChange} /><br />
                    Sliding Images: <input type="file" onChange={this._handleSlidePicChange} multiple /><br />
                    <button type="submit" onClick={this._handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
