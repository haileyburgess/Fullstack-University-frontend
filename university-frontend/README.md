# University Portal - React Frontend

A modern React application for exploring university departments and faculty with React Router and API integration.

## 🚀 Features

### Core Functionality

- **Home Page**: Welcome screen with navigation to departments and faculty
- **Departments List**: Browse all academic departments with images and descriptions
- **Department Details**: View detailed information about specific departments including faculty members
- **Faculty Directory**: Complete faculty listing with search and filter capabilities
- **Faculty Profiles**: Detailed faculty member profiles with research areas and contact information

### Technical Features

- **React Router**: Client-side routing with dynamic routes
- **API Integration**: Backend-ready with fallback to dummy data
- **Responsive Design**: Mobile-first approach with modern UI
- **Search & Filter**: Real-time search and department filtering
- **Loading States**: Professional loading spinners and error handling

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks and functional components
- **React Router v6**: Client-side routing
- **CSS3**: Modern styling with Flexbox and Grid
- **Font Awesome**: Professional iconography
- **Fetch API**: HTTP requests with error handling

## 📁 Project Structure

```
src/
├── api/                    # API services and data
│   ├── apiService.js      # Base API service
│   ├── departmentApi.js   # Department API methods
│   ├── facultyApi.js      # Faculty API methods
│   └── dummyData.js       # Sample data for development
├── pages/                 # Page components
│   ├── Home.js           # Home page
│   ├── DepartmentsList.js # Departments listing
│   ├── DepartmentDetail.js # Single department view
│   ├── FacultyList.js    # Faculty directory
│   ├── FacultyDetail.js  # Single faculty profile
│   └── *.css             # Page-specific styles
├── App.js                # Main app component with routing
├── App.css               # Global styles
└── index.js              # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd university-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📊 Sample Data

The application includes comprehensive dummy data for:

### Departments (6 total)

- Computer Science (12 faculty members)
- Mathematics (8 faculty members)
- Physics (10 faculty members)
- English Literature (6 faculty members)
- Biology (15 faculty members)
- Chemistry (9 faculty members)

### Faculty Members (8 total)

Each faculty member includes:

- Professional profile with image
- Contact information
- Detailed biography
- Research areas
- Education background
- Publication count
- Awards and recognition

## 🔌 API Integration

### Backend Ready

The application is designed to work with a backend API. API services are configured to:

1. **Try backend first**: Attempt to fetch data from the backend
2. **Fallback to dummy data**: Use local data if backend is unavailable
3. **Error handling**: Graceful error handling with user feedback

### API Endpoints Expected

```
GET /api/departments          # All departments
GET /api/departments/:id      # Single department
GET /api/faculty             # All faculty
GET /api/faculty/:id         # Single faculty member
GET /api/faculty/department/:id  # Faculty by department
GET /api/faculty/search?q=query  # Search faculty
```

### Environment Configuration

Set the backend URL in your environment:

```bash
REACT_APP_API_BASE_URL=http://localhost:3001/api
```

## 🎨 Design Features

### Modern UI/UX

- **Gradient Theme**: Beautiful purple gradient throughout
- **Card-based Layout**: Clean, organized presentation
- **Hover Effects**: Interactive elements with smooth transitions
- **Professional Icons**: Font Awesome integration
- **Responsive Grid**: CSS Grid and Flexbox layouts

### User Experience

- **Intuitive Navigation**: Clear breadcrumbs and back buttons
- **Search Functionality**: Real-time search across faculty
- **Filter Options**: Department-based filtering
- **Loading States**: Professional loading indicators
- **Error Handling**: User-friendly error messages

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_BASE_URL=your-backend-url
```

## 🔮 Future Enhancements

### Planned Features

- **Admin Panel**: Content management system
- **User Authentication**: Login/logout functionality
- **Advanced Search**: Multi-criteria search
- **Image Upload**: Profile and department image management
- **Real-time Updates**: WebSocket integration
- **Analytics**: User behavior tracking

### Backend Integration

- **Database**: PostgreSQL or MongoDB integration
- **Authentication**: JWT token management
- **File Storage**: Image upload and management
- **Caching**: Redis for performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or issues:

1. Check the documentation
2. Review existing issues
3. Create a new issue with detailed information

---

**Note**: This is a frontend application designed to work with a backend API. The dummy data allows for full functionality during development and demonstration.
