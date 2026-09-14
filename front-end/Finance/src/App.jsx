import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layouts/Layout';
import Notfound from './pages/Notfound/Notfound';
import Dashboard from './pages/Dashboard/Dashboard';
import Income from './pages/Income/Income';
import Expenses from './pages/Expenses/Expenses';
import Accounts from './pages/Accounts/Accounts';
import Cash from './pages/Cash/Cash';
import Debts from './pages/Debts/Debts';
import SavingsGoals from './pages/SavingsGoals/SavingsGoals';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';

function App() {
  let router = createBrowserRouter([
    {path: '/' , element: <Layout/> , children: [
      {index: true, element: <Dashboard/>},
      {path: 'Income', element: <Income />},
      {path: 'Expenses', element: <Expenses />},
      {path: 'Accounts', element: <Accounts />},
      {path: 'Cash', element: <Cash />},
      {path: 'Debts', element: <Debts />},
      {path: 'SavingsGoals', element: <SavingsGoals />},
      {path: 'Reports', element: <Reports />},
      {path: 'Settings', element: <Settings />},

      {path:'*',element: <Notfound/>},
    ]},
  ]);

  return <RouterProvider router={router} />
}

export default App
