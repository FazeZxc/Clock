# Clock Documentation
Table of Contents
1. Introduction
2. Features
3. Styling
4. JavaScript
# Introduction 
This documentation provides an overview of the clock web application. The clock displays the current time, including hours, minutes, and seconds, with animated clock hands on a clock face background.

# Features 
Animated Clock Hands: The clock has animated hour, minute, and second hands that move in real-time.
Time Display: The current time is displayed in the format "HH : MM : SS IST" (Indian Standard Time).
Clock Face: The clock has a clock face background with hour, minute, and second hands positioned dynamically.
# Styling 
The clock has a modern and aesthetic design with the following key styling features:

Background: The application has a dark background (#272722).
Clock Face: The clock face is displayed as an image with a circular border.
Clock Hands: The clock hands have different colors and thickness for easy visibility.
Time Display Box: The time display box is positioned on the right side of the clock.
# JavaScript 
The JavaScript code is responsible for updating the clock hands in real-time and displaying the current time.

Variable Initialization: The script initializes variables and sets the initial time based on the current time.
Update Functions: Three update functions (updateSec(), updateMin(), updatehr()) calculate the rotation angles for the second, minute, and hour hands, updating the CSS variables accordingly.
Set Interval: The setInterval function calls the update functions at regular intervals to keep the clock hands moving.
Time Function: The time function updates the time display every second and resets the time at midnight.
# Usage
No specific user interactions are required. The clock will display the current time and update in real-time.

# Important Note
The clock is currently set to Indian Standard Time (IST). If you need to change the time zone, modify the time display in the time function accordingly.
