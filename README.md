# Lab8_Starter

Chang Liu

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

    1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No. The "message" feature is composed of several different units such as editing, sending, and reciving. Therefore, since unit testing cannot test how these individual components interact with each other, we cannot fully test our "message feature if we decided to use unit test. 
    
3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

    Yes. Since we are only testing whether this feature can prevent the message length from exceeding 80 characters, we can use unit test to test this individual feature. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   
   The Chromium browser installed with the puppeteer framework will run the tests without a browser UI. Therefore, we won't be able to see how Puppeteer drives our browser. 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   
   ``` javascript
    beforeAll(async () => {
        await page.click('header > img');
        await page.waitForTimeout(500);
    });
    ```

