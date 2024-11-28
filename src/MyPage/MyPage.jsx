import React from "react";
import { Routes, Route } from "react-router-dom";
import './MyPage.css';


const MyPage = () => {
    return (
    <div className="mypage">
        <div className="container">
            <div className="mypage-menubar">
                <div className="menu">회원정보</div>
                <br className="menu-line"/>
                <div className="menu">내가쓴글</div>
                <br className="menu-line"/>
                <div className="menu">찜한리스트</div>
            </div>
        </div>
        </div>
);  
    };s

export default MyPage;