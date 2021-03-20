import React from "react";
import { Row } from 'reactstrap';
import { loggedIn } from '../App';
import { useHistory } from 'react-router-dom';
import Store from '../store/store';


export default function Login() {
    const history = useHistory();
    const ClickToLogin = () => {
        debugger;
        loggedIn.status = true;
        history.push('/');
    }
    return (
        <div>
            <h2>Login Page</h2>
            <hr />
            <h1>{ Store.test }</h1>
            <Row className={'justify-content-md-center'}>
                <aside className="col-sm-4">
                    <div className="card">
                        <article className="card-body">
                            <a href="/#" className="float-right btn btn-outline-primary">Sign up</a>
                            <h4 className="card-title mb-4 mt-1">Sign in</h4>
                            <form>
                                <div className="form-group">
                                    <label>Your email</label>
                                    <input name="" className="form-control" placeholder="Email" type="email" />
                                </div>
                                <div className="form-group">
                                    <a className="float-right" href="/#">Forgot?</a>
                                    <label>Your password</label>
                                    <input className="form-control" placeholder="******" type="password" />
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <label> <input type="checkbox" /> Save password </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button onClick={ClickToLogin} type="submit" className="btn btn-primary btn-block"> Login  </button>
                                </div>
                            </form>
                        </article>
                    </div>
                </aside>
            </Row>
        </div>
    )
}