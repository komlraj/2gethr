import React from "react";
import "./App.css";
import { Modal, Button } from "antd";
import { useState } from "react";

function App() {
  const [dialogVisible, setDialogVisible] = useState(false);

  function showModal() {
    setDialogVisible(true);
    console.log(dialogVisible);
  }

  function handleOk(e) {
    console.log(e);
    setDialogVisible(true);
  }

  function handleCancel(e) {
    console.log(e);
    setDialogVisible(true);
  }
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <span className="nav-logo">
            <span className="text-yellow">2</span>
            <span className="text-gray">gethr</span>
          </span>
          <nav>
            <span className="nav-menu">Home</span>
            <span className="nav-menu">About</span>
            <span className="nav-menu">Contact Us</span>
          </nav>
        </div>
      </header>
      <main className="hero-section">
        <div className="hero1content">
          <div>
            <h1 className="title">2gethr</h1>
            <p>
              <span>COWORKING.</span>
              <span>PRIVATE OFFICES.</span> <span>MANAGED OFFICES.</span>
            </p>
          </div>
        </div>
        <div className="hero2content">
          <ul className="hero2-text">
            <li>WORK</li>
            <li>FUN</li>
            <li>ENGAGE</li>
          </ul>
        </div>
      </main>
      <div className="amenities-section">
        <div className="amenities-card">
          <h2 className="sub-title">AMENITIES:</h2>
          <div className="amenities-row">
            <div className="amenities-cell">
              <i className="fas fa-wifi logo" onClick={showModal} />
              <span>High Speed Internet</span>
            </div>
            <div className="amenities-cell">
              <i className="far fa-clock logo" onClick={showModal} />
              <span>Open 24/7</span>
            </div>
            <div className="amenities-cell">
              <i className="fas fa-mug-hot logo" onClick={showModal} />
              <span>Unlimited Beverages</span>
            </div>
          </div>
          <div className="amenities-row">
            <div className="amenities-cell">
              <i className="fas fa-network-wired logo" onClick={showModal} />
              <span>Network using 2gethr app</span>
            </div>
            <div className="amenities-cell">
              <i className="fas fa-user-friends logo" onClick={showModal} />
              <span>Meeting Rooms</span>
            </div>
            <div className="amenities-cell">
              <i className="fas fa-calendar-alt logo" onClick={showModal} />
              <span>Curated Events</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <ul>
          <li>WORK</li>
          <li>FUN</li>
          <li>ENGAGE</li>
        </ul>
      </div>
      <Modal
        title="Basic Modal"
        visible={dialogVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default App;
