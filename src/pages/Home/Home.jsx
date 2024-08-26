import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";

function Home() {
    const detailsRef = useRef(null);
    const feedbackRef = useRef(null);
    const sectionsRef = useRef([]);
    const [isInViewDetails, setIsInViewDetails] = useState(false);
    const [isInViewFeedback, setIsInViewFeedback] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.target === detailsRef.current) {
                    setIsInViewDetails(entry.isIntersecting);
                } else if (entry.target === feedbackRef.current) {
                    setIsInViewFeedback(entry.isIntersecting);
                } else {
                    const index = sectionsRef.current.indexOf(entry.target);
                    if (index !== -1) {
                        sectionsRef.current[index].classList.toggle('in-view', entry.isIntersecting);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (detailsRef.current) {
            observer.observe(detailsRef.current);
        }
        if (feedbackRef.current) {
            observer.observe(feedbackRef.current);
        }

        sectionsRef.current.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            if (detailsRef.current) {
                observer.unobserve(detailsRef.current);
            }
            if (feedbackRef.current) {
                observer.unobserve(feedbackRef.current);
            }
            sectionsRef.current.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div className='home'>
            <div className="img">
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    dynamicHeight={false}
                    interval={3000}
                    transitionTime={500}
                >
                    <img src="https://media1.popsugar-assets.com/files/thumbor/Da7u96Ds66-MVVDrsfYNu4cds2s/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/08/22/989/n/3019466/fc117d58be4fa4c0_tumblr_o529vpgDW41rlnjw2o1_1280/i/Wedding-GIFs.gif" alt="" />
                    <img src="https://i.gifer.com/XYR4.gif" alt="" />
                    <img src="https://media.giphy.com/media/93T5xZ8lI8n16/giphy.gif" alt="" />
                    <img src="https://th.bing.com/th/id/R.aa410133ad4ae6f69d2574a87b6c7b7c?rik=GuMi%2fD7jJo7i6g&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fxAu73NvBCNDZC%2fgiphy.gif&ehk=DJFaRSmvpVPOvrfd4Ubp7t8aY7YbQigr0muukiwqGGk%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </Carousel>
            </div>
            <div className={`details ${isInViewDetails ? 'in-view' : ''}`} ref={detailsRef}>
                <h1>Welcome to the website</h1>
                <p style={{ marginTop: "50px" }}>What we Manage</p>
                <div className="list">
                    <div className="marridge" ref={(el) => sectionsRef.current[0] = el}>
                        <p>Marriage</p>
                        <div className='lists'>
                            <ul>
                                <li><img src="https://3.imimg.com/data3/MB/QF/MY-9693877/marriage-functions-event-management-services-500x500.png" alt="Marriage Event" /></li>
                                <li><img src="https://image.wedmegood.com/resized/400X/uploads/member/257985/1521113054_10500574_748976618521513_1733319647186769636_n.jpg" alt="Marriage Event" /></li>
                                <li><img src="https://www.joonsquare.com/usermanage/image/business/dhillon-farm-chandigarh-19251/dhillon-farm-chandigarh-unnamed-3-.jpg" alt="Marriage Event" /></li>
                                <li><img src="https://th.bing.com/th/id/OIP.8FjxcR9pskpq1Un_siMocAHaHa?w=900&h=900&rs=1&pid=ImgDetMain" alt="Marriage Event" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="marridge" ref={(el) => sectionsRef.current[1] = el}>
                        <p>Birthday</p>
                        <div className='lists'>
                            <ul>
                                <li><img src="https://th.bing.com/th/id/OIP.jxNumvXHKBZMKGC5NnSWywHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Birthday Event" /></li>
                                <li><img src="https://th.bing.com/th/id/OIP.v5nkXHeFHbFR8aGGthXbcwAAAA?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Birthday Event" /></li>
                                <li><img src="https://th.bing.com/th/id/OIP.qrDMrV_1R08SceoCw8S48wHaE6?w=326&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Birthday Event" /></li>
                                <li><img src="https://thatballoons.com/wp-content/uploads/2014/11/Singapore-Birthday-party-planner.jpg" alt="Birthday Event" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="marridge" ref={(el) => sectionsRef.current[2] = el}>
                        <p>Reception</p>
                        <div className='lists'>
                            <ul>
                                <li><img src="https://th.bing.com/th/id/OIP.632PqHlJPjjGgLJ-nsss7AHaE8?rs=1&pid=ImgDetMain" alt="Reception Event" /></li>
                                <li><img src="https://th.bing.com/th/id/OIP.8Rynjh7nhPw5vMN031mBGQHaFs?rs=1&pid=ImgDetMain" alt="Reception Event" /></li>
                                <li><img src="https://www.joonsquare.com/usermanage/image/business/dhillon-farm-chandigarh-19251/dhillon-farm-chandigarh-unnamed-3-.jpg" alt="Reception Event" /></li>
                                <li><img src="https://th.bing.com/th/id/OIP.8FjxcR9pskpq1Un_siMocAHaHa?w=900&h=900&rs=1&pid=ImgDetMain" alt="Reception Event" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="marridge" ref={(el) => sectionsRef.current[3] = el}>
                        <p>Anniversary</p>
                        <div className='lists'>
                            <ul>
                                <li><img src="https://5.imimg.com/data5/SELLER/Default/2020/12/OJ/NL/AV/96540617/anniversary-party-decorations-at-home-500x500.jpg" alt="Anniversary Event" /></li>
                                <li><img src="https://th.bing.com/th/id/R.abda7a012b3668f0a7780fcfef936171?rik=k7tbh1ft8f9Gpw&riu=http%3a%2f%2fpcrestcc.com%2fwp-content%2fuploads%2f2018%2f03%2f09-01-17-anniversary.jpg&ehk=uY21NFhNMvyRad%2f0j%2bh2XaWktdLP3qbniqIht%2fcKvlI%3d&risl=&pid=ImgRaw&r=0" alt="Anniversary Event" /></li>
                                <li><img src="https://www.joonsquare.com/usermanage/image/business/dhillon-farm-chandigarh-19251/dhillon-farm-chandigarh-unnamed-3-.jpg" alt="Anniversary Event" /></li>
                                <li><img src="https://th.bing.com/th/id/OIP.8FjxcR9pskpq1Un_siMocAHaHa?w=900&h=900&rs=1&pid=ImgDetMain" alt="Anniversary Event" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`feedback ${isInViewFeedback ? 'in-view' : ''}`} ref={feedbackRef}>
                <h2>User Feedback</h2>
                <div className="feedback-cards">
                    <div className="feedback-card">
                        <img src="https://th.bing.com/th/id/OIP.bLnnDC8ZDmyikEiSD9HhYwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User 1" />
                        <div className="feedback-content">
                            <h3>John Doe</h3>
                            <p>"Great service! The event was organized perfectly and the staff were very professional."</p>
                        </div>
                    </div>
                    <div className="feedback-card">
                        <img src="https://th.bing.com/th/id/OIP.47NEVXcBGruaDflMzJAsDwAAAA?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User 2" />
                        <div className="feedback-content">
                            <h3>Jane Smith</h3>
                            <p>"I had a wonderful experience. The attention to detail was amazing and everything went smoothly."</p>
                        </div>
                    </div>
                    <div className="feedback-card">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35af6a41332353.57a1ce913e889.jpg" alt="User 3" />
                        <div className="feedback-content">
                            <h3>Michael Johnson</h3>
                            <p>"Highly recommend this service! The team was very accommodating and made our event special."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
