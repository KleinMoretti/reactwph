import React, { Component } from 'react';
import { Link,useHistory } from 'react-router-dom';

import {Map,TileLayer} from 'react-leaflet';
//component
import '../../Assets/css/ContactUs.css'
import 'leaflet/dist/leaflet.css';
const DEFAULT_LANGITUDE=123;
const DEFAULT_LATITUDE=48;
class ContactUsPage extends Component {
  render() {
    return (

      <section id="contact" className="contact-page">
          <div className="container container-x1" data-aos="fade-up">

            <div className="section-title">
              <h2  className="box box-f">Contact</h2>
              <p>WPH Engineering is a California Licensed & Insured Professional Structural Engineering firm specializing in Custom Residential, Apartments, Condos, Mixed Use, Tenant Improvements and Light Commercial Projects. We provide professional Structural Engineering Design for remodels, additions and new constructions</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">

              <div className="col-lg-6">

                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">

                      <h3 className="box box-f">Our Address</h3>
                      <p>333 N. Santa Anita Ave. Ste 3 Arcadia, CA 91006</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">

                      <h3  className="box box-f">Email Us{'\n'}</h3>
                      <p>wph@wphengineering.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">

                      <h3  className="box box-f">Call Us</h3>

                      <p>(626) 658-7974 </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6">
              <Map className="map" center={[34.1442967,-118.0316219]} zoom={20}>
              <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
              </Map>
              </div>

            </div>

          </div>
        </section>



    );
  }
}

export default ContactUsPage;
