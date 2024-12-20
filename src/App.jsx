import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import { generateWorkout } from './utils/functions';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import WorkoutHistory from './pages/WorkoutHistory';
import Profile from './pages/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import NavigationBar from './components/Navbar';


function App() {
  // State variables to manage workout, selected workout type (poison), muscles, and goal
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  // Function to update the workout based on selected muscles, poison, and goal
  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ poison, muscles, goal })
    setWorkout(newWorkout)

    // Navigate to the workout section
    window.location.href = '#workout'
  }

  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />
            <Route path="/history" element={
              <ProtectedRoute>
                <WorkoutHistory />
              </ProtectedRoute>} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>} />
            <Route path="/generator" element={
              <ProtectedRoute>
                <Generator
                  poison={poison}
                  setPoison={setPoison}
                  muscles={muscles}
                  setMuscles={setMuscles}
                  goal={goal}
                  setGoal={setGoal}
                  updateWorkout={updateWorkout} />
                {workout && (<Workout workout={workout} />)}
              </ProtectedRoute>} />
          </Routes>
        </main>
      </Router>
    </Provider>

  )
}

export default App
