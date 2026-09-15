import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes";
import ErrorBoundary from "@/components/common/ErrorBoundary.jsx";
import { featchMe } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";












export default function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(featchMe())
    }
  }, [dispatch])


  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
