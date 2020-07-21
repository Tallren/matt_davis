import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
import Video from '../components/Video'
import Button from '../components/AwesomeButton'

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <Button></Button>
      </div>
      <Scroll type="id" element="two">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Established in 2002
          </h2>
          <p>
          Davis Sales Group has worked with vendors of all sizes to present their products on TV shopping channels throughout North America. 
          Major brands, such as Honeywell, Vicks, iRobot, Lifesmart and many others have trusted DSG and Matt Davis to present their products to millions of customers.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <Video
        videoSrcURL="https://www.youtube.com/embed/ScBJ0zaFriM"
        videoTitle="Matt Davis HSN"
        />
        <div className="content">
          <h2>
            Don’t just tell people about your product, demonstrate it.
          </h2>
          <p>
          With thousands of hours of on-air demonstrations, we have the expertise to bring your product to life on live, nation wide television. 
          
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            What makes Davis Sales Group so successful? 
          </h2>
          <p>
          Our unique combination of experience as a buyer, vendor rep and on air guest. 
          We work hand in hand with all elements of buying, production, quality assurance, hosts, guests and more to present your product and it’s unique features.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Brand Management Services</h2>
        </header>
        <ul className="features">
          <li className="icon solid fa-lightbulb">
            <h3>Product Screening</h3>
          </li>
          <li className="icon solid fa-chess">
            <h3>Marketing Strategy</h3>
          </li>
          <li className="icon solid fa-cubes">
            <h3>Product Development</h3>
          </li>
          <li className="icon solid fa-hand-holding-usd">
            <h3>Pricing and Packaging</h3>
          </li>
          <li className="icon solid fa-chalkboard-teacher">
            <h3>Presentation Development</h3>
          </li>
          <li className="icon solid fa-shopping-cart">
            <h3>Procurement Liaison</h3>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
