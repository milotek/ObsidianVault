Reflecting on a coding project is essential for growth and improvement. 

Reflecting on progress and challenges is an excellent way to consolidate their learning and develop problem-solving skills. 

Content: 

Progress: 

Achievements: Describe what was accomplished during the week. What milestones or goals were met? Key Features Developed: Highlight any specific features or components that were successfully implemented.  

I came up with the base idea of creating a word game that multiple users can play locally on one PC, by connecting multiple keyboards which challenges the users to type in a word which contains the letter X or the letters XX or XXX. 

 

I have played a similar game before at my friends house when I was very young called pass the bomb. 

 

I made a very quick C# project that would simply display the last key pressed from any keyboard as well as which hardware iden 

 

 

Challenges: 

Issues Faced: Detail any significant challenges or obstacles encountered. What were the specific problems? 

 

I was not sure if C#/dotNet was capable of differentiating between two or more different keyboards, which is an integral part of my game. I don't want other players to be able to type an input when only the other person should be able to. 

 

By default C# merges all inputs from the low level to the high level and treats them all as one input source, so if I were to use this as default, I would be unable to detect which keyboard/input devices was typing what. Any application using the regular, old "KeyPress" event would treat all inputs like they were from the same device. 

 

 

 

2) I didn't think WinForms would be suitable for this project for a couple reasons. For one it is rather outdated by today's standards and I think the scope of this project would be better suited to another framework.  

 

 

 

 

Solutions: 

Problem-Solving: Describe how the challenges were addressed. What steps were taken to resolve the issues? 

 

1) I researched and found online that through the use of a low level windows API called "RawInput" which is a very low level of detecting input devices, you could separate each key press of a keyboard along with its device HWID (hardware identifier), and therefore be able to tell which device types what. 

 

I wanted to make sure that this was tangible and actually practical/possible for my project so I made a very quick C# project that would simply display the last key pressed from any keyboard as well as which hardware identifier it came from. 

 

 

 

2) I did some looking and found WPF, which is what most modern windows apps are built in. It is also not too dissimilar from WinForms so the learning curve is softer and there are also much more modern tutorials. When I built the C# app I mentioned earlier it was in WPF and it was very easy to create, even more than winforms arguably. I used [Wpf Tutorial](https://wpf-tutorial.com) to teach myself and I found the guide very intuitive and easy thanks to my taught experience in WinForms and C#. 

 

 

 

 

Learning: 

Skills Gained: Reflect on new skills or knowledge acquired during the week. What did you learn that you didn’t know before? 

 

WPF usage and learning the language of XAML, which is what WPF uses on the frontend. 

Using packages like HandyControls / NuGet in visual studio, to help me with my project. 

 

 

 

Insights: Share any insights or 'aha' moments. How has this week’s work contributed to your understanding of coding and project development? 

 

The creation of my project and creating a class for RawInput and finally getting to see the little demo of just that working was big for me!