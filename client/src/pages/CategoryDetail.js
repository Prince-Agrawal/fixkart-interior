import React, { useEffect } from "react";
import { ContactForm } from "../components/ContactForm";
import BookNow from "../components/BookNow";

const CategoryDetail = (props) => {

    const { category } = props; // Destructure the category data from props


    useEffect(() => {
        // Log the category data to verify it's received correctly
        console.log("Received category data:", category);
    }, [category]); // Only run this effect if the category data changes

    if (!category) return <div>Loading...</div>; // Handle the case where category data is not available

    return (
        <>
            <section className="banner-section">
                <img
                    src="/images/design-gallary.jpg"
                    className="banner-img"
                    alt="Banner Image"
                />
                <div className="container">
                    <div className="banner-contant">
                        <h1>{category.categoryName || 'N/A'}</h1>
                        <p className="mb-0">
                            {category.categoryDescription || 'N/A'}
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-area py-4">
                <div className="container">

                    {category?.categoryAdditionalData?.map((categoryAdditionalDetail) => (
                        <>
                            <h2>{categoryAdditionalDetail?.title}</h2>
                            <p>
                                {categoryAdditionalDetail?.description}
                            </p></>
                    ))}

                    <p>
                        Experience the art of transformation with Fixkart Interio. Let us
                        create a space that reflects your style and enhances your lifestyle.
                    </p>
                </div>
            </section>

            <BookNow />

            <section className="about-section">
                <div className="container">
                    <div className="row justify-content-between align-items-start">
                        <div className="col-lg-5 heading-main">
                            <span className="badge rounded-pill text-bg-warning">Process</span>
                            <h2>Contact Us. It’s Easy.</h2>
                            <p>
                                You don’t get trapped in such an annoyance thus we have been
                                briskly working as interior decorators in Jaipur.
                            </p>

                            <ul className="Contact_process mt-4 pt-2">
                                <li>
                                    <div className="pro-flex">
                                        <img src="images/pro-call.png" alt="Call" />
                                        <p>
                                            <span>Contact Number</span>
                                            <strong>+91 7737966778</strong>
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="pro-flex">
                                        <img src="images/pro-email.png" alt="Email" />
                                        <p>
                                            <span>Official Email ID</span>
                                            <strong>fixinterio@gmail.com</strong>
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="pro-flex">
                                        <img src="images/pro-location.png" alt="Location" />
                                        <p>
                                            <span>Office Address</span>
                                            <strong>
                                                B-114,Bhura Patel Marg, Gandhi Path W Vaishali Nagar,
                                                Jaipur
                                            </strong>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CategoryDetail;
