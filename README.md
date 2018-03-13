miniSlide
=======================
A minimalistic slideshow with nice background blur, no ugly black bars for pictures not fitting the screen.
Implemented in vanilla html5 JavaScript and CSS3 using CSS3 transitions to utilize browser hardware accelartion for smooth fading.

Currently should support all posix compliant systems.

Usage
-----------------------
1. Clone the repo
```
git clone https://github.com/thexperiments/miniSlide.git
```
2. Put some pictures into the `slideshow` directory
3. Run the update_slides bash script, it wil generate a slides.js file.
On OSX you should be able to just double-click the file and it also would be 
```
cd miniSlide
update_slides
```
4. Open the index.html in a browser of your chioice (tested with chrome)

Feel free to change the cycle time in miniSlide.js.
If you want to adjust the time of the fade be aware that you need to change the parameter in miniSlide.js and main.css.

Notes
-----------------------
Depending on the resolution of the images and the available bandwith the first run might stutter.
Some devices might not be able to view this as it requires support for certain CSS features.


ToDo
-----------------------
Stuff to add in the future, feel free to contribute
* Add shortcut keys for forward/backward skipping
* Add touch control for forward/backward skipping
* Add some mechanism to trigger better caching of images
* change generated javascript to JSON to enable refresh of image list without browser reload
* extend launching of browsers outside of OSX