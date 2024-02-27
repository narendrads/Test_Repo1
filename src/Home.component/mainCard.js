import React, { useState } from 'react';

export function MainCardcomponent(){

    var courses=[
        {Title:"Shirt",Poster:"./images/shart.png",Topics:["Oxford Button-Down Shir","Dress Shirt","Polo Shirt"] },
        {Title:"Tshirt",Poster:"./images/Tshart.png",Topics:["Elite Appare","Premium Prints","PrimePro Tees"] },
        {Title:"Blazer",Poster:"./images/bleser.png",Topics:["Cape Blazer","Cape Blazer","Tuxedo Blazer"] },
        {Title:"shoes",Poster:"./images/shove.png",Topics:["Knee-Hi","STRUT","Stiletto"] },
        {Title:"shoes",Poster:"./images/heihels.png",Topics:["Knee-Hi","STRUT","Stiletto"] },
        {Title:"shoes",Poster:"./images/shove.png",Topics:["Knee-Hi","STRUT","Stiletto"] },
        {Title:"shoes",Poster:"./images/heihels.png",Topics:["Knee-Hi","STRUT","Stiletto"] },
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
                        <img src={course.Poster} className="card-card-img-top" height="150" alt={course.Title}/>
                        <div className="card-header">{course.Title}</div>
                        <div className="card-body">
                            <ul>
                                {course.Topics.map(topic =>
                                    <li key={topic}>{topic}</li>  
                                )}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary w-100" onClick={() => handleAddToCart(course)}>Add-to-cart</button>
                        </div>
                    </div>
                )}
            </div>
            {selectedCourse && (
                <div className="card mt-4">
                    <div className="card-header">{selectedCourse.Title}</div>
                    <div className="card-body">
                        <img src={selectedCourse.Poster} className="card-img-top w-25" alt={selectedCourse.Title} />
                        <ul>
                            {selectedCourse.Topics.map(topic =>
                                <li key={topic}>{topic}</li>  
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
