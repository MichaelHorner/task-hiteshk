# task2
Second task for Pixllove

Figma Design: https://www.figma.com/design/7FQpbPpdsjMfsh9C6kStEB/Bonus-screen-test?node-id=0-1&t=JysnHtVU5DuT6lE0-1 

# Project Description

This is a small prototype of our current React Native project. The project aims to deliver a seamless user experience on both Android and iOS platforms. The primary focus is to transition from Expo Go to a native CLI setup, enhance the project structure following best practices, refactor existing screens for improved performance and user experience, and specifically improve the date of birth input on the "RegisterBirthday" screen.
# Tasks and User Stories

## 1. Make Project Compatible with Android and iOS

### Task
- Ensure the project is fully functional and optimized for both Android and iOS platforms.

### User Story
- As a user, I want the application to be available and work seamlessly on both Android and iOS devices so that I can use it on my preferred platform without any issues.

## 2. Convert from Expo Go to Native CLI

### Task
- Transition the project from using Expo Go to a native CLI setup.

### User Story
- As a developer, I want the project to be based on a native CLI instead of Expo Go, to gain more control over the build process and dependencies.

## 3. Review and Improve Project Structure and "Best Practices"

### Task
- Conduct a thorough review of the current project structure.
- Implement improvements based on industry best practices.

### User Story
- As a developer, I want the project structure to follow best practices so that the codebase is maintainable, scalable, and easy for other developers to understand and contribute to.

## 4. Refactor Screens

### Task
- Refactor existing screens to improve code quality, performance, and user experience (for example Component Reusability, State Management, Styling, Navigation, ...).

### User Story
- As a user, I want the application screens to be responsive, intuitive, and efficient so that I have a pleasant experience using the app.

## 5. Improve Date of Birth Input on "RegisterBirthday" Screen

### Task
- Enhance the input method for entering the date of birth on the "RegisterBirthday" screen.

### User Story
- As a user, I want an easy and error-free way to input my date of birth on the registration screen so that I can complete my profile accurately and quickly.

### Description

The current date of birth input method on the "RegisterBirthday" screen has several usability issues that need to be addressed to improve the user experience. These issues include:

1. **Deleting Input Issues**
   - When deleting an input, the cursor does not jump to the previous input field, causing frustration for users trying to correct their input.

2. **Manual Input Challenges**
   - Users may find it difficult to manually input their date of birth due to the format constraints (e.g., DD/MM/YYYY) and potential errors in navigating between fields.

3. **Date Picker Integration**
   - The absence of a date picker can make the process of entering a date of birth more error-prone and less user-friendly.

4. **Validation Feedback**
   - Immediate and clear feedback for invalid date entries (e.g., out-of-range days or months) is not provided, leading to potential confusion.

### Detailed Steps to Improve

   **Field Auto-Jump and Deletion Handling**
   - Ensure that when users delete input, the cursor automatically moves to the previous field. This helps users correct their input more intuitively.
   - Implement auto-jump between input fields for day, month, and year to streamline the input process.


## 6. Add a New Screen to Handle Phone Input

### Task
- Create and integrate a new screen that handles phone number input into the existing prototype.

### User Story
- As a user, I want to input my phone number on a dedicated screen so that I can complete my profile and receive important notifications.

### Description

The task involves designing, developing, and integrating a new screen into the current React Native prototype that allows users to input their phone numbers. This screen will include validation and formatting to ensure the phone number is entered correctly.

### Detailed Steps to Implement

1. **Create the Phone Input Screen Component**
   - Develop the new screen component based on the provided figma design following best practices and using React Native components.
   - Use libraries like `react-native-phone-input` or `react-native-phone-number-input` for phone number input and validation (but it's your desicion).

2. **Integrate Navigation**
   - Add the new screen to the app's navigation stack using React Navigation.
   - Update navigation configuration to include the new screen.

3. **Implement Functionality**
   - Add the necessary functionality and logic to handle phone number input, validation, and formatting.
   - Ensure data flow and state management are handled correctly.

4. **Test the New Screen**
   - Conduct thorough testing to ensure the new screen works as expected.
   - Test for different scenarios and edge cases.

5. **Accessibility and Localization**
   - Ensure the new screen is accessible to all users, including those using screen readers.
   - Add localization support
