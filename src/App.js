import { Height } from "@mui/icons-material";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import './components/Sidebar.css';
import Index from './index';

import Dashboard from './pages/dashboard/Dashboard'
import Orders from './pages/orders/Orders'
import Tracking from './pages/orders/Tracking'
import New from './pages/orders/New'
import Settings from './pages/settings/Settings'
import Automation from './pages/automation/Automation'
import {BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{backgroundColor: '#EDB678', minHeight: '100vh', display:'flex'}}>
      <Sidebar/>
      <Topbar/>
      <div className="main">
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="/invoices" element={<Orders />} />
          <Route path="/orders/tracking" element={<Tracking />} />
          <Route path="/orders/new" element={<New />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/automation" element={<Automation />} />
          
          <Route path="*" element={<Orders />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
