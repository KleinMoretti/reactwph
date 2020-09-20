import React, { Component } from 'react'
//import Modal from 'react-modal'
import {Button,Modal} from 'react-bootstrap'
//component
import {PortfolioItems} from './portfolioItems'

class PortfolioPage extends Component {
  constructor(props){

      super(props);
      this.state = {}
  }
  handleSessionClick(index) {
     this.setState({
       isModalOpen: true,
       selectedPostIndex:index
     });
   }

     handleCloseModalClick() {
       this.setState({ isModalOpen: false,selectedPostIndex:undefined });
     }

     handleModalRequestClose() {
       this.setState({ isModalOpen: false,selectedPostIndex:undefined });
     }


  render() {

    return (

      <section className="portfolio-page page-section bg-light " id="portfolio">
          <div className="container-fluid">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Portfolio</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              <div className="row ">
            {  PortfolioItems && PortfolioItems.map((item,index)=>{
                return  <div className="col-lg-4 col-sm-6">
                      <div className="portfolio-item">
                          <a className="portfolio-link" item={item} onClick= {() => this.handleSessionClick(item)} href={"#portfolioModal"+index}>
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

                          </a>
                          <div className="portfolio-caption">

                          </div>
                      </div>

                  </div>

                })}
              </div>

          </div>

      </section>


    );
  }
}

export default PortfolioPage;
/*             <Modal show={this.state.isModalOpen}>
                <Modal.Header closeButton onClick={() => this. handleCloseModalClick()}>
                <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => this. handleModalRequestClose()}>
                    Close
                </Button>

                </Modal.Footer>
            </Modal>*/
