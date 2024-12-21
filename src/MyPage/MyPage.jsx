import React from "react";
import { Routes, Route } from "react-router-dom";
import './MyPage.css';
import { useState } from "react";
import MyPageProfile from "./MyPageProfile";
import MyPageList from "./MyPageList";
import MyPageWrite from "./MyPageWrite";


const MyPage = () => {

    const [currentComponent, setCurrentComponent] = useState('profile');

    const renderComponent = () => {
        switch (currentComponent) {
            case 'profile':
                return <MyPageProfile />;
            case 'mylist':
                return <MyPageList />;
            case 'write':
                return <MyPageWrite />;
            default:
                return <MyPageProfile />;
        }
    };

    return (
    <div className="mypage">
        <div className="container">
            <div className="mypage-menubar">
                <div className="menu" onClick={() => setCurrentComponent('profile')}>회원정보</div>
                <div className="menu" onClick={() => setCurrentComponent('write')}>내가쓴글</div>
                <div className="menu" onClick={() => setCurrentComponent('mylist')}>찜한리스트</div>
            </div>
            <div className="menu-content">
                {renderComponent()}
            </div>
        </div>
        </div>
);  
    };

export default MyPage;