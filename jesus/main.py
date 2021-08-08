import sys
import tkinter
import datetime as dt
import math

def closeWindow(event):
    sys.exit(0)

countd = dt.date(2022, 4, 1) - dt.date.today()
countd_days = countd.days
countd_weeks = math.ceil(countd_days / 7)

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

button = tkinter.Button(text=u"OK")
button.bind("<Button-1>", closeWindow)
button.pack()

root.mainloop()
