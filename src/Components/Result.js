import React from 'react';
const Result = () => {
     return (
          <>
          <div class="container">
        <h1 class="text-center my-5"><span class="text-primary fw-bolder blockquote-footer">Res</span><span class="my_own_color fw-bolder">ult</span></h1>
        <div class="form py-5 register-form bg-dark">
            <div class="note ">
            </div>
            <div class="form-content mx-5" id="contact">
                <div class="row gy-4">
                    <div class="col-md-12">
                        <label for="exampleFormControlInput1" class="form-label text-light">Your ID</label>
                        <div class="form-group my-3">
                            <input id="your_id" type="text" class="form-control" placeholder="ex-458239" value="" />
                        </div>
                        <div id="classes" class="col-md-12">

                            <label for="exampleFormControlInput1" class="form-label text-light">Cless</label>
                            <select class="form-select bg-light" id="inputGroupSelect01">
                <option selected>Choose your class...</option>
                <option value="1">Class-6</option>
                <option value="1">Class-7</option>
                <option value="1">Class-8</option>
                <option value="1">Class-9</option>
                <option value="1">Class-10</option>
               
              </select>
                        </div>
                    </div>
                    <div class="col-md-12">

                        <label for="exampleFormControlInput1" class="form-label text-light">Year</label>
                        <select class="form-select bg-light" id="inputGroupSelect01">
            <option selected>Choose Year...</option>
            <option value="1">2010</option>
            <option value="1">2011</option>
            <option value="1">2012</option>
            <option value="1">2013</option>
            <option value="1">2014</option>
            <option value="1">2015</option>
            <option value="1">2016</option>
            <option value="1">2017</option>
            <option value="1">2018</option>
            <option value="1">2019</option>
            <option value="1">2020</option>
            <option value="1">2021</option>
          
          </select>
                    </div>
                </div>
                <div onclick="validition()" class="text-center mt-4"><button type="button" class="btn btn-light btn3 px-5 py-2  fw-bold">Submit</button></div>
                <br/>
            </div>
        </div>
    </div>
        
          </>
     );
};
export default Result;