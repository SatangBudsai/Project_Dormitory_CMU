import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './admin/addmin.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// const rooms = [{ id: 1, buildingNo: '1', roomNo: '5', status: 'Occupied'}];
// axios.get('http://localhost:8000/rooms')
// // GET /rooms     => rooms  [{ id: 1, buildingNo: '1', roomNo: '5'}];
// // GET /rooms/:id  { id: 1, buildingNo: '1', roomNo: '5', status: 'Occupied'}
// // POST /rooms
// // PUT /rooms/:id
// // DELETE /rooms/:id