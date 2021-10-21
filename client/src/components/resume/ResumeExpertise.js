import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './ResumeExpertise.css';

AOS.init({
    duration: 1500,
});
export default function Expertise() {
    return (
        <div className='expertise'>
            <div className='container'>
                <div className='expertise-title' data-aos='fade-up'>
                    <h2>Areas of Expertise</h2>
                </div>
                <div className='expertise-content' data-aos='fade-up'>
                    <div className='content-list'>
                        <h5>React JS</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '89%' }}>
                                <p>89%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>CSS</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '90%' }}>
                                <p>90%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>JQuery</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '71%' }}>
                                <p>71%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>Firebase Firestore</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '88%' }}>
                                <p>88%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>MongoDB</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '88%' }}>
                                <p>88%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>MySQL</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '85%' }}>
                                <p>85%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>PostgreSQL</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '93%' }}>
                                <p>93%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>Sequelize</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '90%' }}>
                                <p>90%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>GraphQL</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '84%' }}>
                                <p>84%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>Express JS</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '88%' }}>
                                <p>88%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>Redis</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '85%' }}>
                                <p>85%</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-list'>
                        <h5>Vim</h5>
                        <div className='bar'>
                            <div className='bar-in' style={{ width: '84%' }}>
                                <p>84%</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="content1"> */}
                    {/*   <h3> */}
                    {/*     1 :<span>hahaha</span> */}
                    {/*   </h3> */}
                    {/*   <h3> */}
                    {/*     2 :<span></span> */}
                    {/*   </h3> */}
                    {/*   <h3> */}
                    {/*     3 :<span></span> */}
                    {/*   </h3> */}
                    {/*   <h3> */}
                    {/*     4 :<span></span> */}
                    {/*   </h3> */}
                    {/* </div> */}
                    {/* <div className="content2"> */}
                    {/*   <h3> */}
                    {/*     5 :<span></span> */}
                    {/*   </h3> */}
                    {/*   <h3> */}
                    {/*     6 :<span></span> */}
                    {/*   </h3> */}
                    {/*   <h3> */}
                    {/*     7 :<span></span> */}
                    {/*   </h3> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
