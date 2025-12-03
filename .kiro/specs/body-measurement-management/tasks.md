# Implementation Plan

- [ ] 1. Update create form component with proper data structure
  - Simplify the form to use the correct API payload structure (measurementType, subject, firstName, lastName, sections)
  - Remove formId dependency from the create page
  - Update Formik initial values to match the simplified structure
  - Update validation schema to match new structure
  - _Requirements: 1.1, 1.2, 2.1, 2.2_

- [ ]* 1.1 Write property test for add section functionality
  - **Property 2: Add section increases count**
  - **Validates: Requirements 1.3**

- [ ]* 1.2 Write property test for remove section functionality
  - **Property 3: Remove section decreases count**
  - **Validates: Requirements 1.4**

- [ ]* 1.3 Write property test for conditional section removal
  - **Property 4: Conditional section removal**
  - **Validates: Requirements 1.5**

- [ ] 2. Implement measurement field management
  - Implement add new field functionality within sections
  - Implement remove field functionality with proper state updates
  - Ensure minimum one measurement per section
  - Add proper TypeScript types for measurements
  - _Requirements: 2.1, 2.2, 2.5_

- [ ]* 2.1 Write property test for add field functionality
  - **Property 6: Add field increases measurement count**
  - **Validates: Requirements 2.2**

- [ ]* 2.2 Write property test for remove field functionality
  - **Property 9: Remove field decreases measurement count**
  - **Validates: Requirements 2.5**

- [ ]* 2.3 Write property test for input acceptance
  - **Property 7: Alphanumeric input acceptance**
  - **Property 8: Mixed input acceptance for size**
  - **Validates: Requirements 2.3, 2.4**

- [ ] 3. Implement form validation
  - Update Yup validation schema for section names, body part names, and size values
  - Add inline error message display for each field type
  - Implement validation error state management
  - Ensure form submission is blocked when validation fails
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ]* 3.1 Write property test for empty section name validation
  - **Property 10: Empty section name validation**
  - **Validates: Requirements 3.1**

- [ ]* 3.2 Write property test for empty body part name validation
  - **Property 11: Empty body part name validation**
  - **Validates: Requirements 3.2**

- [ ]* 3.3 Write property test for empty size value validation
  - **Property 12: Empty size value validation**
  - **Validates: Requirements 3.3**

- [ ]* 3.4 Write property test for valid form validation
  - **Property 13: Valid form passes validation**
  - **Validates: Requirements 3.4**

- [ ]* 3.5 Write property test for invalid form submission blocking
  - **Property 14: Invalid form blocks submission**
  - **Validates: Requirements 3.5**

- [ ] 4. Implement form submission and API integration
  - Create mutation using React Query for saving measurements
  - Transform form data to match API payload structure (name → bodyPartName, value → size)
  - Implement loading state during submission
  - Add success toast notification
  - Add error toast notification with error details
  - Navigate to measurement list page on success
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ]* 4.1 Write property test for API payload structure
  - **Property 15: Valid submission triggers POST request**
  - **Validates: Requirements 4.1**

- [ ] 5. Create custom hook for fetching measurements
  - Create `useManualMeasurement` hook in `src/api/hooks/`
  - Implement query for fetching all measurements (GET /api/manual-measurements)
  - Implement query for fetching single measurement by ID (GET /api/manual-measurements/[id])
  - Implement mutation for saving measurements (POST /api/manual-measurements/save)
  - Add proper TypeScript types for request and response
  - Handle loading, error, and success states
  - _Requirements: 5.1, 6.1_

- [ ] 6. Implement measurement list page
  - Fetch all measurements using the custom hook
  - Display measurements in a table format with columns: ID, Name, Date, Actions
  - Implement loading skeleton while data is fetching
  - Implement empty state when no measurements exist
  - Add "Create New Measurement" button that navigates to create page
  - Add click handler to view measurement details
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ]* 6.1 Write property test for measurement table rendering
  - **Property 16: All measurements rendered in table**
  - **Validates: Requirements 5.2**

- [ ]* 6.2 Write property test for measurement display completeness
  - **Property 17: Measurement display completeness**
  - **Validates: Requirements 5.3**

- [ ] 7. Implement measurement detail view page
  - Create detail view component at `src/app/(main)/user/body-measurement/view/page.tsx`
  - Fetch measurement by ID from URL params
  - Display measurement metadata (name, date, type, subject)
  - Group and display measurements by section
  - Show section name as headers with measurements listed below
  - Display body part name and size for each measurement
  - Implement loading state and error handling
  - Add back navigation button
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ]* 7.1 Write property test for detail view section completeness
  - **Property 18: Detail view section completeness**
  - **Validates: Requirements 6.2**

- [ ]* 7.2 Write property test for measurement detail field completeness
  - **Property 19: Measurement detail field completeness**
  - **Validates: Requirements 6.3**

- [ ]* 7.3 Write property test for section grouping
  - **Property 20: Measurements grouped by section**
  - **Validates: Requirements 6.4**

- [ ] 8. Update MeasurementTopNav component
  - Fetch latest measurement data to display in summary
  - Extract key measurements (chest, waist, hips, legs) from latest measurement
  - Display measurements with units (cm)
  - Handle case when no measurements exist (show placeholders)
  - Implement auto-refresh when measurements are updated
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ]* 8.1 Write property test for summary key measurements
  - **Property 22: Summary displays key measurements**
  - **Validates: Requirements 8.2**

- [ ]* 8.2 Write property test for measurement units
  - **Property 23: Measurement units included**
  - **Validates: Requirements 8.4**

- [ ] 9. Implement UI polish and accessibility
  - Ensure all form inputs have associated labels
  - Add proper ARIA attributes for accessibility
  - Implement focus management for better keyboard navigation
  - Add cancel and back navigation buttons
  - Ensure consistent button placement in form footer
  - Test responsive design on mobile devices
  - _Requirements: 7.1, 7.4, 7.5_

- [ ]* 9.1 Write property test for input labels
  - **Property 21: Input labels present**
  - **Validates: Requirements 7.1**

- [ ] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
