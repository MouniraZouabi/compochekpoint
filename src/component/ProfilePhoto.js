import React from 'react'
import FullName from './FullName';
import Address from './Address';
import pic1 from '../pictures/pic1.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePhoto = () => {
  return (

  <div class="card1">
<h1>ハウルの動く城</h1>
<h2 class ="H">Japanese animated fantasy film written and directed by Hayao Miyazaki.</h2>
<div>
  <img src={pic1} class="picture"alt='pic'/>
  <div class="card-body">
    <h5 class="card-title"><FullName/></h5>
    <p class="card-text"><Address/></p>
  </div>
</div>

    </div>
  );
}

export default ProfilePhoto