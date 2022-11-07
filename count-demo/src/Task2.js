import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


function Task2() {
  return (
   <>
    <div>
        
        <div className="bg-info" id="season">
          <div className="container">
            <div className="row">
              <div className="col-sm-20 col-md-12">
                 <h3 className="text-center">Seasons</h3>
               </div>
              </div>
              <br></br>
             <div className="row">
                <p className="mt-1 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>   
          </div>   
          </div>
    

    <div className="bg-warning" id="Season type">    
     <div className="container">
      <div className="row text-center">
        <div className="col-sm-12 col-md-12 mb-4">
            <br></br>
            <h3 className="text-center">Season Type</h3>
         </div>
        <div className="col-md-4">
          <div className="testimonial mb-5">
           <div className="avatar mx-auto">

          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Winter</h4>
          <img src="https://seasonsyear.com/sites/default/files/resize/images/seasons/winter-13-500x333.jpg" class="rounded-circle z-depth-1 img-fluid"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
        </div>
      </div>
 
      <div class="col-md-4">
        <div classname="testimonial mb-5">
          <div className="avatar mx-auto">
            
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Summer</h4>
          <img src="https://media.istockphoto.com/id/501234002/photo/beautiful-rolling-landscape-on-a-summers-day-in-the-cotswolds.jpg?b=1&s=170667a&w=0&k=20&c=wrhuwU44taXfdMtq9BILte1bMXkHL4Xe70QZMVT-tpA="class="rounded-circle z-depth-1 img-fluid"/>
          <p className="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
        </div>
 
      </div>
      <div className="col-md-4">
      <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Rainy</h4>
          <img src="https://craneww.com/site/assets/files/2374/monsoon-2.1200x800.jpg" class="rounded-circle z-depth-10 img-fluid"/>
          <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>
      </div>
    </div> 
   </div> 
   </div>
   </>   
    );
  }
export default Task2
