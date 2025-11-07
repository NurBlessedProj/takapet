# Maine Coon Cattery - Admin Setup

## 🔐 Admin Authentication System

The Maine Coon Cattery now includes a secure admin authentication system to protect the dashboard and kitten management features.

## 🚀 Quick Setup

### 1. Create Admin User

Run the following command to create the first admin user:

```bash
node scripts/create-admin.js
```

**Default Admin Credentials:**

- **Username:** `admin`
- **Email:** `admin@mainecooncattery.com`
- **Password:** `admin123`
- **Role:** `super_admin`

⚠️ **IMPORTANT:** Change the default password after first login!

### 2. Access Admin Dashboard

1. Navigate to `/admin/login` in your browser
2. Use the default credentials above
3. You'll be redirected to the kitten management dashboard

## 🛡️ Security Features

### Authentication

- **JWT Tokens:** Secure token-based authentication
- **HTTP-Only Cookies:** Tokens stored in secure cookies
- **Password Hashing:** Bcrypt with salt rounds
- **Account Lockout:** 5 failed attempts locks account for 2 hours

### Protected Routes

- `/pd-page` - Add new kittens
- `/pd-page/allpd` - Manage all kittens

### User Management

- **Roles:** `admin` and `super_admin`
- **Account Status:** Active/inactive users
- **Login Tracking:** Last login and attempt monitoring

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify token
- `POST /api/auth/register` - Register new admin (super_admin only)

### Kitten Management

- `GET /api/post` - Get all kittens
- `POST /api/post` - Add new kitten
- `PUT /api/post` - Update kitten
- `DELETE /api/post` - Delete kitten

## 🎨 Admin Interface

### Login Page (`/admin/login`)

- Beautiful emerald-themed design
- Responsive layout
- Password visibility toggle
- Error handling and validation

### Dashboard Features

- **Add Kittens:** Complete form with image upload
- **Manage Kittens:** Edit, delete, and view all kittens
- **Search & Filter:** Find kittens by name, status, etc.
- **User Info:** Display current admin username
- **Logout:** Secure logout functionality

## 🔒 Environment Variables

Add these to your `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
```

## 📱 Usage

### Adding a New Kitten

1. Login to admin dashboard
2. Click "Add New Kitten"
3. Fill in basic information (name, gender, age, status)
4. Add details and upload photo
5. Submit to save

### Managing Kittens

1. Go to "All Kittens" page
2. Search or filter kittens
3. Click edit to modify details
4. Click delete to remove kitten
5. Use grid or list view

### Logout

- Click the red "Logout" button in the top-right
- You'll be redirected to login page
- Session will be cleared

## 🛠️ Development

### Database Models

- `MaineCoonAdminUser` - Admin user management
- `MaineCoon` - Kitten data storage

### Context Providers

- `AuthProvider` - Authentication state management
- `ShipmentProvider` - Existing shipment context

### Components

- `ProtectedRoute` - Route protection wrapper
- Login page with form validation
- Dashboard with CRUD operations

## 🔧 Troubleshooting

### Common Issues

1. **Login fails:** Check MongoDB connection and user exists
2. **Token expired:** Clear cookies and login again
3. **Account locked:** Wait 2 hours or reset in database
4. **Image upload fails:** Check Cloudinary configuration

### Reset Admin Password

If you need to reset the admin password:

```javascript
// Connect to MongoDB and run:
db.mainecoonadminusers.updateOne(
  { username: "admin" },
  { $set: { password: "$2a$12$newHashedPassword" } }
);
```

## 📞 Support

For technical support or questions about the admin system, please contact the development team.

---

**Maine Coon Cattery Admin System** 🐱✨
