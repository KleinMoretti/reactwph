import React, { Component } from 'react';

//component
import '../../Assets/css/LearnMore.css'
import BGWPH from '../../Assets/img/BGWPH.jpg'
import fillerimage from '../../Assets/img/wilcoxapartment.jpg'
var bgStyle={


  backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url(${BGWPH})`,

}
class LearnMorePage extends Component {
  render() {
    return (



      <div className='learnMore-page'>

         <section style ={bgStyle}>
         <div className="text-white __inner">
            <div className=" flex-wrap text-white __title">
               <div className="row flex-grow-3">
                  <div>
                     <h1 className="text" >Discover WPHEngineering</h1>

                     <p></p>
                  </div>
               </div>
            </div>
         </div>
         </section>
         <section>
         <div class="row d-flex">
             <div class=" col-12 col-md-12 col-lg-5 order-1 order-md-1 order-lg-2">
                 <figure class="h-100 mb-3 mb-md-3 mb-lg-0">

                     <div class="figure-inner">
                     <img src={fillerimage} width="120%" height="60%"/>
                     </div>
                 </figure>
             </div>
             <div class="col-lg-7 order-2 order-md-2 order-lg-1">
                 <div class="text-box">
                     <h2 class='headline d-none d-lg-block'>Company Highlights</h2>
                      <div className="headline_under"></div>
                     <div class="rich-text">
                         <p> WPHs Engineering LLC was established in January of 2012 to provide structural design services in both Commercial and Residential area to a diverse client base on a variety of projects. With over years of experience on wood frame, steel frame, masonry wall frame and concrete decking. WPH is continuing to meet client’s expectation with proven project success.
   </p>



                     </div>
                 </div>
             </div>

         </div>

         </section>
         <section className="bg-dark text-white">
            <div className="container">
               <div className="row">
                  <div className="col-12 col-lg-5 ">
                     <div>
                     <figure class="h-100 mb-3 mb-md-3 mb-lg-0">
                        <h2 className='headline text-white' >Mission Statement</h2>
                           <div className="headline_under"></div>
                           </figure>
                     </div>
                  </div>
                  <div className="col-12 col-lg-7 ">
                     <div className="content-area pl-0 pl-lg-3">
                        <div className="rich-text  " >
                           <div className="container">
                              <div className="row">
                                 <div className="col">
                                    <p>WPH Engineering, LLC was founded on the principles of understanding and respecting our client’s requests.  Once our client’s needs are determined, WPH Engineering strives to provide a systematic and accurate service at a fair exchange for such services. We are proud to go the extra mile and provide value engineering options for economical construction costs. We utilize industry leading engineering modeling program to ensure compliance with all governing codes, and guarantee all designs are methodically thought through. The services of WPH Engineering are administered to benefit our client with the ability to build with the most current material and construction methods in a safe and cost effective manner.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section>

                           <div class="row d-flex">
                               <div class=" col-12 col-md-12 col-lg-5 order-1 order-md-1 order-lg-2">
                                   <figure class="h-100 mb-3 mb-md-3 mb-lg-0">
                                       <h2 class='headline d-block d-lg-none'>Founders</h2>
                                       <div class="figure-inner">


                                       </div>
                                   </figure>
                               </div>
                               <div class="col-lg-7 order-2 order-md-2 order-lg-1">
                                   <div class="text-box">
                                       <h2 class='headline d-none d-lg-block'>We’ve been delivering design works,proposals,and design documents for over 15 years.</h2>
                                       <div class="rich-text">
                                           <p>WPH Engineering is comprised of three licensed Engineers and one Senior Designer.  Each of our co-founders has minimum of 15 years to 25 years of design and field experience.</p>



                                       </div>
                                   </div>
                               </div>

                           </div>

         </section>


         <section className="founders">
         <div class="card-area">
             <div class="box">
                 <div class="cart-img">
                     <img src="" alt=""/>
                 </div>
                 <div class="cart-text">
                     <div class="cart-title">
                         <h1>Phillip Phan P.E</h1>

                     </div>
                     <div class="cart-text">
                         <p>Professional Engineer in State of California / B.S. in Civil Engineering of California State University of Long Beach.</p>
                     </div>

                 </div>
             </div>
             <div class="box">
                 <div class="cart-img">
                     <img src="" alt=""/>
                 </div>
                 <div class="cart-text">
                     <div class="cart-title">
                         <h1>Len Hor P.E. </h1>

                     </div>
                     <div class="cart-text">
                         <p>Professional Engineer in State of California / B.S. in Civil Engineering of California State University of San Luis Obispo.</p>
                     </div>
                     <div class="cart-social">

                     </div>
                 </div>
             </div>
             <div class="box">
                 <div class="cart-img">
                     <img src="" alt=""/>
                 </div>
                 <div class="cart-text">
                     <div class="cart-title">
                         <h1>Wing K. Chau P.E</h1>

                     </div>
                     <div class="cart-text">
                         <p>Professional Engineer in State of California / M.S. in Civil Engineering of University California of Los Angeles.</p>
                     </div>


                 </div>
             </div>
             <div class="box">
                 <div class="cart-img">
                     <img src="" alt=""/>
                 </div>
                 <div class="cart-text">
                     <div class="cart-title">
                         <h1>Jonathan Wu</h1>

                     </div>
                     <div class="cart-text">
                         <p>B.S. in Civil Engineering of California State University of Pomona</p>
                     </div>

                 </div>
             </div>
         </div>
         </section>
      </div>








    );
  }
}

export default LearnMorePage;
