#!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Start browser
driver = webdriver.Chrome()
driver.get('https://www.saucedemo.com/')
driver.find_element(By.ID, "user-name").send_keys("standard_user")
driver.find_element(By.ID, "password").send_keys("secret_sauce")
driver.find_element(By.ID, "login-button").click()

wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.CLASS_NAME, "inventory_list")))


item_id = "add-to-cart-sauce-labs-backpack"  # تأكد من الـ ID في المتصفح
wait.until(EC.element_to_be_clickable((By.ID, item_id))).click()
print(f'Item {item_id} added to cart.')


wait.until(EC.element_to_be_clickable((By.ID, "remove-sauce-labs-backpack"))).click()
print(f'Item {item_id} removed from cart.')

driver.quit()
print('Browser closed.')
