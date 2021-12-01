import React, { Component } from 'react';

class ProfileData extends Component {
   
    render() {
        
        return (
            <div className="card-data">
                <img src={this.props.avatar} alt="im" /><br />
                <strong>{this.props.firstname}</strong><br />
                <strong>{this.props.lastname}</strong><br />
                <strong>{this.props.email}</strong><br /><br />
            </div>
        );
    }
}

export default ProfileData;