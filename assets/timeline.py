import json
import csv
import collections

def comma(element):
    dates = element.split('/')
    if (len(dates) == 3):
        return dates[2]+','+dates[0]+','+dates[1]
    else:
        return ''

fin = open('timeline.csv','r+')
lines = csv.reader(fin, delimiter=',', quotechar='"')
csvLines = []
for line in lines:
    csvLines.append(line)
firstLine = csvLines[0]
print firstLine
print '----------'
titleLine = csvLines[1]
titleLine[0] = comma(titleLine[0])
titleLine[1] = comma(titleLine[1])
print titleLine
print '----------'
otherLines = csvLines[2:]
outArray = []

for array in otherLines:
    array[0] = comma(array[0])
    array[1] = comma(array[1])
    print array
    print '-----------'
    obj = collections.OrderedDict()
    assetObj = collections.OrderedDict()
    assetObj['media']=array[4]
    assetObj['thumbnail']=array[7]
    assetObj['credit']=array[5]
    assetObj['caption']=array[6]
    obj['startDate']=array[0]
    obj['endDate']=array[1]
    obj['headline']=array[2]
    obj['text']=array[3]
    obj['asset']=assetObj
    outArray.append(obj)

titleObj = collections.OrderedDict()
innerObj = collections.OrderedDict()
innerObj['headline']=titleLine[2]
innerObj['type']='default'
innerObj['startDate']=titleLine[0]
innerObj['text']=titleLine[3]
innerObj['asset']=collections.OrderedDict([('media',titleLine[4]),('credit',titleLine[5]),('caption',titleLine[6])])
innerObj['date']=outArray
titleObj['timeline']=innerObj

jsonObj = json.dumps(titleObj, indent=4, separators=(',', ': '))

outputJs = '$(function(){var dataObject =' + jsonObj + '\n' + 'var timeline = new VMM.Timeline("timeline");\n'+'timeline.init({type:\'timeline\',width:\'100%\',height:\'650\',source:dataObject,embed_id:\'timeline\'});});'

open('./assets/js/new_script.js','w').write(outputJs)

        

