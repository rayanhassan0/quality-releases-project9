#!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Start the browser
print('Starting the browser...')
driver = webdriver.Chrome()
print('Browser started successfully.')


driver.get('https://www.saucedemo.com/')
print('Navigated to login page.')


driver.find_element(By.ID, "user-name").send_keys("standard_user")
driver.find_element(By.ID, "password").send_keys("secret_sauce")


driver.find_element(By.ID, "login-button").click()
print('Logged in successfully.')


wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.CLASS_NAME, "inventory_list")))
print('Inventory page loaded.')
