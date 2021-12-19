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
      <input type='checkbox' id='nav-toggle' />
      <div className='sidebar'>
        <div className='sidebar-brand'>
          <h2>
            <span id='resnamedb'>Dashboard</span>
          </h2>
        </div>

        <div className='sidebar-menu'>
          <ul>
            <li onClick={changeTabs(0)}>
              <Link to='' className='active tabLink'>
                <FontAwesomeIcon icon={faSpinner} />
                <span style={{ position: 'absolute' }}>Pending</span>
              </Link>
            </li>
            <li onClick={changeTabs(1)}>
              <Link to='' className='tabLink'>
                <FontAwesomeIcon icon={faCheck} />
                <span style={{ position: 'absolute' }}>Accepted</span>
              </Link>
            </li>
            <li onClick={changeTabs(2)}>
              <Link to='' className='tabLink'>
                <FontAwesomeIcon icon={faTruck} />
                <span style={{ position: 'absolute' }}>Delivered</span>
              </Link>
            </li>
            <li>
              <Link to='' className='tabLink'>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span style={{ position: 'absolute' }}>Sign out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='company'>
        <h1>
          <span className='las la-laptop-code'></span>Soft Studios
        </h1>
      </div>

      <div className='main-content'>
        <header>
          <h2>
            <label for='nav-toggle' style={{ cursor: 'pointer' }}>
              <span className='las la-bars'></span>
            </label>
            Pak Foods
          </h2>

          <div className='search-wrapper'>
            <span className='las la-search'></span>
            <input type='search' placeholder='Search here' />
          </div>

          <div className='user-wrapper'>
            <img src='assets/images/avatar.png' width='52px' />
            <div>
              <h4>Mavia Ali</h4>
              <small>Super admin</small>
            </div>
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

            <div className='card-single highlight'>
              <div>
                <h1>$6k</h1>
                <span>Income</span>
              </div>
              <div>
                <span className='lab la-google-wallet'></span>
              </div>
            </div>
          </div>
          <div className='card-header addDishTitle'>
            <h2>Your Items</h2>
          </div>
          <div className='cards addDish'>
            <div
              className='card-single'
              type='button'
              data-toggle='modal'
              data-target='#exampleModalLong'
            >
              <i className='las la-plus'></i>
              <h4>Add Dish</h4>
            </div>
          </div>
        </div>

        <div className='tabSections' hidden>
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

            <div className='card-single'>
              <div>
                <h1>$6k</h1>
                <span>Income</span>
              </div>
              <div>
                <span className='lab la-google-wallet'></span>
              </div>
            </div>
          </div>

          <div className='recent-grid'>
            <div className='projects'>
              <div className='card'>
                <div className='card-header'>
                  <h2>Recent Projects</h2>
                  <button>
                    See all <span className='las la-arrow-right'></span>
                  </button>
                </div>
                <div className='card-body'>
                  <div className='table-responive'>
                    <table width='100%'>
                      <thead>
                        <tr>
                          <td>Project Title</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>UI/UX Design</td>
                          <td>Frontend Team</td>
                          <td>
                            <span className='status purple'></span>Review
                          </td>
                        </tr>
                        <tr>
                          <td>Web Development</td>
                          <td>MERN Stack Team</td>
                          <td>
                            <span className='status pink'></span>Working
                          </td>
                        </tr>
                        <tr>
                          <td>Delivery App</td>
                          <td>Mobile App Team</td>
                          <td>
                            <span className='status orange'></span>Pending
                          </td>
                        </tr>
                        <tr>
                          <td>Database Designs</td>
                          <td>Backend Team</td>
                          <td>
                            <span className='status purple'></span>Review
                          </td>
                        </tr>
                        <tr>
                          <td>Templates Conversion</td>
                          <td>Frontend Internees</td>
                          <td>
                            <span className='status pink'></span>Working
                          </td>
                        </tr>
                        <tr>
                          <td>Graphics Designing</td>
                          <td>GFX Team</td>
                          <td>
                            <span className='status orange'></span>Pending
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className='customers'>
              <div className='card'>
                <div className='card-header'>
                  <h4>New Customers</h4>
                  <button id='customerBtn'>
                    See all <span className='las la-arrow-right'></span>
                  </button>
                </div>

                <div className='card-body p-0'>
                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/ziyad.jpg'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Mirza Ziyad Beyg</h4>
                        <small>CEO Linux</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>

                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/salman.jpg'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Muhammad Salman</h4>
                        <small>CEO Microsoft</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>
                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/aniq.jpg'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Muhammad Aniq</h4>
                        <small>CEO Adobe</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>

                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/avatar.png'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Mavia Ali</h4>
                        <small>CEO Amazon</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>

                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/saif.jpg'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Muhammad Saif</h4>
                        <small>CEO Apple</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>
                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/hammad.jpg'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Muhammad Hammad</h4>
                        <small>CEO NASA</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>
                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/sherry.jpg'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Muhammad Shaheryar</h4>
                        <small>CEO Facebook & Co.</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>
                  <div className='customer'>
                    <div className='info'>
                      <img
                        src='assets/images/hamza.jpg'
                        width='40px'
                        height='40px'
                      />
                      <div>
                        <h4>Muhammad Hamza</h4>
                        <small>CEO Google</small>
                      </div>
                    </div>

                    <div className='contact'>
                      <span className='las la-user-circle'></span>
                      <span className='las la-comment'></span>
                      <span className='las la-phone'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='tabSections' hidden>
          <h1>Accepted</h1>
        </div>

        <div className='tabSections' hidden>
          <h1>Delivered</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
