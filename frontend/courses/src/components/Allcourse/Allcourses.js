import { useState, useEffect } from "react"
import Course from "../course/Course";

import base_url from "../../Api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses=()=>{

    useEffect(()=>{
        document.title="Dishes";
    },[]);

    //function to call server

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/dishes`).then(
        response=>{
               // console.log(response);
                console.log(response.data);
                toast.success("Menu has been loaded");
                setCourses(response.data)
        })
        .catch(error=>{
            console.log(error);
            toast.error("server down")
        })
        // axios.get("http://localhost:8084/courses").then(
        //     response=>{
        //         console.log(response.data);
        //     }
        // )
        // .catch(error=>{
        //     console.log(error);
        // })
    };

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);


    const[courses,setCourses]=useState([])

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!==id));
    };

    

    return(
        <div>
            
            <h3><center><p id="list">List of dishes are as follows</p></center></h3>

            {courses.length>0
            ? courses.map((item)=><Course key={item.id} course={item} update={updateCourses}/>):"No Item"}
            
            
            
            
        </div>
    );
}

export default Allcourses;