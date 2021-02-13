import React from 'react';

function Tutorial(){
    return(
    <div className="tut" id="tut">
        <h2 class="section-head">
        <i class="fas fa-music"></i> Documentation
        </h2>
        <h3>All genuine Documentation at one place</h3>
        <p class="lead"> 
            Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.
        </p>
         <a href="#" class="btn btn-secondary mb">Start Your Trial Now</a>
        <p class="text-light"> 
            You can download Being Geeky from app store or playstore.
        </p> 
        <img  src="./public/ipad-app-mockup-03.png" alt="" />
    </div>
    );
}

export default Tutorial;