import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./css/Deshboard.css"

const Deshboard = () => {
     return (
          <>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="offcanvasExample"
        >
          <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
        </button>
        <Link
          class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
          to="/"
          >SIAHS</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNavBar">
          <form class="d-flex ms-auto my-3 my-lg-0">
            <div class="input-group">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle ms-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-fill"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Log Out</a></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <!-- top navigation bar -->
    <!-- offcanvas --> */}
    <div
      class="offcanvas offcanvas-start sidebar-nav bg-dark"
      tabindex="-1"
      id="sidebar"
    >
      <div class="offcanvas-body p-0">
        <nav class="navbar-dark">
          <ul class="navbar-nav">
            
            <li>
              <Link to="deshboard" class="nav-link px-3 active">
                <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                <span>Dashboard</span>
              </Link>
            </li>
           
            
            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#class"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>Class</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="class">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="create-class" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Create Class</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="manage-class" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Manage Class</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>


            
            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#subjects"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>subjects</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="subjects">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="create-subject" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Create subject</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="manage-subject" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Manage subject</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="subject-combination" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>subject Combination</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>


            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#student"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>students</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="student">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="create-student" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Create student</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="manage-student" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Manage student</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#result"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>Result</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="result">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="add-result" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Add result</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="manage-result" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Manage result</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#teachers"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>Teachers</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="teachers">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="add-teacher" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Add teacher</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="manage-teachers" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Manage teachers</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#visitors"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>Visitors</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="visitors">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="add-visitor" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Add visitor</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="manage-visitors" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Manage visitor</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

           
          </ul>
        </nav>
      </div>
    </div>
    {/* <!-- offcanvas --> */}
    <main class="mt-5 pt-3">
      <div class="container-fluid">
        <Outlet/>
      </div>
    </main> 
          </>
     );
};

export default Deshboard;