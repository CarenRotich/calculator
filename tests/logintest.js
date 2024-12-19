from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
import time

# Path to geckodriver
geckodriver_path = "C:/Users/smrc/Downloads/geckodriver-v0.34.0-win64/geckodriver.exe"

# Set up the Firefox driver service
service = Service(geckodriver_path)
firefox_options = Options()

# Set up the Firefox WebDriver
driver = webdriver.Firefox(service=service, options=firefox_options)

# Step 1: Open the login page
driver.get("http://lynne.infinityfreeapp.com/login.php")

# Step 2: Locate and click the "Register with Email" button
register_button = driver.find_element(By.NAME, "submit")  # Locate button by name "submit" with the "REGISTER WITH EMAIL" text
register_button.click()

# Step 3: Wait for the registration page to load
driver.implicitly_wait(5)
if driver.current_url.endswith("register.php"):
    print("Redirected to registration page: Test passed.")
else:
    print("Failed to redirect to registration page: Test failed.")

# Step 4: Fill out the registration form
try:
    # Locate the form fields
    first_name_field = driver.find_element(By.NAME, "first_name")
    last_name_field = driver.find_element(By.NAME, "last_name")
    email_field = driver.find_element(By.NAME, "email")
    phone_field = driver.find_element(By.NAME, "phone")
    password_field = driver.find_element(By.NAME, "password")
    confirm_password_field = driver.find_element(By.NAME, "confirm_password")
    submit_button = driver.find_element(By.NAME, "submit")

    # Input data into form fields
    first_name_field.send_keys("John")
    last_name_field.send_keys("Doe")
    email_field.send_keys("johndoe@example.com")
    phone_field.send_keys("1234567890")

    # Case 1: Attempt to submit a password shorter than 6 characters
    password_field.send_keys("123")
    confirm_password_field.send_keys("123")
    submit_button.click()

    # Wait and check for the validation message about password length
    time.sleep(2)
    try:
        error_message = driver.find_element(By.XPATH, "//*[contains(text(), 'should be minimum 6 characters')]")
        print("Password validation test: Failed - 'Minimum 6 characters' message displayed as expected.")
    except:
        print("Password validation test: Failed - Error message not found.")

    # Case 2: Submit valid registration details
    password_field.clear()
    confirm_password_field.clear()
    password_field.send_keys("password123")
    confirm_password_field.send_keys("password123")
    submit_button.click()

    # Wait for the page to load and check for successful registration message
    time.sleep(3)
    try:
        success_message = driver.find_element(By.CLASS_NAME, "alert-success")
        if "registration successful" in success_message.text.lower():
            print("Registration test: Passed - Registration successful.")
        else:
            print("Registration test: Failed - Expected success message not found.")
    except:
        print("Registration test: Failed - Success message not found.")

except Exception as e:
    print("Test failed due to exception:", e)

# Step 5: Close the browser
driver.quit()
