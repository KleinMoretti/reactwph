import React, { Component } from 'react';
import { Carousel,Button, Alert, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import {PortfolioItems} from './portfolioItems'


class PortfolioPage extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
        userHistory:PortfolioItems,
            showLog: false,
            logID: null

        }

    }




    render()
    {


        const history = this.state.userHistory.map( (item, index) =>
        {
            return (
              <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-item">
                 {item.text ? <a className="portfolio-link" onClick={() => this.setState({bg:item.bg, showLog: true})}>
                 <div className="portfolio-hover">
                       <div className="portfolio-hover-content">
                       <div className="text-white-50">
                       { item.title }
                       </div>
                       <div>
                       {item.url}
                       </div>

                     </div>
                   </div>
                   <img className="img-fluid" src={process.env.PUBLIC_URL + item.bg}  alt={item.title} />

               </a>: ''}
               </div>
               </div>

            )
        });




        return (


          <section className="portfolio-page page-section bg-light " id="portfolio">
              <div className="container-fluid">
                  <div className="text-center">
                      <h2 className="section-heading text-uppercase">Portfolio</h2>
                      <h3 className="section-subheading text-muted"></h3>
                  </div>
                  <div className="row ">

                    {history}

                    </div>
                    </div>

                    <Modal dialogClassName="modal-90w modal-autoheight" show={this.state.showLog} fade="false"  toggle={() => this.setState({showLog: false})}>
                    <Modal.Header onClick={() => this.setState({showLog: false})}>      </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                          <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={process.env.PUBLIC_URL + this.state.bg}
                          alt="First slide"
                          />
                          <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={process.env.PUBLIC_URL + this.state.bg}
                          alt="Third slide"
                          />

                          <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={process.env.PUBLIC_URL + this.state.bg}
                          alt="Third slide"
                          />

                          <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                          </Carousel.Item>
                          </Carousel> 
                        <h2>Project Summary</h2>
                        <p>
                          LOT SIZE
                          BEDROOMS
                          TYPE
                          BUILDING SIZE
                          LOCATION
                          DESIGNED
                          UNITS
                          STORY
                        </p>

                        </Modal.Body>
                    <Modal.Footer>


                        <Button onClick={() => this.setState({showLog: false})}>Cancel</Button>
                    </Modal.Footer>
                    </Modal>
</section>




        );
    }
}


export default PortfolioPage;
