import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Student = () => {
    const params = useParams()
    const [student,setStudent] = useState({})
    const getStudent = (id) => {
        axios(`http://localhost:4444/students?id=${id}`)
            .then(({data}) => setStudent(data[0]))
            .catch((err) => alert(err))
    }
    useEffect(() => {
        getStudent(params.id)
    },[params])
    return (
        <section className={"student"}>
            <div className="container">
                <div className="student__card">
                    <img className='student__card-img' src={`../${student.img}`} alt=""/>
                    <div className="student__card-info">
                        <p className='student-name'>
                            name: {student.name}
                        </p>
                        <p className='student-rating'>
                            rating: {student.rating}
                        </p>
                        <p className='student-faculty'>
                            faculty: {student.faculty}
                        </p>
                        <p className='student-line'>
                            line: {student.line}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Student;