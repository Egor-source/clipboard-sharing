@echo off
powershell -executionpolicy bypass -command "git pull origin master"
powershell -executionpolicy bypass -command "npm install"
powershell -executionpolicy bypass -command "npm run start"
pause