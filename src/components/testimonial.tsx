import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="testimonial-inner">
        <h1 id="testimonial-heading">Testimonial</h1>
        <div className="border"></div>

        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className="name">John Smith</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                The food was fresh and full of flavor especially the fish Fry
                Would highly recommend to anyone looking for a memorable night
                out.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className="name">Lira Mack</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>
                We celebrated a birthday here, and the restaurant went above and
                beyond. The staff surprised us with a beautifully presented
                dessert. Highly recommended for any celebration.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className="name">Yad Maseld</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                The service here was top-notch. The server was attentive and
                made excellent recommendations. The food was delicious,
                especially the spanish amlet. Great experience overall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
