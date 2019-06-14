# simple-sticky-note-app-using-python-eel-and-web-ui
The simplest and fastest way to create applications with a Web UI like Javascript, HTML, CSS and a Python back-end.


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
