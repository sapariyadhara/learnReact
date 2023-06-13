import React from 'react';


const person = [
    {
        name: "Amit",
        age: 25,
        course: [
            "c",
            "html"
        ]
    }

]

const myObj = [
    {
        name: "jd",
        age: 20,
        cars: {
            car1: "ford",
            car2: "breza",
            car3: "BMW"
        },
    },
    {
        name: "dhara",
        age: 30,
        cars: {
            car1: "ford",
            car2: "breza",
            car3: "BMW"
        },
    },

    {
        name: "kn",
        age: 40,
        cars: {
            car1: "ford",
            car2: "breza",
            car3: "BMW"
        }
    }
]
function StudentsFun(props) {
    return (
        <div>
            <h1> I am Student Function Base Component. </h1>
            {
                person.map((v, i) => {
                    return (
                        <>
                            <h3>{v.name}</h3>
                            <h3>{v.age}</h3>
                            {
                                v.course.map((v) => {
                                    return (
                                        <>
                                            <h3>{v}</h3>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
            {
                myObj.map((v , i) => {
                    return(
                        //fregment 
                        <>
                        <h3>{v.name}</h3>
                        <h3>{v.age}</h3>
                        <h3>{v.cars.car1}</h3>
                        <h3>{v.cars.car2}</h3>
                        <h3>{v.cars.car3}</h3>
                        </>
                    )
                })
            }
        </div>
    );
}

export default StudentsFun;