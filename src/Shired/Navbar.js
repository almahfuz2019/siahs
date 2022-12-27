import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
     return (
          <nav class="navbar container-fluid navbar-expand-lg navbar-light bg-dark navbar_hight ">
                <div class="container-fluid all_ul_tag_and_phone_number">
                    <Link class="navbar-brand" to="/">
                        <div class="logo">
                            <img class="img-fluid" src="https://i.ibb.co/4WdrFSs/logo-1.jpg" alt="" height="60px" width="60px"/>
                        </div>
                    </Link>
                    <button class="navbar-toggler text-primary bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-light"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <div class="all_ul_tag mx-auto text-center">
                            <ul class="navbar-nav">
                                <li class="nav-item ">
                                    <Link class="nav-link active text-light Navbar_hover" aria-current="page " to="/"><span class="navbar_first_charecter">H</span>ome</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link text-light Navbar_hover" to="/about"><span class="navbar_first_charecter">A</span>bout</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="text-light Navbar_hover">I</span>nfo
                                    </a>
                                    <ul class="dropdown-menu text-center bg-dark" aria-labelledby="navbarDropdown">
                                        <li><span  onclick="student_link_validition()" class="nav-link text-light Navbar_hover" href=""><span class="navbar_first_charecter">S</span>tudents</span>
                                        </li>
                                        <li><a class="nav-link text-light Navbar_hover" href="#teacher_section_link "><span class="navbar_first_charecter">T</span>eachers</a></li>
                                        <li><span  onclick="staff_link_validition()" class="nav-link text-light Navbar_hover" href="# "><span class="navbar_first_charecter">S</span>taffs</span>
                                        </li></ul>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link text-light Navbar_hover" href="fasility.html "><span class="navbar_first_charecter">F</span>acility</a>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link text-light Navbar_hover" to="/gallery"><span class="navbar_first_charecter">G</span>allery</Link>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link text-light Navbar_hover" href="admision.php"><span class="navbar_first_charecter">A</span>dmission</a>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link text-light Navbar_hover" to="/result"><span class="navbar_first_charecter">R</span>esult</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link text-light Navbar_hover" to="/notice"><span class="navbar_first_charecter">N</span>otice</Link>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link text-light Navbar_hover" href="comment.php"><span class="navbar_first_charecter">C</span>ontact</a>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link text-light Navbar_hover" to="/admin"><span class="navbar_first_charecter">A</span>dmin</Link>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link text-light Navbar_hover" href="https://almahfuz2019-github-io.translate.goog/siachs-School/?_x_tr_sl=en&_x_tr_tl=bn&_x_tr_hl=en-US&_x_tr_pto=nui"><span class="navbar_first_charecter">BD</span></a>
                                    </li>
                               </ul>
                        </div>
                        <div class="phone_number ">
                            <a class="nav-link text-light text-center Navbar_hover" href="tel:01787878743"><span class="navbar_first_charecter">+880</span>1787878743</a></div>
                    </div>
                </div>
            </nav>

     );
};
export default Navbar;