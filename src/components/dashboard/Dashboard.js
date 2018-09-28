import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardRouter from '../routes/dashboard';

const Dashboard = ({ history }) => {
    const logout = () => {
        const { localStorage } = window;
        localStorage.clear();
        history.push('/login');
    };
    return (
        <div>
            <header>
                {' '}
                <NavLink
                    exact
                    to="/scan"
                    activeStyle={{
                        borderBottom: '2px solid #1ae1ef',
                        height: 'auto',
                    }}
                    style={{ textDecoration: 'none', color: 'white' }}
                    className="menu"
                >
                    Scan
                </NavLink>
                <NavLink
                    exact
                    to="/result"
                    activeStyle={{
                        borderBottom: '2px solid #1ae1ef',
                        height: 'auto',
                    }}
                    style={{ textDecoration: 'none', color: 'white' }}
                    className="menu"
                >
                    Result
                </NavLink>
                <a className="menu" onClick={logout}>
                    Logout
                </a>
            </header>

            <div className="dashboard">
                <h1> Welcome to QR-code scanner</h1>
                <DashboardRouter />
            </div>
        </div>
    );
};

export default Dashboard;
