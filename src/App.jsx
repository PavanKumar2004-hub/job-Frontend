import React from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Auth/Login';
import SingUp from './pages/Auth/SingUp';
import ApplicationViewer from './pages/Employer/ApplicationViewer';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import EmployerProfilePage from './pages/Employer/EmployerProfilePage';
import JobPostingForm from './pages/Employer/JobPostingForm';
import ManageJobs from './pages/Employer/ManageJobs';
import JobDetails from './pages/JobSeeker/JobDetails';
import JobSeekerDashboard from './pages/JobSeeker/JobSeekerDashboard';
import SavedJobs from './pages/JobSeeker/SavedJobs';
import UserProfile from './pages/JobSeeker/UserProfile';
import LandingPage from './pages/LandingPage/LandingPage';
import ProtectedRoute from './routes/ProtectedRoute';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* public routes here */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/find-jobs' element={<JobSeekerDashboard />} />
          <Route path='/job/:jobId' element={<JobDetails />} />
          <Route path='/saved-jobs' element={<SavedJobs />} />
          <Route path='/profile' element={<UserProfile />} />

          {/* protected routes here */}

          <Route element={<ProtectedRoute requiredRole='employer' />}>
            <Route path='/employer-dashboard' element={<EmployerDashboard />} />
            <Route path='/post-job' element={<JobPostingForm />} />
            <Route path='/manage-jobs' element={<ManageJobs />} />
            <Route path='/applicants' element={<ApplicationViewer />} />
            <Route path='/company-profile' element={<EmployerProfilePage />} />
          </Route>

          {/* catch all route  */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: '13px',
          },
        }}
      />
    </AuthProvider>
  );
};

export default App;
