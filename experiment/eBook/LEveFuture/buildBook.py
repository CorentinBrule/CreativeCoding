#!/usr/bin/python3.4
import sys,os,subprocess,re

fonts=[]
for F in os.listdir("fontes"):
    for f in os.listdir("fontes/"+F) :
        if re.match(r".+\.ttf",f) or re.match(r".+\.otf",f):
            path="fontes/"+F+"/"+f
            fonts.append("--epub-embed-font="+path)

# with open("style.css") as s:
#     data = s.read()
#     string = re.findall(r"src \: url\(\'.+\)",data)
#     for f in string:
#         fonts.append(f.split("'")[1])

subprocess.call(['pandoc','-o','testWithPandocCSSFonts.epub','--epub-stylesheet=style3.css'] + fonts + ['-RS','index3.html'])
