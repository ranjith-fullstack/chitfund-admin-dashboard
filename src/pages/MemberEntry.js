import React,{useState} from 'react';
import './memberentry.css';

const MemberEntry = () => { 

    return (
       
            <div>
              <div className='courses1-head'>
                <div>
                    <h2>Member Entry</h2>
                    
                </div>
                
            </div>
        <hr/>
                 <div className='display-full'>
        <h3 className='memberentry-h3'>Member Entry</h3>
        <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Name"/>
      </div>
      <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Age"/>
      </div>
      <div className='display'>
         
          <input type="date" id="dateOfBirth" name="dateOfBirth" class="input"/>
        </div>
        <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Mobile Number"/>
      </div>
      <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Email"/>
      </div>

      <div className='display'>
    <select name="dropdown" class="input">
      <option value="" disabled selected>Gender</option>
      <option value="option1">Male</option>
      <option value="option2">Female</option>
      <option value="option3">Others</option>
    </select>
  </div>
  <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Occupation"/>
      </div>
      <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Adhar Number"/>
      </div>
      <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Pan Number"/>
      </div>
      <div className='display'>
      <input type="text" name="text" class="input"  placeholder="Residence"/>
      </div>
  
  
  <button className='button4'>
     Save
     </button>     

      </div>


        </div>
    );
}
 
export default MemberEntry;