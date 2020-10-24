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
                 {item.text ? <a className="portfolio-link" onClick={() => this.setState({bg:item.bg,bg2:item.bg2, showLog: true})}>
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
                          <h3></h3>
                          <p></p>
                          </Carousel.Caption>
                          </Carousel.Item>
                          {this.state.bg2 &&
                          <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={process.env.PUBLIC_URL + this.state.bg2}
                          alt="2nd slide"
                          />

                          <Carousel.Caption>

                          <h3></h3>
                          <p></p>
                          </Carousel.Caption>
                          </Carousel.Item>
                        }
                          {this.state.bg3 &&
                          <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={process.env.PUBLIC_URL + this.state.bg3}
                          alt="Third slide"
                          />

                          <Carousel.Caption>
                          <h3></h3>
                          <p></p>
                          </Carousel.Caption>
                          </Carousel.Item>
                        }
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


                        <Button onClick={() => this.setState({showLog: false})}>Close</Button>
                    </Modal.Footer>
                    </Modal>
</section>




        );
    }
}


export default PortfolioPage;
