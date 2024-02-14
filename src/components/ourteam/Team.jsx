import React from "react";

//import avatar
import {Avatar} from "@nextui-org/react";

// import slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from '@mui/material/Stack';

// import icons
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn  } from "react-icons/fa6";

export default function Team() {
    const imagesetting = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4,
                infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                initialSlide: 1,
                dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                }
            }
        ]
    };
    const team = [
        {
            id:0,
            "name": 'Ashutosh Jain',
            "job_role": 'Senior Project Head',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            "id":1,
            "name": 'Prashant Saraswat',
            "job_role": 'Project Manager',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            "id":2,
            "name": 'Shivam Sharma',
            "job_role": 'Marketing Head',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            "id":3,
            "name": 'Mohit Saraswat',
            "job_role": 'Marketing Head (CRM)',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            "id":4,
            "name": 'Rudrani Pal',
            "job_role": 'React Developer',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            "id":5,
            "name": 'Farheen Khan',
            "job_role": 'Front-end Developer',
            "image_url": "https://i.postimg.cc/2jKJ1V7K/farheen.png",
        },
        {
            "id":6,
            "name": 'Kanishka Singhal',
            "job_role": 'JS Developer',
            "image_url": "https://i.postimg.cc/7LzsJVXs/kanishka.png",
        },
        {
            "id":7,
            "name": 'Ayush Goyal',
            "job_role": 'Front-end Developer',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            "id":8,
            "name": 'Hemant Bhargav',
            "job_role": 'Full Stack Developer',
            "image_url": "https://i.postimg.cc/WpGcxsfq/hemant.png",
        },
        {
            "id":9,
            "name": 'Karan Jadaun',
            "job_role": 'MERN Stack Developer',
            "image_url": "https://i.postimg.cc/Z5Fm346h/i2-removebg.png",
        },
        {
            "id":10,
            "name": 'Salman Khan',
            "job_role": 'Front-end Developer',
            "image_url": "https://i.postimg.cc/pTSW6sQQ/salmon.jpg",
        },
        {
            "id":11,
            "name": 'Syd Sufiyan Ali',
            "job_role": 'Front-end Developer',
            "image_url": "https://i.postimg.cc/RhtpKTMV/sufiyan.jpg",
        },
        {
            "id":12,
            "name": 'Sambhav Goswami',
            "job_role": 'Figma Designer',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            "id":13,
            "name": 'Tanishk Jain',
            "job_role": 'Front-end Developer',
            "image_url": "https://i.postimg.cc/MZD1sQxc/rtashu.png",
        },
        {
            "id":14,
            "name": 'Abbas Khan',
            "job_role": 'Template Designer',
            "image_url": "https://i.postimg.cc/1tVhfs66/Abbas-removebg.png",
        },
        {
            "id":15,
            "name": 'Arpit Jain',
            "job_role": 'Front-end Developer',
            "image_url": "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
    ]
return(
        <div className="overflow-hidden py-12 bg-purple-200/40 iPhone4and4S:py-6 iPad1and2andMiniandAir:py-8">
            <h3 id="team_heading" className="uppercase font-semibold text-center text-6xl mb-8 iPhone4and4S:text-4xl iPad1and2andMiniandAir:text-5xl iPad1and2andMiniandAir:mb-14 Laptops:mb-20" >our leaders</h3>
            <Slider {...imagesetting} >
                {team.map((tdetails) => {
                    return(
                        <Stack direction="row" className="mb-6" key={tdetails.id}>
                                <div id="team-details-sec" className="flex flex-col items-center justify-center">
                                    <Avatar src={tdetails.image_url} className="w-44 h-44 text-large" />
                                    <h2 id="name-tag" className="font-medium text-2xl uppercase mt-6">{tdetails.name}</h2>
                                    <p className="discription_text text-lg">{tdetails.job_role}</p>
                                    <div id="icons-sec" className="flex w-[100px]">
                                        <div id="icon-sec" className="w-full inline-flex justify-evenly mt-3">
                                            <i className="border-2 rounded-full p-2 bg-gray-600"><a href="https://twitter.com/"><FaXTwitter className="text-md text-white "/></a></i>
                                            <i className="border-2 rounded-full p-2 bg-blue-600"><a href="https://in.linkedin.com/"><FaLinkedinIn  className="text-lg text-white"/></a></i>
                                        </div>
                                    </div>
                                </div>
                        </Stack>
                    )
                })}
        </Slider>
        </div>
    );
}