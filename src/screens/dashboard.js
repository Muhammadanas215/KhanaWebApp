import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faCheck,
  faTruck,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  function changeTabs(tabIndex) {
    var tabSections = document.getElementsByClassName('tabSections');
    var tabLink = document.getElementsByClassName('tabLink');

    for (var i = 0; i < tabSections.length; i++) {
      if (tabIndex != i) {
        tabSections[i].hidden = true;
        tabLink[i].classList.remove('active');
      } else {
        tabSections[tabIndex].hidden = false;
        tabLink[tabIndex].classList.add('active');
      }
    }
  }

  return (
    <div>
      <div className='main-content'>
        <header>
          <h2>
            <label for='nav-toggle' style={{ cursor: 'pointer' }}>
              <span className='las la-bars'>
            <img src={require('../images/logo.png')} className='img' />
            </span>
            </label>
            Saylani Welfare (Khana sab kai liye)
          </h2>

          <div className='user-wrapper'>
          <button>Logout</button>
          </div>
        </header>

        <div className='tabSections'>
          <div className='cards'>
            <div className='card-single'>
              <div>
                <h1>54</h1>
                <span>Customers</span>
              </div>
              <div>
                <span className='las la-users'></span>
              </div>
            </div>

            <div className='card-single'>
              <div>
                <h1>79</h1>
                <span>Projects</span>
              </div>
              <div>
                <span className='las la-clipboard-list'></span>
              </div>
            </div>

            <div className='card-single'>
              <div>
                <h1>79</h1>
                <span>Orders</span>
              </div>
              <div>
                <span className='las la-shopping-bag'></span>
              </div>
            </div>
          </div>
        
         
        </div>


      </div>
    </div>
  );
}

export default Dashboard;
