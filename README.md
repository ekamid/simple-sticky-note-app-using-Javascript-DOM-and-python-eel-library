# simple-sticky-note-app-using-web-ui-and-python-eel-library

Eel helps to make Electron-like offline desktop app using front-end technology like JavaScript, HTML, CSS with Python back-end. It's maybe the simplest and fastest way to combined those front-end and back-end technology to make something awesome.


<p align="center"><img src="https://github.com/ekamid/simple-sticky-note-app-using-python-eel-and-web-ui/blob/master/UI_sample.PNG"></p>

# Gtting Started

* Download OR Clone the repo and cd into the directory
```bash
$ git clone git@github.com:ekamid/simple-sticky-note-app-using-python-eel-and-web-ui.git
$ cd simple-sticky-note-app-using-python-eel-and-web-ui
```
* Install eel and pyinstaller
```bash
$ pip install eel pyinstaller
```
* Run the app

```bash
$ python stickyNote.py
```
# Packaging the app

You can pass any valid pyinstaller flag in the following command to further customize the way your app is built.

```bash
$ python -m eel stickyNote.py web --noconsole --onefile
```

>> The app will work fine even if you don't include the 'notes.txt' file while pakacging. It will create atumaticly. 
