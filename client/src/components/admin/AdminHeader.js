import React from 'react';

const AdminHeader = () => {
    return (
        <header className="header">
            <div className="w-100 d-flex align-items-center">
                <div className="menu-btn">
                    <img src="/images/admin/menu.svg" alt="menu" />
                </div>
                <div className="ms-auto d-flex align-items-center">
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            planing@gmail.com
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className="profile-pic-box text-center">
                                <img src="/images/admin/profile-img.png" alt="profile" />
                                <h5>Planing</h5>
                            </div>
                            <ul>
                                <li>
                                    <a href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.564" height="17.564" viewBox="0 0 17.564 17.564">
                                            <path d="M17.564,8.782A8.782,8.782,0,1,0,2.85,15.251l-.008.007.285.24c.019.016.039.028.057.044.151.126.308.245.468.36.052.037.1.075.156.111q.256.176.524.335l.118.068c.2.111.4.217.6.313l.045.02a8.7,8.7,0,0,0,2.124.672l.059.011c.231.04.465.072.7.093l.087.007c.236.019.474.032.715.032s.475-.012.71-.031l.089-.007q.352-.032.7-.092l.06-.011a8.7,8.7,0,0,0,2.094-.656l.073-.033q.3-.139.578-.3l.14-.081c.172-.1.341-.207.5-.319.059-.04.117-.083.175-.125.14-.1.278-.205.412-.314.03-.024.062-.045.091-.069l.292-.244-.009-.007A8.759,8.759,0,0,0,17.564,8.782Zm-16.925,0A8.143,8.143,0,1,1,14.183,14.87,2.393,2.393,0,0,0,13.9,14.7l-2.7-1.352a.708.708,0,0,1-.393-.636v-.944c.063-.077.129-.165.2-.261a6.508,6.508,0,0,0,.835-1.636,1.159,1.159,0,0,0,.666-1.05V7.686a1.162,1.162,0,0,0-.283-.757V5.439a2.575,2.575,0,0,0-.6-1.873A3.6,3.6,0,0,0,8.782,2.555,3.6,3.6,0,0,0,5.95,3.566a2.576,2.576,0,0,0-.6,1.873V6.93a1.164,1.164,0,0,0-.283.757V8.818a1.162,1.162,0,0,0,.428.9,6,6,0,0,0,.988,2.04v.924a.712.712,0,0,1-.371.625L3.585,14.686a2.308,2.308,0,0,0-.24.152A8.124,8.124,0,0,1,.639,8.782Z" fill="currentColor" />
                                        </svg>
                                        My Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.667" height="19.667" viewBox="0 0 19.667 19.667">
                                            <path data-name="Path 3809" d="M0,0H19.667V19.667H0Z" fill="none" />
                                            <path data-name="Path 3810" d="M15.472,6.736h-.819V5.1a4.1,4.1,0,1,0-8.194,0V6.736H5.639A1.644,1.644,0,0,0,4,8.375v8.194a1.644,1.644,0,0,0,1.639,1.639h9.833a1.644,1.644,0,0,0,1.639-1.639V8.375A1.644,1.644,0,0,0,15.472,6.736Zm-4.917,7.375a1.639,1.639,0,1,1,1.639-1.639A1.644,1.644,0,0,1,10.556,14.111ZM13.1,6.736H8.015V5.1a2.54,2.54,0,0,1,5.081,0Z" transform="translate(-0.722 -0.181)" fill="currentColor" />
                                        </svg>
                                        Change Password
                                    </a>
                                </li>
                            </ul>
                            <div className="text-center pt-2">
                                <a href="#!" className="btn signout-btn">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
