import React, { useState } from 'react';

export function MainCardcomponent2(){

    var courses=[
        {Poster:"./images/1.png"},
        {Poster:"./images/2.png"},
        {Poster:"./images/3.png"},
        {Poster:"./images/4.png"},
        {Poster:"./images/5.png"},
        {Poster:"./images/6.png"},
        {Poster:"./images/1.png"},
        {Poster:"./images/2.png"},
        {Poster:"./images/3.png"},
        {Poster:"./images/4.png"},
        {Poster:"./images/5.png"},
        {Poster:"./images/6.png"}
        
       ]

    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleAddToCart = (course) => {
        setSelectedCourse(course);
    };

    return (
        <div className="container-fluid">
            <h2>MEDAL WORTHY BRANDS TO BAG</h2>
            <div className="d-flex flex-wrap">  
                {courses.map(course =>
                    <div key={course.Title} className="card m-2 p-2 ">
                        <img src={course.Poster} className="card-card-img-top" height="250"width="203" />
                        <div className="card-footer">
                            <button className="btn btn-primary w-100" onClick={() => handleAddToCart(course)}>Add-to-cart</button>
                        </div>
                    </div>
                )}
            </div>
            {selectedCourse && (
                <div className="card mt-4">
                    
                    <div className="card-body">
                        <img src={selectedCourse.Poster}  width="203"  />
                        
                    </div>
                </div>
            )}
        </div>
    );
}
