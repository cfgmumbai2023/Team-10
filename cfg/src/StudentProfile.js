import React from 'react';

const StudentProfile = () => {
    return (
        <>
        <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card user-card">
          <div className="card-header">
            <h5 id="head">Student Profile</h5>
          </div>
          <div className="card-block">
            <div className="user-image">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="img-radius"
                alt="User-Profile-Image"
              />
            </div>
            <h6 className="f-w-600 m-t-25 m-b-10">Mahesh Kumar</h6>
            <p className="text-muted">mahesh@gmail.com | 91 XXXXXXXXXX</p>
            <hr />
            <p className="text-muted m-t-15">Progress: 87%</p>
            <ul className="list-unstyled activity-leval">
              <li className="active" />
              <li className="active" />
              <li className="active" />
              <li />
              <li />
            </ul>
            <div className="bg-c-blue counter-block m-t-10 p-20">
              <div className="row">
                <div className="col-4">
                  <p>WATCH LATER VIDEOS</p>
                  <p>56</p>
                </div>
                <div className="col-4">
                  <p>RECCOMENDATIONS</p>
                  <p>85</p>
                </div>
                <div className="col-4">
                  <p>EVALUATION PASSED</p>
                  <p>18</p>
                </div>
              </div>
            </div>
            <p className="m-t-15 text-muted">
              the progress level is based upon the content you have watched, consistency and evaluation test passed so far.
            </p>
            <hr />
            
          </div>
        </div>
      </div>
      
      </div>
    </div>
  
        </>
    );
}


export default StudentProfile;