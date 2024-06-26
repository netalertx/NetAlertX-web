import React from 'react';

function CreateAccount() {
  return (
    <div className="box box-info">
      <div className="box-header with-border">
        <h3 className="box-title">Create Account</h3>
      </div>
      <form className="form-horizontal">
        <div className="box-body">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
            </div>
          </div>
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-default">Cancel</button>
          <button type="submit" className="btn btn-info float-right">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
