# Email Setup Guide - Nodemailer Implementation

## Setup Instructions

### Step 1: Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

### Step 2: Configure Email Service

You need to set up email credentials. Here are the most common options:

#### Option A: Gmail (Recommended)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password (not your regular Gmail password)

#### Option B: Other Email Services

- **Outlook/Hotmail**: Use your regular credentials
- **Yahoo**: Enable "Less secure app access" or use App Password
- **Custom SMTP**: Configure with your provider's SMTP settings

### Step 3: Environment Variables

Create a `.env.local` file in your project root with:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Important:**

- For Gmail, use the App Password (16 characters, no spaces)
- Never commit `.env.local` to version control

### Step 4: Test the Setup

1. Start your development server: `npm run dev`
2. Try placing an order to test the email functionality
3. Check your email inbox for the order notification

## Features Implemented

✅ **Nodemailer Integration**: Professional email sending from your server
✅ **Toast Notifications**: User-friendly success/error messages
✅ **HTML Email Templates**: Beautiful, formatted order emails
✅ **Error Handling**: Graceful failure handling with user feedback
✅ **Loading States**: Visual feedback during form submission

## Email Template

The system sends a professional HTML email with:

- Order details in a formatted layout
- Customer contact information
- Delivery preferences
- Payment method
- Custom messages
- Reply-to functionality

## Troubleshooting

### Common Issues:

1. **Authentication Failed**:

   - Check EMAIL_USER and EMAIL_PASS are correct
   - For Gmail, ensure you're using App Password, not regular password
   - Verify 2FA is enabled on Gmail

2. **Email Not Received**:

   - Check spam folder
   - Verify EMAIL_USER is a valid email address
   - Check server logs for errors

3. **SMTP Connection Issues**:
   - Try different email service (Outlook, Yahoo)
   - Check firewall settings
   - Verify internet connection

### Testing:

- Use a test email address first
- Check browser console for errors
- Verify API endpoint `/api/send-order-email` is accessible

## Security Notes

- Never expose EMAIL_PASS in client-side code
- Use environment variables for all sensitive data
- Consider using a dedicated email service for production
- Regularly rotate email passwords
