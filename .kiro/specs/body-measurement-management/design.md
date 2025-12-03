# Design Document

## Overview

The Body Measurement Management system is a React-based frontend application built with Next.js that enables users to create, store, and view manual body measurements. The system uses a form-based interface for data entry, organized by anatomical sections, and displays saved measurements in a tabular format. The application communicates with a backend REST API for data persistence and retrieval.

The architecture follows a client-server model where the Next.js frontend acts as both the UI layer and an API proxy layer, forwarding authenticated requests to an external backend service. The system uses React Query (TanStack Query) for state management and API caching, Formik for form state management, and Yup for validation.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (Client)                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React Components (Next.js Pages)                      │ │
│  │  - Create Form Page                                    │ │
│  │  - Measurement List Page                               │ │
│  │  - Measurement Detail View                             │ │
│  └────────────────────────────────────────────────────────┘ │
│                          │                                   │
│                          ▼                                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  State Management Layer                                │ │
│  │  - React Query (API caching & mutations)               │ │
│  │  - Formik (Form state)                                 │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼ HTTP/JSON
┌─────────────────────────────────────────────────────────────┐
│              Next.js API Routes (Proxy Layer)                │
│  - /api/manual-measurements/save (POST)                     │
│  - /api/manual-measurements (GET)                           │
│  - /api/manual-measurements/[id] (GET)                      │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼ HTTP/JSON + Auth Token
┌─────────────────────────────────────────────────────────────┐
│                   Backend Service (External)                 │
│  - Data Persistence                                          │
│  - Business Logic                                            │
│  - Authentication/Authorization                              │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

- **Frontend Framework**: Next.js 14+ (React 18+)
- **Form Management**: Formik with FieldArray
- **Validation**: Yup schema validation
- **State Management**: TanStack Query (React Query)
- **Styling**: Tailwind CSS with custom Manrope font
- **HTTP Client**: Axios (via useAuth hook)
- **UI Components**: Custom components with Lucide icons

## Components and Interfaces

### 1. Create Measurement Form Component

**Location**: `src/app/(main)/user/body-measurement/create/page.tsx`

**Responsibilities**:
- Render dynamic form with sections and measurement fields
- Handle form validation
- Manage form state with Formik
- Submit measurement data to backend
- Navigate user after successful submission

**Key Props/State**:
```typescript
interface CustomMeasurement {
  name: string;        // Body part name
  value: string;       // Size value
}

interface BodySection {
  sectionName: string;
  measurements: CustomMeasurement[];
}

interface SelfMeasurementFormValues {
  bodySections: BodySection[];
}
```

### 2. Measurement List Component

**Location**: `src/app/(main)/user/body-measurement/page.tsx`

**Responsibilities**:
- Fetch all measurements from API
- Display measurements in table format
- Handle loading and error states
- Provide navigation to create new measurements
- Allow users to view measurement details

**Key State**:
```typescript
interface MeasurementListItem {
  id: string;
  firstName: string;
  lastName: string;
  measurementType: string;
  subject: string;
  createdAt: string;
  sections: BodySection[];
}
```

### 3. Measurement Detail View Component

**Location**: `src/app/(main)/user/body-measurement/view/page.tsx`

**Responsibilities**:
- Fetch single measurement by ID
- Display detailed measurement data grouped by section
- Show all body part measurements in organized format
- Handle loading and error states

### 4. API Proxy Routes

**Save Measurement Route**: `src/app/api/manual-measurements/save/route.ts`
- Validates authentication token
- Forwards POST request to backend
- Returns success/error response

**List Measurements Route**: `src/app/api/manual-measurements/route.ts`
- Validates authentication token
- Forwards GET request to backend
- Returns array of measurements

**Get Measurement by ID Route**: `src/app/api/manual-measurements/[id]/route.ts`
- Validates authentication token
- Forwards GET request with ID parameter
- Returns single measurement details

## Data Models

### Measurement Request Model (Frontend → Backend)

```typescript
interface MeasurementSaveRequest {
  measurementType: "Manual";
  subject: "Self" | "Other";
  firstName: string;
  lastName: string;
  sections: {
    sectionName: string;
    measurements: {
      bodyPartName: string;
      size: number | string;
    }[];
  }[];
}
```

### Measurement Response Model (Backend → Frontend)

```typescript
interface MeasurementResponse {
  success: boolean;
  data: {
    measurement: {
      id: string;
      firstName: string;
      lastName: string;
      measurementType: string;
      subject: string;
      createdAt: string;
      sections: {
        sectionName: string;
        measurements: {
          bodyPartName: string;
          size: number;
        }[];
      }[];
    };
  };
}

interface MeasurementListResponse {
  success: boolean;
  data: {
    measurements: MeasurementResponse["data"]["measurement"][];
  };
}
```

### Form State Model (Formik)

```typescript
interface FormMeasurement {
  name: string;    // Maps to bodyPartName
  value: string;   // Maps to size
}

interface FormSection {
  sectionName: string;
  measurements: FormMeasurement[];
}

interface FormValues {
  bodySections: FormSection[];
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Form Structure Properties

**Property 1: Section rendering completeness**
*For any* section object with a sectionName and measurements array, when rendered, the output should contain the section name text and at least one measurement field pair.
**Validates: Requirements 1.2**

**Property 2: Add section increases count**
*For any* form state, when the "Add New Section" action is triggered, the number of sections should increase by exactly 1.
**Validates: Requirements 1.3**

**Property 3: Remove section decreases count**
*For any* form state with at least one section, when a section is removed, the number of sections should decrease by exactly 1 and that specific section should no longer exist in the form.
**Validates: Requirements 1.4**

**Property 4: Conditional section removal**
*For any* form state with more than 2 sections, the remove action should be enabled and successfully remove the section when triggered.
**Validates: Requirements 1.5**

### Measurement Field Properties

**Property 5: Section has minimum measurements**
*For any* section in the form, it should contain at least one measurement field pair (name and value inputs).
**Validates: Requirements 2.1**

**Property 6: Add field increases measurement count**
*For any* section, when the "Add New Field" action is triggered within that section, the number of measurements in that specific section should increase by exactly 1.
**Validates: Requirements 2.2**

**Property 7: Alphanumeric input acceptance**
*For any* alphanumeric string input to the body part name field, the system should accept and store the value without errors.
**Validates: Requirements 2.3**

**Property 8: Mixed input acceptance for size**
*For any* numeric or text input to the size value field, the system should accept and store the value without errors.
**Validates: Requirements 2.4**

**Property 9: Remove field decreases measurement count**
*For any* section with at least one measurement, when a measurement is removed, the number of measurements in that section should decrease by exactly 1 and that specific measurement should no longer exist.
**Validates: Requirements 2.5**

### Validation Properties

**Property 10: Empty section name validation**
*For any* form state where at least one section has an empty sectionName, validation should fail and return an error indicating "Section name is required".
**Validates: Requirements 3.1**

**Property 11: Empty body part name validation**
*For any* form state where at least one measurement has an empty name field, validation should fail and return an error indicating "Field name is required".
**Validates: Requirements 3.2**

**Property 12: Empty size value validation**
*For any* form state where at least one measurement has an empty value field, validation should fail and return an error indicating "Value is required".
**Validates: Requirements 3.3**

**Property 13: Valid form passes validation**
*For any* form state where all sections have non-empty sectionNames and all measurements have non-empty name and value fields, validation should pass and allow submission.
**Validates: Requirements 3.4**

**Property 14: Invalid form blocks submission**
*For any* form state that fails validation (has validation errors), the submit action should be blocked and not trigger the API call.
**Validates: Requirements 3.5**

### API Integration Properties

**Property 15: Valid submission triggers POST request**
*For any* valid form data, when the submit action is triggered, a POST request should be sent to `/api/manual-measurements/save` with a payload containing measurementType, subject, firstName, lastName, and sections array.
**Validates: Requirements 4.1**

### Display Properties

**Property 16: All measurements rendered in table**
*For any* array of measurement objects returned from the API, all measurements should appear in the rendered table output.
**Validates: Requirements 5.2**

**Property 17: Measurement display completeness**
*For any* measurement object displayed in the table, the rendered output should contain the measurement ID, createdAt date, and summary information.
**Validates: Requirements 5.3**

**Property 18: Detail view section completeness**
*For any* measurement detail response containing sections, all sections and their associated measurements should be rendered in the detail view.
**Validates: Requirements 6.2**

**Property 19: Measurement detail field completeness**
*For any* measurement in the detail view, the rendered output should contain the section name, body part name (bodyPartName), and size value.
**Validates: Requirements 6.3**

**Property 20: Measurements grouped by section**
*For any* measurement detail response, measurements should be organized and rendered under their respective section headings, maintaining the section grouping structure.
**Validates: Requirements 6.4**

**Property 21: Input labels present**
*For any* input field in the form, there should be an associated label element that describes the input purpose.
**Validates: Requirements 7.1**

**Property 22: Summary displays key measurements**
*For any* measurement summary data object, the rendered summary should contain fields for chest, waist, hips, and legs measurements.
**Validates: Requirements 8.2**

**Property 23: Measurement units included**
*For any* measurement value displayed in the summary, the rendered string should include a unit indicator (e.g., "cm").
**Validates: Requirements 8.4**

## Error Handling

### Client-Side Error Handling

1. **Form Validation Errors**
   - Display inline error messages below invalid fields
   - Prevent form submission when validation fails
   - Clear errors when user corrects the input
   - Use Yup validation schema for consistent error messages

2. **Network Errors**
   - Catch failed API requests in mutation error handlers
   - Display user-friendly error messages via toast notifications
   - Maintain form state so user doesn't lose data
   - Provide retry mechanism by keeping submit button enabled

3. **Authentication Errors**
   - Detect 401 Unauthorized responses
   - Redirect to login page when token is invalid
   - Display appropriate error message to user

4. **Loading States**
   - Disable submit button during API calls
   - Show loading spinner to indicate progress
   - Prevent duplicate submissions

### API Proxy Error Handling

1. **Missing Authentication Token**
   - Return 401 status with error message
   - Frontend should redirect to login

2. **Backend Service Unavailable**
   - Catch fetch errors
   - Return 500 status with generic error message
   - Log detailed error for debugging

3. **Invalid Response from Backend**
   - Check response.ok status
   - Forward backend error messages to frontend
   - Maintain consistent error response structure

### Data Validation

1. **Type Safety**
   - Use TypeScript interfaces for all data models
   - Validate API responses match expected structure
   - Use Yup schema for runtime validation

2. **Required Fields**
   - Section name is required
   - Measurement name (body part) is required
   - Measurement value (size) is required
   - At least one section with one measurement required

3. **Data Transformation**
   - Map form field names to API field names
   - Convert `name` → `bodyPartName`
   - Convert `value` → `size`
   - Ensure proper data structure before API submission

## Testing Strategy

### Unit Testing

The system will use **Jest** and **React Testing Library** for unit testing. Unit tests will focus on:

1. **Component Rendering**
   - Test that components render without crashing
   - Verify initial state is correct
   - Check that required UI elements are present

2. **User Interactions**
   - Test button click handlers
   - Verify form field updates
   - Test add/remove section functionality
   - Test add/remove measurement functionality

3. **Validation Logic**
   - Test Yup validation schema with specific invalid inputs
   - Verify error messages appear correctly
   - Test validation passes with valid data

4. **API Integration**
   - Mock API calls using MSW (Mock Service Worker)
   - Test successful API responses
   - Test error handling for failed requests
   - Verify correct request payloads

5. **Navigation**
   - Test router navigation after successful submission
   - Verify back button functionality
   - Test cancel actions

### Property-Based Testing

The system will use **fast-check** (JavaScript/TypeScript property-based testing library) for property-based testing. Each property-based test will:

- Run a minimum of 100 iterations with randomly generated inputs
- Be tagged with a comment referencing the specific correctness property from this design document
- Use the format: `// Feature: body-measurement-management, Property X: [property description]`

Property-based tests will cover:

1. **Form State Transformations**
   - Generate random form states and verify add/remove operations maintain invariants
   - Test that section count changes correctly
   - Test that measurement count changes correctly per section

2. **Validation Properties**
   - Generate random valid and invalid form data
   - Verify validation always catches required field violations
   - Verify valid data always passes validation

3. **Data Transformation**
   - Generate random form data and verify correct transformation to API format
   - Test that all fields are properly mapped
   - Verify structure matches API expectations

4. **Rendering Properties**
   - Generate random measurement data
   - Verify all data appears in rendered output
   - Test that required fields are always displayed

### Integration Testing

Integration tests will verify:

1. **End-to-End Form Submission Flow**
   - User fills out form → validation passes → API call succeeds → navigation occurs
   - Test with real API calls to staging environment

2. **Data Persistence**
   - Create measurement → fetch measurement list → verify new measurement appears
   - Create measurement → fetch by ID → verify all data is correct

3. **Error Recovery**
   - Submit form → API fails → user corrects data → resubmit → success

### Test Coverage Goals

- Minimum 80% code coverage for unit tests
- All correctness properties must have corresponding property-based tests
- All API endpoints must have integration tests
- All user-facing error scenarios must be tested

## Performance Considerations

1. **Form Rendering**
   - Use React.memo for section components to prevent unnecessary re-renders
   - Optimize FieldArray rendering with proper key props

2. **API Calls**
   - Use React Query caching to avoid redundant fetches
   - Implement stale-while-revalidate strategy for measurement lists

3. **Data Loading**
   - Show loading skeletons during data fetch
   - Implement pagination if measurement list grows large

4. **Bundle Size**
   - Code-split measurement pages to reduce initial load
   - Lazy load form validation schema

## Security Considerations

1. **Authentication**
   - All API routes require valid JWT token
   - Token passed in Authorization header
   - 401 responses trigger redirect to login

2. **Data Validation**
   - Validate all user input on client and server
   - Sanitize input to prevent XSS attacks
   - Use TypeScript for type safety

3. **API Security**
   - Use HTTPS for all API communication
   - Implement CORS policies
   - Rate limiting on backend endpoints

## Future Enhancements

1. **Edit Functionality**
   - Allow users to edit existing measurements
   - Implement PUT endpoint for updates

2. **Delete Functionality**
   - Allow users to delete measurements
   - Implement soft delete with confirmation

3. **Export/Print**
   - Generate PDF reports of measurements
   - Export data to CSV format

4. **Measurement History**
   - Track changes over time
   - Display charts showing measurement trends

5. **Templates**
   - Save section configurations as templates
   - Quick-start forms with predefined sections

6. **Offline Support**
   - Cache measurements locally
   - Sync when connection restored
