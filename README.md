# 📊 Sales Dashboard 
### Real-Time Revenue Tracking: 
- 📈 Track revenue performance
-  💰 Record sales activity
- 👥 Compare representative performance
-  ⚡ Receive realtime dashboard updates
-  🔒 Access data securely through role-based permissions

<br> ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite) ![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase) ![Postgres](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql) 
<br>

## Live Demo
https://business-sales-dashboard-app.netlify.app/signin

> This project demonstrates full-stack development concepts including authentication, authorization, database security, realtime subscriptions, state management, and data visualization.


## Features

#### Authentication & User Management

* Secure user registration and login using Supabase Authentication
* Session persistence across page refreshes
* Protected routes for authenticated users only
* Role selection during account creation
* Centralized authentication state management with React Context


#### Role-Based Access Control

The application supports two account types:

    1. Admin
    
    * View and manage sales activity for all representatives
    * Update any sales record
    * Select any sales representative when recording deals
    
    
    2. Sales Representative
    
    * View personal sales performance
    * Submit sales activity under their own account
    * Restricted from modifying other representatives' data


#### Sales Tracking

* Record new sales activity through a dedicated deal form
* Automatically update representative revenue totals
* Associate sales with individual team members
* Simple workflow for tracking quarterly performance

#### Real-Time Analytics

* Live dashboard updates powered by Supabase Realtime
* Automatic chart refreshes when sales data changes
* Revenue aggregation by sales representative
* Team performance comparison through visual reporting

#### Data Visualization

* Interactive bar chart displaying total quarterly sales
* Representative-level performance metrics
* Dynamic chart scaling based on current sales totals

#### Security

* Protected frontend routes
* Session-based authentication
* Database-level authorization using Supabase Row Level Security (RLS)
* Role-based permissions enforced both in the UI and database

#### Accessibility

* Semantic form structure
* ARIA labels and descriptions
* Screen reader support
* Accessible error messaging
* Loading and pending state indicators

---

## Installation

#### Clone the repository:

```bash
git clone <your-repository-url>
cd sales-dashboard
```

Install dependencies:

```bash
npm install
```

#### Environment Variables

Create a `.env` file in the project root.

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```


#### Running the Project

Start the development server:

```bash
npm run dev
```
---

## Screenshots
**Sign up view:**

<img height="350" alt="Screenshot 2026-06-23 at 9 49 40 AM" src="https://github.com/user-attachments/assets/80cfddc1-ac60-4c8c-a2f6-4f097f02ba6d" />

**Sign in view:**

<img height="350" alt="Screenshot 2026-06-23 at 9 49 18 AM" src="https://github.com/user-attachments/assets/472047f4-f6c5-4637-992b-53ff4c883c25" />
 


**Admin View:**

<img height="350" alt="Screenshot 2026-06-23 at 10 20 07 AM" src="https://github.com/user-attachments/assets/9e8994ca-06f9-4714-a6ab-f4b6e687eab8" />

**Sales Representative  View:**

<img height="350" alt="Screenshot 2026-06-23 at 10 19 11 AM" src="https://github.com/user-attachments/assets/494fc552-24de-4bc2-8d17-99e74c9a6150" />

---

## Key Learning Outcomes

This project demonstrates:

* React application architecture
* Context API state management
* Authentication and authorization
* Protected routing
* Real-time data synchronization
* Database security with RLS
* Supabase integration
* Interactive data visualization
* Accessible form design
* Full-stack application development

