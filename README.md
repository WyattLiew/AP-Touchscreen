## Step to setup touchsceen app 

1. install Windows
2. Power auto on - Bios

3. disable swipe function - HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\EdgeUI
On the right side, create a new 32-bit DWORD value named AllowEdgeSwipe.
Leave its value data as 0 (zero) to disable edge swipes.

5. Control panel - Pen & Touch disable right click
6. disable hold for right click
-Registry
HKEY_CURRENT_USER\SOFTWARE\MICROSOFT\wisp\Pen\SysEventParameters
HoldMode set to 3 (1:on;3:off)
HKEY_CURRENT_USER\SOFTWARE\MICROSOFT\wisp\Touch
TouchMode_hold (1:on;0:off)
5. disable auto sleep
6. disable Notification

7. install TeamViewer
8. install elo driver
9. install AP.app
10. install node
11. install VS code
12. install fonts
13. Run > Shell:startup > AP.app shortcut
14. Test!
