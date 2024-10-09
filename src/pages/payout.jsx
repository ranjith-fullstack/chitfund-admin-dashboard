import React,{useState} from 'react';
import './payout.css';

const Payout = () => { 

    return (
       
            <div>
              <div className='courses1-head'>
                <div>
                    <h2>Payout</h2>
                    
                </div>
                
            </div>
        <hr/>
        <div className='display-full-6'>
       
       <div className='display-66'>
     <input type="text" name="text" class="input-66"  placeholder="Select Group:"/>
     </div>
     <div className='display-66'>
     <input type="text" name="text" class="input-66"  placeholder="Select Month:"/>
     </div>
       <div className='display-66'>
     <input type="text" name="text" class="input-66"  placeholder="Bid Winner:"/>
     </div>
     <div className='display-66'>
     <input type="text" name="text" class="input-66"  placeholder="Installment Number:"/>
     </div>   
     <div className='display-66'>
     <input type="text" name="text" class="input-66"  placeholder="Pay Through:"/>
     </div>
     <div className='display-66'>
     <input type="text" name="text" class="input-66"  placeholder="Total Bid Amount:"/>
     </div>
     
     
     <button className='button-66'>
     Save
     </button>   


     </div>
   

      


        </div>
    );
}
 
export default Payout;