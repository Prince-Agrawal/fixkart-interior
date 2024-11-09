import React from 'react';
import AdminFooter from '../../components/admin/AdminFooter';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';

const AdminDashboard = () => {
    return (
        <body class="inner">
            <div className="admin-dashboard">
                {/* main body */}
                <main className="main-body">
                    <div className="content">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active"><a href="#!">Home</a></li>
                            <li className="breadcrumb-item"><a href="#!">Property Subscriptions</a></li>
                        </ol>
                        <h1 className="mt-2 headingText">Welcome to Dashboard</h1>

                        <section className="bg-white content-inner">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="input-box mb-3">
                                        <label className="input-label">From Date</label>
                                        <input type="text" className="form-control" placeholder="From Date" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="input-box mb-3">
                                        <label className="input-label">To Date</label>
                                        <input type="text" className="form-control" placeholder="To Date" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-end mb-3">
                                <button className="btn btn-primary me-2">Submit</button>
                                <button className="btn border-btn">Clear</button>
                            </div>

                            <div className="admin-reports">
                                <div className="row">
                                    {/* Monthly Subscriptions */}
                                    <div className="col-md-6">
                                        <div className="report-box mb-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className="heading mb-0">Monthly Subscriptions</h4>
                                                <a href="#!" className="ms-auto download">Download Report</a>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Type of Report</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>03/07/2023</td>
                                                            <td>Monthly</td>
                                                            <td><a href="#!" className="download-btn">Download Report</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>03/07/2023</td>
                                                            <td>Monthly</td>
                                                            <td><a href="#!" className="download-btn">Download Report</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>03/07/2023</td>
                                                            <td>Monthly</td>
                                                            <td><a href="#!" className="download-btn">Download Report</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total Business List */}
                                    <div className="col-md-6">
                                        <div className="report-box mb-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className="heading mb-0">Total Business List</h4>
                                                <a href="#!" className="ms-auto download">Download Report</a>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Type of Report</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>03/07/2023</td>
                                                            <td>Monthly</td>
                                                            <td><a href="#!" className="download-btn">Download Report</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>03/07/2023</td>
                                                            <td>Monthly</td>
                                                            <td><a href="#!" className="download-btn">Download Report</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>03/07/2023</td>
                                                            <td>Monthly</td>
                                                            <td><a href="#!" className="download-btn">Download Report</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>

                </main>

            </div>
            <AdminFooter />
        </body>
    );
}

export default AdminDashboard;
