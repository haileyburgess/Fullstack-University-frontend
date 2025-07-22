# Fullstack University Application

A full-stack university portal application with React frontend and Node.js backend, featuring departments, faculty, and administrative functionality.

## 🎯 Features

### 1. Department Management

- **View All Departments**: Browse a grid of academic departments with icons and descriptions
- **Department Details**: Click any department to view:
  - Department name and description
  - Contact information (phone, email, location)
  - List of faculty members in that department
  - Visual representation with department-specific icons

### 2. Faculty Directory

- **View All Faculty**: Complete directory of all faculty members across departments
- **Search & Filter**:
  - Filter by department using dropdown
  - Search by name, title, or department
- **Faculty Profiles**: Click any faculty member to view detailed information:
  - Name, title, and department affiliation
  - Contact information (phone, email, office location)
  - Comprehensive biography
  - Research areas displayed as tags

### 3. Administrative Portal

- **User Registration**: Anyone can create an admin account
- **User Authentication**: Login/logout functionality
- **Admin Dashboard**:
  - Overview statistics (departments, faculty, programs)
  - Quick action buttons for content management
  - User session management

## 🚀 Quick Start

### Prerequisites

- Node.js (v20 or higher)
- PostgreSQL
- Git

### 1. Clone Both Repositories

```bash
# Clone frontend
git clone https://github.com/haileyburgess/Fullstack-University-frontend.git
cd Fullstack-University-frontend

# Clone backend (in a separate directory)
git clone https://github.com/haileyburgess/Fullstack-University-backend.git
cd Fullstack-University-backend
```

### 2. Backend Setup

```bash
cd Fullstack-University-backend

# Install dependencies
npm install

# Set up database
createdb university_db

# Set up environment variables
echo "DATABASE_URL=postgresql://localhost:5432/university_db" > .env
echo "JWT_SECRET=your-super-secret-jwt-key-for-university-app-2024" >> .env

# Initialize database
npm run db:reset

# Start backend server
npm start
```

The backend will run on `http://localhost:3002`

### 3. Frontend Setup

```bash
cd Fullstack-University-frontend/university-frontend

# Install dependencies
npm install

# Set up environment variables
echo "REACT_APP_API_BASE_URL=http://localhost:3002/api" > .env.local

# Start frontend server
npm start
```

The frontend will run on `http://localhost:3000`

### 4. Wireframe (Static Version)

For the static wireframe version:

1. Open `index.html` in your web browser
2. Start exploring the wireframe!

### File Structure

```
Fullstack-University-frontend/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and interactions
└── README.md           # This documentation
```

## 🎨 Design Features

### Modern UI/UX

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Gradient Backgrounds**: Beautiful purple gradient theme throughout
- **Card-based Layout**: Clean, organized presentation of information
- **Hover Effects**: Interactive elements with smooth transitions
- **Font Awesome Icons**: Professional iconography for departments and faculty

### Navigation

- **Sticky Header**: Navigation bar stays at top while scrolling
- **Active States**: Visual feedback for current section
- **Breadcrumb Navigation**: Easy navigation back to previous sections

### Interactive Elements

- **Clickable Cards**: All department and faculty cards are interactive
- **Form Validation**: Admin forms include client-side validation
- **Real-time Search**: Faculty search updates results as you type
- **Filter Dropdowns**: Department-based filtering for faculty directory

## 📱 User Interactions

### 1. Browsing Departments

1. Click "Departments" in the navigation
2. Browse the grid of department cards
3. Click any department card to view detailed information
4. Use the "Back to Departments" button to return

### 2. Exploring Faculty

1. Click "Faculty" in the navigation
2. Use the department filter dropdown to narrow results
3. Type in the search box to find specific faculty members
4. Click any faculty card to view their detailed profile
5. Browse research areas and contact information

### 3. Admin Functions

1. Click "Admin" in the navigation
2. Choose to register a new account or login
3. Fill in the required information
4. Access the admin dashboard with statistics
5. Use quick action buttons for content management

## 🔧 Technical Implementation

### Frontend Technologies

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks required
- **Font Awesome**: Professional icon library

### Data Management

- **Sample Data**: Mock data for departments and faculty
- **Local Storage**: Session management for admin users
- **Dynamic Content**: JavaScript-driven content updates

### Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Sample Data

The wireframe includes realistic sample data for:

### Departments

- Computer Science (12 faculty members)
- Mathematics (8 faculty members)
- Physics (10 faculty members)
- English Literature (6 faculty members)

### Faculty Members

- Dr. Sarah Johnson (Computer Science)
- Dr. Michael Chen (Computer Science)
- Dr. Emily Rodriguez (Mathematics)
- Dr. James Wilson (Physics)
- Dr. Lisa Thompson (English Literature)
- Dr. David Kim (Computer Science)

Each faculty member includes:

- Professional title and department
- Contact information
- Detailed biography
- Research areas and specializations

## 🔮 Future Enhancements

This wireframe serves as a foundation for a full-stack application. Potential enhancements include:

### Backend Integration

- RESTful API endpoints for data management
- Database integration (PostgreSQL, MongoDB)
- User authentication with JWT tokens
- File upload for profile images

### Additional Features

- Course catalog and scheduling
- Student portal and registration
- News and announcements
- Event calendar
- Research publications database
- Alumni directory

### Advanced Admin Features

- Content management system (CMS)
- User role management
- Analytics and reporting
- Bulk data import/export
- Image and media management

## 📝 Development Notes

### Code Organization

- **Modular JavaScript**: Functions organized by feature
- **CSS Architecture**: Logical grouping of styles
- **Semantic HTML**: Accessible and SEO-friendly markup

### Browser Compatibility

- Modern browsers with ES6+ support
- Graceful degradation for older browsers
- Mobile-first responsive design

### Performance Considerations

- Optimized images and icons
- Efficient DOM manipulation
- Minimal external dependencies

## 🤝 Contributing

This wireframe is designed to be easily extensible. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Note**: This is a wireframe/prototype intended for demonstration and development purposes. In a production environment, proper security measures, data validation, and backend integration would be implemented.
