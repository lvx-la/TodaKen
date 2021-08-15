import sys
import tkinter
from tkinter import ttk
import datetime as dt
import math


def closeWindow():
    sys.exit(0)

countd = dt.date(2022, 4, 1) - dt.date.today()
countd_days = countd.days
countd_weeks = math.ceil(countd_days / 7)
yearProgress = (365 - countd_days)

root = tkinter.Tk()
root.title(u"Countdown to Haven")
root.geometry("400x300")

Static1 = tkinter.Label(\
        text = u"あと" + str(countd_days) + u"日\n" + str(countd_weeks) + u"週間",\
        font = ("メイリオ", "25")\
)
Static1.pack()

Static2 = tkinter.Label(\
        text = u"耐え",\
        font = ("メイリオ", "35", "bold")\
)
Static2.pack()

pb2 = ttk.Progressbar(\
        root,\
        orient = "horizontal",\
        length = 300,\
        mode = "determinate",\
        value = yearProgress,\
        maximum = 365,\
)
pb2.pack()

button = tkinter.Button(root, text="OK", command=closeWindow)
button.pack()

button2 = tkinter.Button(root, text="NOT OK", command=closeWindow)
button2.pack()

root.mainloop()
