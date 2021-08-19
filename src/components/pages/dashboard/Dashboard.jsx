import React from 'react';
import './dashboard.scss';




export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1>Aside!</h1>
      </aside>
      <section className="dashboard-content">
        <h1>Content</h1>
      </section>
    </div>
  );
}
