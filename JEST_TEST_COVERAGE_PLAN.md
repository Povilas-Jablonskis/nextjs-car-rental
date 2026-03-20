# Jest Test Coverage Plan - Next.js Car Rental

## Current Testing Status
- ✅ 3 tests written (formatNumber utility, TransitionButton component, CarListTitle component)
- ⚠️ Many tests for EXISTING functionality are missing and should be written for regression prevention
- ❌ New/critical functionality completely untested

**Note:** Even though some features (formatNumber, TransitionButton, CarListTitle) are already implemented, their test suites should be expanded with additional test cases for edge cases and edge scenarios.

---

## � EXISTING IMPLEMENTATIONS - TESTS NEEDED FOR REGRESSION PREVENTION

These features are already coded and partially tested, but need comprehensive test coverage:

### `formatNumber()` Utility - Expand Tests
**Current Tests:** Basic formatting scenarios
**Additional Tests Needed:**
- ✗ Test with Decimal('0') (zero values)
- ✗ Test with very large numbers
- ✗ Test with very small decimal values
- ✗ Test negative numbers (if applicable)
- ✗ Test null/undefined handling (error cases)
- ✗ Test locale handling if it changes

**Test File:** `app/_helpers/__tests__/formatNumber.test.ts` (expand existing)

### `TransitionButton` Component - Expand Tests
**Current Tests:** Basic click and startTransition call
**Additional Tests Needed:**
- ✗ Test disabled state (if applicable)
- ✗ Test loading state (isPending = true)
- ✗ Test button text rendering
- ✗ Test className/styling props
- ✗ Test keyboard navigation (Enter, Space)
- ✗ Test accessibility attributes (aria-labels)
- ✗ Test when router.push fails/errors
- ✗ Test with different URL paths
- ✗ Test children rendering

**Test File:** `app/_components/buttons/__tests__/transition.test.tsx` (expand existing)

### `CarListTitle` Component - Expand Tests
**Current Tests:** Basic click and startTransition call
**Additional Tests Needed:**
- ✗ Test rendering with different searchParams
- ✗ Test with empty searchParams
- ✗ Test with single filter applied
- ✗ Test with multiple filters applied
- ✗ Test button text/label rendering
- ✗ Test loading state (isPending = true)
- ✗ Test keyboard interactions
- ✗ Test accessibility
- ✗ Test when router operations fail
- ✗ Test children content

**Test File:** `app/_components/panels/CarList/__tests__/title.test.tsx` (expand existing)

---

## �🔴 HIGH PRIORITY TESTS

### 1. **API Routes Testing**

#### `/api/cars/route.ts` - Car List Endpoint
- ✗ Query parameter parsing (pageNumber, pageSize)
- ✗ Filter logic:
  - Filter by price range
  - Filter by car types (multiple)
  - Filter by seats (multiple)
  - Filter by category
  - Combination of multiple filters
- ✗ Pagination:
  - Correct skip/take calculations
  - Page number boundary conditions
  - Next page detection
- ✗ Error handling for invalid parameters
- ✗ Database errors

**Test File:** `app/api/cars/__tests__/route.test.ts`

#### `/api/cars/byId/[id]/route.ts` - Single Car Endpoint
- ✗ Fetch car by valid ID
- ✗ Include reviews relationship
- ✗ Handle non-existent car ID (404)
- ✗ Error handling for database failures

**Test File:** `app/api/cars/byId/__tests__/route.test.ts`

#### `/api/cars/totalTypes/route.ts` - Car Types Count Endpoint
- ✗ Count all car types
- ✗ Count car types filtered by category
- ✗ Invalid category parameter handling
- ✗ Empty result set handling

**Test File:** `app/api/cars/totalTypes/__tests__/route.test.ts`

#### `/api/cars/totalSeats/route.ts` - Seats Count Endpoint
- ✗ Count all seat options
- ✗ Filtering by category
- ✗ Error handling

**Test File:** `app/api/cars/totalSeats/__tests__/route.test.ts`

#### `/api/reviews/byId/[id]/route.ts` - Reviews Pagination
- ✗ Fetch reviews for car with pagination
- ✗ Invalid car ID handling
- ✗ Pagination logic

**Test File:** `app/api/reviews/byId/__tests__/route.test.ts`

---

### 2. **Custom Hooks Testing**

#### `useGetCarList()` Hook
- ✗ Initial query setup
- ✗ Infinite query pagination
- ✗ Search params passed to API correctly
- ✗ Error handling and error states
- ✗ Loading states
- ✗ Cache invalidation
- ✗ Parameter changes trigger refetch

**Test File:** `app/_lib/__tests__/hooks.test.ts`

#### `useGetCar()` Hook
- ✗ Fetch single car by ID
- ✗ Handle car not found
- ✗ Cache behavior
- ✗ Error states

#### `useGetReviews()` Hook
- ✗ Infinite pagination for reviews
- ✗ Car ID parameter handling
- ✗ Error handling
- ✗ Page detection

#### `useCarTotalTypes()` Hook
- ✗ Fetch car type counts
- ✗ Filter by category
- ✗ Initial data population
- ✗ Cache updates

#### `useCarTotalSeats()` Hook
- ✗ Fetch seat options
- ✗ Category filtering
- ✗ Error handling

---

### 3. **Form Validation Testing**

#### `formSchema` & Related Schemas (Zod Validation)
- ✗ **Base Fields Validation:**
  - Customer name required and trimmed
  - Phone number required and trimmed
  - Address required and trimmed
  - Town/City required and trimmed
  - Pickup/Dropoff cities required
  - Dates must be valid date format
  - Times must be valid time format
  - Terms checkbox must be true

- ✗ **Credit Card Validation:**
  - Card number exactly 16 digits
  - Valid expiration date
  - CVC exactly 3 digits
  - Pay method correctly set to "Credit Card"
  - Rejects invalid card numbers
  - Rejects expired dates

- ✗ **PayPal Validation:**
  - Valid email format
  - Payment method set correctly
  - Rejects invalid emails

- ✗ **Bitcoin Validation:**
  - Valid email format
  - Payment method set correctly

- ✗ **Discriminated Union:**
  - Only allows one payment method path at a time
  - Rejects mixed payment data

**Test File:** `app/rentCar/byId/[id]/__tests__/types.test.ts`

---

### 4. **Server Actions Testing**

#### `rentCar()` Server Action
- ✗ Valid form data with all payment methods:
  - Credit card path
  - PayPal path
  - Bitcoin path
- ✗ Invalid form data returns errors with field mapping
- ✗ Missing required fields
- ✗ Redirect behavior on success
- ✗ Error message formatting

**Test File:** `app/_lib/__tests__/actions.test.ts`

---

## 🟡 MEDIUM PRIORITY TESTS

### 5. **Component Tests**

#### Form Components
- ✗ `Input` Component (`controls/input.tsx`):
  - Renders label when provided
  - Displays error message when error prop exists
  - Applies error styling (border-red-500)
  - Applies inverted styling correctly
  - Forwards ref correctly
  - Renders placeholder text

- ✗ `Checkbox` Component (`controls/checkbox.tsx`):
  - Renders label
  - Toggles checked state
  - Shows error styling
  - Disabled state styling
  - Forward ref functionality

- ✗ `Radio` Component (`controls/radio.tsx`):
  - Renders correctly
  - Handles selection
  - Error states
  - Disabled state

#### Interactive Components
- ✗ `Favourite` Component (`favourite.tsx`):
  - Initializes with defaultFavourite state
  - Toggles favorite on click
  - Updates icon styling based on state
  - Multiple toggles work correctly

- ✗ `CarList Item` Component:
  - Renders car properties
  - Handles click to view details
  - Loading states

#### Filter/Search Components
- ✗ `DateTimeLocationPicker` Component:
  - Accepts and displays date inputs
  - Accepts and displays location inputs
  - Time picker functionality
  - Validation feedback

- ✗ `Sidebar Filter Components`:
  - Price range selector
  - Car type checkboxes
  - Seats filter
  - Category selection
  - Apply filters functionality

**Test Files:**
- `app/_components/controls/__tests__/input.test.tsx`
- `app/_components/controls/__tests__/checkbox.test.tsx`
- `app/_components/controls/__tests__/radio.test.tsx`
- `app/_components/__tests__/favourite.test.tsx`
- `app/_components/panels/CarList/__tests__/item.test.tsx`
- `app/_components/__tests__/dateTimeLocationPicker.test.tsx`
- `app/_components/controls/__tests__/range.test.tsx`

---

### 6. **Utility Functions**

#### `randomIndexOfArray()`
- ✗ Returns valid array index
- ✗ Index within bounds (0 to array.length - 1)
- ✗ Works with single-element arrays
- ✗ Works with large arrays
- ✗ Different calls return different indices (randomness)

**Test File:** `app/_helpers/__tests__/randomIndexOfArray.test.ts`

#### Additional Helper Tests
- ✗ URL parameter construction
- ✗ Filter parameter serialization
- ✗ Date formatting utilities
- ✗ Price calculations

---

## 🟢 LOWER PRIORITY TESTS

### 7. **Integration Tests**

- ✗ Car search with filters flow
- ✗ Car details page full flow
- ✗ Rental form submission flow
- ✗ Page navigation with transitions

---

## 📋 Summary Table

| Category | Feature | Priority | Status | Test File |
|----------|---------|----------|--------|-----------|
| API | Cars list with filters | HIGH | ❌ | `api/cars/__tests__/route.test.ts` |
| API | Car by ID | HIGH | ❌ | `api/cars/byId/__tests__/route.test.ts` |
| API | Car types count | HIGH | ❌ | `api/cars/totalTypes/__tests__/route.test.ts` |
| API | Car seats count | HIGH | ❌ | `api/cars/totalSeats/__tests__/route.test.ts` |
| API | Reviews pagination | HIGH | ❌ | `api/reviews/byId/__tests__/route.test.ts` |
| Hooks | useGetCarList | HIGH | ❌ | `_lib/__tests__/hooks.test.ts` |
| Hooks | useGetCar | HIGH | ❌ | `_lib/__tests__/hooks.test.ts` |
| Hooks | useGetReviews | HIGH | ❌ | `_lib/__tests__/hooks.test.ts` |
| Hooks | useCarTotalTypes | HIGH | ❌ | `_lib/__tests__/hooks.test.ts` |
| Hooks | useCarTotalSeats | HIGH | ❌ | `_lib/__tests__/hooks.test.ts` |
| Form | Zod Schema Validation | HIGH | ❌ | `rentCar/byId/[id]/__tests__/types.test.ts` |
| Actions | rentCar Server Action | HIGH | ❌ | `_lib/__tests__/actions.test.ts` |
| Components | Input Form Field | MEDIUM | ❌ | `_components/controls/__tests__/input.test.tsx` |
| Components | Checkbox Control | MEDIUM | ❌ | `_components/controls/__tests__/checkbox.test.tsx` |
| Components | Favourite Button | MEDIUM | ❌ | `_components/__tests__/favourite.test.tsx` |
| Components | TransitionButton | MEDIUM | ⚠️ | Needs expansion: loading state, error handling |
| Components | CarListTitle | MEDIUM | ⚠️ | Needs expansion: more filter scenarios |
| Utilities | formatNumber | MEDIUM | ⚠️ | Needs expansion: null handling, edge cases |
| Utilities | randomIndexOfArray | MEDIUM | ❌ | `_helpers/__tests__/randomIndexOfArray.test.ts` |

---

## 🎯 Recommended Implementation Order

1. **Phase 1 (Foundation):** Utility and validation tests
   - `randomIndexOfArray` tests
   - Zod schema validation tests
   - Server action tests

2. **Phase 2 (Core):** API route tests
   - Implement mocks for Prisma
   - Test all endpoints with various parameters
   - Error scenarios

3. **Phase 3 (Data Fetch):** Hook tests
   - Mock API responses
   - Test React Query behavior
   - Loading/error states

4. **Phase 4 (Components):** UI component tests
   - Form controls
   - Interactive components
   - Filter components

5. **Phase 5 (Integration):** Full feature flows
   - End-to-end user journeys
   - Navigation and transitions

---

## 📝 Notes

- **Mocking Strategy:**
  - Mock Prisma Client for API tests
  - Mock Next.js navigation imports
  - Mock fetch for hook tests
  - Consider using MSW for more complex scenarios

- **Testing Libraries Already Installed:**
  - `@testing-library/react`
  - `@testing-library/jest-dom`
  - `@testing-library/user-event`
  - `jest`

- **Key Test Patterns to Use:**
  - User interaction testing with `fireEvent` and `userEvent`
  - Async/await patterns for data fetching
  - Proper cleanup and mocking isolation
  - Descriptive test names and organized `describe()` blocks
