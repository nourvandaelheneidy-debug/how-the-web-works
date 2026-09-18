# How the Web Works

This diagram explains what happens when we open a website in a browser.

## Request Journey

1. **Client / Browser**
   The user opens the browser and enters a website URL, then presses Enter.

2. **DNS Request**
   The browser sends a DNS request to find the IP address of the website.

3. **DNS Server**
   The DNS server finds the IP address connected to the website name.

4. **IP Address**
   The browser gets the IP address of the website.

5. **Internet / Network**
   The request travels through the internet to reach the web server.

6. **HTTPS Request**
   The browser sends an HTTPS request to the web server asking for the website.

7. **Web Server**
   The web server receives the request and sends the website files back.

8. **HTTPS Response**
   The server sends a response back to the browser.

9. **Browser Rendering**
   The browser receives the HTML, CSS, and JavaScript and uses them to display the website to the user.

## Summary

In simple words:

**Browser → DNS → IP Address → Internet → Web Server → Response → Browser**

This is the basic journey of a web request from the user to the website and back.
