import xml.etree.ElementTree as ET

mydoc = ET.parse('XML/sample0.xml')
myroot = mydoc.getroot()

#Print elements startting from root  
print("Elements startting from root")
print(myroot)
print(myroot[0])
print(myroot[0][0])
print("\n")
#Print value of an elements
print("Value of an elements")  
print(myroot[0][0].text)
print("\n")
#Print all child elements in a root
print("All child elements in a root")
for c in myroot[0]:
    print(c.text)






