import React,{useState} from 'react';
import './profile.css';

const Profile = () => { 

    return (
       
            <div>
              <div className='courses1-head'>
                <div>
                    <h2>Profile</h2>
                    
                </div>
                
            </div>
        <hr/>
        <div className='display-full-77'>
       
       <div className='display-77'>
     <input type="text" name="text" class="input-77"  placeholder="Admin Id:"/>
     </div>
     <div className='display-77'>
     <input type="text" name="text" class="input-77"  placeholder="Admin Name:"/>
     </div>
     <div className='display-77'>
         
         <input type="date" id="dateOfBirth" name="dateOfBirth" class="input-77"/>
       </div>
     <div className='display-77'>
     <input type="text" name="text" class="input-77"  placeholder="Age:"/>
     </div>   
     <div className='display-77'>
     <input type="text" name="text" class="input-77"  placeholder="Adhar:"/>
     </div>
     <div className='display-77'>
     <input type="text" name="text" class="input-77"  placeholder="Pan:"/>
     </div>
     <div className='display-77'>
     <input type="text" name="text" class="input-77"  placeholder="Admin Pic:"/>
     </div>
     
     
     <button className='button-77'>
     Save
     </button>   


     </div>
   

      


        </div>
    );
}
 
export default Profile;