-- [ first of all this this 2 dash like this [ - ] put 2 of them to make something like a note to you like -- this is the window tabs ]
-- Window & Library

local Library = loadstring(game:HttpGet("https://pastebin.com/raw/vff1bQ9F"))()
local Window = Library.CreateLib("this is the name or the script", "Synapse")
--------------------------------------------------------------------in there i typed synapse so its the color like orange and black and grey or smt all the other types are [ LightTheme
 --   DarkTheme
 --   GrapeTheme  BloodTheme
 --   Ocean
 --    Midnight
 --   Sentinel
 -- Synapse ]
 -- in here i will make the tabs [ there is a limit for the tabs its like 10-12 i forgot so]

local Tab1 = Window:NewTab("Main Tab")--this is the first tab and the [""] means the name of the tab for a script it means the name of the script or the info of the script
--in here i will make the tab 1 section

local Tab1Section = Tab1:NewSection("Scripts")-- i wrote [scripts ] because that is the name of the section shen you open the main tab it will say script like the credits i made in my script hub then the scripts and when you make a tab you can make it a name not only number but i make it number bc its easy to write or else smh.
-- in there i will show you the notifacations

--1st Notify

--this one is the black notifacation that is like a line
local AkaliNotif = loadstring(game:HttpGet("https://raw.githubusercontent.com/Kinlei/Dynissimo/main/Scripts/AkaliNotif.lua"))();
local Notify = AkaliNotif.Notify;
Notify({
Description = "Join Discord https://discord.gg/UhceAu7y";
Title = "shakars hub Loaded";
Duration = 5;
});

--2nd Notify
--this is the grey notifacation upper then the jump button
wait (0.5)
game.StarterGui:SetCore("SendNotification", {
Title = "shakars hub Loaded"; 
Text = "Made by shakar#6955"; 
Duration = 5; 
})

game.StarterGui:SetCore("SendNotification", {
Title = "Join discord"; 
Text = "https://discord.gg/UhceAu7y"; 
Duration = 10; 
})

--3rd Notify
--this is a notifacation that say do you want to execute that script or no so its a yes or no notifacation
local NotificationBindable = Instance.new("BindableFunction")

function NotificationBindable.OnInvoke(buttonPressed)
    if buttonPressed == "Yeah" then
loadstring(game:HttpGet("https://raw.githubusercontent.com/AnthonyIsntHere/anthonysrepository/main/scripts/AntiChatLogger.lua"))()
    elseif buttonPressed == "Nah im good" then
        -- Do something when the Nah im good button is pressed
    end
end

game.StarterGui:SetCore("SendNotification", {
    Title = "Do You Want Anti Ban Script?",
    Text = "Loads Anti Ban Script",
    Button1 = "Yeah",
    Button2 = "Nah im good",
    Callback = NotificationBindable
})
--in here i will show a toggle button

--Toggle Ui Button

--Your Codes

--Toggle
local ToggleGui = Instance.new("ScreenGui")--dont change anything here
local Toggle = Instance.new("TextButton")
local UICorner = Instance.new("UICorner")

--Properties
ToggleGui.Name = "Toggle Gui"
ToggleGui.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
ToggleGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
ToggleGui.ResetOnSpawn = false

UICorner.Parent = Toggle
Toggle.Name = "Toggle"
Toggle.Parent = ToggleGui
Toggle.BackgroundColor3 = Color3.fromRGB(29, 29, 29)--in there you can change the toggle color in google search color codes
Toggle.Position = UDim2.new(0, 0, 0.454706937, 0)--position of the toggle
Toggle.Size = UDim2.new(0, 80, 0, 38)--size of the toggle
Toggle.Font = Enum.Font.SourceSans
Toggle.Text = "Toggle"--name of the toggle
Toggle.TextColor3 = Color3.fromRGB(203, 122, 49)
Toggle.TextSize = 19.000
Toggle.Draggable = true
Toggle.MouseButton1Click:connect(function()
  Library:ToggleUI()
end)
--Scripts

Tab1Section:NewLabel("Rejoin Scripts")--i reccomend making the NewLaber But Dont Forget To change the numbers when you make a new tab

Tab1Section:NewButton("this is the name of the script", "this is the info of the script", function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/shakar60/Protected_/main/File",true))()
    print("Clicked")
end)--in here it should say tab 1 section because we have a tab if we dont have a tab we dont need to use this and all the scripts will be in 1 tab
--to find more things about kavo ui library on google/safari search kavo ui library and it will come but use my window so its Draggable but kavo ui window isnt Draggable
Tab1Section:NewButton("this is the name of the script", "this is the info of the script", function()
loadstring(game:HttpGet("https://raw.githubusercontent.com/shakar60/Protected_/main/File",true))()
    print("Clicked")
end)
