import React from 'react'
import wallpaper from '../Images/wallpaper.jpg'
import wallpaper2 from '../Images/wallpaper2.jpg'
import wallpaper3 from '../Images/wallpaper3.jpg'
import './Navbar.css';
import { Card, Grid } from '@mui/material'
import shoes from '../Images/shoes.jpg'
import phone from '../Images/phone.jpg'
import watch from '../Images/watch.jpg'
import camera from '../Images/camera.jpg'
import CountUp from 'react-countup'
import Slider from "react-slick";
const Homepage = () => {

    var hero = {
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const wallp = [wallpaper, wallpaper2, wallpaper3];
    const info = [
        { x: "0", name: shoes, y: "0" },
        { x: "0", name: phone, y: "0" },
        { x: "0", name: watch, y: "55%" },
        { x: "22%", name: camera, y: "0" },
        { x: "0", name: shoes, y: "0" },
        { x: "0", name: phone, y: "0" },
        { x: "0", name: watch, y: "55%" },
        { x: "22%", name: camera, y: "0" },];
    return (
        <div>
            <Grid container spacing={2} style={{overflowX:"hidden"}}>
                <Grid item xs={12}>
                    <Slider {...hero}>
                        {wallp.map(item => {
                            return (
                                <div>
                                    <Grid container spacing={2}>
                                        {/*hero*/}
                                        <Grid item xs={12} style={{ marginTop: "8vh", height: '70vh', backgroundImage: `url(${item})`, backgroundSize: 'cover', backgroundPositionY: "40%" }}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={1}></Grid>
                                                <Grid item sm={4} xs={6} md={4}
                                                    style={{
                                                        backgroundColor: "white", marginTop: "15vh", height: "50vh",
                                                        borderTop: "10px solid #023e84"
                                                    }}>
                                                    <Grid container spacing={2} >
                                                        <Grid item xs={12} style={{ fontSize: "2.3rem", textAlign: "left", color: "#023e84", fontWeight: "600" }} data-aos="fade-left">
                                                            WE ARE <br />TRENDSETTERS </Grid>
                                                        <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left", color: "#023e84" }}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        })}
                    </Slider>
                </Grid>
                {/*info cards to  eb connected in about us*/}
                <Grid item xs={12} style={{ paddingRight: "15vh", paddingTop: "7vh", paddingBottom: "5vh" }}>
                    <Grid container spacing={2} padding={2} paddingLeft={8}>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: "blue", height: "80vh" }}></Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Card sx={{ backgroundColor: "blue", height: "39vh" }}>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ backgroundColor: "blue", height: "39vh" }}>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ backgroundColor: "blue", height: "39vh" }}>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ backgroundColor: "blue", height: "39vh" }}>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
                {/*just line*/}
                <Grid item xs={12} style={{ fontSize: "2rem", fontWeight: "650", wordSpacing: "10px", paddingTop: "7vh" }}>
                    Lorem ipsum <span style={{ color: "#023e84" }}>dolor sit amet</span>, consectetur adipiscing elit
                </Grid>
                <Grid item xs={12} style={{ fontSize: "1.5rem", padding: "5vh 10vh" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Grid>
                {/*products*/}
                <Grid item xs={12} style={{ marginBottom: "5vh"}}>
                    <Slider {...settings}>
                        {info.map((item) => {
                            return (
                                <div>
                                    <div style={{
                                        height: '45vh', backgroundImage: `url(${item.name})`,
                                        backgroundSize: "cover", backgroundPositionY: item.y, backgroundPositionX: item.x
                                    }}></div>
                                </div>
                            )
                        })}
                    </Slider>
                </Grid>
                {/*counter*/}
                {/*<Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ fontSize: "2.3rem", fontWeight: "650", wordSpacing: "10px", padding: "4vh 7vh", color: "#4fcbe9" }}>
                            OUR WORLWIDE USERS
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ fontSize: "2.3rem", color: "#4fcbe9", fontWeight: "600" }}>
                                    <span>???</span><CountUp end={433000000} duration={10} />
                                </Grid>
                                <Grid item xs={12} style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                                    Value of service delivered annually
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ fontSize: "2.3rem", color: "#4fcbe9", fontWeight: "600" }}>
                                    <CountUp end={100000} duration={7} /><span>+</span>
                                </Grid>
                                <Grid item xs={12} style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                                    Number of Products delivered daily
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ fontSize: "2.3rem", color: "#4fcbe9", fontWeight: "600" }}>
                                    <CountUp end={7000} duration={7} /><span>+</span>
                                </Grid>
                                <Grid item xs={12} style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                                    Total number of Hourly Active Users
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ fontSize: "2.3rem", color: "#4fcbe9", fontWeight: "600" }}>
                                    <CountUp end={600} duration={7} /><span>+</span>
                                </Grid>
                                <Grid item xs={12} style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                                    Number of Brands with Us
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>*/}
            </Grid>
        </div>
    )
}

export default Homepage