import eel


eel.init("web")


@eel.expose
def updateNote(note):
    noteFile = open("notes.txt", "w+")
    noteFile.write(note)
    noteFile.read()
    noteFile.close()
    return "Note Added"

@eel.expose
def fetchNote(message):
    noteFile = open("notes.txt", "r+")
    notes = noteFile.read()
    print(message)    
    return notes

eel.start("index.html")

