# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


src/
├── components/          # Existing components
├── features/           # Redux slices
│   ├── auth/
│   ├── workouts/
│   └── timer/
├── pages/             # Route pages
│   ├── Login/
│   ├── Register/
│   ├── Dashboard/
│   ├── WorkoutHistory/
│   └── Profile/
├── routes/            # Route configuration
├── services/          # API services
├── store/             # Redux store
└── utils/             # Existing utilities

The main features will include:

User authentication (login/register)
Workout generation (existing functionality)
Workout tracking with stopwatch
Workout history with CRUD operations
Basic user profile

