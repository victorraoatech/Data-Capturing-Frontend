# Login Response Structure Fix

## Issue
The login functionality was showing "Invalid response from server" because the frontend code was expecting a different response structure than what the backend was actually returning.

## Problem Details
The backend was returning:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "77e4adcc-7ac2-4a54-af12-9f18bbfb0bf3",
      "email": "ibuchi22@gmail.com",
      "fullName": "",
      "phoneNumber": null,
      "role": "user",
      "isAdmin": false,
      "isVerified": false,
      "createdAt": "2025-11-26T13:25:50.673Z",
      "updatedAt": "2025-11-26T13:25:50.673Z"
    },
    "message": "Login successful",
    "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

But the frontend code was checking for:
```javascript
if (data.jwtToken && data.user) {
  // This would fail because data was the entire response object,
  // not the nested data object
}
```

## Solution
Updated the onSuccess handlers in both login components to properly extract the nested data:

### 1. src/app/auth/login/page.tsx
```javascript
onSuccess: (response) => {
  setApiError(null);
  // Extract the actual data from the response
  const data = response.data;
  if (data && data.jwtToken && data.user) {
    signIn(data.jwtToken, data.user);
    // ... rest of the logic
  } else {
    const errorMsg = "Invalid response from server";
    setApiError(errorMsg);
    toast({ 
      title: "Login Error",
      description: errorMsg,
      variant: "destructive"
    });
  }
}
```

### 2. src/app/components/forms/loginForm.tsx
```javascript
onSuccess: (response) => {
  // Extract the actual data from the response
  const data = response.data;
  if (data && data.jwtToken && data.user) {
    // Use the AuthContext to sign in
    signIn(data.jwtToken, data.user);
    // ... rest of the logic
  } else {
    toast({ title: "Invalid response from server" })
  }
}
```

## Files Modified
1. `src/app/auth/login/page.tsx` - Main login page
2. `src/app/components/forms/loginForm.tsx` - Reusable login form component

## Additional Changes
- Added missing import for `useAuthContext` in `src/app/components/forms/loginForm.tsx`
- Initialized `signIn` from `useAuthContext` in the component

## Testing
After these changes, the login should work correctly and redirect users to the appropriate dashboard based on their role:
- Users with role "organisation" or "organization" are redirected to `/admin`
- All other users are redirected to `/user`

## Verification
To verify the fix:
1. Try logging in with valid credentials
2. Check the browser console for any errors
3. Confirm that the user is redirected to the correct dashboard
4. Verify that the user data is stored in localStorage