import React from "react";

const Blog = () => {
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
            <h1>Latest Blogs & News</h1>
            <p className="mb-0">
              Welcome to our Design Gallery Interior, a space where innovation
              and aesthetics converge to create an immersive experience for
              design enthusiasts and connoisseurs alike. Step inside and be
              transported into a realm where every corner tells a unique story,
              and each display is a masterpiece in its own right.
            </p>
          </div>
        </div>
      </section>

      <section class="BlogSection">
         <div class="container">
            <div class="row">
                <div class="col-md-6 mb-5">
                  <div className="BlogBox">
                      <img src="images/living-room.png" alt="Blog" className="blog-image" />
                      <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                      <div className="blog-user">
                      <img src="images/user.png" alt="Blog user" className="user"/>
                      <span>fixinterio</span> | 
                      <span>September 1, 2022</span>
  
                      <button type="button" className="btn btn-outline-primary ms-auto" to="/BlogDetail">Read More</button>
                      
                      </div>
                  </div>
                </div>
                <div class="col-md-6 mb-5">
                    <div className="BlogBox">
                        <img src="images/living-room.png" alt="Blog" className="blog-image" />
                        <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="blog-user">
                        <img src="images/user.png" alt="Blog user" className="user"/>
                        <span>fixinterio</span> | 
                        <span>September 1, 2022</span>
    
                        <button type="button" className="btn btn-outline-primary ms-auto">Read More</button>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-5">
                    <div className="BlogBox">
                        <img src="images/living-room.png" alt="Blog" className="blog-image" />
                        <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="blog-user">
                        <img src="images/user.png" alt="Blog user" className="user"/>
                        <span>fixinterio</span> | 
                        <span>September 1, 2022</span>
    
                        <button type="button" className="btn btn-outline-primary ms-auto">Read More</button>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-5">
                    <div className="BlogBox">
                        <img src="images/living-room.png" alt="Blog" className="blog-image" />
                        <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="blog-user">
                        <img src="images/user.png" alt="Blog user" className="user"/>
                        <span>fixinterio</span> | 
                        <span>September 1, 2022</span>
    
                        <button type="button" className="btn btn-outline-primary ms-auto">Read More</button>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-5">
                    <div className="BlogBox">
                        <img src="images/living-room.png" alt="Blog" className="blog-image" />
                        <h3>Trendy and Chic: Unveiling the New Elite Laminate Collection</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className="blog-user">
                        <img src="images/user.png" alt="Blog user" className="user"/>
                        <span>fixinterio</span> | 
                        <span>September 1, 2022</span>
    
                        <button type="button" className="btn btn-outline-primary ms-auto">Read More</button>
                        </div>
                    </div>
                  </div>
             </div>
         </div>
      </section>
    </>
  );
};

export default Blog;
